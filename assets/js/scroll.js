/* --- ANIMATION SCROLL REVEAL (AUTO) --- */

/* État initial (Invisible) */
.reveal-element {
  opacity: 0;
  transform: translateY(80px) scale(0.95); /* On descend de 80px et on réduit un peu la taille */
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Courbe de vitesse fluide */
  will-change: transform, opacity; /* Optimisation pour la fluidité (60 FPS) */
}

/* État final (Visible) */
.reveal-active {
  opacity: 1;
  transform: translateY(0) scale(1); /* Revient à sa place et taille normale */
}

/* Optionnel : Désactiver sur mobile si ça lag (souvent mieux) */
@media (max-width: 768px) {
  .reveal-element {
    opacity: 1 !important;
    transform: none !important;
  }
}
