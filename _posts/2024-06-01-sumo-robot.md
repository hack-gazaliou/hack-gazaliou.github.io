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

Back in the second semester of my first year in Mechatronics, we were thrown into the deep end with a classic challenge: **The Sumo Robot Competition**.

The rules were standard: a 500g weight limit, strictly defined dimensions (110x110mm), and a circular arena (Dohyo). The goal? Push the other robot out.

While most teams focused on raw speed or heavy armor, we decided to bet on something else: **Situational Awareness.**

## The Strategy: "Vision" Over Brute Force

We realized early on that most beginner robots are "blind"—they spin randomly until they hit something. We wanted our robot to *hunt*.

Instead of using standard ultrasonic sensors (which suffer from interference when multiple robots are pinging at the same frequency), we integrated **Time-of-Flight (ToF) Laser Distance Sensors (VL53L0X)**.

<figure class="align-center">
  <img src="/assets/images/cad-render1.jpg" alt="CAD assembly" style="width: 80%;">
  <figcaption style="text-align: center;">The final assembly.</figcaption>
</figure>

We used four of these sensors combined with an **I2C Multiplexer**. Why a multiplexer? Because these sensors all have the same fixed I2C address, so we needed a way to talk to them individually. This setup gave us four distinct “cones of vision,” allowing us to track the opponent far more precisely than most other teams.
## Mechanical Design: Torque & Traction

For the chassis, we ignored wheels and went straight for **tracks (Pololu 22T)**.

In Sumo, traction is everything. If you lose grip, you lose the pushing match. We designed the robot to be low to the ground (lower center of gravity = harder to flip) and prioritized torque over linear speed.

<figure class="align-center">
  <img src="/assets/images/rampe1.jpg" alt="Raised ramps view" style="width: 80%;">
  <figcaption style="text-align: center;">View with the ramps raised. Note the sensors placed to maximize field of view.</figcaption>
</figure>

We also implemented a **bidirectional attack strategy**. Turning 180° takes precious time. To counter this, we designed the robot with ramps on *both* the front and back. No matter where the enemy appeared, we were ready to push.

## The Intelligence (Code & Logic)

The brain of the operation was an **Arduino Nano**. The logic loop was simple but aggressive:

1.  **Scan:** Cycle through the 4 ToF sensors via the Multiplexer.
2.  **Hunt:** If an enemy is detected, turn immediately toward the sensor with the strongest signal.
3.  **Kill Switch:** We placed microswitches behind the ramps. The moment physical contact is made, the PID logic is bypassed, and the motors go to **100% PWM forward (or backward)** to shove the opponent out.
4.  **Survival:** Four **CNY70 IR sensors** point at the floor. If they see a white line (the arena edge), the robot performs an emergency "Reflex Reverse" maneuver.

<figure class="align-center">
  <img src="/assets/images/schema.png" alt="Electronic schematics" style="width: 90%;">
  <figcaption style="text-align: center;">System architecture: Arduino Nano supervising power, vision, and locomotion.</figcaption>
</figure>

## The Result

The integration was a massive learning curve—managing power budgets (calculating regulator heat dissipation for the servos), debouncing mechanical switches, and handling I2C communication errors.

In the final tournament, out of 6 teams, we secured **2nd place**.

At the time, we considered the final won, but a brief arbitration call about the ring border came up. That’s racing (or sumo-ing).

<figure class="half align-center">
    <a href="/assets/images/quart.jpg"><img src="/assets/images/quart.jpg" alt="Robot Front View"></a>
    <a href="/assets/images/huitieme.jpg"><img src="/assets/images/huitieme.jpg" alt="Robot Side View"></a>
    <figcaption style="text-align: center;">From concept sketch to reality.</figcaption>
</figure>

Looking back, the wiring is definitely chaotic—a classic 'student project' mess—but considering it was our first integration, I’m willing to forgive our past selves.

This project was my first real taste of the "Mechatronic Trinity": mechanical constraints forcing electronic choices, which in turn dictate the software logic. Despite its simplicity, this robot taught me just how crucial sensor reliability is.
