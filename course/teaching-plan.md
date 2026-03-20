---
title: 教学安排
nav_order: 5
---

# 教学安排

<div class="course-table-wrap">
<table class="course-table schedule-table">
  <thead>
    <tr>
      <th>周次</th>
      <th>主题</th>
      <th>模块</th>
      <th>理论</th>
      <th>实验</th>
      <th>重点</th>
      <th>页面</th>
    </tr>
  </thead>
  <tbody>
    {% for week in site.data.course.weeks %}
      {% assign module = site.data.course.modules | where: "id", week.module_id | first %}
      <tr>
        <td>第 {{ week.week }} 周</td>
        <td>{{ week.title }}</td>
        <td>{{ module.title_zh }}</td>
        <td>{{ week.theory_hours }}</td>
        <td>{{ week.lab_hours }}</td>
        <td>{{ week.focus }}</td>
        <td><a href="{{ '/course/weeks/' | append: week.slug | append: '/' | relative_url }}">进入</a></td>
      </tr>
    {% endfor %}
  </tbody>
</table>
</div>

## 学时汇总

<div class="course-detail-grid">
  <article class="course-detail-card">
    <h2>理论学时</h2>
    <p class="course-hours">{{ site.data.course.course.theory_hours }} 学时</p>
    <p>按 14 周课程组织，每周以 3 学时理论内容为主。</p>
  </article>
  <article class="course-detail-card">
    <h2>实验学时</h2>
    <p class="course-hours">{{ site.data.course.course.lab_hours }} 学时</p>
    <p>从第 3 周开始逐步加入实验或案例实践，共 10 次 2 学时训练。</p>
  </article>
</div>
