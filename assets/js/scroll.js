document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Liste des éléments à animer AUTOMATIQUEMENT
  // On cible : les cartes de projets, les titres principaux, et les images dans les articles
  const targets = document.querySelectorAll('.archive__item, .page__content h2, .page__content h3, .page__content img');

  // 2. Configuration de l'observateur
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      
      // Si l'élément est dans l'écran
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      } 
      // Si l'élément sort de l'écran (C'est ici que se joue l'effet inverse)
      else {
        entry.target.classList.remove('reveal-active');
      }
      
    });
  }, {
    threshold: 0.1, // L'animation se lance quand 10% de l'objet est visible
    rootMargin: "0px 0px -50px 0px" // Petite marge pour ne pas déclencher tout en bas
  });

  // 3. On attache l'observateur et la classe de départ à tous les éléments
  targets.forEach((el) => {
    el.classList.add('reveal-element'); // On ajoute la classe CSS de base (invisible)
    observer.observe(el);
  });
});
