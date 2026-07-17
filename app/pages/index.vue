<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import gsap from 'gsap'

import en from '~/data/en.json'
import fa from '~/data/fa.json'
import Laravel from '~/components/icons/laravel.vue'
import NuxtIcon from '~/components/icons/nuxt.vue'

type Locale = 'en' | 'fa'
type LocaleData = typeof en

const iconMap = {
    Laravel,
    Nuxt: NuxtIcon
} as const

function getIconComponent(icon: keyof typeof iconMap | string) {
    return iconMap[icon as keyof typeof iconMap]
}

const locale = useCookie<Locale>('portfolio-lang', {
    default: () => 'en',
    sameSite: 'lax'
})

const currentLocale = computed<Locale>({
    get: () => (locale.value === 'fa' ? 'fa' : 'en'),
    set: (value) => {
        locale.value = value
    }
})

const isEn = computed(() => currentLocale.value === 'en')
const isFa = computed(() => currentLocale.value === 'fa')

const localeData = computed<LocaleData>(() => (currentLocale.value === 'fa' ? fa : en))
const pageTitle = computed(() => localeData.value.meta.pageTitle)
const seoDescription = computed(() => localeData.value.meta.description)
const contact = computed(() => localeData.value.contact)
const toastsText = computed(() => localeData.value.toasts)
const sectionTitles = computed(() => localeData.value.sectionTitles)
const labels = computed(() => localeData.value.labels)

const route = useRoute()
const requestURL = useRequestURL()
const canonicalUrl = computed(() => `${requestURL.origin}${route.path}`)

useHead(() => ({
    htmlAttrs: {
        lang: localeData.value.meta.lang,
        dir: localeData.value.meta.dir
    },
    bodyAttrs: {
        class: `relative min-h-screen bg-background overflow-x-hidden text-foreground ${localeData.value.meta.fontClass}`
    },
    link: [
        {
            rel: 'canonical',
            href: canonicalUrl.value
        }
    ]
}))

useSeoMeta({
    title: pageTitle,
    description: seoDescription,
    ogTitle: pageTitle,
    ogDescription: seoDescription,
    twitterCard: 'summary_large_image'
})

const navItems = computed(() => localeData.value.navItems)
const hero = computed(() => localeData.value.hero)
const about = computed(() => localeData.value.about)
const services = computed(() => localeData.value.services)
const experience = computed(() => localeData.value.experience)
const skills = computed(() => localeData.value.skills)
const projects = computed(() => localeData.value.projects)
const footer = computed(() => localeData.value.footer)
const languageSwitch = computed(() => localeData.value.languageSwitcher)

const isLanguageMenuOpen = ref(false)
const languageMenuRef = ref<HTMLElement | null>(null)

const form = reactive({
    name: '',
    email: '',
    message: ''
})

const touched = reactive({
    name: false,
    email: false,
    message: false
})

const isSending = ref(false)
const toast = useToast()

const errors = computed(() => ({
    name: !form.name.trim() ? contact.value.validation.required : '',
    email: !form.email.trim() ? contact.value.validation.required : '',
    message: !form.message.trim() ? contact.value.validation.required : ''
}))

function closeLanguageMenu() {
    isLanguageMenuOpen.value = false
}

function toggleLanguageMenu() {
    isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

function setLanguage(code: Locale) {
    if (currentLocale.value !== code) {
        currentLocale.value = code
        toast.success(toastsText.value.languageChanged.title, toastsText.value.languageChanged.message)
    }
    closeLanguageMenu()
}

function handleDocumentPointerDown(event: PointerEvent) {
    if (!isLanguageMenuOpen.value) return
    const target = event.target as Node | null
    if (target && languageMenuRef.value && !languageMenuRef.value.contains(target)) {
        closeLanguageMenu()
    }
}

function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') closeLanguageMenu()
}

function showError(field: keyof typeof form) {
    return touched[field] && !!errors.value[field]
}

function markTouched() {
    touched.name = true
    touched.email = true
    touched.message = true
}

function validateForm() {
    markTouched()
    return Boolean(form.name.trim() && form.email.trim() && form.message.trim())
}

