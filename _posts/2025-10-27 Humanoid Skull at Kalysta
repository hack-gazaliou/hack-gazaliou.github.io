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
  teaser: /assets/images/j.jpg
  overlay_image: /assets/images/j.jpg
  overlay_filter: 0.5
---

Last summer, I had the opportunity to join **Kalysta Actuation**, a Deeptech startup specializing in high-performance electro-hydraulic actuators. This internship marked the end of my first year of specialization in Mechatronics.

The mission? **Upgrade the head of an existing humanoid robot.**

This wasn't just a typical student assignment. **Working daily alongside the CTO and a team of PhD researchers**, I was immediately thrust into the realities of industrial R&D: drastic space constraints, mass optimization, and the necessity to justify every design choice through rigorous preliminary study. Being immersed in such a high-level technical environment so early in my studies was an incredibly rich learning experience.

## Phase 1: The State of the Art (Don't Reinvent the Wheel)

Before even opening CAD software, my first task was to conduct a comprehensive State of the Art (SOTA) review on mouth mechanisms for humanoid robots. In R&D, you don't design blindly; you analyze what exists to identify the solution best suited to the project's *specific* needs.

I categorized existing solutions into three main families:
1.  **Rigid Mechanisms (1 DOF):** Simple, robust, actuated by a single motor (e.g., InMoov).
2.  **Hybrid Mechanisms (Rigid + Silicone):** More expressive, but mechanically complex.
3.  **Cable Systems + Silicone Skin:** Highly realistic (used for precise *lip-sync*), but require numerous actuators and are very bulky.

<figure class="align-center">
  <img src="/assets/images/comparison.png" alt="Comparison of mouth mechanisms">
  <figcaption>Comparative analysis of the different mechanism typologies studied.</figcaption>
</figure>

**The Verdict:**
The goal of Kalysta's robot was to demonstrate the raw power of their actuators, not to perform emotional social interaction. The dominant constraints were **weight and footprint**.
Consequently, I steered the choice toward a **compact rigid mechanical solution**, freeing up critical volume for electronics while ensuring structural robustness.

## Phase 2: Complex Design & Modeling (CATIA)

This is where the "real" design work began. The robot's previous skull was derived from a 3D scan of a human head. While visually realistic, it was a mechanical integration nightmare: no flat surfaces for mounting PCBs, irregular internal volumes, and impossible maintenance.

My role was to design a new skull "from scratch" that respected a humanoid aesthetic while acting as a functional **technical chassis**.

### The Challenge of Organic Surfaces
I worked with **CATIA** (specifically the *Generative Shape Design* and *FreeStyle* modules). For someone used to classical parametric design (simple geometric shapes), shifting to surface modeling was a significant technical challenge.

<figure class="align-center">
  <img src="/assets/images/catia.png" alt="Surface design in CATIA">
  <figcaption>Using 3D curves to define the skull's topology.</figcaption>
</figure>

I had to manage:
* **NURBS** and surface continuity (C0, C1, C2) to avoid topological errors that would otherwise prevent the software from generating a closed, valid volume.
* The segmentation of the skull into multiple parts to facilitate printing and assembly.
* The integration of threaded inserts to make the entire structure modular and disassemblable.

<figure class="half align-center">
    <a href="/assets/images/e.jpg"><img src="/assets/images/e.jpg" alt="Skull Front View"></a>
    <a href="/assets/images/f.jpg"><img src="/assets/images/f.jpg" alt="Isometric View with components"></a>
    <a href="/assets/images/interior.png"><img src="/assets/images/interior.png" alt="Isometric View with components"></a>
    <figcaption>The final result: a compromise between aesthetics and functionality.</figcaption>
</figure>

## Key Takeaway: The Reality of Mechatronics

Beyond improving my skills in CATIA, this internship taught me a fundamental lesson about my future profession.

To design this skull, I had to work in constant interaction with the electronics team. Every millimeter saved on the mechanics allowed for better motor driver placement or reduced cable length. I also had to precisely calculate the center of mass to avoid unbalancing the neck motors.

**This is the "Mechatronic Trinity":** Mechanics impose constraints on electronics, which dictates software logic, and vice versa.

Collaborating closely with the CTO and PhD students at this stage of my education gave me a rare insight into these interdependencies. Even though I know now that I don't want to do *only* pure mechanical design in the future, this experience was invaluable. Today, when I code or design a PCB, I have a much deeper understanding of the physical constraints that will surround my system.

---

### Read the Full Report

For technical details regarding the State of the Art study and exploded views of the final design, you can consult my full internship report below.

<div style="text-align: center; margin-top: 20px;">
  <a href="/assets/docs/Rapport.pdf" class="btn btn--primary btn--large">
    <i class="fas fa-file-pdf"></i> Download Report (PDF - French)
  </a>
</div>
