<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const title = 'میدلول وب‌دولوپر (فرانت‌اند)'
const typedTitle = ref('')
const isTypingFinished = ref(false)
const cursorVisible = ref(true)
const resumeClicked = ref(false)

let typingInterval: ReturnType<typeof setInterval> | null = null
let cursorInterval: ReturnType<typeof setInterval> | null = null
let resumeMessageTimeout: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
    let index = 0

    typingInterval = setInterval(() => {
        typedTitle.value = title.slice(0, index + 1)
        index++

        if (index >= title.length) {
            isTypingFinished.value = true

            if (typingInterval) {
                clearInterval(typingInterval)
                typingInterval = null
            }

            cursorInterval = setInterval(() => {
                cursorVisible.value = !cursorVisible.value
            }, 600)
        }
    }, 65)
})

onBeforeUnmount(() => {
    if (typingInterval) {
        clearInterval(typingInterval)
    }

    if (cursorInterval) {
        clearInterval(cursorInterval)
    }

    if (resumeMessageTimeout) {
        clearTimeout(resumeMessageTimeout)
    }
})

const props = withDefaults(defineProps<{
    disabled?: boolean
}>(), {
    disabled: false,
})

const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

const pressed = ref(false)

const handleClick = (event: MouseEvent) => {
    if (props.disabled || resumeClicked.value) return

    resumeClicked.value = true
    pressed.value = true

    emit('click', event)
}
</script>

