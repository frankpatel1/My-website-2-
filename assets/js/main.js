/**
 * TrustNexus Technologies - Core Interaction & UI Scripts
 * Handles Header condense, Navigation, Dropdowns, Scroll Reveal,
 * Counter animations, and Accessibility enhancements.
 */

(function () {
  'use strict';

  // --- Sticky Header Condense on Scroll ---
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (header) {
      if (scrollY > 50) {
        header.classList.add('is-condensed');
      } else {
        header.classList.remove('is-condensed');
      }
    }

    if (backToTopBtn) {
      let backToTopThreshold = 400;
      if (document.body.dataset.backToTopThreshold === 'second-section') {
        const sections = document.querySelectorAll('#main-content > section');
        if (sections.length > 1) {
          backToTopThreshold = sections[1].offsetTop + sections[1].offsetHeight;
        }
      }

      if (scrollY > backToTopThreshold) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Back to Top Click ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Accessible Focus Trap Helper (WCAG 2.2 AA) ---
  function trapFocusIn(container, getPreviousFocusEl, onClose) {
    const selector = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        if (typeof onClose === 'function') onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusables = Array.from(container.querySelectorAll(selector));
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }

    container.addEventListener('keydown', onKeyDown);
    const focusables = container.querySelectorAll(selector);
    if (focusables.length > 0) {
      focusables[0].focus();
    }

    return function cleanup() {
      container.removeEventListener('keydown', onKeyDown);
      const prev = typeof getPreviousFocusEl === 'function' ? getPreviousFocusEl() : null;
      if (prev && typeof prev.focus === 'function') {
        prev.focus();
      }
    };
  }

  // --- Mobile Drawer Navigation (with Focus Trap) ---
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  let drawerTrapCleanup = null;

  function closeMobileDrawer() {
    if (!mobileMenuBtn || !mobileDrawer) return;
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('is-open');
    document.body.style.overflow = '';
    if (drawerTrapCleanup) {
      drawerTrapCleanup();
      drawerTrapCleanup = null;
    }
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        mobileDrawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        drawerTrapCleanup = trapFocusIn(mobileDrawer, () => mobileMenuBtn, closeMobileDrawer);
      } else {
        closeMobileDrawer();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeMobileDrawer();
      }
    });
  }

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if observer not supported
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // --- Animated Number Counters ---
  const counterElements = document.querySelectorAll('[data-counter-target]');

  if ('IntersectionObserver' in window && counterElements.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounterAnimation(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    counterElements.forEach((el) => counterObserver.observe(el));
  } else {
    counterElements.forEach((el) => {
      el.textContent = el.getAttribute('data-counter-target');
    });
  }

  function startCounterAnimation(el) {
    const target = parseFloat(el.getAttribute('data-counter-target'));
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const prefix = el.getAttribute('data-counter-prefix') || '';
    const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);
    const duration = 1600; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = progress * target;

      el.textContent = prefix + current.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target.toFixed(decimals) + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // --- Interactive FAQ Accordion ---
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Close sibling FAQs (optional smooth single-open behavior)
      const parent = item.parentElement;
      if (parent && parent.classList.contains('faq-accordion')) {
        parent.querySelectorAll('.faq-item').forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            const siblingBtn = sibling.querySelector('.faq-trigger');
            if (siblingBtn) siblingBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      this.setAttribute('aria-expanded', !isExpanded);
      item.classList.toggle('active', !isExpanded);
    });
  });

  // --- Pre-Launch Checklist Modal (with Focus Trap) ---
  const prelaunchTriggers = document.querySelectorAll('.open-prelaunch-btn');
  const prelaunchModal = document.getElementById('prelaunchModal');
  const prelaunchCloseBtn = document.querySelector('.prelaunch-modal-close');
  let modalTrapCleanup = null;
  let lastModalTrigger = null;

  function openPrelaunchModal(e) {
    if (e) {
      e.preventDefault();
      lastModalTrigger = e.currentTarget;
    }
    if (prelaunchModal) {
      prelaunchModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      modalTrapCleanup = trapFocusIn(prelaunchModal, () => lastModalTrigger, closePrelaunchModal);
    }
  }

  function closePrelaunchModal() {
    if (prelaunchModal) {
      prelaunchModal.classList.remove('active');
      document.body.style.overflow = '';
      if (modalTrapCleanup) {
        modalTrapCleanup();
        modalTrapCleanup = null;
      }
    }
  }

  prelaunchTriggers.forEach(btn => btn.addEventListener('click', openPrelaunchModal));
  if (prelaunchCloseBtn) prelaunchCloseBtn.addEventListener('click', closePrelaunchModal);
  if (prelaunchModal) {
    prelaunchModal.addEventListener('click', function (e) {
      if (e.target === prelaunchModal) closePrelaunchModal();
    });
  }

  // Close modals on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePrelaunchModal();
    }
  });

  // ==========================================================================
  // Global Website Preloader & Network Refresh Engine (#tn-global-preloader)
  // ==========================================================================
  const preloaderEl = document.getElementById('tn-global-preloader');
  const preloaderStatus = document.getElementById('tnPreloaderStatus');
  const preloaderBar = document.getElementById('tnPreloaderBar');

  window.triggerTrustNexusRefresh = function (options = {}) {
    if (!preloaderEl) return;
    
    preloaderEl.classList.add('is-active');
    if (preloaderBar) preloaderBar.style.width = '10%';
    if (preloaderStatus) preloaderStatus.textContent = 'CONNECTING TO HIGH-SPEED FIBER CORE...';

    const steps = [
      { delay: 250, pct: '38%', msg: '> VERIFYING ZERO-TRUST 802.1X CREDENTIALS [OK]' },
      { delay: 550, pct: '72%', msg: '> CALIBRATING ADDRESSABLE SENSOR TELEMETRY [OK]' },
      { delay: 850, pct: '100%', msg: '> TELEMETRY SYNCHRONIZED // SLA NOMINAL 100%' },
    ];

    steps.forEach(({ delay, pct, msg }) => {
      setTimeout(() => {
        if (preloaderBar) preloaderBar.style.width = pct;
        if (preloaderStatus) preloaderStatus.textContent = msg;
      }, delay);
    });

    setTimeout(() => {
      preloaderEl.classList.remove('is-active');

      // Randomize telemetry HUD packets for live feel
      const hudPackets = document.getElementById('hudPacketCount');
      if (hudPackets) {
        hudPackets.textContent = (1250 + Math.floor(Math.random() * 60)) + ' pkts/sec';
      }

      window.showTrustNexusToast('✓ Network Telemetry & Infrastructure Refreshed');
      
      if (typeof options.onComplete === 'function') {
        options.onComplete();
      }
    }, 1200);
  };

  // Wire up hero refresh telemetry button
  const refreshTelemetryBtn = document.getElementById('btn-refresh-telemetry');
  if (refreshTelemetryBtn) {
    refreshTelemetryBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.triggerTrustNexusRefresh();
    });
  }

  // Support elements with data-trigger-refresh attribute
  document.querySelectorAll('[data-trigger-refresh]').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.triggerTrustNexusRefresh();
    });
  });

  // Global Toast Helper (Safe Text Node Injection - XSS Protected)
  window.showTrustNexusToast = function (message) {
    let toast = document.querySelector('.tn-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'tn-toast';
      document.body.appendChild(toast);
    }
    
    // Clear and construct safe DOM nodes
    toast.textContent = '';
    const badge = document.createElement('span');
    badge.style.color = 'var(--cyan)';
    badge.style.fontWeight = 'bold';
    badge.textContent = '[NEXUS] ';
    toast.appendChild(badge);
    toast.appendChild(document.createTextNode(String(message)));
    toast.classList.add('is-show');

    setTimeout(() => {
      toast.classList.remove('is-show');
    }, 2800);
  };

  // Global Copy ID / Snippet Helper
  window.copyLoaderSnippet = function (targetId, btnEl) {
    navigator.clipboard.writeText(targetId).then(() => {
      window.showTrustNexusToast(`Copied ID "${targetId}" to clipboard!`);
      if (btnEl) {
        const originalText = btnEl.innerHTML;
        btnEl.innerHTML = '✓ Copied!';
        btnEl.classList.add('active');
        setTimeout(() => {
          btnEl.innerHTML = originalText;
          btnEl.classList.remove('active');
        }, 1600);
      }
    }).catch(err => {
      // Fallback
      window.showTrustNexusToast(`ID: ${targetId}`);
    });
  };

  // ==========================================================================
  // 21st UI: Interactive Enhancements (Hero Glow, FAQ Accordion, Footer Hub)
  // ==========================================================================

  // --- 21st UI: Hero Cursor Reactive Radial Glow ---
  const heroSection = document.querySelector('.hero-section');
  const cursorGlow = document.getElementById('hero-cursor-glow');

  if (heroSection && cursorGlow) {
    heroSection.addEventListener('mousemove', function (e) {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursorGlow.style.left = x + 'px';
      cursorGlow.style.top = y + 'px';
      cursorGlow.style.opacity = '1';
    });

    heroSection.addEventListener('mouseleave', function () {
      cursorGlow.style.opacity = '0';
    });
  }

  // --- 21st UI: Smooth FAQ Accordion Handler ---
  const faq21stTriggers = document.querySelectorAll('.faq-trigger-21st');
  faq21stTriggers.forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.closest('.faq-item-21st');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      const parent = item.parentElement;
      if (parent && parent.classList.contains('faq-accordion-21st')) {
        parent.querySelectorAll('.faq-item-21st').forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            const siblingBtn = sibling.querySelector('.faq-trigger-21st');
            if (siblingBtn) siblingBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      this.setAttribute('aria-expanded', !isExpanded);
      item.classList.toggle('active', !isExpanded);
    });
  });

  // --- 21st UI: FAQ Solution Category Filter ---
  const faqCategoryBtns = document.querySelectorAll('.faq-category-btn');
  const allFaqItems = document.querySelectorAll('.faq-item-21st');

  if (faqCategoryBtns.length > 0) {
    faqCategoryBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        faqCategoryBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        const filter = this.getAttribute('data-filter');

        allFaqItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.classList.remove('faq-filtered-out');
          } else {
            item.classList.add('faq-filtered-out');
            item.classList.remove('active');
            const trigger = item.querySelector('.faq-trigger-21st');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
          }
        });

        const visibleItems = Array.from(allFaqItems).filter(item => !item.classList.contains('faq-filtered-out'));
        const hasActive = visibleItems.some(item => item.classList.contains('active'));
        if (!hasActive && visibleItems.length > 0) {
          visibleItems[0].classList.add('active');
          const firstTrigger = visibleItems[0].querySelector('.faq-trigger-21st');
          if (firstTrigger) firstTrigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // --- 21st UI: Footer Consultation Dispatch Form ---
  const footerDispatchForm = document.getElementById('footerDispatchForm');
  if (footerDispatchForm) {
    footerDispatchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('.footer-dispatch-input');
      const email = input ? input.value : '';
      if (window.showTrustNexusToast) {
        window.showTrustNexusToast(`Survey dispatch logged for ${email}! An engineer will contact you shortly.`);
      }
      this.reset();
    });
  }

})();



