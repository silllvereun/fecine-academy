<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import PageHeader from './components/PageHeader.vue'
import HomeVideoHero from './components/HomeVideoHero.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <HomeVideoHero />
    </template>
    <template #doc-before>
      <PageHeader />
    </template>
  </Layout>
</template>
