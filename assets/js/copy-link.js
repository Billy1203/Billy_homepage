(function() {
  var buttons = document.querySelectorAll('.js-copy-link');

  if (!buttons.length) {
    return;
  }

  function fallbackCopy(text) {
    var helper = document.createElement('textarea');
    helper.value = text;
    helper.setAttribute('readonly', '');
    helper.style.position = 'absolute';
    helper.style.left = '-9999px';
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    document.body.removeChild(helper);
  }

  function copyCurrentUrl() {
    var url = window.location.href;

    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(url);
    }

    return new Promise(function(resolve, reject) {
      try {
        fallbackCopy(url);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  function getCurrentLanguage() {
    if (window.SiteLanguage && typeof window.SiteLanguage.getCurrentLanguage === 'function') {
      return window.SiteLanguage.getCurrentLanguage();
    }

    return document.documentElement.getAttribute('data-language') === 'zh' ? 'zh' : 'en';
  }

  function getLocalizedText(element, key, fallback) {
    if (!element) {
      return fallback || '';
    }

    var language = getCurrentLanguage();
    var localized = element.getAttribute('data-' + key + '-' + language);
    var english = element.getAttribute('data-' + key + '-en');
    return localized || english || fallback || '';
  }

  function syncCopyFeedback(button, label, status) {
    var buttonState = button.getAttribute('data-copy-state') || 'default';
    var statusState = status ? (status.getAttribute('data-copy-state') || '') : '';

    if (label) {
      label.textContent = getLocalizedText(label, buttonState === 'success' ? 'success' : 'default', 'Copy Page Link');
    }

    if (!status) {
      return;
    }

    if (!statusState) {
      status.textContent = '';
      return;
    }

    status.textContent = getLocalizedText(status, statusState, '');
  }

  buttons.forEach(function(button) {
    var container = button.closest('.page__share--copy');
    var status = container && container.querySelector('.page__share-status');
    var label = button.querySelector('span');
    var resetTimer = null;

    button.setAttribute('data-copy-state', 'default');
    if (status) {
      status.setAttribute('data-copy-state', '');
    }
    syncCopyFeedback(button, label, status);

    button.addEventListener('click', function() {
      copyCurrentUrl().then(function() {
        button.setAttribute('data-copy-state', 'success');
        if (status) {
          status.setAttribute('data-copy-state', 'success');
        }
        syncCopyFeedback(button, label, status);

        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function() {
          button.setAttribute('data-copy-state', 'default');
          if (status) {
            status.setAttribute('data-copy-state', '');
          }
          syncCopyFeedback(button, label, status);
        }, 2200);
      }).catch(function() {
        if (status) {
          status.setAttribute('data-copy-state', 'error');
        }
        button.setAttribute('data-copy-state', 'default');
        syncCopyFeedback(button, label, status);
      });
    });

    window.addEventListener('site-language-change', function() {
      syncCopyFeedback(button, label, status);
    });
  });
})();
