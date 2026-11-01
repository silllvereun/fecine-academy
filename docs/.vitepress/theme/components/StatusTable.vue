<script setup lang="ts">
// The writing status of every page, from the generated page list.
import { computed } from 'vue'
import { withBase } from 'vitepress'
import pages from '../../generated/pages.json'

const props = defineProps<{ status?: 'published' | 'planned' }>()
const rows = computed(() => (props.status ? pages.filter((p) => p.status === props.status) : pages))
</script>

<template>
  <table>
    <thead>
      <tr><th>구분</th><th>페이지</th><th>상태</th></tr>
    </thead>
    <tbody>
      <tr v-for="p in rows" :key="p.link">
        <td>{{ p.group }}</td>
        <td><a :href="withBase(p.link + '.html')">{{ p.title }}</a></td>
        <td>
          <span :class="['status-pill', p.status === 'planned' ? 'is-planned' : 'is-published']">
            {{ p.status === 'planned' ? '작성 예정' : '게시' }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
