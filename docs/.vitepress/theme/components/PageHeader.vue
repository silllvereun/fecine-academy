<script setup lang="ts">
// Shown above every document page: which part it belongs to, its status and the
// versions it was written against; chapter pages also get their goals and result.
import { computed } from 'vue'
import { useData } from 'vitepress'
import structure from '../../generated/structure.json'

const { frontmatter } = useData()
const fm = computed(() => frontmatter.value)
const planned = computed(() => fm.value.status === 'planned')
</script>

<template>
  <div v-if="fm.status" class="page-header">
    <div class="page-header__meta">
      <span v-if="fm.part" class="page-header__part">{{ fm.part }}</span>
      <span v-if="planned" class="page-header__badge is-planned">작성 예정</span>
      <span v-else class="page-header__badge is-published">게시</span>
      <span class="page-header__version">
        교재 V1 {{ structure.textbook }} · FECINE v{{ fm.serviceVersion || structure.service }} 기준 · 원고 {{ fm.revised || structure.revised }}
      </span>
    </div>
  </div>
</template>
