<script setup>
import { computed } from "vue"
import { courseData } from "../generated/course-content.mjs"

const rows = computed(() =>
  [
    ["课程名称（中文）", courseData.course.titleZh],
    ["课程名称（英文）", courseData.course.titleEn],
    ["理论学时/实验学时", courseData.course.theoryLabHours],
    ["先修课程", courseData.course.prerequisites],
    ["评分制", courseData.course.grading],
    ["先修类型", courseData.course.prerequisiteRule],
    ["考核方式", courseData.course.assessment],
    ["开课单位", courseData.course.department],
    ["面向对象", courseData.course.audience],
    ["首次开课学期", courseData.course.firstOffered],
    ["可开课学期", courseData.course.availableTerms],
    ["指定教材", courseData.course.specifiedTextbook],
    ["参考教材", courseData.course.referenceTextbook],
  ].filter(([, value]) => value)
)
</script>

<template>
  <table class="course-info-table">
    <tbody>
      <tr v-for="row in rows" :key="row[0]">
        <th>{{ row[0] }}</th>
        <td>{{ row[1] }}</td>
      </tr>
    </tbody>
  </table>
</template>
