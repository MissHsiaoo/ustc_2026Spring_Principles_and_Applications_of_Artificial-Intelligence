---
title: 模块详解
nav_order: 4
---

# 课程模块详解

<p class="topic-intro">与<a href="{{ '/course/syllabus/' | relative_url }}">教学大纲</a>页一致；每个细目均有独立资料目录 <code>course-materials/topics/&lt;slug&gt;/</code>。</p>

{% for module in site.data.course.modules %}
<article class="module-detail-block" markdown="0">
  <header class="module-detail-head">
    <p class="course-card-label">模块 {{ forloop.index }}</p>
    <h2>{{ module.title_zh }}</h2>
    <p class="course-card-subtitle">{{ module.title_en }}</p>
    <p class="course-hours">{{ module.hours }} 学时</p>
    {% if module.core_concept_zh %}
    <p class="module-core-concept"><strong>核心思想：</strong>{{ module.core_concept_zh }}</p>
    {% endif %}
    <p>{{ module.summary }}</p>
    <ul class="course-bullet-list">
      {% for point in module.key_points %}
        <li>{{ point }}</li>
      {% endfor %}
    </ul>
  </header>
  {% if module.sections %}
    {% for section in module.sections %}
    <div class="module-detail-section">
      <h3><span class="section-num">{{ section.number }}</span> {{ section.title_zh }}</h3>
      <p class="section-en">{{ section.title_en }}</p>
      <ul class="module-suboutline">
        {% for sub in section.subsections %}
        <li>
          <strong class="sub-code">{{ sub.code }}</strong>
          {{ sub.title_zh }}
          <div class="sub-folder-hint">资料目录：<code>course-materials/topics/{{ sub.slug }}/</code>（同步显示在对应周次的「分主题资料」）</div>
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  {% endif %}
</article>
{% endfor %}

{: .note }
> 增删主题时请同步修改 `_data/course.yml`，并视需要在 `course-materials/topics/` 下新增同名文件夹（已预置与细目一一对应的目录）。
