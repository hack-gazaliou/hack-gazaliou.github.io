---
title: "Robotic Hand & Computer Vision: Towards Machine Learning Control"
excerpt: "Developing a 6-DOF anthropomorphic hand: from bio-inspired mechanical design to AI-driven control using MediaPipe and ESP32."
categories:
  - personal
  - robotics
tags:
  - Fusion 360
  - ESP32
  - Python
  - OpenCV
  - Machine Learning
header:
  teaser: /assets/images/hand.png
  overlay_image: /assets/images/hand.png
  overlay_filter: 0.5
---

<style>
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
</style>

<span class="badge-progress"><i class="fas fa-tools"></i> Work In Progress</span>

This personal project aims to design and control an anthropomorphic robotic hand prototype. The goal is twofold: to tackle the challenge of compact mechatronic integration (6 Degrees of Freedom) and to explore the potential of computer vision for intuitive control of complex systems.

The prototype's dimensions are based on the biometrics of my own hand, imposing strict constraints on space and actuator integration.

## Mechanical Design (Bio-inspiration & Kinematics)

The mechanical structure draws inspiration from established open-source projects (such as InMoov) while integrating custom solutions to meet my specific constraints.

* **Architecture:** Each finger consists of 3 phalanges. Actuation is remotely located in the forearm using a cable-driven system (tendons) pulled by 5 **MG90S** servomotors. Particular attention was paid to *cable management* to ensure a clean layout and minimize parasitic friction.
* **The 6th Axis:** A dedicated degree of freedom for forearm rotation (pronation/supination) is powered by a high-torque **MG996R** servomotor.
* **Tribology & Materials:** All parts are 3D printed in PLA. For the wrist rotation system, I designed a custom guide to bypass the need for ball bearings (reducing cost and complexity). The PLA-on-PLA interface undergoes a specific surface smoothing treatment to prevent seizing and reduce noise, while mechanically decoupling the rotational force from structural loads.

## Electronic Architecture

The system's "brain" is not a standard Arduino, but an **ESP32**. This strategic choice provides superior processing power and, crucially, native **Bluetooth/Wi-Fi** connectivity, which is essential for wireless communication with the processing PC.

* **Actuator Control:** The ESP32 drives the 6 servomotors via a 16-channel PWM driver (**PCA9685**).
* **Protocol:** Communication between the microcontroller and the driver is handled via the **I2C** bus, optimizing pin usage.
* **Power Supply:** A dedicated external battery ensures power autonomy, isolating the control circuit from the power circuit.

## Software Pipeline: From Vision to Control

The core of the project lies in the vision-based control algorithm. The Python script running on the host computer follows this logic:

1.  **Acquisition & Tracking:** Leveraging **OpenCV** for video stream management and Google's **MediaPipe** for real-time extraction of 21 hand landmarks.
2.  **Filtering & Normalization:** This is the critical step for robustness. Raw coordinates are filtered to smooth movements (jitter reduction) and normalized. This normalization makes the system invariant to the user's hand distance or orientation relative to the camera.
3.  **Communication:** Angular commands are sent to the ESP32 via serial link (currently migrating to Bluetooth). The system currently operates in open-loop mode.

## Next Steps: Machine Learning Integration

The CAD phase is complete, and the initial prints have been validated. The "Beta" code already allows for functional positional tracking.
The next major milestone is software-driven: moving beyond simple "mimicry" toward **AI-based gesture recognition**.

I am currently developing a "Guessing" mode based on a classic ML pipeline:
1.  **Data Collection:** Building a custom dataset by recording gesture sequences with intentionally introduced noise.
2.  **Training:** Benchmarking supervised classification algorithms: **K-Nearest Neighbors (KNN)** vs. **Random Forest**. The goal is to conduct a comparative study on latency and accuracy.
3.  **Inference:** The robot will no longer just copy motion but will "understand" the intent (the gesture) to execute a pre-recorded command associated with the predicted pose.

This project synthesizes the full skill set of a mechatronics engineer: from constrained CAD design to the implementation of Artificial Intelligence algorithms.
