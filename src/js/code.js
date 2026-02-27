(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('pre[class*="language-"]').forEach(function (pre) {
      var code = pre.querySelector('code');
      if (!code) return;

      // Wrap pre in a container so the copy button can be positioned
      // relative to the code block without being inside the pre itself.
      var wrapper = document.createElement('div');
      wrapper.className = 'code-block';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // --- Line numbers ---
      var lines = code.textContent.split('\n');
      if (lines[lines.length - 1] === '') lines.pop();

      var rows = document.createElement('span');
      rows.className = 'line-numbers-rows';
      rows.setAttribute('aria-hidden', 'true');
      for (var i = 0; i < lines.length; i++) {
        rows.appendChild(document.createElement('span'));
      }
      pre.classList.add('line-numbers');
      pre.appendChild(rows);

      // --- Copy button ---
      var btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy code to clipboard');
      wrapper.appendChild(btn);

      btn.addEventListener('click', function () {
        var text = code.textContent.replace(/\n$/, '');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            markCopied(btn);
          }).catch(function () {
            fallbackCopy(text, btn);
          });
        } else {
          fallbackCopy(text, btn);
        }
      });
    });
  });

  function markCopied(btn) {
    btn.textContent = 'Copied!';
    btn.classList.add('is-copied');
    setTimeout(function () {
      btn.textContent = 'Copy';
      btn.classList.remove('is-copied');
    }, 2000);
  }

  function fallbackCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); markCopied(btn); } catch (e) {}
    document.body.removeChild(ta);
  }
}());
