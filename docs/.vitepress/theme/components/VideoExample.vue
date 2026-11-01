<script setup lang="ts">
// A result video. Without `src` it shows that the material is still being prepared,
// so no placeholder footage ever stands in for a real generation.
import { withBase } from 'vitepress'
const props = defineProps<{ src?: string; poster?: string; caption: string; meta?: string }>()
</script>

<template>
  <figure class="video-example">
    <video v-if="props.src" :src="withBase(props.src)" :poster="props.poster && withBase(props.poster)" controls preload="metadata" playsinline />
    <div v-else class="video-example__pending">
      <span>자료 준비 중</span>
      <small>실제 생성한 결과만 싣습니다.</small>
    </div>
    <figcaption>
      {{ props.caption }}
      <small v-if="props.meta">{{ props.meta }}</small>
    </figcaption>
  </figure>
</template>
