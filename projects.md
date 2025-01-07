---
layout: list
title: Projects
permalink: /projects/
---

Here are some of the projects I’ve worked on:

<div class="grid-container">
  {% for project in site.projects %}
  <div class="project-card">
    <a href="{{ project.url }}">
      <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </a>
  </div>
  {% endfor %}
</div>