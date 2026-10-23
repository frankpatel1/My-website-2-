/**
 * TrustNexus Technologies - Async Clipboard Copy Helper
 * Provides seamless clipboard copying with UI feedback and graceful fallback.
 */

(function () {
  'use strict';

  window.TrustNexus = window.TrustNexus || {};

  /**
   * Copies text to the user's clipboard and triggers temporary button state.
   * @param {string} text - The string to copy.
   * @param {HTMLElement} [btnEl] - The button element to reflect active copy state.
   * @returns {Promise<boolean>}
   */
  async function copyToClipboard(text, btnEl) {
    const toast = window.TrustNexus.showToast || window.showTrustNexusToast;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      if (typeof toast === 'function') {
        toast(`Copied "${text}" to clipboard!`);
      }

      if (btnEl) {
        const originalHtml = btnEl.innerHTML;
        btnEl.innerHTML = '✓ Copied!';
        btnEl.classList.add('active');
        setTimeout(() => {
          btnEl.innerHTML = originalHtml;
          btnEl.classList.remove('active');
        }, 1600);
      }
      return true;
    } catch (err) {
      if (typeof toast === 'function') {
        toast(`ID: ${text}`);
      }
      return false;
    }
  }

  // Export to namespace and legacy global alias
  window.TrustNexus.copyToClipboard = copyToClipboard;
  window.copyLoaderSnippet = copyToClipboard;
})();
