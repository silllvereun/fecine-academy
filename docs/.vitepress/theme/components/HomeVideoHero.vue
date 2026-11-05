<script setup lang="ts">
// Home hero: the intro video fills the screen (page scroll locked), then the
// hero shrinks to the video's own 16:9 height, the action buttons appear, and
// the feature cards below reveal one by one (see `.VPHome:has(.home-video-hero...)`
// in custom.css).
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

const SEEN_KEY = 'fecine-home-intro-seen'

const video = ref<HTMLVideoElement | null>(null)
const done = ref(false)
const showStill = ref(false)
const muted = ref(false)

let scrollLocked = false
function lockScroll(on: boolean) {
  if (on === scrollLocked) return
  scrollLocked = on
  document.documentElement.classList.toggle('home-intro-playing', on)
}

// Browsers block autoplay with sound until the visitor interacts with the page.
// When that happens the video plays muted and the first interaction turns sound on.
function onFirstInteraction(e: Event) {
  removeInteractionListeners()
  const target = e.target as Element | null
  if (target?.closest?.('.home-video-hero__controls')) return
  const v = video.value
  if (!v || done.value) return
  v.muted = false
  muted.value = false
}
const INTERACTIONS = ['pointerdown', 'keydown', 'touchstart'] as const
function addInteractionListeners() {
  INTERACTIONS.forEach((t) => window.addEventListener(t, onFirstInteraction, { capture: true, once: true }))
}
function removeInteractionListeners() {
  INTERACTIONS.forEach((t) => window.removeEventListener(t, onFirstInteraction, { capture: true }))
}

function finish(skipped: boolean) {
  if (done.value) return
  if (skipped) {
    showStill.value = true
    video.value?.pause()
  }
  done.value = true
  lockScroll(false)
  removeInteractionListeners()
  try { sessionStorage.setItem(SEEN_KEY, '1') } catch {}
}

function toggleSound() {
  removeInteractionListeners()
  const v = video.value
  if (!v) return
  v.muted = !v.muted
  muted.value = v.muted
}

onMounted(async () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let seen = false
  try { seen = sessionStorage.getItem(SEEN_KEY) === '1' } catch {}
  const v = video.value
  if (reduced || seen || !v) return finish(true)

  lockScroll(true)
  v.volume = 0.5 // half of the original loudness; kept when sound is toggled
  v.muted = false
  try {
    await v.play()
  } catch {
    v.muted = true
    muted.value = true
    try {
      await v.play()
      addInteractionListeners()
    } catch {
      finish(true)
    }
  }
})

onBeforeUnmount(() => {
  lockScroll(false)
  removeInteractionListeners()
})
</script>

<template>
  <section class="home-video-hero" :class="{ 'is-done': done }">
    <h1 class="visually-hidden">FECINE ACADEMY — 처음 시작하는 AI 영상 제작</h1>

    <div class="home-video-hero__media">
      <video
        ref="video"
        :src="withBase('/videos/home-hero.mp4')"
        :poster="withBase('/videos/home-hero-poster.jpg')"
        playsinline
        preload="auto"
        aria-hidden="true"
        @ended="finish(false)"
        @error="finish(true)"
      />
      <img
        class="home-video-hero__still"
        :class="{ 'is-visible': showStill }"
        :src="withBase('/videos/home-hero-last.jpg')"
        alt=""
        aria-hidden="true"
      />

      <div v-if="!done" class="home-video-hero__controls">
        <button type="button" @click="toggleSound">{{ muted ? '소리 켜기' : '소리 끄기' }}</button>
        <button type="button" @click="finish(true)">건너뛰기</button>
      </div>

      <div class="home-video-hero__actions" :aria-hidden="!done">
        <a class="hv-btn hv-btn--brand" :href="withBase('/v1/chapters/01-ai-video-production.html')" :tabindex="done ? 0 : -1">1장부터 읽기</a>
        <a class="hv-btn hv-btn--alt" :href="withBase('/guide/start.html')" :tabindex="done ? 0 : -1">어디서 시작할까요?</a>
      </div>
    </div>
  </section>
