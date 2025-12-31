---
title: "Test Effet Scroll Reveal"
layout: single
permalink: /test-reveal/
author_profile: true
---

<style>
  /* L'état initial : invisible et un peu plus bas */
  .reveal {
    opacity: 0;
    transform: translateY(50px); /* Décalage vers le bas */
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1); /* Transition fluide */
  }

  /* L'état final : visible et à sa place */
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* Style des fausses images (Boites grises) */
  .placeholder-box {
    width: 100%;
    height: 300px;
    background-color: #f0f0f0;
    border: 2px dashed #ccc;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    font-family: monospace;
    font-size: 1.2rem;
    margin: 2rem 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  /* Pour aérer la page et forcer le scroll */
  .spacer {
    height: 50px;
  }
</style>

<div class="reveal">
  <h2>Introduction du Projet</h2>
  <p>Commence à scroller doucement vers le bas. Les éléments devraient apparaître progressivement en remontant.</p>
</div>

<div class="spacer"></div>

<div class="reveal">
  <div class="placeholder-box">
    [ IMAGE : SCHÉMA DU ROBOT ]
  </div>
  <p><em>Fig 1. Vue d'ensemble de l'architecture du système.</em></p>
</div>

<div class="spacer"></div>

<div class="reveal">
  <h3>La Problématique Technique</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div class="spacer"></div>

<div class="reveal">
  <div class="placeholder-box">
    [ IMAGE : COURBE D'APPRENTISSAGE ML ]
  </div>
</div>

<div class="spacer"></div>

<div class="reveal">
  <h3>L'Algorithme de Contrôle</h3>
  <p>Voici comment j'ai implémenté la boucle PID :</p>
  <pre><code>
  float error = setpoint - input;
  integral += error * dt;
  float derivative = (error - prevError) / dt;
  output = Kp * error + Ki * integral + Kd * derivative;
  </code></pre>
</div>

<div class="spacer"></div>

<div class="reveal">
  <div class="placeholder-box">
    [ VIDÉO : DÉMO FINALE ]
  </div>
</div>

<div class="reveal">
  <h3>Conclusion</h3>
  <p>Le système est stable et répond aux exigences en temps réel.</p>
</div>

<div style="height: 400px;"></div> <script>
  document.addEventListener("DOMContentLoaded", function() {
    // On crée l'observateur
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Si l'élément entre dans l'écran
        if (entry.isIntersecting) {
          // On ajoute la classe "active" qui déclenche le CSS
          entry.target.classList.add('active');
          // (Optionnel) On arrête d'observer une fois apparu pour économiser des ressources
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.15 // L'animation se lance quand 15% de l'élément est visible
    });

    // On cible tous les éléments avec la classe "reveal"
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
  });
</script>
