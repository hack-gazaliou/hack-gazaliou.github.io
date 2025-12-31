---
title: "All Projects"
layout: archive
permalink: /projects/
author_profile: true
sidebar:
  nav: "docs"
entries_layout: grid
classes: wide
---

Here is a complete overview of my work, ranging from academic coursework to personal prototypes.

{% assign entries = site.posts %}
{% include documents-collection.html entries=entries type="grid" %}
