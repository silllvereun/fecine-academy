<script setup lang="ts">
import { withBase } from 'vitepress'
const props = defineProps<{ href: string; title: string; note?: string }>()
</script>

<template>
  <a class="download-card" :href="withBase(props.href)" download>
    <span class="download-card__icon" aria-hidden="true">↓</span>
    <span>
      <strong>{{ props.title }}</strong>
      <small v-if="props.note">{{ props.note }}</small>
    </span>
  </a>
</template>
