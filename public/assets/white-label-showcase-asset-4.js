/* Showcase slides carry their real path in data-shot so the offline bundle ships them as
   sibling files instead of base64-inlining ~20 MB of PNG. Mirrors video-src.js.
   Re-applied on re-render because the runtime rewrites attributes. */
(function () {
  'use strict';
  function apply() {
    var list = document.querySelectorAll('img[data-shot]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      var want = el.getAttribute('data-shot');
      if (!want || want.indexOf('{{') === 0) continue;
      if (el.getAttribute('src') !== want) el.setAttribute('src', want);
    }
  }
  apply();
  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
})();
