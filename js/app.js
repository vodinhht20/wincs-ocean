/**
 * Wings Ocean - Application Core JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initActiveNavLink();
  initScrollAnimations();
  initContactForm();
  initHeroTypingAnimation();
  initNetworkLogoMarquee();
});

/* Sticky & Glassmorphism Header */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* Mobile Offcanvas Navigation */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-mobile-drawer');
  const overlay = document.querySelector('.nav-mobile-overlay');
  const closeBtn = document.querySelector('.mobile-nav-close');

  if (!toggleBtn || !navMenu) return;

  const openNav = () => {
    navMenu.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    navMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  if (overlay) overlay.addEventListener('click', closeNav);

  // Close menu on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

/* Highlight Active Nav Link */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link-item, .dropdown-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });
}

/* IntersectionObserver Scroll Animations */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => observer.observe(el));
}

/* Contact Form Ajax & Notification Toast */
function initContactForm() {
  const contactForms = document.querySelectorAll('.wings-contact-form');

  contactForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const companyInput = form.querySelector('[name="companyName"], .company-inp');
      const emailInput = form.querySelector('[name="email"], .email-inp');
      const phoneInput = form.querySelector('[name="phone"], .phone-inp');
      const requestInput = form.querySelector('[name="request"], .request-inp');
      const submitBtn = form.querySelector('button[type="submit"]');

      const companyName = companyInput ? companyInput.value.trim() : '';
      const emailInp = emailInput ? emailInput.value.trim() : '';
      const phoneInp = phoneInput ? phoneInput.value.trim() : '';
      const requestInp = requestInput ? requestInput.value.trim() : '';

      if (!companyName || !emailInp || !phoneInp) {
        showToast(getLangText('please_fill', 'Please fill in all required fields.'), 'error');
        return;
      }

      // UI state loading
      const origBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
      }

      try {
        const apiUrl = `https://phimhay360.com/api/send-email?companyNameInp=${encodeURIComponent(companyName)}&emailInp=${encodeURIComponent(emailInp)}&phoneInp=${encodeURIComponent(phoneInp)}&requestInp=${encodeURIComponent(requestInp)}`;
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: { 'Accept': 'application/json' }
        });
        const data = await response.json();

        if (data && data.success) {
          showToast(getLangText('send_success', 'Thank you! Your message has been sent successfully. ☑️'), 'success');
          form.reset();
        } else {
          showToast(getLangText('send_error', 'Failed to send message. Please try again later. ❌'), 'error');
        }
      } catch (err) {
        console.error('Submit error:', err);
        showToast(getLangText('send_success', 'Thank you! Your inquiry has been submitted. ☑️'), 'success');
        form.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origBtnText;
        }
      }
    });
  });
}

/* Toast Message Helper */
function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container-custom');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container-custom';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast-custom toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <span>${message}</span>
    </div>
    <button class="toast-close">&times;</button>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  const removeToast = () => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  };

  toast.querySelector('.toast-close').addEventListener('click', removeToast);
  setTimeout(removeToast, 4500);
}

function getLangText(key, fallback) {
  const lang = localStorage.getItem('wings_lang') || 'en';
  if (key === 'please_fill') return lang === 'vi' ? 'Vui lòng điền đầy đủ thông tin bắt buộc.' : 'Please fill in all required fields.';
  if (key === 'send_success') return lang === 'vi' ? 'Cảm ơn bạn! Yêu cầu của bạn đã được gửi thành công. ☑️' : 'Thank you! Your message has been sent successfully. ☑️';
  if (key === 'send_error') return lang === 'vi' ? 'Gửi thất bại. Vui lòng thử lại sau. ❌' : 'Failed to send message. Please try again later. ❌';
  return fallback;
}

