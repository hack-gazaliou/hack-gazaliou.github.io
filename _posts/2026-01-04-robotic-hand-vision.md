---
title: "Robotic Hand & Computer Vision: Towards Machine Learning Control"
# On injecte le badge directement dans l'excerpt
excerpt: "<span class='badge-progress' style='font-size: 0.6rem; border-width: 1px; padding: 2px 5px; margin-bottom: 10px;'>Work In Progress</span><br/>Developing a 6-DOF anthropomorphic hand: from bio-inspired mechanical design to AI-driven control using MediaPipe and PTC Creo."
categories:
  - personal
  - robotics
tags:
  - CREO
  - ESP32
  - Python
  - OpenCV
  - Machine Learning
header:
  teaser: /assets/images/hand-render.jpg
  overlay_image: /assets/images/hand-render.jpg
  overlay_filter: 0.5
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

  /* 3. BADGE "WORK IN PROGRESS" */
  .badge-progress {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    color: #d35400;
    border: 2px solid #d35400;
    background-color: rgba(211, 84, 0, 0.1);
    border-radius: 4px;
    padding: 4px 8px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }
  /* Cadrage dans la bulle projet (Teaser) */
/* On force l'image à se focaliser sur le bas (bottom) */
.archive__item-teaser img {
  object-position: bottom !important;
}

/* Cadrage dans la bannière (Overlay) */
/* On force l'image à se focaliser sur le haut (top) */
.wrapper.inner {
  /* Si ton thème utilise background-image pour l'overlay */
  background-position: center top !important;
}

/* Si tu utilises une image d'en-tête standard (pas overlay) */
.page__hero-image {
  object-position: top !important;
}
</style>

<div class="reveal" markdown="1">
<span class="badge-progress"><i class="fas fa-tools"></i> Work In Progress</span>

This personal project aims to design and control an anthropomorphic robotic hand prototype. The goal is twofold: to tackle the challenge of compact mechatronic integration (6 Degrees of Freedom) and to explore the potential of computer vision for intuitive control of complex systems.

The prototype's dimensions are based on the biometrics of my own hand, imposing strict constraints on space and actuator integration.
</div>

## Mechanical Design (Bio-inspiration & Kinematics)

<div class="reveal" markdown="1">
While drawing inspiration from open-source projects like InMoov, I designed the entire mechanical structure from scratch using PTC Creo, integrating custom solutions to meet my specific constraints.

* **Architecture:** Each finger consists of 3 phalanges. Actuation is remotely located in the forearm using a cable-driven system (tendons) pulled by 5 **MG90S** servomotors. Particular attention was paid to *cable management* to ensure a clean layout and minimize parasitic friction.
* **The 6th Axis:** A dedicated degree of freedom for forearm rotation (pronation/supination) is powered by a high-torque **MG996R** servomotor.
* **Tribology & Materials:** All parts are 3D printed in PLA. For the wrist rotation system, I designed a custom guide to bypass the need for ball bearings (reducing cost and complexity). The PLA-on-PLA interface undergoes a specific surface smoothing treatment to prevent seizing and reduce noise, while mechanically decoupling the rotational force from structural loads.
</div>

<figure class="align-center reveal">
    <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
        <img src="/assets/images/hand2.jpg" alt="CAD Hand view" style="width: 45%; object-fit: cover;">
        <img src="/assets/images/hand.png" alt="CAD forearme view with curvature gradient" style="width: 45%; object-fit: cover;">
    </div>
    <figcaption style="text-align: center; margin-top: 10px;">CAD illustrations : phalanges and forearm's curvature gradient.</figcaption>
</figure>

## Electronic Architecture

<div class="reveal" markdown="1">
The system's "brain" is not a standard Arduino, but an **ESP32**. This strategic choice provides superior processing power and, crucially, native **Bluetooth/Wi-Fi** connectivity, which is essential for wireless communication with the processing PC.

* **Actuator Control:** The ESP32 drives the 6 servomotors via a 16-channel PWM driver (**PCA9685**).
* **Protocol:** Communication between the microcontroller and the driver is handled via the **I2C** bus, optimizing pin usage.
* **Power Supply:** A dedicated external battery ensures power autonomy, isolating the control circuit from the power circuit.
</div>

## Software Pipeline: From Vision to Control

<div class="reveal" markdown="1">
The core of the project lies in the vision-based control algorithm. The Python script running on the host computer follows this logic:

1.  **Acquisition & Tracking:** Leveraging **OpenCV** for video stream management and Google's **MediaPipe** for real-time extraction of 21 hand landmarks.
2.  **Filtering & Normalization:** This is the critical step for robustness. Raw coordinates are filtered to smooth movements (jitter reduction) and normalized. This normalization makes the system invariant to the user's hand distance or orientation relative to the camera.
3.  **Communication:** Angular commands are sent to the ESP32 via serial link (currently migrating to Bluetooth). The system currently operates in open-loop mode.
</div>

## Next Steps: Machine Learning Integration

<div class="reveal" markdown="1">
The CAD phase is complete, and the initial prints have been validated. The "Beta" code already allows for functional positional tracking.
The next major milestone is software-driven: moving beyond simple "mimicry" toward **AI-based gesture recognition**.

I am currently developing a "Guessing" mode based on a classic ML pipeline:
1.  **Data Collection:** Building a custom dataset by recording gesture sequences with intentionally introduced noise.
2.  **Training:** Benchmarking supervised classification algorithms: **K-Nearest Neighbors (KNN)** vs. **Random Forest**. The goal is to conduct a comparative study on latency and accuracy.
3.  **Inference:** The robot will no longer just copy motion but will "understand" the intent (the gesture) to execute a pre-recorded command associated with the predicted pose.

This project synthesizes the full skill set of a mechatronics engineer: from constrained CAD design to the implementation of Artificial Intelligence algorithms.
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
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
  });
</script>
