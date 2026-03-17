// Inject book image

// Nav scroll
const nav = document.getElementById('nav');
const sticky = document.getElementById('sticky');
const bt = document.getElementById('backtop');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 20);
  sticky.classList.toggle('vis', y > 600);
  bt.classList.toggle('vis', y > 600);
});

// TOC tabs
function switchToc(id, btn) {
  document.querySelectorAll('.toc-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.toc-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}

// Blog tabs
function switchBlog(id, btn) {
  document.querySelectorAll('.blog-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.blog-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}

// Newsletter
function handleNewsletter(e) {
  e.preventDefault();
  const msg = document.getElementById('nl-msg');
  msg.textContent = '✓ You\'re subscribed! Welcome aboard.';
  msg.style.color = 'var(--cyan)';
  e.target.reset();
}