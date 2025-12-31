---
title: "Personal Projects"
layout: archive
permalink: /personal/
author_profile: true
sidebar:
  nav: "docs"
entries_layout: grid # Active l'affichage en "cases" comme tu le veux
classes: wide
---

## 🛠️ Robotics & Prototypes
{% assign entries = site.categories.personal | where_exp: "item", "item.tags contains 'robotics'" %}
{% include documents-collection.html entries=entries type="grid" %}

## 🧠 ML & Algorithms
{% assign entries = site.categories.personal | where_exp: "item", "item.tags contains 'ai'" %}
{% include documents-collection.html entries=entries type="grid" %}

