/**
 * TrustNexus Technologies - Secure Toast Notification Helper
 * Implements XSS-safe DOM node creation and auto-dismissal.
 */

(function () {
  'use strict';

  window.TrustNexus = window.TrustNexus || {};

  /**
   * Display a non-blocking floating notification.
   * @param {string} message - Notification text string.
   * @param {Object} [options] - Optional settings (duration, type).
   */
  function showToast(message, options = {}) {
    const duration = options.duration || 2800;
    const prefix = options.prefix || '[NEXUS] ';

    let toast = document.querySelector('.tn-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'tn-toast';
      document.body.appendChild(toast);
    }

    // Clear previous contents securely
    toast.textContent = '';

    const badge = document.createElement('span');
    badge.style.color = 'var(--cyan)';
    badge.style.fontWeight = 'bold';
    badge.textContent = prefix;

    toast.appendChild(badge);
    toast.appendChild(document.createTextNode(String(message)));
    toast.classList.add('is-show');

    if (toast._timer) {
      clearTimeout(toast._timer);
    }

    toast._timer = setTimeout(() => {
      toast.classList.remove('is-show');
      toast._timer = null;
    }, duration);
  }

  // Export to namespace and global alias for full backward compatibility
  window.TrustNexus.showToast = showToast;
  window.showTrustNexusToast = showToast;
})();