<template>
    <div class="relative h-screen overflow-hidden">
        <FaultyTerminal class="background" :scale="1.5" :grid-mul="[2, 1]" :digit-size="1.2" :time-scale="0.5"
            :scanline-intensity="0.5" :glitch-amount="1" :flicker-amount="1" :noise-amp="1" :chromatic-aberration="0"
            :dither="0" :curvature="0.1" tint="#A7EF9E" :mouse-react="true" :mouse-strength="0.5"
            :page-load-animation="true" :brightness="0.6" />

        <section
            class="absolute inset-x-0 top-[3%] z-30 m-auto flex w-[calc(100%-2rem)] max-w-xl flex-col items-center rounded-4xl border border-white/10 bg-black/15 p-6 backdrop-blur-3xl md:p-10 sm:w-full">
            <div class="relative size-30 overflow-hidden rounded-full border-2 border-white/20 p-1 sm:size-50 sm:p-1.5">
                <NuxtImg class="size-full rounded-full object-cover" src="/images/profile.png" />
            </div>

            <h1 class="mt-8 text-3xl font-bold md:mt-12 md:text-4xl">
                کیان حبیبی
            </h1>

            <div class="my-3 h-px w-40 bg-muted-foreground/50 md:my-4"></div>

            <div class="flex w-full items-center justify-center text-center text-xl font-bold sm:text-2xl" dir="rtl">
                <span class="ml-2 select-none text-emerald-500">
                    &gt;
                </span>

                <span>
                    {{ typedTitle.slice(0, 6) }}
                </span>

                <span v-if="typedTitle.length > 6" class="mx-1 text-emerald-500">
                    {{ typedTitle.slice(6, 17) }}
                </span>

                <span v-if="typedTitle.length > 17">
                    {{ typedTitle.slice(17) }}
                </span>

                <span
                    class="mr-1 mt-3 inline-block h-1 w-4 shrink-0 bg-emerald-400 align-bottom transition-opacity duration-300"
                    :class="cursorVisible ? 'opacity-100' : 'opacity-0'" />
            </div>

            <p
                class="mt-4 text-justify text-sm font-medium leading-normal text-foreground/80 [text-align-last:center] md:mt-6 md:text-base">
                من عاشق ساختن چیزهایی‌ام که پیچیدگی‌شون پشت یک تجربه‌ی ساده
                پنهان شده. بیشتر وقتم رو بین کد، طراحی رابط و پیدا کردن راه‌های
                بهتر برای ساختن چیزها می‌گذرونم؛ با این امید که چیزی که آخرش
                ساخته میشه، هم درست کار کنه و هم استفاده ازش حس خوبی داشته باشه!
            </p>

            <button type="button" :disabled="disabled || resumeClicked"
                class="relative mt-8 inline-flex h-10 min-w-60 items-center justify-center rounded-xl border border-[#737b78] bg-white px-4 text-[#28302d] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.18),0_3px_0_#252b2a,0_5px_8px_rgba(0,0,0,0.35)] transition-[filter] duration-75 ease-out hover:brightness-[1.025] focus-visible:outline-1 focus-visible:outline-[#86c7a7] focus-visible:outline-offset-3 disabled:cursor-not-allowed disabled:opacity-100 md:mt-12"
                :class="pressed
                    ? 'translate-y-0.75 cursor-not-allowed! opacity-60! shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(0,0,0,0.14),0_0_0_#252b2a,0_2px_4px_rgba(0,0,0,0.3)] brightness-[0.97]'
                    : ''" @click="handleClick">
                <span class="relative z-10 inline-flex items-center gap-3">
                    <svg v-if="!resumeClicked" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor"
                        class="mb-px size-5 text-[#17201c] drop-shadow-[0_1px_0_rgba(255,255,255,0.35)]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                    <span
                        class="whitespace-nowrap text-base font-semibold tracking-[0.08em] text-[#28302d] [text-shadow:0_1px_0_rgba(255,255,255,0.6)]">
                        {{ resumeClicked ? 'هنوز رزومه‌ام رو قرار ندادم ://' : 'دانلود رزومه' }}
                    </span>
                </span>
            </button>

            <div
                class="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-foreground/80 sm:gap-4 sm:text-base md:mt-8">
                <a href="https://nuxt.com" target="_blank" rel="noreferrer"
                    class="text-[#00dc82] hover:text-foreground">
                    Nuxt
                </a>

                <span class="cursor-default">
                    •
                </span>

                <a href="https://vuejs.org" target="_blank" rel="noreferrer"
                    class="text-[#00dc82] hover:text-foreground">
                    Vue
                </a>

                <span class="cursor-default">
                    •
                </span>

                <a href="https://kernel.org" target="_blank" rel="noreferrer" class="hover:text-foreground">
                    Linux
                </a>

                <span class="cursor-default">
                    •
                </span>

                <p>
                    عاشق اوپن‌سورس
                </p>
            </div>

            <div class="mt-6 flex items-center gap-2 text-muted-foreground sm:mt-8 sm:gap-12">
                <a href="https://github.com/ItsCrowley" target="_blank" rel="noreferrer"
                    class="center group flex size-8 items-center gap-0 rounded-lg text-sm font-medium hover:bg-white/10 hover:text-foreground sm:size-auto sm:gap-2 sm:hover:bg-transparent sm:hover:underline sm:text-base underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="size-4">
                        <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>

                    <span class="hidden sm:block">
                        گیتهاب من
                    </span>
                </a>

                <a href="https://t.me/ItsCrowley" target="_blank" rel="noreferrer"
                    class="center group flex size-8 items-center gap-0 rounded-lg text-sm font-medium hover:bg-white/10 hover:text-foreground sm:size-auto sm:gap-2 sm:hover:bg-transparent sm:hover:underline sm:text-base underline-offset-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="size-4">
                        <path
                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>

                    <span class="hidden sm:block">
                        تلگرام من
                    </span>
                </a>
            </div>

            <div class="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground/70 md:mt-8"
                dir="rtl">
                من عاشق برنامه‌نویسی‌ام. حتی وقتی یه‌جورایی یا یه‌وقتایی کد باهام مشکل داره =))
            </div>
        </section>
    </div>
</template>

<style scoped>
.background {
    mask-image: linear-gradient(to bottom,
            black 0%,
            black 20%,
            transparent 85%);

    -webkit-mask-image: linear-gradient(to bottom,
            black 0%,
            black 20%,
            transparent 85%);
}
</style>