(function () {
  var STORAGE_KEY = 'theme';

  function applyTheme(theme) {
    if (theme === 'auto') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    document.querySelectorAll('.theme-toggle button').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Mark the currently active button based on the saved preference.
    var saved = localStorage.getItem(STORAGE_KEY) || 'auto';
    applyTheme(saved);

    document.querySelectorAll('.theme-toggle button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var theme = btn.dataset.theme;
        localStorage.setItem(STORAGE_KEY, theme);
        applyTheme(theme);
      });
    });
  });
}());
