---
title: "First Steps in Sensor Fusion: Giving Sight to a Sumo Robot"
excerpt: "A retrospective on my first mechatronics project: using Time-of-Flight sensors to prioritize situational awareness over brute force."
categories:
  - academic
  - robotics
tags:
  - Arduino
  - C++
  - PCB Design
  - CAD
header:
  teaser: /assets/images/quart.jpg
  overlay_image: /assets/images/quart.jpg
  overlay_filter: 0.5
---

<style>
  /* On cible les écrans larges */
  @media (min-width: 1280px) {
    
    /* 1. On élargit le conteneur global */
    /* On passe à une largeur max plus grande (ex: 1600px) au lieu de bloquer */
    .page__inner-wrap {
      max-width: 1600px !important; 
      padding-left: 2em;
      padding-right: 2em;
    }

    /* 2. On débride simplement le texte */
    /* On NE TOUCHE PAS aux largeurs (%) ni aux floats. */
    /* On dit juste au texte : "Ne t'arrête pas à 900px, prends toute la place dispo" */
    .page__content {
      max-width: none !important; 
    }
  }
</style>

<style>
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
Back in the second semester of my first year in Mechatronics, we were thrown into the deep end with a classic challenge: **The Sumo Robot Competition**.

The rules were standard: a 500g weight limit, strictly defined dimensions (110x110mm), and a circular arena (Dohyo). The goal ? Push the other robot out.

While most teams focused on raw speed or heavy armor, we decided to bet on something else: **Situational Awareness.**
</div>

## The Strategy: "Vision" Over Brute Force

<div class="reveal" markdown="1">
We realized early on that most beginner robots are "blind"—they spin randomly until they hit something. We wanted our robot to *hunt*.

Instead of using standard ultrasonic sensors (which suffer from interference when multiple robots are pinging at the same frequency), we integrated **Time-of-Flight (ToF) Laser Distance Sensors (VL53L0X)**.
</div>

<figure class="align-center reveal">
  <img src="/assets/images/cad-render1.jpg" alt="CAD assembly" style="display: block; margin-left: auto; margin-right: auto; width: 80%;">
  <figcaption style="text-align: center;">The final assembly.</figcaption>
</figure>

<div class="reveal" markdown="1">
We used four of these sensors combined with an **I2C Multiplexer**. Why a multiplexer? Because these sensors all have the same fixed I2C address, so we needed a way to talk to them individually. This setup gave us four distinct “cones of vision,” allowing us to track the opponent far more precisely than most other teams.
</div>

## Mechanical Design: Torque & Traction

<div class="reveal" markdown="1">
For the chassis, we ignored wheels and went straight for **tracks (Pololu 22T)**.

In Sumo, traction is everything. If you lose grip, you lose the pushing match. We designed the robot to be low to the ground (lower center of gravity = harder to flip) and prioritized torque over linear speed.
</div>

<figure class="align-center reveal">
  <img src="/assets/images/rampe1.jpg" alt="Raised ramps view" style="display: block; margin-left: auto; margin-right: auto; width: 80%;">
  <figcaption style="text-align: center;">View with the ramps raised. Note the sensors placed to maximize field of view.</figcaption>
</figure>

<div class="reveal" markdown="1">
We also implemented a **bidirectional attack strategy**. Turning 180° takes precious time. To counter this, we designed the robot with ramps on *both* the front and back. No matter where the enemy appeared, we were ready to push.
</div>

## The Intelligence (Code & Logic)

<div class="reveal" markdown="1">
The brain of the operation was an **Arduino Nano**. The logic loop was simple but aggressive:

1.  **Scan:** Cycle through the 4 ToF sensors via the Multiplexer.
2.  **Hunt:** If an enemy is detected, turn immediately toward the sensor with the strongest signal.
3.  **Kill Switch:** We placed microswitches behind the ramps. The moment physical contact is made, the PID logic is bypassed, and the motors go to **100% PWM forward (or backward)** to shove the opponent out.
4.  **Survival:** Four **CNY70 IR sensors** point at the floor. If they see a white line (the arena edge), the robot performs an emergency "Reflex Reverse" maneuver.
</div>

