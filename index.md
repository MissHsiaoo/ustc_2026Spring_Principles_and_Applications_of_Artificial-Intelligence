---
title: 课程首页
layout: home
nav_order: 1
description: "人工智能原理与应用课程网站：课程信息、模块结构、教学安排与每周资料下载。"
permalink: /
---

{% assign course = site.data.course.course %}

<section class="course-hero">
  <p class="course-kicker">Graduate Course Site</p>
  <h1>{{ course.title_zh }}</h1>
  <p class="course-subtitle">{{ course.title_en }}</p>
  <p class="course-lead">{{ course.summary }}</p>
  <div class="course-button-row">
    <a class="btn btn-primary" href="{{ '/course/syllabus/' | relative_url }}">教学大纲</a>
    <a class="btn" href="{{ '/course/overview/' | relative_url }}">课程总览</a>
    <a class="btn" href="{{ '/course/teaching-plan/' | relative_url }}">教学安排</a>
    <a class="btn" href="{{ '/course/weeks/' | relative_url }}">每周资料</a>
  </div>
</section>

<section class="course-meta-grid">
  <article class="course-meta-card">
    <h2>课程信息</h2>
    <ul class="course-meta-list">
      <li><strong>课程编号：</strong>{{ course.code | default: '待补充' }}</li>
      <li><strong>学时学分：</strong>{{ course.theory_hours }}/{{ course.lab_hours }} 学时，{{ course.credits }} 学分</li>
      <li><strong>考核方式：</strong>{{ course.assessment }}</li>
      <li><strong>开课对象：</strong>{{ course.audience }}</li>
      <li><strong>开课学期：</strong>{{ course.first_offered }}</li>
      <li><strong>开课单位：</strong>{{ course.department }}</li>
    </ul>
  </article>
  <article class="course-meta-card">
    <h2>学习入口</h2>
    <ul class="course-meta-list">
      <li><a href="{{ '/course/syllabus/' | relative_url }}">教学大纲（中英文细目）</a></li>
      <li><a href="{{ '/course/overview/' | relative_url }}">查看课程总览</a></li>
      <li><a href="{{ '/course/modules/' | relative_url }}">查看 4 个教学模块</a></li>
      <li><a href="{{ '/course/teaching-plan/' | relative_url }}">查看 14 周教学安排</a></li>
      <li><a href="{{ '/course/weeks/' | relative_url }}">按周进入资料页面</a></li>
      <li><a href="{{ '/course/resources/' | relative_url }}">查看资料维护规范</a></li>
    </ul>
  </article>
</section>

## 课程模块

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

## 每周导航

{% include course/week-card-grid.html %}

{: .note }
> 每周页面包含两类资料入口：**分主题** `course-materials/topics/<slug>/`（与大纲细目一一对应，适合作业与小节资源）与 **本周总** `course-materials/week-xx/`（整周通用材料）。将文件放入对应目录后，列表会自动更新。
