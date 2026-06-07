<script setup>
const pageTitle = 'Kian - Frontend Developer'

useHead({
    bodyAttrs: {
        class: 'relative min-h-screen bg-background font-inter overflow-x-hidden text-foreground'
    }
})

useSeoMeta({
    title: computed(() => pageTitle.replaceAll('&#8211;', '-'))
})

const navItems = [
    { label: 'About me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact-me' },
]

const services = [
    {
        title: 'Modern Frontend Applications',
        description:
            `<p>Building responsive and high-performance web applications with <span class="text-[#00dc82]">Nuxt</span>, <span class="text-[#00dc82]">Vue</span>, <span class="text-[#00bcff]">Tailwind CSS</span>, and <span class="text-[#F7DF1E]">JavaScript</span>.</p>`,
    },
    {
        title: 'Headless CMS Solutions',
        description:
            'Developing scalable websites powered by WordPress Headless CMS and modern frontend technologies.',
    },
    {
        title: 'Full-Stack Web Solutions',
        description:
            `<p>Creating complete web platforms using <span class="text-[#f53003]">Laravel</span> APIs combined with modern <span class="text-[#00dc82]">Vue</span> and <span class="text-[#00dc82]">Nuxt</span> frontends.</p>`,
    },
]

const experience = [
    {
        role: 'Frontend Developer',
        company: 'Archiveads',
        link: 'https://archiveads.com',
        period: '2025 — Present',
        description:
            'Worked on commercial web projects with a focus on Nuxt, responsive layouts, reusable components, and production-ready frontend delivery.',
    },
    {
        role: 'Frontend Developer',
        company: 'Freelance / Contract Work',
        period: '2025 — Present',
        description:
            'Built and maintained multiple real-world websites and interfaces for business use, including WordPress headless implementations.',
    },
]

const skillGroups = [
    {
        title: 'Frontend',
        items: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Vue.js', 'Nuxt.js'],
    },
    {
        title: 'Backend / CMS',
        items: ['WordPress Headless', 'Laravel (Learning)'],
    },
    {
        title: 'Tools',
        items: ['Git', 'Linux', 'Figma'],
    },
    {
        title: 'Soft Skills',
        items: ['Teamwork', 'Communication', 'Adaptability', 'Time Management', 'Problem Solving'],
    },
]

const projects = [
    {
        title: 'Business Website',
        description:
            'A modern responsive company website built with Nuxt and Tailwind CSS, focused on performance and clean presentation.',
        tags: ['Nuxt', 'Tailwind', 'Responsive'],
    },
    {
        title: 'Headless WordPress Frontend',
        description:
            'A flexible frontend connected to WordPress as a headless CMS, built for smooth content management and fast UX.',
        tags: ['Nuxt', 'WordPress', 'API'],
    },
    {
        title: 'UI Components Library',
        description:
            'Reusable frontend components and patterns used across multiple projects to speed up development and keep consistency.',
        tags: ['Vue', 'Components', 'UI'],
    },
]
</script>

