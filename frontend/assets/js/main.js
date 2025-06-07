// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Dark/Light mode toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      // Update icon to sun for light mode (optional)
      themeIcon.innerHTML = `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m14.07 5.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z"/>`;
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      // Update icon to moon for dark mode (optional)
      themeIcon.innerHTML = `<path d="M12 3.75a8.25 8.25 0 100 16.5A8.25 8.25 0 0112 3.75z"/>`;
    }
  }

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });

  // Search button event (currently just an alert, change as needed)
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', () => {
    alert('Search button clicked! Implement your search functionality here.');
  });
});
