(function () {
  'use strict';

  // Only animate elements whose text is a plain number (optionally prefixed/suffixed)
  // e.g. "30", "+189%", "94%", "$150k" — skip "7-fig", "NEA + Warhol", "80+ cities"
  var NUMERIC_RE = /^([+$]?)(\d+(?:\.\d+)?)(%|k|M|B)?(\+?)$/i;

  function parseMetric(str) {
    var m = str.trim().match(NUMERIC_RE);
    if (!m) return null;
    return {
      prefix:  m[1] || '',
      value:   parseFloat(m[2]),
      suffix:  (m[3] || '') + (m[4] || ''),
      original: str.trim()
    };
  }

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateCounter(el) {
    var parsed = parseMetric(el.textContent);
    if (!parsed) return;

    var target   = parsed.value;
    var duration = 1100;
    var start    = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased    = easeOutQuart(progress);
      var current  = eased * target;

      // Format: integers stay integers, decimals keep one place
      var display = target % 1 === 0
        ? Math.round(current).toString()
        : current.toFixed(1);

      el.textContent = parsed.prefix + display + parsed.suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = parsed.original; // exact final value
      }
    }

    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.metric-num').forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.metrics').forEach(function (el) {
    observer.observe(el);
  });

}());
