---
title: 教学大纲
nav_order: 2
---

{% assign c = site.data.course.course %}

# 教学大纲

<p class="course-section-subtitle">与研究生教务系统提交版本对齐的中英文目录；站点展示以 <code>_data/course.yml</code> 为准。</p>

<section class="syllabus-meta-strip">
  <div><span class="syllabus-meta-label">理论 / 实验学时</span><span class="syllabus-meta-value">{{ c.theory_hours }} / {{ c.lab_hours }}</span></div>
  <div><span class="syllabus-meta-label">考核方式</span><span class="syllabus-meta-value">{{ c.assessment }}</span></div>
  <div><span class="syllabus-meta-label">先修类型</span><span class="syllabus-meta-value">{{ c.prerequisite_rule }}</span></div>
  <div><span class="syllabus-meta-label">面向对象</span><span class="syllabus-meta-value">{{ c.audience }}</span></div>
</section>

{% if c.summary_body_zh %}

{{ c.summary_body_zh }}

{% endif %}

## 模块与细目（中文）

{% for module in site.data.course.modules %}
<article class="syllabus-module" markdown="0">
  <header class="syllabus-module-head">
    <p class="syllabus-mod-label">模块 {{ forloop.index }} · {{ module.hours }} 学时</p>
    <h2 class="syllabus-mod-title">{{ module.title_zh }}</h2>
    {% if module.core_concept_zh %}
    <p class="syllabus-core"><strong>核心思想：</strong>{{ module.core_concept_zh }}</p>
    {% endif %}
  </header>
  {% if module.sections %}
    {% for section in module.sections %}
    <div class="syllabus-section-block">
      <h3 class="syllabus-section-title"><span class="syllabus-sec-num">{{ section.number }}</span> {{ section.title_zh }}</h3>
      <ul class="syllabus-sub-list">
        {% for sub in section.subsections %}
        <li>
          <span class="syllabus-sub-code">{{ sub.code }}</span>
          {{ sub.title_zh }}
          <span class="syllabus-sub-folder">（<code>topics/{{ sub.slug }}/</code>）</span>
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  {% endif %}
</article>
{% endfor %}

## Module outline (English)

{% for module in site.data.course.modules %}
<article class="syllabus-module" markdown="0">
  <header class="syllabus-module-head">
    <p class="syllabus-mod-label">Module {{ forloop.index }} · {{ module.hours }} hours</p>
    <h2 class="syllabus-mod-title">{{ module.title_en }}</h2>
    {% if module.core_concept_en %}
    <p class="syllabus-core"><strong>Core concept:</strong> {{ module.core_concept_en }}</p>
    {% endif %}
  </header>
  {% if module.sections %}
    {% for section in module.sections %}
    <div class="syllabus-section-block">
      <h3 class="syllabus-section-title"><span class="syllabus-sec-num">{{ section.number }}</span> {{ section.title_en }}</h3>
      <ul class="syllabus-sub-list">
        {% for sub in section.subsections %}
        <li>
          <span class="syllabus-sub-code">{{ sub.code }}</span>
          {{ sub.title_en }}
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  {% endif %}
</article>
{% endfor %}

[返回课程总览]({{ '/course/overview/' | relative_url }}) · [教学安排]({{ '/course/teaching-plan/' | relative_url }}) · [每周资料]({{ '/course/weeks/' | relative_url }})
