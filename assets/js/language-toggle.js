(function() {
  var root = document.documentElement;
  var toggle = document.getElementById('language-toggle');
  var button = toggle ? toggle.querySelector('a') : null;
  var label = toggle ? toggle.querySelector('.greedy-nav__language-label') : null;

  function normalizeLanguage(language) {
    return language === 'zh' ? 'zh' : 'en';
  }

  function getStoredLanguage() {
    try {
      return normalizeLanguage(localStorage.getItem('site-language'));
    } catch (error) {
      return normalizeLanguage(root.getAttribute('data-language'));
    }
  }

  function setStoredLanguage(language) {
    var nextLanguage = normalizeLanguage(language);
    try {
      if (nextLanguage === 'en') {
        localStorage.removeItem('site-language');
        return;
      }
      localStorage.setItem('site-language', nextLanguage);
    } catch (error) {
      return;
    }
  }

  function getCurrentLanguage() {
    return normalizeLanguage(root.getAttribute('data-language'));
  }

  function getNextLanguage(language) {
    return normalizeLanguage(language) === 'zh' ? 'en' : 'zh';
  }

  function localizedAttribute(element, attribute, language) {
    var primary = element.getAttribute('data-' + attribute + '-' + language);
    var fallback = element.getAttribute('data-' + attribute + '-en');
    return primary || fallback || '';
  }

  function syncLocalizedAttributes(language) {
    var attributeMappings = [
      ['i18n-title', 'title'],
      ['i18n-aria-label', 'aria-label'],
      ['i18n-placeholder', 'placeholder']
    ];

    attributeMappings.forEach(function(mapping) {
      var prefix = mapping[0];
      var attribute = mapping[1];
      var selector = '[data-' + prefix + '-en]';

      document.querySelectorAll(selector).forEach(function(element) {
        var value = localizedAttribute(element, prefix, language);
        if (!value) {
          return;
        }
        element.setAttribute(attribute, value);
      });
    });
  }

  function updateToggleMetadata(language) {
    if (!button || !label) {
      return;
    }

    var currentLanguage = normalizeLanguage(language);
    var nextLanguage = getNextLanguage(currentLanguage);
    var currentLabel = currentLanguage === 'zh' ? '中 / EN' : 'EN / 中';
    var title = currentLanguage === 'zh'
      ? '语言：中文；点击切换到英文'
      : 'Language: English; click to switch to Chinese';
    var ariaLabel = currentLanguage === 'zh'
      ? '语言：中文；点击切换到英文'
      : 'Language: English; click to switch to Chinese';

    label.textContent = currentLabel;
    button.setAttribute('title', title);
    button.setAttribute('aria-label', ariaLabel);
    toggle.setAttribute('data-language-mode', currentLanguage);
    button.setAttribute('data-next-language', nextLanguage);
  }

  function applyLanguage(language) {
    var nextLanguage = normalizeLanguage(language);
    root.setAttribute('data-language', nextLanguage);
    root.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en';
    syncLocalizedAttributes(nextLanguage);
    updateToggleMetadata(nextLanguage);

    window.dispatchEvent(new CustomEvent('site-language-change', {
      detail: {
        language: nextLanguage
      }
    }));
  }

  window.SiteLanguage = {
    getCurrentLanguage: getCurrentLanguage,
    applyLanguage: applyLanguage
  };

  applyLanguage(getStoredLanguage());

  if (!button) {
    return;
  }

  button.addEventListener('click', function(event) {
    event.preventDefault();
    var nextLanguage = getNextLanguage(getCurrentLanguage());
    setStoredLanguage(nextLanguage);
    applyLanguage(nextLanguage);
  });
})();
