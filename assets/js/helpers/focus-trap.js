/**
 * TrustNexus Technologies - Accessible Focus Trap Helper (WCAG 2.2 AA)
 * Restricts keyboard navigation (Tab / Shift+Tab) to inside the container while open.
 * Restores focus to the triggering element upon close.
 */

(function () {
  'use strict';

  window.TrustNexus = window.TrustNexus || {};

  const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(', ');

  /**
   * Traps keyboard focus within a container element.
   * @param {HTMLElement} container - The dialog, modal, or drawer element.
   * @param {Function} [getPreviousFocusEl] - Function returning the element that triggered the modal.
   * @param {Function} [onClose] - Callback when Escape key is pressed.
   * @returns {Function} Cleanup function to remove listeners and restore previous focus.
   */
  function trapFocusIn(container, getPreviousFocusEl, onClose) {
    if (!container) return function () {};

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        if (typeof onClose === 'function') onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusables = Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
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

    // Initial focus on first interactive element or container
    const initialFocusables = container.querySelectorAll(FOCUSABLE_SELECTOR);
    if (initialFocusables.length > 0) {
      initialFocusables[0].focus();
    } else {
      container.focus();
    }

    return function cleanup() {
      container.removeEventListener('keydown', onKeyDown);
      const prev = typeof getPreviousFocusEl === 'function' ? getPreviousFocusEl() : null;
      if (prev && typeof prev.focus === 'function') {
        prev.focus();
      }
    };
  }

  // Export to namespace
  window.TrustNexus.trapFocusIn = trapFocusIn;
})();
