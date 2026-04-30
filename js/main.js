// Dark mode toggle
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme:dark)').matches)) {
  document.documentElement.dataset.theme = 'dark';
  toggle.textContent = '☀️';
}
toggle.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? '' : 'dark';
  toggle.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Scroll fade-in (Intersection Observer)
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// Skill bar animation
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.fill').forEach(f => { f.style.width = f.dataset.width + '%'; });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-bar-wrap').forEach(el => barObs.observe(el));
