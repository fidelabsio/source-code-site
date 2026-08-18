/* Feature-card preview videos are referenced via data-vsrc rather than src, so the
   offline bundler ships them as sibling files instead of inlining ~27 MB of base64.
   Applied on mount and re-applied when the runtime re-renders the cards. */
(function () {
  'use strict';
  function apply() {
    var list = document.querySelectorAll('video[data-vsrc], img[data-shot]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      var want = el.getAttribute('data-vsrc') || el.getAttribute('data-shot');
      if (want && el.getAttribute('src') !== want) el.setAttribute('src', want);
    }
  }
  apply();
  new MutationObserver(apply).observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src']
  });
})();
