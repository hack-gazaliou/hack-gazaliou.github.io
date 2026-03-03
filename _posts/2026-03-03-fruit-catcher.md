---
title: "Fruit Catcher : A investigation in RL discret control"
excerpt: "Full comparative study of DQN and VPG algorithms applied to a game environment."
categories:
  - personal
  - projects
tags:
  - rl
  - deep learning
  - control

  - research
header:
  teaser: /assets/images/environnement.png
  overlay_image: /assets/images/environnement.png
---
<style>
  /* 2. ANIMATION SCROLL REVEAL */
  .reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<div class="reveal" markdown="1">
<span class="badge-progress"><i class="fas fa-tools"></i> Work In Progress</span>

The objective of this project was to train an agent to play a simple game (catching fruits while dodging bombs). This also provided an opportunity to conduct a brief comparative study of two basic RL algorithms: Vanilla Policy Gradient and Deep Q-Network.

This was a highly instructive experience, it opened my horizons to new control methods, which I plan to apply to physical systems in the future, rather than just virtual environments.

Below, you will find the complete technical report detailing the methodology, the different approaches that I tried, and final test results. 

For the best reading experience, you can scroll through the document directly on this page.

<iframe src="/assets/docs/Report_fruit_catcher.pdf" width="100%" height="800px" style="border: 1px solid #ccc; border-radius: 5px; margin-top: 20px;">
    This browser does not support embedded PDFs. Please download the PDF to view it: <a href="/assets/docs/Report_fruit_catcher.pdf">Download PDF</a>.
</iframe>

<div style="text-align: center; margin-top: 20px;">
  <a href="/assets/docs/Report_fruit_catcher.pdf" target="_blank" class="btn btn--primary">
    <i class="fas fa-download"></i> Download Full Report
  </a>
</div>