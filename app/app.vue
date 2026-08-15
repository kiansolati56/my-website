<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fa',
    dir: 'rtl',
  },
  bodyAttrs: {
    class: 'relative min-h-screen bg-background text-foreground font-peyda dark'
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <AppToast />
  </NuxtLayout>
</template>