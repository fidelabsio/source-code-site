/* FIDE Labs scene layer: scroll-driven White Label scene entrance.
   The branded page loader lives in loader.js.
   Animates opacity / transform / filter only — never layout properties. */
(function () {
  'use strict';

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  /* ---------------- scroll-driven scene entrance ---------------- */
  function scene() {
    var section = document.querySelector('[data-scene="whitelabel"]');
    if (!section) return false;
    var items = section.querySelectorAll('[data-scene-item]');
    if (!items.length) return false;
    if (reduced) return true;                       // no motion, content as-authored
    if (section.__flScene) return true;
    section.__flScene = true;

    var ordered = Array.prototype.slice.call(items).sort(function (a, b) {
      return (+a.getAttribute('data-scene-item')) - (+b.getAttribute('data-scene-item'));
    });

    // Web Animations rather than CSS/inline styles: the runtime rewrites these elements'
    // style attributes on every render, which restarted CSS animations forever and wiped
    // inline tween values. A WAAPI animation lives on the element itself and survives that.
    var anims = ordered.map(function (el, i) {
      var a = el.animate(
        [
          { opacity: 0, transform: 'translateY(20px)', filter: 'blur(4px)' },
          { opacity: 1, transform: 'translateY(0)',    filter: 'blur(0px)' }
        ],
        { duration: 700, delay: 1e7, easing: 'ease-in-out', fill: 'both' }
      );
      a.__flDelay = i * 100;                        // staggered start once revealed
      return a;
    });

    var played = false;
    function play() {
      if (played) return;
      played = true;
      anims.forEach(function (a) {
        a.effect.updateTiming({ delay: a.__flDelay });
        a.currentTime = 0;
      });
    }

    if ('IntersectionObserver' in window) {
      // the section is taller than the viewport, so a ratio threshold is unreachable —
      // a bottom rootMargin fires once it has entered ~25% of the way in
      var io = new IntersectionObserver(function (entries) {
        if (entries.some(function (en) { return en.isIntersecting; })) { play(); io.disconnect(); }
      }, { threshold: 0, rootMargin: '0px 0px -25% 0px' });
      io.observe(section);
      // safety net, gated on the section actually reaching the viewport so it can never
      // consume the play-once entrance while the visitor is still above the fold
      var net = setInterval(function () {
        if (played) { clearInterval(net); return; }
        var r = section.getBoundingClientRect();
        if (r.top < (window.innerHeight || 0) * 0.9 && r.bottom > 0) {
          play();
          io.disconnect();
          clearInterval(net);
        }
      }, 500);
    } else {
      play();
    }

    // scene hand-off into and out of the neighbouring light sections, written to a custom
    // property on <html> so no runtime-managed inline style can clobber it
    var root = document.documentElement;
    function handoff() {
      var r = section.getBoundingClientRect();
      var vh = window.innerHeight || 1;
      var inFade = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.35)));
      var outFade = Math.min(1, Math.max(0, r.bottom / (vh * 0.55)));
      root.style.setProperty('--fl-wl-opacity', (0.55 + 0.45 * Math.min(inFade, outFade)).toFixed(3));
    }
    handoff();
    window.addEventListener('scroll', handoff, { passive: true });
    window.addEventListener('resize', handoff);
    return true;
  }

  function boot() {
    // the branded loading screen now lives in loader.js
    if (!scene()) {
      var obs = new MutationObserver(function () { if (scene()) obs.disconnect(); });
      obs.observe(document.documentElement, { childList: true, subtree: true });
      setTimeout(function () { obs.disconnect(); }, 12000);
    }
  }

  boot();
})();
