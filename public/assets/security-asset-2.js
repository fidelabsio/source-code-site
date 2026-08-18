/* Builds the tablet/mobile hamburger + panel from the header that is already on the page,
   so every page gets the same menu with no per-page markup. The desktop nav is untouched —
   responsive.css hides it and reveals the burger at the breakpoint. */
(function () {
  'use strict';


  function panelFromNav(nav) {
    var frag = document.createDocumentFragment();
    [].slice.call(nav.children).forEach(function (child) {
      if (child.tagName === 'A') {
        var a = document.createElement('a');
        a.href = child.getAttribute('href') || '#';
        a.textContent = child.textContent.trim();
        frag.appendChild(a);
        return;
      }
      // dropdown: label becomes a group heading, its items become indented links
      var trigger = child.querySelector('a');
      var subs = [].slice.call(child.querySelectorAll('a')).slice(1);
      if (!trigger) return;
      if (!subs.length) {
        var solo = document.createElement('a');
        solo.href = trigger.getAttribute('href') || '#';
        solo.textContent = trigger.textContent.replace(/[▼\s]+$/, '').trim();
        frag.appendChild(solo);
        return;
      }
      var head = document.createElement('div');
      head.className = 'fl-mm-group';
      head.textContent = trigger.textContent.replace(/[▼\s]+$/, '').trim().toUpperCase();
      frag.appendChild(head);
      subs.forEach(function (s) {
        var a = document.createElement('a');
        a.className = 'fl-mm-sub';
        a.href = s.getAttribute('href') || '#';
        a.textContent = s.textContent.trim();
        frag.appendChild(a);
      });
    });
    return frag;
  }

  function build() {
    if (window.__flMobileNav) return true;
    var header = document.querySelector('header');
    if (!header) return false;
    var bar = header.firstElementChild;
    var nav = header.querySelector('nav');
    if (!bar || !nav) return false;
    window.__flMobileNav = true;
    var stale = document.querySelectorAll('.fl-mobile-menu, .fl-burger');
    for (var i = 0; i < stale.length; i++) stale[i].remove();

    var burger = document.createElement('button');
    burger.className = 'fl-burger';
    burger.type = 'button';
    burger.setAttribute('aria-label', 'Menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(burger);

    var panel = document.createElement('div');
    panel.className = 'fl-mobile-menu';
    panel.setAttribute('data-open', 'false');
    var inner = document.createElement('nav');
    inner.appendChild(panelFromNav(nav));

    // the header CTA is mirrored into the panel as its final action
    var cta = [].slice.call(bar.children).filter(function (c) {
      return c.tagName === 'A' && /[Cc]heckout/.test(c.getAttribute('href') || '');
    })[0];
    if (cta) {
      var mc = document.createElement('a');
      mc.className = 'fl-mm-cta';
      mc.href = cta.getAttribute('href');
      mc.textContent = cta.textContent.trim();
      inner.appendChild(mc);
    }
    panel.appendChild(inner);
    document.body.appendChild(panel);

    function place() {
      var h = document.querySelector('header');
      var r = h ? h.getBoundingClientRect() : { bottom: 68, top: 0, height: 68, right: window.innerWidth };
      var bottom = Math.max(r.bottom, 0);
      panel.style.top = bottom + 'px';
      panel.style.maxHeight = 'calc(100vh - ' + bottom + 'px)';
    }

    function setOpen(open) {
      place();
      panel.setAttribute('data-open', open ? 'true' : 'false');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    }

    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(panel.getAttribute('data-open') !== 'true');
    });
    // close on selection, on outside click, and on Escape
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('click', function (e) {
      if (panel.getAttribute('data-open') !== 'true') return;
      if (!panel.contains(e.target) && !burger.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
    window.addEventListener('scroll', place, { passive: true });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1000) setOpen(false);
      else place();
    });
    requestAnimationFrame(place);
    window.addEventListener('load', place);
    if ('ResizeObserver' in window) {
      new ResizeObserver(place).observe(header);
    }
    return true;
  }

  if (!build()) {
    // the runtime mounts the header after this script loads
    var obs = new MutationObserver(function () { if (build()) obs.disconnect(); });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
