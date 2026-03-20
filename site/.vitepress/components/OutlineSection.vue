<script setup>
defineProps({
  sectionId: { type: String, required: true },
  title: { type: String, required: true },
  modules: { type: Array, required: true },
  coreLabel: { type: String, default: "" },
  modulePrefix: { type: String, default: "" },
})
</script>

<template>
  <section :id="sectionId" class="syllabus-section">
    <h2>{{ title }}</h2>
    <div class="outline-group">
      <article v-for="module in modules" :key="`${sectionId}-${module.id}`" class="outline-module">
        <header class="outline-header">
          <div class="outline-header-top">
            <p v-if="modulePrefix" class="outline-label">{{ modulePrefix }} {{ module.id }}</p>
            <p class="outline-hours">{{ module.hours }}</p>
          </div>
          <h3>{{ module.title }}</h3>
          <p v-if="module.coreConcept" class="outline-core">
            <strong>{{ coreLabel }}</strong>{{ module.coreConcept }}
          </p>
        </header>

        <section
          v-for="block in module.sections"
          :key="`${module.id}-${block.title}`"
          class="outline-block"
        >
          <h4>{{ block.title }}</h4>
          <ul class="course-list">
            <li v-for="item in block.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </article>
    </div>
  </section>
</template>
