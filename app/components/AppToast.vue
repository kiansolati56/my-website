<script setup lang="ts">
type ToastType = 'success' | 'error' | 'info'

const { toasts, removeToast } = useToast()

function iconClass(type: ToastType) {
  if (type === 'error') return 'bg-red-600'
  if (type === 'info') return 'bg-sky-600'
  return 'bg-green-600'
}

function closeToast(id: number) {
  removeToast(id)
}
</script>

<template>
  <TransitionGroup tag="div" appear
    class="fixed bottom-8 left-1/2 z-80 flex w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 flex-col gap-3 pointer-events-none"
    enter-active-class="transition-all! duration-300! ease-out" enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100" leave-active-class="transition-all! duration-300! ease-in"
    leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-full opacity-0">
    <article v-for="toast in toasts" :key="toast.id"
      class="pointer-events-auto flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-background/70 px-4 py-3 shadow-xl backdrop-blur-xl will-change-transform">
      <div class="flex items-center gap-3">
        <div :class="iconClass(toast.type)" class="flex size-8 items-center justify-center rounded-full text-white">
          <svg v-if="toast.type === 'success'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="3" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>

          <span v-else-if="toast.type === 'error'" class="text-xl leading-none">!</span>

          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </div>

        <div class="min-w-0">
          <h3 class="text-sm font-medium text-foreground">
            {{ toast.title }}
          </h3>
          <p class="mt-0.5 text-xs text-muted-foreground">
            {{ toast.message }}
          </p>
        </div>
      </div>

      <button type="button"
        class="flex size-8 items-center justify-center rounded-full hover:bg-white/10 text-foreground/80 hover:text-foreground"
        @click="closeToast(toast.id)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </article>
  </TransitionGroup>
</template>