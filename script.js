document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Search Bar Functionality
  // ==========================================
  // Targeting both potential search input IDs
  const searchInput = document.getElementById("gameSearch") || document.getElementById("game-search");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const filterValue = e.target.value.toLowerCase().trim();
      const gameCards = document.querySelectorAll(".game-card");

      gameCards.forEach((card) => {
        const titleElement = card.querySelector("h3");
        
        if (titleElement) {
          const gameTitle = titleElement.textContent.toLowerCase();

          // Title match hone par dikhana, warna hide kar dena
          if (gameTitle.includes(filterValue)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  }

  // ==========================================
  // 2. Smooth Scroll (for same-page links)
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      
      // Prevent crash if href is just "#"
      if (targetId === '#' || targetId === '') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // 3. Scroll Fade-In Animation
  // ==========================================
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

});
