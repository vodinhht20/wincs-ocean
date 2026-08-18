/**
 * ==============================================================================
 * WINGS OCEAN - KNOWLEDGE & ARTICLE SYSTEM JS
 * ==============================================================================
 */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initKnowledgeApp);
} else {
  initKnowledgeApp();
}

function initKnowledgeApp() {
  const container = document.getElementById('knowledgeMainContainer');
  if (!container) return; // Not on knowledge page

  let currentCategory = 'all';
  let currentSearch = '';

  // Get current language
  const getLang = () => localStorage.getItem('wings_lang') || 'en';

  // Get article ID from URL
  const getUrlArticleId = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  };

  // Render Router
  const renderCurrentView = () => {
    const articleId = getUrlArticleId();
    if (articleId) {
      renderArticleDetail(articleId);
    } else {
      renderArticleList();
    }
  };

  // Render Knowledge List View
  const renderArticleList = () => {
    const lang = getLang();
    const articles = getWingsArticles(currentCategory, currentSearch);
    const featuredList = getWingsFeaturedArticles();
    const heroArticle = featuredList.length > 0 ? featuredList[0] : (WINGS_ARTICLES[0] || null);

    const categories = [
      { key: 'all', label: lang === 'vi' ? 'Tất cả' : 'All' },
      { key: 'ocean', label: lang === 'vi' ? 'Vận tải Biển' : 'Ocean Transport' },
      { key: 'air', label: lang === 'vi' ? 'Vận tải Hàng không' : 'Air Freight' },
      { key: 'customs', label: lang === 'vi' ? 'Thủ tục Hải quan' : 'Customs Clearance' },
      { key: 'project', label: lang === 'vi' ? 'Hàng Dự án' : 'Project Cargo' },
      { key: 'guide', label: lang === 'vi' ? 'Cẩm nang' : 'Guides & Tips' },
      { key: 'csr', label: lang === 'vi' ? 'Cộng đồng' : 'CSR & Community' }
    ];

    let html = `
      <!-- Knowledge Filter & Search Header -->
      <section class="knowledge-controls-section">
        <div class="container">
          <div class="knowledge-controls-card">
            <div class="row g-3 align-items-center justify-content-between">
              <!-- Search Bar -->
              <div class="col-lg-5 col-md-6 col-12">
                <div class="knowledge-search-wrap">
                  <i class="bi bi-search search-icon"></i>
                  <input type="text" id="knowledgeSearchInput" class="form-control knowledge-search-input" 
                         placeholder="${lang === 'vi' ? 'Tìm kiếm bài viết theo từ khóa...' : 'Search articles by keyword...'}" 
                         value="${escapeHtml(currentSearch)}">
                  ${currentSearch ? `<button type="button" class="btn-clear-search" id="clearSearchBtn" aria-label="Clear search">&times;</button>` : ''}
                </div>
              </div>

              <!-- Category Filter Pills -->
              <div class="col-lg-7 col-md-6 col-12">
                <div class="knowledge-category-tabs">
                  ${categories.map(cat => {
                    const count = cat.key === 'all' 
                      ? WINGS_ARTICLES.length 
                      : WINGS_ARTICLES.filter(a => a.categoryKey === cat.key).length;
                    const isActive = currentCategory === cat.key ? 'active' : '';
                    return `
                      <button type="button" class="cat-pill-btn ${isActive}" data-cat="${cat.key}">
                        ${cat.label} <span class="pill-count">(${count})</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Knowledge Content Section -->
      <section class="knowledge-list-section">
        <div class="container">
    `;

    // If no search or category filter is active, show the Spotlight Hero Article
    if (currentCategory === 'all' && !currentSearch && heroArticle) {
      const heroTitle = heroArticle.title[lang] || heroArticle.title.en;
      const heroSummary = heroArticle.summary[lang] || heroArticle.summary.en;
      const heroCat = heroArticle.category[lang] || heroArticle.category.en;
      const heroRead = heroArticle.readTime[lang] || heroArticle.readTime.en;
      const heroDate = formatDate(heroArticle.date, lang);

      html += `
        <!-- Spotlight Featured Article Hero Card -->
        <div class="knowledge-spotlight-card animate-on-scroll">
          <div class="row g-0 align-items-stretch">
            <div class="col-lg-7 col-12">
              <div class="spotlight-img-wrap">
                <img src="${heroArticle.image}" alt="${escapeHtml(heroTitle)}">
                <span class="spotlight-badge">
                  <i class="bi bi-star-fill text-warning me-1"></i> ${lang === 'vi' ? 'BÀI VIẾT NỔI BẬT' : 'FEATURED SPOTLIGHT'}
                </span>
              </div>
            </div>
            <div class="col-lg-5 col-12 d-flex flex-column justify-content-between p-4 p-xl-5 spotlight-content">
              <div>
                <div class="card-meta-top mb-3">
                  <span class="badge-cat-pill">${heroCat}</span>
                  <span class="meta-item"><i class="bi bi-clock me-1"></i>${heroRead}</span>
                  <span class="meta-item"><i class="bi bi-calendar3 me-1"></i>${heroDate}</span>
                </div>
                <h2 class="spotlight-title">
                  <a href="./knowledge.html?id=${heroArticle.id}" class="article-link" data-id="${heroArticle.id}">
                    ${heroTitle}
                  </a>
                </h2>
                <p class="spotlight-summary">${heroSummary}</p>
              </div>
              <div class="spotlight-footer pt-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="article-author-info">
                    <i class="bi bi-person-circle text-primary me-2"></i>
                    <span>${heroArticle.author.name}</span>
                  </div>
                  <a href="./knowledge.html?id=${heroArticle.id}" class="btn-read-article" data-id="${heroArticle.id}">
                    ${lang === 'vi' ? 'Đọc bài viết' : 'Read article'} <i class="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Article Cards Grid
    if (articles.length === 0) {
      html += `
        <div class="knowledge-empty-state text-center animate-on-scroll">
          <div class="empty-icon-wrap">
            <i class="bi bi-journal-x"></i>
          </div>
          <h3>${lang === 'vi' ? 'Không tìm thấy bài viết phù hợp' : 'No articles found'}</h3>
          <p>${lang === 'vi' ? 'Vui lòng thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.' : 'Try searching with different keywords or switch categories.'}</p>
          <button type="button" class="btn-reset-filters" id="btnResetFilters">
            ${lang === 'vi' ? 'Xem tất cả bài viết' : 'View all articles'}
          </button>
        </div>
      `;
    } else {
      html += `
        <div class="row g-4 knowledge-grid">
          ${articles.map((art, idx) => {
            const artTitle = art.title[lang] || art.title.en;
            const artSummary = art.summary[lang] || art.summary.en;
            const artCat = art.category[lang] || art.category.en;
            const artRead = art.readTime[lang] || art.readTime.en;
            const artDate = formatDate(art.date, lang);

            return `
              <div class="col-lg-4 col-md-6 col-12">
                <article class="article-card animate-on-scroll" style="animation-delay: ${idx * 0.08}s">
                  <div class="article-card-thumb">
                    <img src="${art.image}" alt="${escapeHtml(artTitle)}" loading="lazy">
                    <span class="thumb-cat-badge">${artCat}</span>
                    <span class="thumb-read-badge"><i class="bi bi-clock me-1"></i>${artRead}</span>
                  </div>
                  <div class="article-card-body">
                    <div class="card-date-line">
                      <i class="bi bi-calendar3 me-1"></i> ${artDate}
                    </div>
                    <h3 class="article-card-title">
                      <a href="./knowledge.html?id=${art.id}" class="article-link" data-id="${art.id}">
                        ${artTitle}
                      </a>
                    </h3>
                    <p class="article-card-summary">${artSummary}</p>
                  </div>
                  <div class="article-card-footer">
                    <div class="card-author-name">
                      <i class="bi bi-person-fill text-primary me-1"></i>
                      <span>${art.author.name}</span>
                    </div>
                    <a href="./knowledge.html?id=${art.id}" class="card-read-link article-link" data-id="${art.id}">
                      ${lang === 'vi' ? 'Xem tiếp' : 'Read more'} <i class="bi bi-chevron-right ms-1"></i>
                    </a>
                  </div>
                </article>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    html += `
        </div>
      </section>
    `;

    container.innerHTML = html;
    bindListEvents();
    if (window.initScrollAnimations) window.initScrollAnimations();
  };

  // Render Article Detail View
  const renderArticleDetail = (articleId) => {
    const lang = getLang();
    const article = getWingsArticleById(articleId);

    if (!article) {
      container.innerHTML = `
        <div class="container py-5 text-center">
          <div class="knowledge-empty-state">
            <div class="empty-icon-wrap"><i class="bi bi-exclamation-triangle"></i></div>
            <h2>${lang === 'vi' ? 'Không tìm thấy bài viết' : 'Article Not Found'}</h2>
            <p>${lang === 'vi' ? 'Bài viết bạn yêu cầu không tồn tại hoặc đã được chuyển địa chỉ.' : 'The requested article could not be found or has been moved.'}</p>
            <a href="./knowledge.html" class="btn-reset-filters btn-back-to-list">
              <i class="bi bi-arrow-left me-2"></i> ${lang === 'vi' ? 'Quay lại danh sách bài viết' : 'Back to all articles'}
            </a>
          </div>
        </div>
      `;
      bindDetailEvents();
      return;
    }

    const title = article.title[lang] || article.title.en;
    const summary = article.summary[lang] || article.summary.en;
    const content = article.content[lang] || article.content.en;
    const category = article.category[lang] || article.category.en;
    const readTime = article.readTime[lang] || article.readTime.en;
    const authorRole = article.author.role[lang] || article.author.role.en;
    const tags = article.tags[lang] || article.tags.en || [];
    const dateFormatted = formatDate(article.date, lang);
    const relatedArticles = getWingsRelatedArticles(article.id, 3);
    const currentUrl = window.location.href;

    const html = `
      <!-- Top Reading Progress Indicator -->
      <div class="article-progress-container" id="readingProgressBar">
        <div class="article-progress-bar"></div>
      </div>

      <article class="article-detail-section">
        <div class="container">
          <!-- Back Button & Breadcrumbs -->
          <div class="article-detail-nav">
            <a href="./knowledge.html" class="btn-back-link btn-back-to-list">
              <i class="bi bi-arrow-left"></i>
              <span>${lang === 'vi' ? 'Quay lại danh sách bài viết' : 'Back to all articles'}</span>
            </a>

            <nav class="article-breadcrumbs d-none d-md-flex" aria-label="breadcrumb">
              <a href="./index.html">${lang === 'vi' ? 'Trang chủ' : 'Home'}</a>
              <span class="crumb-sep">/</span>
              <a href="./knowledge.html" class="btn-back-to-list">${lang === 'vi' ? 'Kiến thức' : 'Knowledge'}</a>
              <span class="crumb-sep">/</span>
              <span class="crumb-current">${category}</span>
            </nav>
          </div>

          <!-- Article Header -->
          <header class="article-detail-header">
            <div class="article-meta-pill-bar">
              <span class="badge-cat-pill">${category}</span>
              <span class="meta-item"><i class="bi bi-calendar3 me-1"></i>${dateFormatted}</span>
              <span class="meta-item"><i class="bi bi-clock me-1"></i>${readTime}</span>
              <span class="meta-item d-none d-sm-inline-flex"><i class="bi bi-eye me-1"></i>${article.views} views</span>
            </div>

            <h1 class="article-main-title">${title}</h1>
            <p class="article-lead-summary">${summary}</p>

            <!-- Author & Sharing Bar Top -->
            <div class="article-author-share-bar">
              <div class="author-info-left">
                <div class="author-avatar-wrap">
                  <img src="${article.author.avatar}" alt="${article.author.name}">
                </div>
                <div>
                  <h4 class="author-name">${article.author.name}</h4>
                  <span class="author-role">${authorRole}</span>
                </div>
              </div>

              <!-- Share Buttons -->
              <div class="social-share-group">
                <span class="share-label d-none d-md-inline">${lang === 'vi' ? 'Chia sẻ:' : 'Share:'}</span>
                <button type="button" class="btn-share-icon btn-copy-link" title="${lang === 'vi' ? 'Sao chép liên kết' : 'Copy link'}" data-url="${currentUrl}">
                  <i class="bi bi-link-45deg"></i>
                </button>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}" target="_blank" class="btn-share-icon" title="Share on Facebook" aria-label="Share on Facebook">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}" target="_blank" class="btn-share-icon" title="Share on LinkedIn" aria-label="Share on LinkedIn">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </header>

          <!-- Featured Main Image -->
          <div class="article-featured-hero-image">
            <img src="${article.image}" alt="${escapeHtml(title)}">
          </div>

          <!-- Main Article Body -->
          <div class="row justify-content-center">
            <div class="col-lg-10 col-12">
              <div class="article-body-content">
                ${content}
              </div>

              <!-- Tags -->
              ${tags.length > 0 ? `
                <div class="article-tags-wrapper">
                  <span class="tags-title"><i class="bi bi-tags-fill me-2"></i>${lang === 'vi' ? 'Thẻ từ khóa:' : 'Tags:'}</span>
                  <div class="tags-list">
                    ${tags.map(t => `<span class="tag-pill">#${t}</span>`).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Bottom Social Share Bar -->
              <div class="article-bottom-share-card">
                <div>
                  <h5>${lang === 'vi' ? 'Bạn thấy bài viết hữu ích?' : 'Found this article helpful?'}</h5>
                  <p>${lang === 'vi' ? 'Chia sẻ kiến thức hữu ích này với đối tác và đồng nghiệp của bạn.' : 'Share these insights with your network and logistics colleagues.'}</p>
                </div>
                <div class="social-share-group">
                  <button type="button" class="btn-share-icon btn-copy-link" data-url="${currentUrl}" title="Copy Link">
                    <i class="bi bi-link-45deg"></i> <span class="ms-1 d-none d-sm-inline">${lang === 'vi' ? 'Sao chép link' : 'Copy link'}</span>
                  </button>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}" target="_blank" class="btn-share-icon" aria-label="Share on Facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}" target="_blank" class="btn-share-icon" aria-label="Share on LinkedIn">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <!-- Consultation CTA Card -->
              <div class="article-consult-cta-box">
                <div class="row align-items-center g-4">
                  <div class="col-lg-8 col-12">
                    <span class="cta-eyebrow"><i class="bi bi-shield-check me-1"></i> WINGS OCEAN LOGISTICS</span>
                    <h3>${lang === 'vi' ? 'Cần tư vấn vận chuyển & tối ưu chi phí cước?' : 'Need customized freight solutions & cost optimization?'}</h3>
                    <p>${lang === 'vi' ? 'Đội ngũ chuyên gia 20+ năm kinh nghiệm của Wings Ocean luôn sẵn sàng giải đáp và lên phương án vận tải phù hợp nhất.' : 'Our team of seasoned logistics specialists is ready 24/7 to design the most efficient shipping & customs route for your business.'}</p>
                  </div>
                  <div class="col-lg-4 col-12 text-lg-end text-center">
                    <a href="./contact_us.html" class="btn-cta-contact">
                      ${lang === 'vi' ? 'Liên hệ chuyên gia ➔' : 'CONTACT EXPERTS ➔'}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Related Articles Grid -->
              ${relatedArticles.length > 0 ? `
                <div class="related-articles-section">
                  <h3 class="related-heading">${lang === 'vi' ? 'Bài Viết Liên Quan' : 'Related Articles'}</h3>
                  <div class="row g-4">
                    ${relatedArticles.map(rel => {
                      const relTitle = rel.title[lang] || rel.title.en;
                      const relCat = rel.category[lang] || rel.category.en;
                      const relRead = rel.readTime[lang] || rel.readTime.en;
                      const relDate = formatDate(rel.date, lang);

                      return `
                        <div class="col-md-4 col-12">
                          <div class="related-card">
                            <div class="related-thumb">
                              <img src="${rel.image}" alt="${escapeHtml(relTitle)}" loading="lazy">
                              <span class="related-cat">${relCat}</span>
                            </div>
                            <div class="related-body">
                              <div class="related-meta"><i class="bi bi-clock me-1"></i>${relRead} • ${relDate}</div>
                              <h4 class="related-title">
                                <a href="./knowledge.html?id=${rel.id}" class="article-link" data-id="${rel.id}">
                                  ${relTitle}
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Bottom Back Button -->
              <div class="text-center mt-5 mb-4">
                <a href="./knowledge.html" class="btn-back-to-list-bottom btn-back-to-list">
                  <i class="bi bi-arrow-left me-2"></i> ${lang === 'vi' ? 'Quay lại danh sách bài viết' : 'Back to all articles'}
                </a>
              </div>

            </div>
          </div>
        </div>
      </article>
    `;

    container.innerHTML = html;
    bindDetailEvents();
    initReadingProgressBar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Bind Events for List View
  const bindListEvents = () => {
    // Search input
    const searchInput = document.getElementById('knowledgeSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderArticleList();
      });
    }

    // Clear search
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        currentSearch = '';
        renderArticleList();
      });
    }

    // Category Tabs
    const catBtns = container.querySelectorAll('.cat-pill-btn');
    catBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.getAttribute('data-cat') || 'all';
        renderArticleList();
      });
    });

    // Reset Filter Button
    const resetBtn = document.getElementById('btnResetFilters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentCategory = 'all';
        currentSearch = '';
        renderArticleList();
      });
    }

    // Article detail links (using History API for smooth transition)
    const links = container.querySelectorAll('.article-link, .btn-read-article');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('data-id');
        if (id) {
          window.history.pushState({ articleId: id }, '', `./knowledge.html?id=${id}`);
          renderArticleDetail(id);
        }
      });
    });
  };

  // Bind Events for Detail View
  const bindDetailEvents = () => {
    // Back to list buttons
    const backBtns = container.querySelectorAll('.btn-back-to-list');
    backBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', './knowledge.html');
        renderArticleList();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // Related article links
    const relLinks = container.querySelectorAll('.article-link');
    relLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('data-id');
        if (id) {
          window.history.pushState({ articleId: id }, '', `./knowledge.html?id=${id}`);
          renderArticleDetail(id);
        }
      });
    });

    // Copy Link Buttons
    const copyBtns = container.querySelectorAll('.btn-copy-link');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const urlToCopy = window.location.href;
        navigator.clipboard.writeText(urlToCopy).then(() => {
          const msg = getLang() === 'vi' ? 'Đã sao chép liên kết vào bộ nhớ tạm!' : 'Link copied to clipboard!';
          if (window.showToast) {
            window.showToast(msg, 'success');
          } else {
            alert(msg);
          }
        }).catch(() => {
          const fallbackMsg = getLang() === 'vi' ? 'Không thể sao chép liên kết' : 'Unable to copy link';
          if (window.showToast) window.showToast(fallbackMsg, 'error');
        });
      });
    });
  };

  // Reading Progress Bar
  const initReadingProgressBar = () => {
    const progressBar = document.querySelector('.article-progress-bar');
    if (!progressBar) return;

    const updateProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  };

  // Browser History Back/Forward PopState Support
  window.addEventListener('popstate', () => {
    renderCurrentView();
  });

  // Re-render when language changes
  document.addEventListener('languageChanged', () => {
    renderCurrentView();
  });

  // Initial Execution
  renderCurrentView();
}

/**
 * Utility Helpers
 */
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

function formatDate(dateStr, lang = 'en') {
  if (!dateStr) return '';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const y = parts[0];
      const m = parseInt(parts[1], 10);
      const d = parseInt(parts[2], 10);
      if (lang === 'vi') {
        return `${d} Th${m}, ${y}`;
      } else {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthNames[m - 1]} ${d}, ${y}`;
      }
    }
  } catch (e) {
    // fallback
  }
  return dateStr;
}
