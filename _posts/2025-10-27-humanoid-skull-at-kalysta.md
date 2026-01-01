---
title: "R&D Immersion: Designing a Humanoid Skull at Kalysta"
excerpt: "A deep dive into my deeptech internship: from State-of-the-Art analysis to complex surface modeling in CATIA."
categories:
  - academic
  - mechatronics
tags:
  - R&D
  - CATIA
  - Mechanical Design
  - Humanoid Robotics
header:
  teaser: /assets/images/j.jpeg
  overlay_image: /assets/images/j.jpeg
  overlay_filter: 0.5
---

<style>
  /* 1. MISE EN PAGE PC LARGE */
  @media (min-width: 1280px) {
    .page__inner-wrap {
      max-width: 95% !important; 
    }
    .page__content {
      max-width: none !important; 
      width: 75% !important;
      float: right !important;
    }
    .sidebar {
      width: 20% !important;
      float: left !important;
    }
  }

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
Last summer, I had the opportunity to join **Kalysta Actuation**, a Deeptech startup specializing in high-performance electro-hydraulic actuators. This internship marked the end of my first year of specialization in Mechatronics.

The mission? **Upgrade the head of an existing humanoid robot.**

This wasn't just a typical student assignment. **Working daily alongside the CTO and a team of PhD researchers**, I was immediately thrust into the realities of industrial R&D: drastic space constraints, mass optimization, and the necessity to justify every design choice through rigorous preliminary study. Being immersed in such a high-level technical environment so early in my studies was an incredibly rich learning experience.
</div>

## Phase 1: The State of the Art (Don't Reinvent the Wheel)

<div class="reveal" markdown="1">
Before even opening CAD software, my first task was to conduct a comprehensive State of the Art (SOTA) review on mouth mechanisms for humanoid robots. In R&D, you don't design blindly; you analyze what exists to identify the solution best suited to the project's *specific* needs.

I categorized existing solutions into three main families:
1.  **Rigid Mechanisms (1 DOF):** Simple, robust, actuated by a single motor (e.g., InMoov).
2.  **Hybrid Mechanisms (Rigid + Silicone):** More expressive, but mechanically complex.
3.  **Cable Systems + Silicone Skin:** Highly realistic (used for precise *lip-sync*), but require numerous actuators and are very bulky.
</div>

<figure class="align-center reveal">
  <img src="/assets/images/comparison.png" alt="Comparison of mouth mechanisms" style="display: block; margin-left: auto; margin-right: auto; width: 80%;">
  <figcaption style="text-align: center;">Comparative analysis of the different mechanism typologies studied.</figcaption>
</figure>

<div class="reveal" markdown="1">
**The Verdict:**
The goal of Kalysta's robot was to demonstrate the raw power of their actuators, not to perform emotional social interaction. The dominant constraints were **weight and footprint**.
Consequently, I steered the choice toward a **compact rigid mechanical solution**, freeing up critical volume for electronics while ensuring structural robustness.
</div>

## Phase 2: Complex Design & Modeling (CATIA)

<div class="reveal" markdown="1">
This is where the "real" design work began. The robot's previous skull was derived from a 3D scan of a human head. While visually realistic, it was a mechanical integration nightmare: no flat surfaces for mounting PCBs, irregular internal volumes, and impossible maintenance.

My role was to design a new skull "from scratch" that respected a humanoid aesthetic while acting as a functional **technical chassis**.
</div>

### The Challenge of Organic Surfaces

<div class="reveal" markdown="1">
I worked with **CATIA** (specifically the *Generative Shape Design* and *FreeStyle* modules). For someone used to classical parametric design (simple geometric shapes), shifting to surface modeling was a significant technical challenge.
</div>

<figure class="align-center reveal">
  <img src="/assets/images/catia.png" alt="Surface design in CATIA" style="display: block; margin-left: auto; margin-right: auto; width: 80%;">
  <figcaption style="text-align: center;">Using 3D curves to define the skull's topology.</figcaption>
</figure>

<div class="reveal" markdown="1">
I had to manage:
* **NURBS** and surface continuity (C0, C1, C2) to avoid topological errors that would otherwise prevent the software from generating a closed, valid volume.
* The segmentation of the skull into multiple parts to facilitate printing and assembly.
* The integration of threaded inserts to make the entire structure modular and disassemblable.
</div>

<figure class="align-center reveal">
    <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
        <a href="/assets/images/e.jpg" style="width: 30%; height: 250px; display: block; overflow: hidden;">
            <img src="/assets/images/e.jpeg" alt="Skull Front View" style="width: 100%; height: 100%; object-fit: cover;">
        </a>
        <a href="/assets/images/f.jpg" style="width: 30%; height: 250px; display: block; overflow: hidden;">
            <img src="/assets/images/f.jpeg" alt="Isometric View" style="width: 100%; height: 100%; object-fit: cover;">
        </a>
        <a href="/assets/images/interior.png" style="width: 30%; height: 250px; display: block; overflow: hidden;">
            <img src="/assets/images/interior.png" alt="Interior View" style="width: 100%; height: 100%; object-fit: cover;">
        </a>
    </div>
    <figcaption style="text-align: center; margin-top: 10px;">The final result: a compromise between aesthetics and functionality.</figcaption>
</figure>

## Key Takeaway: The Reality of Mechatronics

<div class="reveal" markdown="1">
Beyond improving my skills in CATIA, this internship taught me a fundamental lesson about my future profession.

To design this skull, I had to work in constant interaction with the electronics team. Every millimeter saved on the mechanics allowed for better motor driver placement or reduced cable length. I also had to precisely calculate the center of mass to avoid unbalancing the neck motors.

**This is the "Mechatronic Trinity":** Mechanics impose constraints on electronics, which dictates software logic, and vice versa.

Collaborating closely with the CTO and PhD students at this stage of my education gave me a rare insight into these interdependencies. Even though I know now that I don't want to do *only* pure mechanical design in the future, this experience was invaluable. Today, when I code or design a PCB, I have a much deeper understanding of the physical constraints that will surround my system.
</div>

---

### Read the Full Report

<div class="reveal" style="text-align: center; margin-top: 20px;">
  <a href="/assets/docs/Rapport.pdf" class="btn btn--primary btn--large">
    <i class="fas fa-file-pdf"></i> Download Report (PDF - French)
  </a>
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
