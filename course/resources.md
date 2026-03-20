---
title: 资料维护说明
nav_order: 7
---

# 资料维护说明

站点按「课程数据 → 周页面 / 大纲页模板 → 资料目录」组织。大纲、模块树与分主题文件夹的对应关系全部由 `_data/course.yml` 驱动。

## 目录结构

<div class="course-maintain-box">
  <p><code>_data/course.yml</code>：课程信息、模块与细目（中英）、周次安排、每细目对应的 <code>slug</code> 与上课周次。</p>
  <p><code>course-materials/topics/&lt;slug&gt;/</code>：与大纲**一条条对应**的主题文件夹；课件、作业说明、阅读材料可按小节归档。</p>
  <p><code>course-materials/week-xx/</code>：整周通用资料（如实训总要求、周报应读），出现在周页面「本周总资料」。</p>
  <p><code>course/weeks/week-xx/</code>：Jekyll 每周页面入口。</p>
</div>

## 推荐上传规范

**按主题（推荐用于作业与小节资源）**

- `course-materials/topics/m3-2-2-transformer/assignment.pdf`
- `course-materials/topics/m4-1-2-life-applications/readings.md`

**按周（适用整周通用材料）**

- 课件 `slides-week-xx.pdf`
- 实验说明 `lab-week-xx.pdf` 或 `lab-week-xx.md`
- 代码包 `code-week-xx.zip`

## 日常维护流程

1. 调整大纲或周次：修改 `_data/course.yml`，并在 `course-materials/topics/` 下增删与 `slug` 一致的文件夹。
2. 上传资料：放入对应 `topics/<slug>/` 或 `week-xx/`；页面上的列表会自动刷新。
3. 运行 VitePress 前执行 <code>npm run docs:prepare</code>，以便同步 `site/public/course-materials/`。

{: .note }
> 教务要求的中英文「内容简介」请以 <a href="{{ '/course/syllabus/' | relative_url }}">教学大纲</a> 页的渲染结果为准，与 `course.yml` 同步维护。