<figure class="align-center reveal">
  <img src="/assets/images/schema.png" alt="Electronic schematics" style="display: block; margin-left: auto; margin-right: auto; width: 90%;">
  <figcaption style="text-align: center;">System architecture: Arduino Nano supervising power, vision, and locomotion.</figcaption>
</figure>

## The Result

<div class="reveal" markdown="1">
The integration was a massive learning curve—managing power budgets (calculating regulator heat dissipation for the servos), debouncing mechanical switches, and handling I2C communication errors.

In the final tournament, out of 6 teams, we secured **2nd place**.

At the time, we considered the final won, but a brief arbitration call about the ring border came up. That’s racing (or sumo-ing).
</div>

<figure class="align-center reveal">
    <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
        <a href="/assets/images/quart.jpg" style="width: 45%; height: 300px; display: block; overflow: hidden;">
            <img src="/assets/images/quart.jpg" alt="Robot Front View" style="width: 100%; height: 100%; object-fit: cover;">
        </a>
        <a href="/assets/images/huitieme.jpg" style="width: 45%; height: 300px; display: block; overflow: hidden;">
            <img src="/assets/images/huitieme.jpg" alt="Robot Side View" style="width: 100%; height: 100%; object-fit: cover;">
        </a>
    </div>
    <figcaption style="text-align: center; margin-top: 10px;">From concept sketch to reality.</figcaption>
</figure>

<div class="reveal" markdown="1">
Looking back, the wiring is definitely chaotic—a classic 'student project' mess—but considering it was our first integration, I’m willing to forgive our past selves.

This project was my first real taste of the "Mechatronic Trinity": mechanical constraints forcing electronic choices, which in turn dictate the software logic. Despite its simplicity, this robot taught me just how crucial sensor reliability is.
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
</script>---
title: "First Steps in Sensor Fusion: Giving Sight to a Sumo Robot"
excerpt: "A retrospective on my first mechatronics project: using Time-of-Flight sensors to prioritize situational awareness over brute force."
categories:
  - academic
  - robotics
tags:
  - Arduino
  - C++
  - PCB Design
  - CAD
header:
  teaser: /assets/images/quart.jpg
  overlay_image: /assets/images/quart.jpg
  overlay_filter: 0.5
---

<style>
  /* On cible les écrans larges */
  @media (min-width: 1280px) {
    
    /* 1. On élargit le conteneur global */
    /* On passe à une largeur max plus grande (ex: 1600px) au lieu de bloquer */
    .page__inner-wrap {
      max-width: 1600px !important; 
      padding-left: 2em;
      padding-right: 2em;
    }

    /* 2. On débride simplement le texte */
    /* On NE TOUCHE PAS aux largeurs (%) ni aux floats. */
    /* On dit juste au texte : "Ne t'arrête pas à 900px, prends toute la place dispo" */
    .page__content {
      max-width: none !important; 
    }
  }
</style>

<style>
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
Back in the second semester of my first year in Mechatronics, we were thrown into the deep end with a classic challenge: **The Sumo Robot Competition**.

The rules were standard: a 500g weight limit, strictly defined dimensions (110x110mm), and a circular arena (Dohyo). The goal ? Push the other robot out.

While most teams focused on raw speed or heavy armor, we decided to bet on something else: **Situational Awareness.**
</div>

## The Strategy: "Vision" Over Brute Force

<div class="reveal" markdown="1">
We realized early on that most beginner robots are "blind"—they spin randomly until they hit something. We wanted our robot to *hunt*.

Instead of using standard ultrasonic sensors (which suffer from interference when multiple robots are pinging at the same frequency), we integrated **Time-of-Flight (ToF) Laser Distance Sensors (VL53L0X)**.
</div>

