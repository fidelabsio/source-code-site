/* FIDE Labs — form validation states (error / success / warning) */
(function () {
  if (window.__fideValidation) return;
  window.__fideValidation = true;

  var C = {
    error:   { border: '#DC2626', text: '#DC2626', bg: '#FEF2F2' },
    success: { border: '#16A34A', text: '#16A34A', bg: '#F0FDF4' },
    warning: { border: '#D97706', text: '#D97706', bg: '#FFFBEB' }
  };
  var ICON = {
    error: '<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',
    success: '<path d="M20 6 9 17l-5-5"/>',
    warning: '<path d="M12 8v4"/><path d="M12 16h.01"/><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/>'
  };
  var NEUTRAL = '#E5E7EB';

  (function sheet() {
    if (document.getElementById('fl-validation-css')) return;
    var st = document.createElement('style');
    st.id = 'fl-validation-css';
    function rule(name, c) {
      // the field's own border-color transition swallows the change, so the state paints instantly
      return '[data-fl-state="' + name + '"]{transition:none !important;border:1px solid ' + c.border +
        ' !important;background:' + c.bg + ' !important}';
    }
    st.textContent = rule('error', C.error) + rule('success', C.success) + rule('warning', C.warning);
    (document.head || document.documentElement).appendChild(st);
  })();

  function label(el) {
    var l = el.form && el.id ? el.form.querySelector('label[for="' + el.id + '"]') : null;
    return l ? l.textContent.replace(/\s*\*\s*$/, '').trim() : 'This field';
  }

  function validate(el) {
    var v = (el.value || '').trim();
    if ((el.__flRequired || el.hasAttribute('required')) && !v) return { state: 'error', msg: label(el) + ' is required.' };
    if (!v) return { state: 'neutral' };
    var type = el.__flType || el.type;
    if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
      return { state: 'error', msg: 'Enter a valid email address, e.g. name@company.com.' };
    if (type === 'url' || el.id === 'store-url') {
      if (!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(v))
        return { state: 'error', msg: 'Enter a valid store URL, e.g. store.myshopify.com.' };
      if (!/myshopify\.com/i.test(v) && !/^https?:\/\//i.test(v))
        return { state: 'warning', msg: 'Double-check this URL — most stores end in .myshopify.com.' };
    }
    if (el.tagName === 'TEXTAREA' && v.length < 20)
      return { state: 'warning', msg: 'A little more detail helps us give you a useful answer.' };
    if (el.id === 'co-vat' && !/^[A-Za-z]{2}[A-Za-z0-9]{6,}$/.test(v))
      return { state: 'warning', msg: 'VAT numbers usually start with a two-letter country code.' };
    return { state: 'success' };
  }

  function messageNode(el) {
    var wrap = el.parentElement;
    var node = wrap.querySelector('[data-fl-msg]');
    if (!node) {
      node = document.createElement('div');
      node.setAttribute('data-fl-msg', '');
      node.setAttribute('aria-live', 'polite');
      node.style.cssText = 'display:flex;align-items:flex-start;gap:6px;font-size:12.5px;line-height:1.5;margin-top:-1px';
      wrap.appendChild(node);
    }
    return node;
  }

  function paint(el, res) {
    var node = messageNode(el);
    if (res.state === 'neutral') {
      el.removeAttribute('data-fl-state');
      el.removeAttribute('aria-invalid');
      node.textContent = '';
      node.style.display = 'none';
      return;
    }
    var c = C[res.state];
    el.setAttribute('data-fl-state', res.state);
    if (res.state === 'error') el.setAttribute('aria-invalid', 'true');
    else el.removeAttribute('aria-invalid');

    if (res.state === 'success') { node.textContent = ''; node.style.display = 'none'; return; }
    node.style.display = 'flex';
    node.style.color = c.text;
    node.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:1px">' + ICON[res.state] + '</svg>' +
      '<span>' + res.msg + '</span>';
  }

  function fields(form) {
    return [].slice.call(form.querySelectorAll('input, textarea, select'))
      .filter(function (el) { return el.type !== 'hidden' && el.type !== 'submit'; });
  }

  // Native constraints are taken out of play: the runtime re-renders forms and resets noValidate,
  // so requiredness is tracked in JS and the styled states are always what the user sees.
  function disarmNative(form) {
    // noValidate is read when the browser invokes submit — setting it in click capture is early enough,
    // and the required attributes stay on the fields for assistive tech
    fields(form).forEach(function (el) { if (el.required) el.__flRequired = true; });
    if (!form.noValidate) form.noValidate = true;
  }

  function wire(form) {
    disarmNative(form);                  // re-run on every boot pass — a re-render can restore the attributes
    if (form.__flWired) return;
    form.__flWired = true;

    fields(form).forEach(function (el) {
      el.addEventListener('blur', function () { paint(el, validate(el)); });
      el.addEventListener('input', function () {
        // clear an error the moment the input becomes valid; never nag mid-typing
        if (el.getAttribute('aria-invalid') === 'true') {
          var r = validate(el);
          if (r.state !== 'error') paint(el, r);
        }
      });
      el.addEventListener('change', function () { if (el.tagName === 'SELECT') paint(el, validate(el)); });
    });

    form.addEventListener('submit', function (e) {
      var bad = null;
      fields(form).forEach(function (el) {
        var r = validate(el);
        paint(el, r);
        if (r.state === 'error' && !bad) bad = el;
      });
      if (bad) {
        e.preventDefault();
        e.stopImmediatePropagation();
        bad.focus({ preventScroll: true });
        var top = bad.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    }, true);
  }

  function boot() {
    var forms = [].slice.call(document.querySelectorAll('form'));
    forms.forEach(wire);
    return forms.length > 0;
  }

  // a re-render can restore the native constraints between boot passes — disarm again
  // the moment the user reaches for the submit button, before the click completes
  ['click', 'pointerdown', 'mousedown', 'keydown', 'focusin'].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      var form = t.closest('form');
      if (form) wire(form);   // idempotent via __flWired; also disarms native
    }, true);
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  // DC renders asynchronously — pick up forms as they mount
  // Stays connected: the runtime replaces the <form> node on later render passes, and each new node needs
  // wiring. childList-only + the __flWired guard makes this cheap and loop-free (the earlier freeze came
  // from attributes:true plus writing required/noValidate, both since reverted).
  var queued = false;
  function scheduleBoot() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; boot(); });
  }
  boot();
  new MutationObserver(scheduleBoot).observe(document.documentElement, { childList: true, subtree: true });
})();
