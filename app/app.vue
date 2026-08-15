<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fa',
    dir: 'rtl',
  },
  bodyAttrs: {
    class: 'relative min-h-screen bg-background text-foreground font-peyda dark'
  },
  meta: [
    {
      name: 'color-scheme',
      content: 'dark',
    },
    {
      name: 'application-name',
      content: 'Kian Habibi',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <AppToast />
  </NuxtLayout>
</template>