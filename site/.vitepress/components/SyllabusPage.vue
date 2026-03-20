<script setup>
import { courseData } from "../generated/course-content.mjs"
import CourseMeta from "./CourseMeta.vue"
import CourseMaterialsTable from "./CourseMaterialsTable.vue"
import OutlineSection from "./OutlineSection.vue"

const navItems = [
  { href: "#course-info", label: "课程信息" },
  { href: "#course-materials", label: "课程资料" },
  { href: "#outline-zh", label: "内容简介（中文）" },
  { href: "#outline-en", label: "内容简介（英文）" },
]
</script>

<template>
  <div class="syllabus-page">
    <aside class="syllabus-sidebar">
      <h1>{{ courseData.course.titleZh }}</h1>
      <p class="syllabus-subtitle">{{ courseData.course.titleEn }}</p>

      <nav class="syllabus-nav">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
    </aside>

    <main class="syllabus-main">
      <section id="course-info" class="syllabus-section">
        <h2>课程信息</h2>
        <CourseMeta />
      </section>

      <CourseMaterialsTable />

      <OutlineSection
        section-id="outline-zh"
        title="内容简介（中文）"
        :modules="courseData.chineseModules"
        core-label="核心思想："
        module-prefix="模块"
      />

      <OutlineSection
        section-id="outline-en"
        title="内容简介（英文）"
        :modules="courseData.englishModules"
        core-label="Core Concept: "
        module-prefix="Module"
      />
    </main>
  </div>
</template>