<figure class="align-center reveal">
  <img src="/assets/images/cad-render1.jpg" alt="CAD assembly" style="display: block; margin-left: auto; margin-right: auto; width: 80%;">
  <figcaption style="text-align: center;">The final assembly.</figcaption>
</figure>

<div class="reveal" markdown="1">
We used four of these sensors combined with an **I2C Multiplexer**. Why a multiplexer? Because these sensors all have the same fixed I2C address, so we needed a way to talk to them individually. This setup gave us four distinct “cones of vision,” allowing us to track the opponent far more precisely than most other teams.
</div>

## Mechanical Design: Torque & Traction

<div class="reveal" markdown="1">
For the chassis, we ignored wheels and went straight for **tracks (Pololu 22T)**.

In Sumo, traction is everything. If you lose grip, you lose the pushing match. We designed the robot to be low to the ground (lower center of gravity = harder to flip) and prioritized torque over linear speed.
</div>

<figure class="align-center reveal">
  <img src="/assets/images/rampe1.jpg" alt="Raised ramps view" style="display: block; margin-left: auto; margin-right: auto; width: 80%;">
  <figcaption style="text-align: center;">View with the ramps raised. Note the sensors placed to maximize field of view.</figcaption>
</figure>

<div class="reveal" markdown="1">
We also implemented a **bidirectional attack strategy**. Turning 180° takes precious time. To counter this, we designed the robot with ramps on *both* the front and back. No matter where the enemy appeared, we were ready to push.
</div>

## The Intelligence (Code & Logic)

<div class="reveal" markdown="1">
The brain of the operation was an **Arduino Nano**. The logic loop was simple but aggressive:

1.  **Scan:** Cycle through the 4 ToF sensors via the Multiplexer.
2.  **Hunt:** If an enemy is detected, turn immediately toward the sensor with the strongest signal.
3.  **Kill Switch:** We placed microswitches behind the ramps. The moment physical contact is made, the PID logic is bypassed, and the motors go to **100% PWM forward (or backward)** to shove the opponent out.
4.  **Survival:** Four **CNY70 IR sensors** point at the floor. If they see a white line (the arena edge), the robot performs an emergency "Reflex Reverse" maneuver.
</div>

<figure class="align-center reveal">
  <img src="/assets/images/schema.png" alt="Electronic schematics" style="display: block; margin-left: auto; margin-right: auto; width: 90%;">
  <figcaption style="text-align: center;">System architecture: Arduino Nano supervising power, vision, and locomotion.</figcaption>
</figure>

## The Result

<div class="reveal" markdown="1">
The integration was a massive learning curve—managing power budgets (calculating regulator heat dissipation for the servos), debouncing mechanical switches, and handling I2C communication errors.

In the final tournament, out of 6 teams, we secured **2nd place**.

At the time, we considered the final won, but a brief arbitration call about the ring border came up. That’s racing (or sumo-ing).
</div>

<figure class="align-center reveal">
    <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
        <a href="/assets/images/quart.jpg" style="width: 45%; height: 300px; display: block; overflow: hidden;">
            <img src="/assets/images/quart.jpg" alt="Robot Front View" style="width: 100%; height: 100%; object-fit: cover;">
        </a>
        <a href="/assets/images/huitieme.jpg" style="width: 45%; height: 300px; display: block; overflow: hidden;">
            <img src="/assets/images/huitieme.jpg" alt="Robot Side View" style="width: 100%; height: 100%; object-fit: cover;">
        </a>
    </div>
    <figcaption style="text-align: center; margin-top: 10px;">From concept sketch to reality.</figcaption>
</figure>

<div class="reveal" markdown="1">
Looking back, the wiring is definitely chaotic—a classic 'student project' mess—but considering it was our first integration, I’m willing to forgive our past selves.

This project was my first real taste of the "Mechatronic Trinity": mechanical constraints forcing electronic choices, which in turn dictate the software logic. Despite its simplicity, this robot taught me just how crucial sensor reliability is.
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
