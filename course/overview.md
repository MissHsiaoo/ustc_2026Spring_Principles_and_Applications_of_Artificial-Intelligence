---
title: 课程总览
nav_order: 3
---

{% assign course = site.data.course.course %}

# {{ course.title_zh }}

<p class="course-section-subtitle">{{ course.title_en }}</p>

<div class="course-detail-grid">
  <article class="course-detail-card">
    <h2>基本信息</h2>
    <ul class="course-bullet-list">
      <li><strong>课程编号：</strong>{{ course.code }}</li>
      <li><strong>理论/实验学时：</strong>{{ course.theory_hours }}/{{ course.lab_hours }}</li>
      <li><strong>总学分：</strong>{{ course.credits }}</li>
      <li><strong>评分方式：</strong>{{ course.grading }}</li>
      <li><strong>考核方式：</strong>{{ course.assessment }}</li>
      <li><strong>开课单位：</strong>{{ course.department }}</li>
    </ul>
  </article>
  <article class="course-detail-card">
    <h2>教学安排</h2>
    <ul class="course-bullet-list">
      <li><strong>面向对象：</strong>{{ course.audience }}</li>
      <li><strong>首次开课学期：</strong>{{ course.first_offered }}</li>
      <li><strong>可开课学期：</strong>{{ course.available_terms | join: '、' }}</li>
      <li><strong>先修课程：</strong>{{ course.prerequisites | join: '、' }}</li>
      <li><strong>先修类型：</strong>{{ course.prerequisite_rule }}</li>
      <li><strong>教材：</strong>{{ course.textbook }}；<strong>参考教材：</strong>{{ course.references }}</li>
    </ul>
  </article>
</div>

## 内容简介

{{ course.summary }}

## 教学模块结构

<div class="course-card-grid">
  {% for module in site.data.course.modules %}
    <article class="course-card">
      <p class="course-card-label">Module {{ forloop.index }}</p>
      <h3>{{ module.title_zh }}</h3>
      <p class="course-card-subtitle">{{ module.title_en }}</p>
      <p>{{ module.summary }}</p>
      <p class="course-hours">{{ module.hours }} 学时</p>
    </article>
  {% endfor %}
</div>

## 课程导航

- [教学大纲（中英文细目）]({{ '/course/syllabus/' | relative_url }})
- [模块详解]({{ '/course/modules/' | relative_url }})
- [教学安排]({{ '/course/teaching-plan/' | relative_url }})
- [每周资料]({{ '/course/weeks/' | relative_url }})
