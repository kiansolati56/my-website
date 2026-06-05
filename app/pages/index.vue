<script setup>
const pageTitle = 'Kian - Frontend Developer'

useHead({
    bodyAttrs: {
        class: 'relative min-h-screen bg-background font-inter overflow-x-hidden text-white'
    }
})

useSeoMeta({
    title: computed(
        () =>
            pageTitle.replaceAll("&#8211;", "-")
    )
});

const navItems = [
    { label: 'About me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact-me' },
]
</script>

<template>
    <header
        class="w-full fixed top-0 h-14 inset-x-0 border-b border-white/8 flex items-center bg-background/50 backdrop-blur-xl">
        <nav class="container grid grid-cols-12">
            <nuxt-link to="/" class="col-span-6 lg:col-span-4 flex justify-start items-center gap-2">
                <div class="size-8 rounded-full overflow-hidden">
                    <nuxt-img class="size-full object-cover" src="/images/profile.jpg" />
                </div>
                <span class="text-foreground">Kian Farrokhzad</span>
            </nuxt-link>

            <div class="col-span-4 hidden lg:flex justify-center items-center">
                <ul class="flex items-center w-full justify-center gap-3">
                    <li v-for="item in navItems">
                        <a :href="item?.href"
                            class="h-8 px-3 text-sm rounded-lg hover:bg-white/8 text-white/80 center hover:text-white whitespace-nowrap">
                            {{ item?.label }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col-span-6 lg:col-span-4 flex justify-end items-center gap-3">
                <button
                    class="h-8 px-3 rounded-lg bg-thgray-100/80 hover:bg-thgray-300/80 border border-thgray-200 hidden lg:flex justify-center items-center gap-1.5 text-sm font-light text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <span>English</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>

                <button
                    class="size-8 rounded-lg bg-thgray-100/80 hover:bg-thgray-300/80 border border-thgray-200 text-foreground center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </button>

                <button
                    class="size-8 rounded-lg bg-thgray-100/80 hover:bg-thgray-300/80 border border-thgray-200 text-foreground flex justify-center items-center lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    </header>

    <main>
        <section class="mt-14">
            <AppTopFade />
            <div class="pt-12 sm:pt-20 lg:pt-26 container flex flex-col lg:flex-row items-center lg:justify-between gap-6 sm:gap-12">
                <div class="space-y-3 sm:space-y-5 flex flex-col items-center lg:items-start">
                    <h1 class="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span class="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Kian Farrokhzad
                        </span>
                    </h1>
                    <p class="text-lg font-medium text-muted-foreground md:text-2xl">Middlevel Frontend Developer</p>
                    <div class="flex items-center gap-2 sm:gap-4 font-light font-mono text-sm text-muted-foreground">
                        <a href="https://nuxt.com" target="_blank" class="hover:text-foreground">
                            Nuxt
                        </a>

                        <span class="cursor-default">•</span>

                        <a href="https://kernel.org" target="_blank" class="hover:text-foreground">
                            Linux
                        </a>
                    </div>
                    <div class="flex items-center gap-2 sm:gap-4 font-light font-mono text-xs sm:text-sm text-muted-foreground -ml-0.75">
                        <div class="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 mb-0.75">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>Iran, Mashhad</span>
                        </div>

                        <span class="cursor-default">-</span>

                        <div class="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 mb-0.75">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>kianfarrokhzad@gmail.com</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 sm:gap-4 mt-4 lg:mt-6">
                        <button
                            class="h-8 px-3 rounded-lg bg-white/90 hover:bg-white text-black center gap-2 text-sm font-light">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5 mb-0.75">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <span>Download CV</span>
                        </button>

                        <a href="#contact-me"
                            class="h-8 px-3 rounded-lg bg-thgray-100/80 hover:bg-thgray-300/80 border border-thgray-200 center gap-2 text-sm font-light text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5 mb-0.75">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>Contact Me</span>
                        </a>
                    </div>
                </div>

                <div
                    class="size-30 sm:size-45 lg:size-60 rounded-full overflow-hidden p-1.5 border border-white/18 order-first lg:order-last">
                    <nuxt-img class="size-full object-cover rounded-full" src="/images/profile.jpg" />
                </div>
            </div>
        </section>
    </main>
</template>