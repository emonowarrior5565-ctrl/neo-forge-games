document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Search Bar Functionality
  // ==========================================
  const searchInput = document.getElementById('gameSearch') || document.getElementById('game-search');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const filterValue = e.target.value.toLowerCase().trim();
      const gameCards = document.querySelectorAll('.game-card');

      gameCards.forEach((card) => {
        const titleElement = card.querySelector('h3');
        if (!titleElement) return;

        const gameTitle = titleElement.textContent.toLowerCase();
        card.style.display = gameTitle.includes(filterValue) ? '' : 'none';
      });
    });
  }

  // ==========================================
  // 2. Smooth Scroll (for same-page links)
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Skip empty or bare "#" links
      if (!targetId || targetId === '#') return;

      let target = null;
      try {
        target = document.querySelector(targetId);
      } catch (err) {
        // Invalid selector (e.g. contains spaces/special chars) — ignore safely
        return;
      }

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // 3. Scroll Fade-In Animation
  // ==========================================
  const fadeTargets = document.querySelectorAll('.game-card, .news-card');

  if (fadeTargets.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target); // animate once, then stop watching
        }
      });
    }, { threshold: 0.12 });

    fadeTargets.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(25px)';
      card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
      observer.observe(card);
    });
  }

});
function playGame(path) {
  document.getElementById('gameFrame').src = path;
  document.getElementById('gameModal').style.display = 'flex';
}
function closeGame() {
  document.getElementById('gameFrame').src = '';
  document.getElementById('gameModal').style.display = 'none';
}

