---
title: "Projects"
layout: archive
permalink: /projects/
author_profile: true
classes: wide
---

<div class="filter-container">
  <button class="filter-btn active" onclick="filterProjects('all')">All</button>
  <button class="filter-btn" onclick="filterProjects('academic')">Academic</button>
  <button class="filter-btn" onclick="filterProjects('personal')">Personal</button>
</div>

<div class="grid__wrapper" id="projects-grid">
  
  {% for post in site.posts %}
  <div class="grid__item project-card" data-category="{{ post.categories | join: ' ' }}">
    
    <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
      
      {% if post.header.teaser %}
        <div class="archive__item-teaser">
          <img src="{{ post.header.teaser | relative_url }}" alt="">
        </div>
      {% endif %}

      <h2 class="archive__item-title" itemprop="headline">
        <a href="{{ post.url | relative_url }}" rel="permalink">{{ post.title }}</a>
      </h2>

      <div class="archive__item-excerpt" itemprop="description">
        {{ post.excerpt | markdownify | strip_html | truncate: 160 }}
      </div>
      
    </article>
  </div>
  {% endfor %}

</div>

<script>
  function filterProjects(category) {
    // 1. Gérer les boutons (Style actif)
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.innerText.toLowerCase() === category || (category === 'all' && btn.innerText === 'All')) {
        btn.classList.add('active');
      }
    });

    // 2. Gérer l'affichage des cartes
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
      const projectCats = project.getAttribute('data-category');
      
      // Si "All" est cliqué OU si la catégorie du projet contient le mot clé
      if (category === 'all' || projectCats.includes(category)) {
        project.classList.remove('hidden');
        // Petit effet d'animation CSS
        project.style.opacity = '0';
        setTimeout(() => project.style.opacity = '1', 50);
      } else {
        project.classList.add('hidden');
      }
    });
  }
</script>

<style>
  .grid__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px; /* Compensation des marges */
  }
  .grid__item {
    width: 32%; /* 3 colonnes */
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
  }
  /* Responsive : 2 colonnes sur tablette, 1 sur mobile */
  @media (max-width: 1024px) { .grid__item { width: 49%; } }
  @media (max-width: 600px) { .grid__item { width: 100%; } }
</style>
