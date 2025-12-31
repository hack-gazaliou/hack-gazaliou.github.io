---
title: "Academic Projects"
layout: archive 
permalink: /academic/
author_profile: true
sidebar:
  nav: "docs"
entries_layout: grid 
classes: wide # Utilise toute la largeur de l'écran
---

##  Robotics
{% assign entries = site.categories.robotics %}
{% include documents-collection.html entries=entries type="grid" %}

## Embedded Systems & IoT
{% assign entries = site.categories.embedded %}
{% include documents-collection.html entries=entries type="grid" %}

##  AI & Control Systems
{% assign entries = site.categories.ai %}
{% include documents-collection.html entries=entries type="grid" %}
