<script setup lang="ts">
// Shown above document pages: which part the page belongs to, and a badge when
// the page is not written yet. Volatile info (versions, dates) is left out.
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const fm = computed(() => frontmatter.value)
const planned = computed(() => fm.value.status === 'planned')
</script>

<template>
  <div v-if="fm.status && (fm.part || planned)" class="page-header">
    <div class="page-header__meta">
      <span v-if="fm.part" class="page-header__part">{{ fm.part }}</span>
      <span v-if="planned" class="page-header__badge is-planned">작성 예정</span>
    </div>
  </div>
</template>