async function handleSubmit() {
    if (isSending.value) return
    if (!validateForm()) return

    isSending.value = true
    await new Promise((resolve) => setTimeout(resolve, 2000))
    isSending.value = false

    form.name = ''
    form.email = ''
    form.message = ''
    touched.name = false
    touched.email = false
    touched.message = false

    toast.success(toastsText.value.messageSent.title, toastsText.value.messageSent.message)
}

onMounted(() => {
    document.addEventListener('pointerdown', handleDocumentPointerDown)
    document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
    document.removeEventListener('pointerdown', handleDocumentPointerDown)
    document.removeEventListener('keydown', handleEscape)
})

watch(currentLocale, () => {
    closeLanguageMenu()
})
</script>

<template>
    <header
        class="w-full fixed top-0 h-14 inset-x-0 border-b border-white/12 flex items-center bg-background/50 z-50 backdrop-blur-xl">
        <nav class="container grid grid-cols-12 items-center">
            <NuxtLink to="/" class="col-span-6 lg:col-span-3 flex justify-start items-center gap-2">
                <div class="size-8 rounded-full overflow-hidden">
                    <NuxtImg class="size-full object-cover" src="/images/profile.jpg" :alt="hero.name" />
                </div>
                <span class="text-foreground">{{ hero.name }}</span>
            </NuxtLink>

            <div class="col-span-6 hidden lg:flex justify-center items-center">
                <ul class="flex items-center w-full justify-center gap-3">
                    <li v-for="item in navItems" :key="item.href">
                        <a :href="item.href"
                            class="h-8 px-3 text-sm rounded-lg hover:bg-white/8 text-foreground/80 center hover:text-foreground whitespace-nowrap">
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col-span-6 lg:col-span-3 flex justify-end items-center gap-2">
                <div class="w-38 relative" ref="languageMenuRef">
                    <button
                        class="h-8 px-3 rounded-lg bg-thgray-100/80 hover:bg-thgray-300/80 border border-thgray-200 hidden lg:flex justify-center items-center gap-1.5 text-sm font-light text-foreground"
                        :class="isEn ? 'ml-auto' : 'mr-auto'" @click="toggleLanguageMenu" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <span>{{ languageSwitch.current }}</span>
                        <svg :class="isLanguageMenuOpen ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>

                    <Transition enter-active-class="transition duration-200 ease-out"
                        enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition duration-150 ease-in"
                        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
                        <div v-if="isLanguageMenuOpen"
                            class="p-1 w-full rounded-lg bg-background border border-white/15 absolute top-[calc(100%+0.5rem)] inset-x-0 origin-top">
                            <ul>
                                <li v-for="item in languageSwitch.items" :key="item.code">
                                    <button
                                        class="flex items-center px-2 h-8 hover:bg-white/10 rounded-lg w-full justify-between"
                                        :class="isEn ? '' : 'flex-row-reverse'" type="button"
                                        @click="setLanguage(item.code as Locale)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4"
                                            :class="currentLocale === item.code ? 'opacity-100' : 'opacity-0'">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <div class="flex items-center gap-2"
                                            :class="isEn ? '' : 'flex-row-reverse mt-1'">
                                            <span :class="isEn ? 'mb-px' : 'mt-px'">{{ item.flag }}</span>
                                            <span class="text-foreground text-sm">{{ item.label }}</span>
                                            <span class="font-mono text-muted-foreground text-xs mt-0.5">{{ item.short
                                            }}</span>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </Transition>
                </div>

                <a href="mailto:kianfarrokhzad@gmail.com"
                    class="size-8 rounded-lg bg-thgray-100/80 hover:bg-thgray-300/80 border border-thgray-200 text-foreground center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="size-4.5">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                </a>
            </div>
        </nav>
    </header>

    <main class="pt-14">
        <section class="relative border-b border-white/12 pb-14 overflow-hidden">
            <div class="pointer-events-none absolute w-full -top-px -z-10">
                <AppTopFade />
            </div>

            <div
                class="pt-12 sm:pt-20 container flex flex-col lg:flex-row items-center lg:justify-between gap-6 sm:gap-12">
                <div class="space-y-3 sm:space-y-6 flex flex-col items-center lg:items-start">
                    <h1 class="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span class="from-foreground to-foreground/60 bg-clip-text text-transparent"
                            :class="isEn ? 'bg-linear-to-r' : 'bg-linear-to-l'">
                            {{ hero.name }}
                        </span>
                    </h1>

                    <p class="text-lg font-medium text-muted-foreground md:text-2xl">
                        {{ hero.role }}
                    </p>

                    <div class="flex flex-wrap items-center gap-2 sm:gap-4 font-light text-sm text-muted-foreground"
                        :class="isEn ? 'font-mono' : ''">
                        <a href="https://nuxt.com" target="_blank" rel="noreferrer"
                            class="text-[#00dc82] hover:text-foreground">Nuxt</a>
                        <span class="cursor-default">•</span>
                        <a href="https://vuejs.org" target="_blank" rel="noreferrer"
                            class="text-[#00dc82] hover:text-foreground">Vue</a>
                        <span class="cursor-default">•</span>
                        <a href="https://kernel.org" target="_blank" rel="noreferrer"
                            class="hover:text-foreground">Linux</a>
                        <span class="cursor-default">•</span>
                        <p>{{ hero.tags[3] }}</p>
                    </div>

                    <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-light text-xs sm:text-sm text-muted-foreground -ml-0.75"
                        :class="isEn ? 'font-mono' : ''">
                        <div class="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 mb-0.75">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>{{ hero.location }}</span>
                        </div>

                        <span class="cursor-default hidden sm:block">-</span>

                        <a :href="`mailto:${hero.email}`" class="flex items-center gap-1.5 hover:text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 mb-0.75">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>{{ hero.email }}</span>
                        </a>
                    </div>

                    <div class="flex items-center gap-1.5 sm:gap-4 font-light text-[10px] sm:text-sm text-muted-foreground mt-2 sm:mt-0"
                        :class="isEn ? 'font-mono' : ''">
                        <p><span class="text-white">{{ hero.stats[0].value }}</span> {{ hero.stats[0].label }}</p>
                        <span class="cursor-default">-</span>
                        <p><span class="text-white">{{ hero.stats[1].value }}</span> {{ hero.stats[1].label }}</p>
                        <span class="cursor-default">-</span>
                        <p>{{ hero.stats[2].label }}</p>
                    </div>

                    <div class="flex items-center gap-2 sm:gap-4">
                        <button
                            class="h-10 px-4 rounded-lg bg-white/90 hover:bg-white text-black center gap-2 text-sm font-light"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5 mb-0.75">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <span>{{ hero.primaryCta }}</span>
                        </button>

                        <a href="#contact"
                            class="h-10 px-4 rounded-lg bg-thgray-100/80 hover:bg-thgray-300/80 border border-thgray-200 center gap-2 text-sm font-light text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5 mb-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>{{ hero.secondaryCta }}</span>
                        </a>
                    </div>

                    <div class="flex items-center gap-2 sm:gap-4 text-muted-foreground">
                        <a href="https://github.com/kiansolati56" target="_blank" rel="noreferrer"
                            class="size-8 sm:size-auto rounded-lg hover:bg-white/10 sm:hover:bg-transparent center hover:text-foreground text-sm flex items-center gap-0 sm:gap-2 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="size-4">
                                <path
                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                            <span class="hidden sm:block">{{ hero.socials.github }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="hidden sm:block size-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                :class="isEn ? '-translate-x-1' : 'translate-x-1 rotate-180'">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5 15.75 12 8.25 19.5" />
                            </svg>
                        </a>

                        <a href="https://t.me/MrCrowlley" target="_blank" rel="noreferrer"
                            class="size-8 sm:size-auto rounded-lg hover:bg-white/10 sm:hover:bg-transparent center hover:text-foreground text-sm flex items-center gap-0 sm:gap-2 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="size-4">
                                <path
                                    d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                <path d="m21.854 2.147-10.94 10.939"></path>
                            </svg>
                            <span class="hidden sm:block">{{ hero.socials.telegram }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="hidden sm:block size-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                :class="isEn ? '-translate-x-1' : 'translate-x-1 rotate-180'">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5 15.75 12 8.25 19.5" />
                            </svg>
                        </a>

                        <a :href="`mailto:${hero.email}`" target="_blank" rel="noreferrer"
                            class="size-8 sm:size-auto rounded-lg hover:bg-white/10 sm:hover:bg-transparent center hover:text-foreground text-sm flex items-center gap-0 sm:gap-2 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="size-4">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <span class="hidden sm:block">{{ hero.socials.email }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="hidden sm:block size-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                :class="isEn ? '-translate-x-1' : 'translate-x-1 rotate-180'">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5 15.75 12 8.25 19.5" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="order-first lg:order-last flex flex-col items-center gap-y-4">
                    <div
                        class="size-40 sm:size-60 md:size-80 relative p-1 sm:p-1.5 border-2 border-white/20 overflow-hidden rounded-full">
                        <NuxtImg class="size-full object-cover rounded-full" src="/images/profile.png"
                            :alt="hero.name" />
                    </div>

                    <div class="flex items-center justify-center gap-2">
                        <span class="relative flex size-2.5">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                                :class="hero.availability.isAvailable ? 'bg-green-300' : 'bg-red-300'"></span>
                            <span class="relative inline-flex size-2.5 rounded-full"
                                :class="hero.availability.isAvailable ? 'bg-green-400' : 'bg-red-400'"></span>
                        </span>
                        <p class="text-sm text-muted-foreground">
                            <span v-if="hero.availability.isAvailable">{{ hero.availability.available }}</span>
                            <span v-else>{{ hero.availability.busy }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">{{ about.title }}</h2>
            </div>

            <div class="border-white/12 mt-6 md:mt-10"
                :class="isEn ? 'sm:pl-7 sm:border-l-3' : 'sm:pr-7 sm:border-r-3'">
                <p class="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-justify"
                    v-html="about.content"></p>
            </div>
        </section>

        <section id="services" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">{{ sectionTitles.services }}</h2>
            </div>

            <div class="mt-6 md:mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div v-for="item in services" :key="item.title"
                    class="rounded-xl border border-white/12 p-6 md:p-8 hover:border-white/15 hover:bg-white/4">
                    <h3 class="xl:text-xl text-foreground flex items-center gap-2">
                        <div>$<span class="text-green-500">_</span></div>
                        <span>{{ item.title }}</span>
                    </h3>
                    <div class="text-muted-foreground leading-relaxed mt-4 border-white/20"
                        :class="isEn ? 'pl-4 border-l-3' : 'pr-4 border-r-3'" v-html="item.description"></div>
                </div>
            </div>
        </section>

        <section id="experience" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">{{ sectionTitles.experience }}</h2>
            </div>

            <div class="mt-6 md:mt-10">
                <div class="relative">
                    <div class="absolute top-0 h-full w-px bg-white/10"
                        :class="isEn ? 'left-4 md:left-29' : 'right-4 md:right-29'"></div>

                    <div v-for="item in experience" :key="`${item.company}-${item.role}`"
                        class="relative grid gap-4 pb-10 last:pb-0 md:grid-cols-[96px_1fr] md:gap-12">
                        <div class="relative" :class="isEn ? 'pl-10 md:pl-0' : 'pr-10 md:pr-0'">
                            <div class="absolute lg:top-1.5 size-7 rounded-full border border-white/12 bg-background/90 backdrop flex items-center justify-center"
                                :class="isEn ? 'left-0.5 sm:left-0 md:left-25.5' : 'right-0.5 sm:right-0 md:right-25.5'">
                                <div class="size-2 rounded-full bg-white/70"></div>
                            </div>

                            <div class="pt-1.5 lg:pt-2">
                                <p class="text-sm font-mono text-white/70">{{ item.period }}</p>
                            </div>
                        </div>

                        <article
                            class="rounded-xl border border-white/12 p-6 md:p-8 backdrop transition-all duration-300 hover:border-white/15 hover:bg-white/4 bg-background md:bg-transparent">
                            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div class="space-y-1">
                                    <div class="flex flex-wrap items-center gap-2">
                                        <h3 class="text-base md:text-lg font-semibold text-white">{{ item.role }}</h3>
                                        <span class="size-1.5 rounded-full bg-white/25"></span>
                                        <template v-if="item.link">
                                            <a :href="item.link" target="_blank" rel="noreferrer" dir="ltr"
                                                class="inline-flex items-center gap-1 text-sm text-white font-medium transition-colors group underline">
                                                <span>{{ item.company }}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="size-3"
                                                    :class="isEn ? 'mt-px' : 'mb-px'">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </a>
                                        </template>
                                        <template v-else>
                                            <span class="text-sm text-muted-foreground">{{ item.company }}</span>
                                        </template>
                                    </div>
                                </div>

                                <div class="hidden sm:flex items-center gap-2 text-xs text-green-500"
                                    :class="isEn ? 'font-mono' : ''">
                                    <span class="size-1.5 rounded-full bg-green-500"></span>
                                    <span class="mt-0.5">{{ labels.active }}</span>
                                </div>
                            </div>

                            <p class="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">{{
                                item.description }}</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">{{ sectionTitles.skills }}</h2>
            </div>

            <div class="mt-6 md:mt-10 grid gap-4 lg:grid-cols-3" dir="ltr">
                <article v-for="group in skills" :key="group.title"
                    class="group rounded-xl border border-white/12 p-6 md:p-8 hover:border-white/15 hover:bg-white/4">
                    <div class="mb-5 flex items-center justify-between gap-4">
                        <h3 class="text-base font-semibold tracking-tight text-white md:text-lg">{{ group.title }}</h3>
                        <span class="text-xs text-white/35" :class="isEn ? 'font-mono' : ''">{{ group.items.length }} {{
                            labels.items }}</span>
                    </div>

                    <div class="space-y-4">
                        <div v-for="skill in group.items" :key="skill.name" class="space-y-2">
                            <div class="flex items-center justify-between gap-3">
                                <a :href="skill.href" target="_blank" rel="noreferrer"
                                    class="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground/85 transition-all duration-200 hover:text-white">
                                    <span
                                        class="size-2 rounded-full ring-1 ring-white/10 transition-transform duration-200 group-hover/link:scale-110"
                                        :style="{ backgroundColor: skill.color }"></span>
                                    <span class="transition-transform duration-200 group-hover/link:translate-x-0.5">{{
                                        skill.name }}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.6" stroke="currentColor"
                                        class="size-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 4.5 15.75 12 8.25 19.5" />
                                    </svg>
                                </a>

                                <span class="text-xs font-mono text-muted-foreground/80">{{ skill.level }}%</span>
                            </div>

                            <div class="relative h-2 overflow-hidden rounded-full bg-white/8 ring-1 ring-white/5">
                                <div class="skill-fill absolute inset-y-0 left-0 overflow-hidden rounded-full"
                                    :style="{ width: `${skill.level}%`, backgroundColor: skill.color, boxShadow: `0 0 16px ${skill.color}22` }">
                                    <div class="skill-shimmer absolute inset-y-0 left-0 w-1/2"
                                        :style="{ backgroundImage: `linear-gradient(90deg, transparent 0%, ${skill.color}22 35%, ${skill.color}55 50%, ${skill.color}22 65%, transparent 100%)` }">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section id="projects" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">{{ sectionTitles.projects }}</h2>
            </div>

            <div class="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <div class="rounded-xl border border-white/12 p-6 md:p-8 hover:border-white/15 hover:bg-white/4"
                    v-for="item in projects" :key="item.title">
                    <h3 class="flex items-center justify-between gap-2">
                        <div class="xl:text-xl text-foreground flex items-center gap-2">
                            <div class="text-base text-[#E34F26]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>
                            </div>
                            <span>{{ item.title }}</span>
                        </div>
                        <span class="text-xs text-muted-foreground mt-1.5" :class="isEn ? 'font-mono' : ''">{{ item.date
                        }}</span>
                    </h3>
                    <div class="text-muted-foreground leading-relaxed mt-4 border-white/20" :class="isEn ? 'pl-4 border-l-3' : 'pr-4 border-r-3'"
                        v-html="item.description"></div>
                    <div class="text-muted-foreground flex items-center gap-4 mt-4 text-sm">
                        <h3 :class="isEn ? 'font-mono' : ''">{{ labels.languages }}</h3>
                        <div class="flex items-center gap-4">
                            <component v-for="icon in item.icons" :key="icon" :is="getIconComponent(icon)"
                                class="size-4" />
                        </div>
                    </div>
                    <div
                        class="w-full flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mt-8 gap-y-4 sm:gap-0">
                        <a :href="item.githublink" target="_blank"
                            class="size-auto center hover:text-foreground text-sm flex items-center gap-2 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="size-4">
                                <path
                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                            <span>{{ labels.viewOnGithub }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="hidden sm:block size-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                :class="isEn ? '-translate-x-1' : 'translate-x-1 rotate-180'">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5 15.75 12 8.25 19.5" />
                            </svg>
                        </a>

                        <a :href="item.demolink" target="_blank"
                            class="size-auto center hover:text-foreground text-sm flex items-center gap-2 group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                            <span>{{ labels.liveDemo }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="hidden sm:block size-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                :class="isEn ? '-translate-x-1' : 'translate-x-1 rotate-180'">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5 15.75 12 8.25 19.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="mt-23 md:mt-46 container scroll-mt-24 hidden">
            <div class="flex justify-center items-center flex-col">
                <div class="flex items-center justify-center gap-4">
                    <div
                        class="h-1 w-12 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                    </div>
                    <h2 class="text-xl font-bold tracking-tight md:text-2xl">{{ contact.title }}</h2>
                    <div
                        class="h-1 w-12 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                    </div>
                </div>
                <p class="text-xs sm:text-sm mt-2 text-muted-foreground">{{ contact.subtitle }}</p>
            </div>

            <div class="container max-w-2xl rounded-xl border border-white/12 p-6 md:p-8 mt-6 md:mt-10">
                <form class="grid md:grid-cols-2 gap-5" @submit.prevent="handleSubmit">
                    <label for="name" class="flex flex-col gap-y-3 text-base text-foreground">
                        {{ contact.fields.name.label }}
                        <input v-model="form.name" @blur="touched.name = true" type="text" id="name"
                            :aria-invalid="showError('name')"
                            class="rounded-lg h-10 px-4 placeholder:text-sm placeholder:text-muted-foreground/60 outline-none text-foreground"
                            :class="showError('name') ? 'border border-red-500/70 focus:border-red-500/70' : 'border border-white/16 hover:border-white/30 focus:border-white/30'"
                            :placeholder="contact.fields.name.placeholder">
                        <span v-if="showError('name')" class="text-xs text-red-400">{{ errors.name }}</span>
                    </label>

                    <label for="email" class="flex flex-col gap-y-3 text-base text-foreground">
                        {{ contact.fields.email.label }}
                        <input v-model="form.email" @blur="touched.email = true" type="text" id="email"
                            :aria-invalid="showError('email')"
                            class="rounded-lg h-10 px-4 placeholder:text-sm placeholder:text-muted-foreground/60 outline-none text-foreground"
                            :class="showError('email') ? 'border border-red-500/70 focus:border-red-500/70' : 'border border-white/16 hover:border-white/30 focus:border-white/30'"
                            :placeholder="contact.fields.email.placeholder">
                        <span v-if="showError('email')" class="text-xs text-red-400">{{ errors.email }}</span>
                    </label>

                    <label for="message" class="flex flex-col gap-y-3 text-base text-foreground col-span-full">
                        {{ contact.fields.message.label }}
                        <textarea v-model="form.message" @blur="touched.message = true" rows="6" id="message"
                            :aria-invalid="showError('message')"
                            class="rounded-lg p-4 placeholder:text-sm placeholder:text-muted-foreground/60 outline-none text-foreground"
                            :class="showError('message') ? 'border border-red-500/70 focus:border-red-500/70' : 'border border-white/16 hover:border-white/30 focus:border-white/30'"
                            :placeholder="contact.fields.message.placeholder"></textarea>
                        <span v-if="showError('message')" class="text-xs text-red-400">{{ errors.message }}</span>
                    </label>

                    <div class="col-span-full flex justify-start">
                        <button
                            class="h-10 px-4 rounded-lg bg-white/90 hover:bg-white text-black center gap-2 text-sm font-light"
                            :class="isSending ? 'opacity-50 cursor-not-allowed' : ''" :disabled="isSending"
                            type="submit">
                            <svg :class="isEn ? '' : 'rotate-180 order-last'" v-if="!isSending" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-5 animate-spin" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke-width="4"></circle>
                                <path class="opacity-75" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                    d="M4 12a8 8 0 0 1 8-8"></path>
                            </svg>
                            <span>{{ isSending ? contact.submit.sending : contact.submit.idle }}</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <footer
        class="w-full border-t border-white/12 flex justify-center items-center bg-foreground/9 h-18 mt-12 sm:mt-20">
        <p class="text-sm text-muted-foreground">{{ footer }}</p>
    </footer>
</template>