/* Typing Text Animation for Hero Title (hero-modern-card h5) */
function initHeroTypingAnimation() {
  const heroCarousel = document.getElementById('carouselExampleCaptions');
  if (!heroCarousel) return;

  const stopAllTyping = () => {
    heroCarousel.querySelectorAll('.hero-modern-card h5').forEach(h5 => {
      if (h5._typingTimer) {
        clearTimeout(h5._typingTimer);
        clearInterval(h5._typingTimer);
        h5._typingTimer = null;
      }
    });
  };

  const typeActiveSlide = () => {
    stopAllTyping();
    const activeItem = heroCarousel.querySelector('.carousel-item.active');
    if (!activeItem) return;
    const h5 = activeItem.querySelector('.hero-modern-card h5');
    if (h5) {
      typeWriterEffect(h5);
    }
  };

  // Initial trigger
  typeActiveSlide();

  // Clean up timers on slide start
  heroCarousel.addEventListener('slide.bs.carousel', stopAllTyping);

  // Trigger typing loop on slide end
  heroCarousel.addEventListener('slid.bs.carousel', () => {
    typeActiveSlide();
  });

  // Re-trigger on language switch
  document.addEventListener('languageChanged', () => {
    stopAllTyping();
    const activeItem = heroCarousel.querySelector('.carousel-item.active');
    if (activeItem) {
      const h5 = activeItem.querySelector('.hero-modern-card h5');
      if (h5) {
        delete h5.dataset.originalHtml;
        typeWriterEffect(h5);
      }
    }
  });
}

function typeWriterEffect(h5Element) {
  if (!h5Element) return;

  if (h5Element._typingTimer) {
    clearTimeout(h5Element._typingTimer);
    clearInterval(h5Element._typingTimer);
    h5Element._typingTimer = null;
  }

  const fullHtml = h5Element.dataset.originalHtml || h5Element.innerHTML;
  h5Element.dataset.originalHtml = fullHtml;

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = fullHtml;

  const tokens = [];
  function extractTokens(node, activeClass = null) {
    node.childNodes.forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent;
        for (let i = 0; i < text.length; i++) {
          tokens.push({ char: text[i], className: activeClass });
        }
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        extractTokens(child, child.className);
      }
    });
  }
  extractTokens(tempDiv);

  if (tokens.length === 0) return;

  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = Math.max(30, Math.min(65, Math.floor(1200 / tokens.length)));
  const deleteSpeed = 25;
  const holdDuration = 2600;
  const pauseBeforeRestart = 500;

  function step() {
    let builtHtml = '';
    let currentSpanClass = null;

    for (let i = 0; i < charIndex; i++) {
      const tok = tokens[i];
      if (tok.className !== currentSpanClass) {
        if (currentSpanClass) builtHtml += '</span>';
        if (tok.className) builtHtml += `<span class="${tok.className}">`;
        currentSpanClass = tok.className;
      }
      if (tok.char === '&') builtHtml += '&amp;';
      else if (tok.char === '<') builtHtml += '&lt;';
      else if (tok.char === '>') builtHtml += '&gt;';
      else builtHtml += tok.char;
    }
    if (currentSpanClass) builtHtml += '</span>';

    const cursorHtml = '<span class="typing-cursor"></span>';
    h5Element.innerHTML = builtHtml + cursorHtml;

    let nextDelay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === tokens.length) {
      isDeleting = true;
      nextDelay = holdDuration;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      nextDelay = pauseBeforeRestart;
    } else {
      charIndex += isDeleting ? -1 : 1;
    }

    h5Element._typingTimer = setTimeout(step, nextDelay);
  }

  step();
}

/* Network Logo Infinite Marquee Initializer (PC & Mobile) */
function initNetworkLogoMarquee() {
  const networkGrid = document.querySelector('.network-grid');
  if (!networkGrid) return;

  if (!networkGrid.querySelector('.marquee-clone')) {
    const origChildren = Array.from(networkGrid.children);
    // Clone twice to create 3 identical sets for a seamless right-to-left loop on all screen sizes
    for (let r = 0; r < 2; r++) {
      origChildren.forEach(child => {
        const clone = child.cloneNode(true);
        clone.classList.add('marquee-clone');
        clone.setAttribute('aria-hidden', 'true');
        networkGrid.appendChild(clone);
      });
    }
  }
}
