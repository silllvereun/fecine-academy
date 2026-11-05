<script setup lang="ts">
// The production-flow figure from the manuscript ("FECINE V1 제작 흐름 · 입구 3개, 모듈 8개"),
// labels updated to the FECINE v1.74 menus (에피소드·씬, ✦ AI 자동생성, 등장인물, 음향, 샷 이미지).
// redrawn with the same layout and labels.
const C = 380
const r1 = 90, r2 = 180, r3 = 280, r4 = 380, r5 = 480, r6 = 580, r7 = 670

type Box = { x: number; y: number; w: number; h: number; title: string; sub?: string; main?: boolean; dash?: boolean }
const starts: Box[] = [
  { x: 130, y: r1, w: 210, h: 44, title: '새 작품 (빈 작품)' },
  { x: C, y: r1, w: 210, h: 44, title: '템플릿 사용' },
  { x: 630, y: r1, w: 210, h: 44, title: '프리소스 원작' },
]
const steps: Box[] = [
  { x: C, y: r2, w: 250, h: 52, title: '작품정보', sub: '제목 · 비율 · 해상도 · 스타일' },
  { x: 230, y: r3, w: 250, h: 52, title: '✦ AI 자동생성', sub: '에피소드·씬 추출 · 제작설계' },
  { x: 530, y: r3, w: 250, h: 52, title: '스토리', sub: '에피소드 · 씬 · 씬 대본 작성' },
  { x: C, y: r4, w: 250, h: 52, title: '등장인물 · 미술 · 공간', sub: '등장인물 · 소품 · 배경 이미지' },
  { x: 640, y: r4, w: 190, h: 52, title: '음향 (선택)', sub: '보이스 파일 연결', dash: true },
  { x: 125, y: r5, w: 190, h: 52, title: '샷 이미지 (선택)', sub: '샷의 시작 이미지', dash: true },
  { x: C, y: r5, w: 250, h: 52, title: '스토리보드', sub: '씬별 영상 생성', main: true },
  { x: C, y: r6, w: 250, h: 52, title: '편집', sub: '타임라인 · 자막 · BGM · 전환' },
  { x: C, y: r7, w: 250, h: 52, title: '내보내기', sub: '렌더 · 다운로드 · 게시 요청' },
]
const paths: { d: string; dash?: boolean }[] = [
  { d: `M130 ${r1 + 22}V133H350V${r2 - 26}` },
  { d: `M${C} ${r1 + 22}V${r2 - 26}` },
  { d: `M630 ${r1 + 22}V133H410V${r2 - 26}` },
  { d: `M330 ${r2 + 26}V232H230V${r3 - 26}` },
  { d: `M430 ${r2 + 26}V232H530V${r3 - 26}` },
  { d: `M355 ${r3}H405` },
  { d: `M230 ${r3 + 26}V330H350V${r4 - 26}` },
  { d: `M530 ${r3 + 26}V330H410V${r4 - 26}` },
  { d: `M545 ${r4}H505`, dash: true },
  { d: `M${C} ${r4 + 26}V${r5 - 26}` },
  { d: `M220 ${r5 - 10}H255` },
  { d: `M255 ${r5 + 10}H220` },
  { d: `M505 ${r5 - 12}H570V${r5 + 12}H505` },
  { d: `M${C} ${r5 + 26}V${r6 - 26}` },
  { d: `M${C} ${r6 + 26}V${r7 - 26}` },
]
</script>

<template>
  <figure class="flow-diagram">
    <svg viewBox="0 0 760 724" role="img" aria-label="어느 입구로 시작해도 영상은 스토리보드에서 만들어진다" font-size="13">
      <defs>
        <marker id="flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" class="fd-edge-fill" />
        </marker>
      </defs>
      <text x="24" y="32" font-size="15" font-weight="600" class="fd-ink">어느 입구로 시작해도 영상은 스토리보드에서 만들어집니다</text>
      <g fill="none" class="fd-edge" stroke-width="1.25">
        <path v-for="p in paths" :key="p.d" :d="p.d" :stroke-dasharray="p.dash ? '5 4' : undefined" marker-end="url(#flow-arrow)" />
      </g>
      <g v-for="b in starts" :key="b.title">
        <rect :x="b.x - b.w / 2" :y="b.y - b.h / 2" :width="b.w" :height="b.h" rx="8" fill="none" class="fd-edge" stroke-width="1.25" />
        <text :x="b.x" :y="b.y + 4" text-anchor="middle" class="fd-ink">{{ b.title }}</text>
      </g>
      <text x="280" y="226" text-anchor="middle" font-size="11.5" class="fd-quiet">대본 파일 있음</text>
      <text x="480" y="226" text-anchor="middle" font-size="11.5" class="fd-quiet">직접 쓰기</text>
      <g v-for="b in steps" :key="b.title">
        <rect
          :x="b.x - b.w / 2" :y="b.y - b.h / 2" :width="b.w" :height="b.h" rx="8"
          :class="b.main ? 'fd-main' : 'fd-edge'"
          :fill="b.main ? 'currentColor' : 'none'"
          :fill-opacity="b.main ? 0.12 : 1"
          :stroke-width="b.main ? 2 : 1.25"
          :stroke-dasharray="b.dash ? '5 4' : undefined"
        />
        <text :x="b.x" :y="b.y - 4" text-anchor="middle" font-weight="600" class="fd-ink">{{ b.title }}</text>
        <text :x="b.x" :y="b.y + 14" text-anchor="middle" font-size="11.5" :class="b.main ? 'fd-ink' : 'fd-quiet'">{{ b.sub }}</text>
      </g>
      <text x="580" :y="r5 + 4" font-size="11.5" class="fd-quiet">다시 생성 → 새 테이크</text>
    </svg>
    <figcaption>FECINE V1 제작 흐름 · 입구 3개, 모듈 8개</figcaption>
  </figure>
</template>