<template>
    <header
        class="w-full fixed top-0 h-14 inset-x-0 border-b border-white/8 flex items-center bg-background/50 backdrop-blur-xl z-50">
        <nav class="container grid grid-cols-12 items-center">
            <nuxt-link to="/" class="col-span-6 lg:col-span-3 flex justify-start items-center gap-2">
                <div class="size-8 rounded-full overflow-hidden">
                    <nuxt-img class="size-full object-cover" src="/images/profile.jpg" alt="Kian Farrokhzad" />
                </div>
                <span class="text-foreground">Kian Farrokhzad</span>
            </nuxt-link>

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

                <a href="mailto:kianfarrokhzad@gmail.com"
                    class="size-8 rounded-lg bg-thgray-100/80 hover:bg-thgray-300/80 border border-thgray-200 text-foreground center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="size-4.5">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                </a>

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

    <main class="pt-14 pb-30">
        <section class="relative border-b border-white/12 pb-14">
            <AppTopFade />
            <div
                class="pt-12 sm:pt-20 container flex flex-col lg:flex-row items-center lg:justify-between gap-6 sm:gap-12">
                <div class="space-y-3 sm:space-y-5 flex flex-col items-center lg:items-start">
                    <h1 class="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span class="bg-linear-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
                            Kian Farrokhzad
                        </span>
                    </h1>

                    <p class="text-lg font-medium text-muted-foreground md:text-2xl">
                        Mid-level Frontend Developer
                    </p>

                    <div
                        class="flex flex-wrap items-center gap-2 sm:gap-4 font-light font-mono text-sm text-muted-foreground">
                        <a href="https://nuxt.com" target="_blank" rel="noreferrer"
                            class="text-[#00dc82] hover:text-foreground">
                            Nuxt
                        </a>

                        <span class="cursor-default">•</span>

                        <a href="https://vuejs.org" target="_blank" rel="noreferrer"
                            class="text-[#00dc82] hover:text-foreground">
                            Vue
                        </a>

                        <span class="cursor-default">•</span>

                        <a href="https://kernel.org" target="_blank" rel="noreferrer" class="hover:text-foreground">
                            Linux
                        </a>

                        <span class="cursor-default">•</span>

                        <p>Open Source</p>
                    </div>

                    <div
                        class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-light font-mono text-xs sm:text-sm text-muted-foreground -ml-0.75">
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

                        <span class="cursor-default hidden sm:block">-</span>

                        <a href="mailto:kianfarrokhzad@gmail.com"
                            class="flex items-center gap-1.5 hover:text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4 mb-0.75">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>kianfarrokhzad@gmail.com</span>
                        </a>
                    </div>

                    <div class="flex items-center gap-2 sm:gap-4">
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
                                stroke="currentColor" class="size-5 mb-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>Contact Me</span>
                        </a>
                    </div>

                    <div class="flex items-center gap-2">
                        <a href="https://github.com/kiansolati56" target="_blank" rel="noreferrer"
                            class="size-8 rounded-lg hover:bg-white/12 text-foreground/80 center hover:text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="size-4">
                                <path
                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </a>

                        <a href="https://t.me/MrCrowlley" target="_blank" rel="noreferrer"
                            class="size-8 rounded-lg hover:bg-white/12 text-foreground/80 center hover:text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="size-4">
                                <path
                                    d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                <path d="m21.854 2.147-10.94 10.939"></path>
                            </svg>
                        </a>

                        <a href="mailto:kianfarrokhzad@gmail.com" target="_blank" rel="noreferrer"
                            class="size-8 rounded-lg hover:bg-white/12 text-foreground/80 center hover:text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="size-4">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="size-40 sm:size-60 md:size-90 relative p-1 sm:p-2 border-2 border-white/20 overflow-hidden rounded-full order-first lg:order-last">
                    <nuxt-img class="size-full object-cover rounded-full" src="/images/profile.jpg"
                        alt="Kian Farrokhzad" />
                </div>
            </div>
        </section>

        <section id="about" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">About Me</h2>
            </div>

            <div class="sm:pl-7 sm:border-l-3 border-white/12 mt-4 md:mt-8">
                <p class="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                    I am a self-taught Frontend Developer passionate about building modern web experiences and
                    continuously
                    improving my skills. My journey into programming started at a young age, and since then I have
                    learned
                    through documentation, personal projects, real-world development experience, and countless hours of
                    problem-solving.
                    <br><br>
                    I enjoy turning ideas into fast, responsive, and user-friendly applications with a strong focus on
                    clean
                    design and performance. Beyond coding, I value teamwork, clear communication, adaptability, and
                    continuous
                    learning. I believe the best way to grow as a developer is by building real projects, embracing
                    challenges, and staying curious about new technologies.
                </p>
            </div>
        </section>

        <section id="services" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">Services</h2>
            </div>

            <div class="mt-4 md:mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div class="rounded-lg border border-white/12 p-6 md:p-8 hover:border-white/30 hover:bg-white/8"
                    v-for="item in services">
                    <h3 class="sm:text-lg md:text-xl text-foreground flex items-center gap-2">
                        <div>
                            $<span class="text-green-500">_</span>
                        </div>
                        <span>{{ item?.title }}</span>
                    </h3>
                    <div class="text-muted-foreground leading-relaxed mt-4 pl-4 border-l-3 border-white/20"
                        v-html="item?.description"></div>
                </div>
            </div>
        </section>

        <section id="experience" class="mt-13 md:mt-26 container scroll-mt-24 hidden">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">Experience</h2>
            </div>

            <div class="mt-6 md:mt-10">
                <div class="relative">
                    <div class="absolute left-4 top-0 h-full w-px bg-white/10 md:left-29"></div>

                    <div v-for="(item, index) in experience" :key="`${item.company}-${item.role}`"
                        class="relative grid gap-4 pb-10 last:pb-0 md:grid-cols-[96px_1fr] md:gap-12">
                        <div class="relative pl-10 md:pl-0">
                            <div
                                class="absolute left-0 top-1.5 size-7 rounded-full border border-white/12 bg-background/90 backdrop-blur-sm flex items-center justify-center md:left-25.5">
                                <div class="size-2 rounded-full bg-white/70"></div>
                            </div>

                            <div class="md:pt-2">
                                <p class="text-sm font-mono text-white/70">
                                    {{ item.period }}
                                </p>
                            </div>
                        </div>

                        <article
                            class="group rounded-2xl border border-white/8 bg-white/4 p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/12 hover:bg-white/6">
                            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div class="space-y-1">
                                    <div class="flex flex-wrap items-center gap-2">
                                        <h3 class="text-base md:text-lg font-semibold text-white">
                                            {{ item.role }}
                                        </h3>

                                        <span class="size-1.5 rounded-full bg-white/25"></span>

                                        <template v-if="item.link">
                                            <a :href="item.link" target="_blank" rel="noreferrer"
                                                class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-white transition-colors">
                                                <span>{{ item.company }}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="size-3.5 opacity-70">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5-4.5H21m0 0v7.5m0-7.5-10.5 10.5" />
                                                </svg>
                                            </a>
                                        </template>

                                        <template v-else>
                                            <span class="text-sm text-muted-foreground">
                                                {{ item.company }}
                                            </span>
                                        </template>
                                    </div>

                                    <p class="text-xs sm:text-sm text-white/45">
                                        {{ index + 1 }}<span class="mx-1">·</span>Frontend work
                                    </p>
                                </div>

                                <div class="hidden sm:flex items-center gap-2 text-xs font-mono text-white/30">
                                    <span class="size-1.5 rounded-full bg-white/30"></span>
                                    <span>active</span>
                                </div>
                            </div>

                            <p class="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                                {{ item.description }}
                            </p>

                            <div class="mt-5 flex flex-wrap gap-2">
                                <span
                                    class="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75">
                                    Nuxt
                                </span>
                                <span
                                    class="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75">
                                    Vue
                                </span>
                                <span
                                    class="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75">
                                    Responsive UI
                                </span>
                                <span
                                    class="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75">
                                    Production-ready
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>