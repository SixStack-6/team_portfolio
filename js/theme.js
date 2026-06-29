const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('team-portfolio-theme') || 'light';

document.body.classList.toggle('dark', storedTheme === 'dark');
themeToggle.textContent = storedTheme === 'dark' ? 'Light mode' : 'Dark mode';

themeToggle?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
  localStorage.setItem('team-portfolio-theme', isDark ? 'dark' : 'light');
});
