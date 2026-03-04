---
title: "Simulating Celestial Trajectories: A Numerical Approach to the N-Body Problem"
excerpt: "A numerical analysis project exploring orbital mechanics, the Cassini-Huygens Venus flyby, and the Pythagorean three-body problem."
categories:
  - academic
tags:
  - aerospace
  - mathematics
  - simulation
  - numerical analysis
header:
  teaser: /assets/images/celestial-sim.png
  overlay_image: /assets/images/celestial-sim.png
  overlay_filter: 0.5
---

<style>
  /* SCROLL REVEAL ANIMATION */
  .reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
  /* On force l'image à se focaliser sur le haut (top) */
.wrapper.inner {
  /* Si ton thème utilise background-image pour l'overlay */
  background-position: center bottom !important;
}
/* Si tu utilises une image d'en-tête standard (pas overlay) */
.page__hero-image {
  object-position: bottom !important;
}
/* On force l'image à se focaliser sur le bas (bottom) */
.archive__item-teaser img {
  object-position: bottom !important;
}

</style>

<div class="reveal" markdown="1">
As an engineering student, I have always been fascinated by aerospace and the mathematical modeling of complex physical phenomena. This project, completed in pairs with my classmate [Jules Cardot](https://yales-bit.github.io/), was the perfect opportunity to dive deep into orbital mechanics and numerical simulations.

Our goal was to approximate the trajectory of the Cassini-Huygens space probe during its Venus flyby. Because solving the equation of motion for an N-body system cannot be done analytically, we had to rely on numerical methods. We modeled the orbit using and comparing different numerical schemes—specifically Euler, Verlet, and Leapfrog—to analyze their stability, convergence speed, and energy conservation over time. We also extended our study to the fascinating Pythagorean three-body problem.

You can explore the source code and run the simulations directly in the Google Colab notebook linked below.

<div style="text-align: center; margin: 30px 0;">
  <a href="https://colab.research.google.com/drive/1BKCcqTnuR8qRJDddp9FzmFBeLcxFRHst?usp=sharing" target="_blank" class="btn btn--info btn--large">
    <i class="fab fa-google"></i> View Source Code on Google Colab
  </a>
</div>

Below is the complete technical report detailing our methodology, mathematical proofs, and graphical results. *(Note: The report is written in French).*
</div>

<div class="reveal">
<iframe src="/assets/docs/projet-analyse-numerique.pdf" width="100%" height="800px" style="border: 1px solid #ccc; border-radius: 5px; margin-top: 20px;">
    This browser does not support embedded PDFs. Please download the PDF to view it: <a href="/assets/docs/projet-analyse-numerique.pdf">Download PDF</a>.
</iframe>

<div style="text-align: center; margin-top: 20px;">
  <a href="/assets/docs/projet-analyse-numerique.pdf" target="_blank" class="btn btn--primary">
    <i class="fas fa-file-pdf"></i> Download Full Report (FR)
  </a>
</div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.15 
    });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
  });
</script>