</template>

<style>
/* No page scrollbar while the intro video plays. */
html.home-intro-playing,
html.home-intro-playing body {
  overflow: hidden;
}
</style>

<style scoped>
.home-video-hero {
  position: relative;
}

/* Full screen while playing; afterwards the hero shrinks to the original hero
   height and the whole 16:9 frame fits inside it, centered. The hero background
   matches the video's end-frame color so the empty sides blend in. */
.home-video-hero {
  --hv-ease: cubic-bezier(0.65, 0, 0.35, 1);
  --hv-full: max(360px, calc(100svh - var(--vp-nav-height)));
  --hv-h: 470px;
  background: #191f27;
}
@media (max-width: 767px) {
  .home-video-hero {
    --hv-h: 420px;
  }
}
.home-video-hero__media {
  position: relative;
  height: var(--hv-full);
  overflow: hidden;
  transition: height 1.4s var(--hv-ease);
}
.is-done .home-video-hero__media {
  height: var(--hv-h);
}

.home-video-hero__media video,
.home-video-hero__still {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateX(-50%);
  transition: width 1.4s var(--hv-ease), opacity 0.6s ease;
}
.is-done .home-video-hero__media video,
.is-done .home-video-hero__still {
  width: min(100%, calc(var(--hv-h) * 16 / 9));
}
@media (min-width: 768px) {
  .is-done .home-video-hero__media video,
  .is-done .home-video-hero__still {
    /* Fade all four edges into the hero background so no video box shows. */
    -webkit-mask-image:
      linear-gradient(to right, transparent, #000 140px, #000 calc(100% - 140px), transparent),
      linear-gradient(to bottom, transparent, #000 40px, #000 calc(100% - 40px), transparent);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent, #000 140px, #000 calc(100% - 140px), transparent),
      linear-gradient(to bottom, transparent, #000 40px, #000 calc(100% - 40px), transparent);
    mask-composite: intersect;
  }
}
.home-video-hero__still {
  opacity: 0;
}
.home-video-hero__still.is-visible {
  opacity: 1;
}

.home-video-hero__controls {
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  gap: 8px;
}
.home-video-hero__controls button {
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 13px;
  backdrop-filter: blur(6px);
  cursor: pointer;
}
.home-video-hero__controls button:hover {
  background: rgba(0, 0, 0, 0.55);
}

/* Buttons sit on the video, between the subtitle and the logo at the bottom
   of the end frame. */
.home-video-hero__actions {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16%;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 0 16px;
  pointer-events: none;
}
.is-done .home-video-hero__actions {
  pointer-events: auto;
}

.hv-btn {
  display: inline-block;
  padding: 0 22px;
  line-height: 44px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  opacity: 0;
  transform: translateY(18px) scale(0.96);
  transition: background-color 0.25s, border-color 0.25s, color 0.25s;
}
.is-done .hv-btn {
  animation: hv-btn-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 1.2s;
}
.is-done .hv-btn--alt {
  animation-delay: 1.35s;
}
.hv-btn--brand {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  box-shadow: 0 8px 28px rgba(122, 77, 255, 0.45);
}
.hv-btn--brand:hover {
  background: var(--vp-button-brand-hover-bg);
}
.hv-btn--alt {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  backdrop-filter: blur(6px);
}
.hv-btn--alt:hover {
  background: rgba(255, 255, 255, 0.22);
}
@keyframes hv-btn-in {
  to {
    opacity: 1;
    transform: none;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .home-video-hero__media,
  .home-video-hero__media video,
  .home-video-hero__still,
  .home-video-hero__actions {
    transition: none;
  }
  .is-done .hv-btn {
    animation-duration: 0.01s;
    animation-delay: 0s;
  }
}
</style>
