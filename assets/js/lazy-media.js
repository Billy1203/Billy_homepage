(function() {
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

  function syncTriggerLabel(trigger) {
    if (!trigger) {
      return;
    }

    var state = trigger.getAttribute('data-state') || 'default';
    var key = state === 'loaded' ? 'loaded' : 'default';
    trigger.textContent = getLocalizedText(trigger, key, 'Load PDF Preview');
  }

  document.addEventListener('DOMContentLoaded', function() {
    var embeds = document.querySelectorAll('.js-lazy-embed');

    embeds.forEach(function(embed) {
      var trigger = embed.querySelector('.lazy-embed__trigger');
      var frame = embed.querySelector('.lazy-embed__frame');

      if (!trigger || !frame) {
        return;
      }

      trigger.setAttribute('data-state', frame.getAttribute('src') ? 'loaded' : 'default');
      syncTriggerLabel(trigger);

      trigger.addEventListener('click', function() {
        var src = frame.getAttribute('data-src');

        if (src && !frame.getAttribute('src')) {
          frame.setAttribute('src', src);
        }

        frame.classList.add('is-loaded');
        trigger.setAttribute('disabled', 'disabled');
        trigger.setAttribute('data-state', 'loaded');
        syncTriggerLabel(trigger);
      }, { once: true });
    });

    window.addEventListener('site-language-change', function() {
      embeds.forEach(function(embed) {
        syncTriggerLabel(embed.querySelector('.lazy-embed__trigger'));
      });
    });
  });
})();
