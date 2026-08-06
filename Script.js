// Smooth scroll (for same-page links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple fade-in for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.game-card, .news-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(25px)';
  card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(card);
});
