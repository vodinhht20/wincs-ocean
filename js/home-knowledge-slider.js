/**
 * ==============================================================================
 * WINGS OCEAN - HOMEPAGE FEATURED KNOWLEDGE AUTOPLAY SLIDER
 * ==============================================================================
 */

// Safe String & Date Helpers (Fallbacks)
function safeEscapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function safeFormatDate(dateStr, lang = 'en') {
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

function initHomeKnowledgeSlider() {
  const sliderTrack = document.getElementById('knowledgeSliderTrack');
  const sliderViewport = document.getElementById('knowledgeSliderViewport');
  const dotsContainer = document.getElementById('knowledgeSliderDots');
  const prevBtn = document.getElementById('knowledgePrevBtn');
  const nextBtn = document.getElementById('knowledgeNextBtn');

  if (!sliderTrack || !sliderViewport) return;

  // Retrieve articles safely
  const getFeaturedItems = () => {
    if (typeof getWingsFeaturedArticles === 'function') {
      const featured = getWingsFeaturedArticles();
      if (featured && featured.length > 0) return featured;
    }
    if (typeof WINGS_ARTICLES !== 'undefined' && Array.isArray(WINGS_ARTICLES)) {
      const featured = WINGS_ARTICLES.filter(a => a.featured === true);
      return featured.length > 0 ? featured : WINGS_ARTICLES.slice(0, 6);
    }
    return [];
  };

  let currentIndex = 0;
  let autoplayTimer = null;
  let isHovered = false;
  let startX = 0;
  let isDragging = false;

  const getLang = () => localStorage.getItem('wings_lang') || 'en';

  const getVisibleCount = () => {
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 992) return 2;
    return 3;
  };

  const renderSlider = () => {
    const lang = getLang();
    const articles = getFeaturedItems();

    if (!articles || articles.length === 0) {
      sliderTrack.innerHTML = '<p class="text-center text-muted py-4">No featured articles available.</p>';
      return;
    }

    // Build Cards HTML
    sliderTrack.innerHTML = articles.map((art, idx) => {
      const title = (art.title && (art.title[lang] || art.title.en)) || '';
      const summary = (art.summary && (art.summary[lang] || art.summary.en)) || '';
      const category = (art.category && (art.category[lang] || art.category.en)) || '';
      const readTime = (art.readTime && (art.readTime[lang] || art.readTime.en)) || '';
      const authorName = (art.author && art.author.name) || 'Wings Ocean';
      const date = safeFormatDate(art.date, lang);

      return `
        <div class="knowledge-slide-item" data-index="${idx}">
          <article class="home-article-card">
            <div class="home-card-thumb-wrap">
              <img src="${art.image}" alt="${safeEscapeHtml(title)}" loading="lazy">
              <span class="home-card-cat-badge">${category}</span>
              <span class="home-card-read-badge"><i class="bi bi-clock me-1"></i>${readTime}</span>
            </div>
            <div class="home-card-content">
              <div class="home-card-date">
                <i class="bi bi-calendar3 me-1"></i> ${date}
              </div>
              <h3 class="home-card-title">
                <a href="./knowledge.html?id=${art.id}">
                  ${title}
                </a>
              </h3>
              <p class="home-card-summary">${summary}</p>
              <div class="home-card-footer">
                <span class="home-card-author">
                  <i class="bi bi-person-circle text-primary me-1"></i> ${authorName}
                </span>
                <a href="./knowledge.html?id=${art.id}" class="home-card-btn-read">
                  ${lang === 'vi' ? 'Xem chi tiết' : 'Read more'} <i class="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      `;
    }).join('');

    // Render Dots
    renderDots(articles.length);
    updateSliderPosition();
  };

  const renderDots = (totalArticles) => {
    if (!dotsContainer) return;
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, totalArticles - visibleCount);

    dotsContainer.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${i === currentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
  };

  const updateSliderPosition = (smooth = true) => {
    const articles = getFeaturedItems();
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, articles.length - visibleCount);

    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    const slideWidthPercent = 100 / visibleCount;
    const offset = currentIndex * slideWidthPercent;

    sliderTrack.style.transition = smooth ? 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
    sliderTrack.style.transform = `translateX(-${offset}%)`;

    // Update Dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    // Update Nav Buttons State
    if (prevBtn) prevBtn.disabled = (currentIndex === 0);
    if (nextBtn) nextBtn.disabled = (currentIndex === maxIndex);
  };

  const goToSlide = (index) => {
    const articles = getFeaturedItems();
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, articles.length - visibleCount);

    if (index > maxIndex) {
      currentIndex = 0; // loop back to start
    } else if (index < 0) {
      currentIndex = maxIndex; // loop back to end
    } else {
      currentIndex = index;
    }
    updateSliderPosition(true);
  };

  const nextSlide = () => {
    const articles = getFeaturedItems();
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, articles.length - visibleCount);

    if (currentIndex >= maxIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateSliderPosition(true);
  };

  const prevSlide = () => {
    const articles = getFeaturedItems();
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, articles.length - visibleCount);

    if (currentIndex <= 0) {
      currentIndex = maxIndex;
    } else {
      currentIndex--;
    }
    updateSliderPosition(true);
  };

  // Autoplay loop
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isHovered && !isDragging) {
        nextSlide();
      }
    }, 4500);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  // Event Listeners for Nav Buttons
  if (nextBtn) {
    nextBtn.onclick = () => {
      nextSlide();
      startAutoplay();
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      prevSlide();
      startAutoplay();
    };
  }

  // Hover Pause
  sliderViewport.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  sliderViewport.addEventListener('mouseleave', () => {
    isHovered = false;
  });

  // Touch & Mouse Drag Handlers
  const touchStart = (e) => {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    stopAutoplay();
  };

  const touchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const diff = currentX - startX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      isDragging = false;
    }
  };

  const touchEnd = () => {
    isDragging = false;
    startAutoplay();
  };

  sliderViewport.addEventListener('touchstart', touchStart, { passive: true });
  sliderViewport.addEventListener('touchmove', touchMove, { passive: true });
  sliderViewport.addEventListener('touchend', touchEnd);

  sliderViewport.addEventListener('mousedown', touchStart);
  window.addEventListener('mousemove', touchMove);
  window.addEventListener('mouseup', touchEnd);

  // Resize Handler
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      renderDots(getFeaturedItems().length);
      updateSliderPosition(false);
    }, 150);
  });

  // Language Change Handler
  document.addEventListener('languageChanged', () => {
    renderSlider();
  });

  // Initial Execution
  renderSlider();
  startAutoplay();
}

// Ensure execution whether document is still loading or already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomeKnowledgeSlider);
} else {
  initHomeKnowledgeSlider();
}
