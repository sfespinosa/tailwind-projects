const html = document.documentElement;
const darkThemeToggle = document.getElementById('theme-toggle-dark-icon');
const lightThemeToggle = document.getElementById('theme-toggle-light-icon');
const themeToggle = document.getElementById('theme-toggle');
toggleTheme();

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  if (currentTheme === 'dark') {
    html.classList.add('dark');
    darkThemeToggle.classList.add('hidden');
    lightThemeToggle.classList.remove('hidden');
  } else {
    html.classList.remove('dark');
    darkThemeToggle.classList.remove('hidden');
    lightThemeToggle.classList.add('hidden');
  }
}

themeToggle.addEventListener('click', () => {
  localStorage.getItem('theme') === 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
  toggleTheme();
});