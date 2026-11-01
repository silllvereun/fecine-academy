<script setup lang="ts">
// "이번 장에서 배울 내용" and "완성 결과물" card, placed right under a chapter's title.
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const fm = computed(() => frontmatter.value)
</script>

<template>
  <section v-if="fm.goals?.length" class="page-header__card" aria-label="이번 장에서 배울 내용">
      <div>
        <p class="page-header__label">이번 장에서 배울 내용</p>
        <ul>
          <li v-for="g in fm.goals" :key="g">{{ g }}</li>
        </ul>
      </div>
      <div v-if="fm.result" class="page-header__result">
        <p class="page-header__label">완성 결과물</p>
        <p>{{ fm.result }}</p>
      </div>
  </section>
</template>
