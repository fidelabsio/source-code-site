/* FIDE Labs — page transitions, smart skeletons, inline network-error handling */
(function () {
  if (window.__fideTransitions) return;
  window.__fideTransitions = true;

  var THRESHOLD = 380;          // only skeleton when loading is genuinely slow
  var FADE = 220;
  var BASE = '#F3F4F6', HI = '#F9FAFB';
  var isFile = location.protocol === 'file:';

  /* ---------- shimmer primitives ---------- */
  function bar(w, h, r, mt) {
    return '<div style="width:' + w + ';height:' + h + 'px;border-radius:' + (r || 8) + 'px;margin-top:' + (mt || 0) + 'px;' +
      'background:linear-gradient(90deg,' + BASE + ' 25%,' + HI + ' 37%,' + BASE + ' 63%);background-size:400% 100%;' +
      'animation:fl-skel 1.35s ease-in-out infinite"></div>';
  }
  function card(h) {
    return '<div style="border:1px solid #E5E7EB;border-radius:16px;padding:26px;background:#fff">' +
      bar('44px', 44, 12) + bar('62%', 15, 6, 20) + bar('100%', 11, 6, 12) + bar('84%', 11, 6, 8) +
      (h ? bar('40%', 11, 6, 18) : '') + '</div>';
  }
  function grid(n, min, h) {
    var out = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(' + (min || 250) + 'px,1fr));gap:20px">';
    for (var i = 0; i < n; i++) out += card(h);
    return out + '</div>';
  }
  function band(inner, bg, pad) {
    return '<section style="background:' + (bg || '#fff') + ';padding:' + (pad || '56px') + ' 32px">' +
      '<div style="max-width:1160px;margin:0 auto">' + inner + '</div></section>';
  }
  function header(sub) {
    return band(bar('132px', 26, 999) + bar('62%', 44, 10, 22) + bar('44%', 44, 10, 10) +
      bar('70%', 14, 6, 22) + (sub || ''), '#F7FCFC', '60px');
  }

  /* ---------- per-destination skeletons ---------- */
  var RECIPES = {
    home: function () {
      return header('<div style="display:flex;gap:14px;margin-top:30px">' + bar('180px', 50, 999) + bar('165px', 50, 999) + '</div>') +
        band(bar('280px', 26, 8) + bar('50%', 34, 10, 16) + '<div style="margin-top:32px">' + grid(6, 250) + '</div>') +
        band(bar('40%', 34, 10) + '<div style="margin-top:32px">' + grid(3, 300, true) + '</div>', '#F9FAFB') +
        band('<div style="border-radius:20px;height:280px;background:linear-gradient(90deg,' + BASE + ' 25%,' + HI + ' 37%,' + BASE + ' 63%);background-size:400% 100%;animation:fl-skel 1.35s ease-in-out infinite"></div>');
    },
    docs: function () {
      return header('<div style="margin-top:28px">' + bar('520px', 52, 14) + '</div>') +
        band('<div style="display:flex;gap:28px;align-items:flex-start"><div style="flex:0 0 240px">' +
          bar('60%', 14, 6) + bar('100%', 12, 6, 16) + bar('88%', 12, 6, 10) + bar('92%', 12, 6, 10) + bar('76%', 12, 6, 10) +
          '</div><div style="flex:1">' + grid(4, 260, true) + '</div></div>');
    },
    form: function () {
      return header() + band('<div style="display:flex;gap:28px;flex-wrap:wrap;align-items:flex-start">' +
        '<div style="flex:1 1 520px;border:1px solid #E5E7EB;border-radius:16px;padding:32px;background:#fff">' +
        bar('220px', 22, 8) + bar('60%', 12, 6, 12) +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:18px;margin-top:26px">' +
        bar('100%', 44, 10) + bar('100%', 44, 10) + bar('100%', 44, 10) + bar('100%', 44, 10) + '</div>' +
        bar('100%', 44, 10, 18) + bar('100%', 120, 10, 18) + bar('190px', 48, 999, 24) +
        '</div><div style="flex:1 1 340px">' + card(true) + '<div style="margin-top:20px">' + card() + '</div></div></div>');
    },
    cards: function () {
      return header() + band(grid(6, 250, true)) + band(grid(3, 280), '#F9FAFB');
    },
    timeline: function () {
      return header() + band(grid(4, 250)) +
        band('<div style="display:flex;flex-direction:column;gap:26px">' +
          [0, 1, 2, 3].map(function () {
            return '<div style="display:flex;gap:22px"><div style="flex:none">' + bar('34px', 34, 999) + '</div>' +
              '<div style="flex:1">' + bar('34%', 18, 8) + bar('80%', 12, 6, 10) + '</div></div>';
          }).join('') + '</div>', '#F9FAFB');
    },
    doc: function () {
      return header() + band('<div style="max-width:820px;margin:0 auto">' +
        [0, 1, 2, 3].map(function () {
          return '<div style="padding:28px 0;border-bottom:1px solid #F3F4F6">' + bar('46%', 22, 8) +
            bar('100%', 12, 6, 16) + bar('96%', 12, 6, 8) + bar('72%', 12, 6, 8) + '</div>';
        }).join('') + '</div>');
    }
  };

  var ROUTES = [
    [/index|fide labs landing/i, 'home'],
    [/documentation/i, 'docs'],
    [/support/i, 'docs'],
    [/contact|checkout/i, 'form'],
    [/about|thank/i, 'timeline'],
    [/white-label|white label|founders|agencies/i, 'cards'],
    [/privacy|terms|license|refund|security/i, 'doc']
  ];
  function recipeFor(href) {
    for (var i = 0; i < ROUTES.length; i++) if (ROUTES[i][0].test(href)) return RECIPES[ROUTES[i][1]];
    return RECIPES.cards;
  }

  /* ---------- shell helpers ---------- */
  function contentRoot() {
    var h = document.querySelector('header');
    return h && h.parentElement ? h.parentElement : document.body;
  }
  function headerBottom() {
    var h = document.querySelector('header');
    if (!h) return 0;
    var r = h.getBoundingClientRect();
    return Math.max(0, r.bottom);
  }

  var overlay = null;
  function showSkeleton(href) {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.setAttribute('data-fl-skeleton', '');
    overlay.style.cssText = 'position:fixed;left:0;right:0;top:' + headerBottom() + 'px;bottom:0;z-index:40;' +
      'background:#fff;overflow:hidden;opacity:0;transition:opacity ' + FADE + 'ms ease';
    overlay.innerHTML = recipeFor(href)();
    document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.style.opacity = '1'; });
  }

  function fadeOut() {
    var root = contentRoot();
    var kids = root.children;
    for (var i = 0; i < kids.length; i++) {
      var el = kids[i];
      if (el.tagName === 'HEADER' || el.hasAttribute('data-fl-skeleton')) continue;
      el.style.transition = 'opacity ' + FADE + 'ms ease';
      el.style.opacity = '.35';
    }
  }
  function fadeBack() {
    var root = contentRoot(), kids = root.children;
    for (var i = 0; i < kids.length; i++) {
      if (kids[i].tagName === 'HEADER') continue;
      kids[i].style.opacity = '';
    }
  }

  /* ---------- inline network error ---------- */
  var banner = null;
  function showNetworkError(retry) {
    if (banner) banner.remove();
    banner = document.createElement('div');
    banner.setAttribute('role', 'alert');
    banner.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%) translateY(14px);bottom:28px;z-index:70;' +
      'max-width:calc(100vw - 48px);display:flex;align-items:center;gap:16px;padding:16px 20px;border-radius:14px;' +
      'background:#fff;border:1px solid #E5E7EB;box-shadow:0 20px 45px rgba(15,23,42,.14),0 8px 20px rgba(15,23,42,.08);' +
      'font-family:Geist,system-ui,sans-serif;opacity:0;transition:opacity .26s ease,transform .26s cubic-bezier(.2,.8,.2,1)';
    banner.innerHTML =
      '<div style="width:38px;height:38px;flex:none;border-radius:11px;background:#FEF2F2;color:#DC2626;display:flex;align-items:center;justify-content:center">' +
      '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg></div>' +
      '<div style="min-width:0"><div style="font-size:14px;font-weight:600;color:#0D1526;margin-bottom:2px">We couldn\u2019t load this content.</div>' +
      '<div style="font-size:13px;line-height:1.5;color:#6B7280">Please check your internet connection and try again.</div></div>' +
      '<button type="button" data-fl-retry style="flex:none;padding:11px 20px;border-radius:999px;border:1px solid #D1D5DB;background:#fff;' +
      'font-family:Geist,system-ui,sans-serif;font-size:13.5px;font-weight:600;color:#0D1526;cursor:pointer;transition:all .22s cubic-bezier(.2,.8,.2,1)">Retry</button>' +
      '<button type="button" data-fl-dismiss aria-label="Dismiss" style="flex:none;width:30px;height:30px;border-radius:999px;border:none;background:transparent;color:#9CA3AF;font-size:17px;line-height:1;cursor:pointer">\u00d7</button>';
    document.body.appendChild(banner);
    requestAnimationFrame(function () {
      banner.style.opacity = '1';
      banner.style.transform = 'translateX(-50%) translateY(0)';
    });
    var r = banner.querySelector('[data-fl-retry]');
    r.addEventListener('mouseenter', function () { r.style.background = '#14B8A6'; r.style.borderColor = '#14B8A6'; r.style.color = '#04322E'; });
    r.addEventListener('mouseleave', function () { r.style.background = '#fff'; r.style.borderColor = '#D1D5DB'; r.style.color = '#0D1526'; });
    r.addEventListener('click', function () { hideBanner(); retry(); });
    banner.querySelector('[data-fl-dismiss]').addEventListener('click', hideBanner);
  }
  function hideBanner() {
    if (!banner) return;
    var b = banner; banner = null;
    b.style.opacity = '0';
    b.style.transform = 'translateX(-50%) translateY(14px)';
    setTimeout(function () { b.remove(); }, 280);
  }
  window.flNetworkError = showNetworkError;

  /* ---------- navigation ---------- */
  function go(href) {
    var slow = setTimeout(function () { fadeOut(); showSkeleton(href); }, THRESHOLD);
    var done = false;
    function finish() { if (!done) { done = true; clearTimeout(slow); location.href = href; } }

    if (isFile || !window.fetch) { finish(); return; }

    fetch(href, { credentials: 'same-origin' })
      .then(function (res) {
        if (!res.ok && res.status >= 500) throw new Error('server');
        finish();
      })
      .catch(function () {
        clearTimeout(slow);
        if (overlay) { var o = overlay; overlay = null; o.style.opacity = '0'; setTimeout(function () { o.remove(); }, FADE); }
        fadeBack();
        showNetworkError(function () { go(href); });
      });
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || a.target === '_blank' || a.hasAttribute('download')) return;
    if (/^(#|mailto:|tel:|https?:)/i.test(href)) return;
    if (!/\.html(\?|#|$)/i.test(href)) return;
    if (href.split('#')[0] === location.pathname.split('/').pop()) return;
    e.preventDefault();
    go(href);
  }, true);

  /* fade the page in on arrival, and again when restored from bfcache */
  function reveal() {
    var root = contentRoot(), kids = root.children;
    for (var i = 0; i < kids.length; i++) {
      if (kids[i].tagName === 'HEADER') continue;
      kids[i].style.opacity = '';
    }
    document.documentElement.style.opacity = '1';
  }
  document.documentElement.style.transition = 'opacity 240ms ease';
  if (document.readyState === 'complete') reveal();
  else window.addEventListener('load', reveal);
  window.addEventListener('pageshow', function (e) { if (e.persisted) { hideBanner(); reveal(); } });
})();
