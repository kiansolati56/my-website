<script setup lang="ts">
useHead({
  title: 'Kian | Frontend Developer',
  meta: [
    {
      name: 'description',
      content:
        'A dark cinematic single-page portfolio built with Nuxt and Tailwind CSS.',
    },
  ],
})

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: '24+', label: 'Projects shipped' },
  { value: '3', label: 'Core technologies' },
  { value: '99%', label: 'Attention to detail' },
  { value: '∞', label: 'Ideas for growth' },
]

const highlights = [
  'Cinematic dark UI',
  'Clean structure',
  'Great for personal branding',
]

const services = [
  {
    title: 'UI Design',
    text: 'Interfaces that do more than look good. They guide attention and keep the flow alive.',
    icon: '01',
  },
  {
    title: 'Frontend Development',
    text: 'Landing pages, dashboards, and product interfaces built with speed and structure.',
    icon: '02',
  },
  {
    title: 'Design Systems',
    text: 'Reusable components that stay clean, scalable, and easy to maintain.',
    icon: '03',
  },
  {
    title: 'Motion',
    text: 'Soft, meaningful motion that makes the experience feel premium.',
    icon: '04',
  },
  {
    title: 'SEO & Performance',
    text: 'A page that looks good and also loads fast, stays organized, and performs well.',
    icon: '05',
  },
  {
    title: 'Ideas & Direction',
    text: 'Raw ideas get sharpened into something that feels real and ready to launch.',
    icon: '06',
  },
]

const projects = [
  {
    name: 'Live Sales Dashboard',
    type: 'Product Dashboard',
    text: 'A modern dashboard for orders, KPIs, and daily growth with a focus on clarity and speed.',
    tags: ['Nuxt', 'Charts', 'UX', 'Dark UI'],
  },
  {
    name: 'Personal Brand Landing',
    type: 'Portfolio Site',
    text: 'A portfolio page with a strong visual identity, smooth scrolling, and story-driven sections.',
    tags: ['Tailwind', 'Motion', 'Brand', 'SEO'],
  },
  {
    name: 'Content Management Panel',
    type: 'CMS Interface',
    text: 'A clean workspace for content teams with readable tables, quick filters, and scalable structure.',
    tags: ['Vue', 'State', 'Admin', 'Performance'],
  },
]

const processSteps = [
  {
    title: 'Discovery',
    text: 'I define the project vibe, brand personality, and the actual problem it needs to solve.',
  },
  {
    title: 'Wireframe',
    text: 'I shape the layout, section order, and user flow before jumping into code.',
  },
  {
    title: 'Build',
    text: 'I create components, responsiveness, motion, and the details that make it feel alive.',
  },
  {
    title: 'Polish',
    text: 'I refine spacing, color, typography, and performance until the page feels premium.',
  },
]

const stack = [
  'Vue 3',
  'Nuxt 4',
  'Tailwind CSS 4',
  'TypeScript',
  'Headless UI',
  'GSAP',
  'Pinia',
  'Headless CMS',
  'SEO',
  'Responsive Design',
  'Performance',
  'Accessibility',
]

const testimonials = [
  {
    quote:
      'This kind of page instantly tells you the creator knows what they are doing. Clean, fast, and full of personality.',
    author: 'Product Manager',
  },
  {
    quote:
      'When the UI is both beautiful and logical, a project feels serious from the first second. This nails that feeling.',
    author: 'UX Designer',
  },
  {
    quote:
      'Good code does not just work. It stays manageable later. This page has that kind of structure.',
    author: 'Senior Developer',
  },
]

const metrics = [
  { label: 'Load speed', value: 'A+' },
  { label: 'Readability', value: '10/10' },
  { label: 'Mobile ready', value: 'Full' },
]
</script>

<template>
  <main class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl"></div>
      <div class="absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"></div>
    </div>

    <header class="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-black shadow-lg shadow-cyan-500/10">
            K
          </div>
          <div>
            <p class="text-sm font-semibold text-white">Kian.dev</p>
            <p class="text-xs text-slate-400">Frontend Developer</p>
          </div>
        </a>

        <nav class="hidden items-center gap-6 lg:flex">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-sm text-slate-300 transition hover:text-white"
          >
            {{ item.label }}
          </a>
        </nav>

        <a
          href="#contact"
          class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/15"
        >
          Start a Project
        </a>
      </div>
    </header>

    <section id="home" class="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
      <div class="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-wide text-cyan-200">
            <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
            PORTFOLIO / FRONTEND / NUXT
          </div>

          <h1 class="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            I turn
            <span class="bg-gradient-to-r from-cyan-300 via-violet-300 to-orange-300 bg-clip-text text-transparent">
              interfaces
            </span>
            into
            <br />
            experiences people
            <span class="text-slate-300">remember</span>
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            This one-page portfolio is made for inspiration. Dark, sleek, detailed, and designed for a developer who wants their work to feel as good as it functions.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact
            </a>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <div
              v-for="item in highlights"
              :key="item"
              class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur-md"
            >
              {{ item }}
            </div>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <p class="text-3xl font-black text-white">{{ stat.value }}</p>
              <p class="mt-2 text-sm text-slate-400">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl"></div>
          <div class="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-violet-400/20 blur-2xl"></div>

          <div class="rounded-[2rem] border border-white/10 bg-panel p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl">
            <div class="flex items-center gap-2">
              <span class="h-3 w-3 rounded-full bg-red-400"></span>
              <span class="h-3 w-3 rounded-full bg-amber-300"></span>
              <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
              <span class="ml-2 text-xs text-slate-400">portfolio.vue</span>
            </div>

            <div class="mt-6 rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
              <p class="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Now Playing</p>
              <div class="mt-4 space-y-4">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-sm text-slate-400">role</p>
                  <p class="mt-1 text-lg font-semibold text-white">Frontend Developer</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-sm text-slate-400">stack</p>
                  <p class="mt-1 text-lg font-semibold text-white">Nuxt · Vue · Tailwind · Motion</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-sm text-slate-400">vibe</p>
                  <p class="mt-1 text-lg font-semibold text-white">dark, clean, cinematic, fast</p>
                </div>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-3 gap-3">
              <div
                v-for="metric in metrics"
                :key="metric.label"
                class="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p class="text-xl font-black text-white">{{ metric.value }}</p>
                <p class="mt-1 text-xs text-slate-400">{{ metric.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">About</p>
          <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">
            For me, coding is not just building pages;
            <span class="text-slate-300">it is shaping feeling</span>
          </h2>
          <p class="mt-5 text-base leading-8 text-slate-300">
            This section is made to show personality: someone who thinks about structure and atmosphere at the same time. A strong portfolio should feel like a living introduction, not a wall of plain text.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-[2rem] border border-white/10 bg-ink-800/70 p-6">
            <p class="text-lg font-semibold text-white">Structured</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">
              Clear architecture, readable sections, and a flow that feels easy to explore.
            </p>
          </div>
          <div class="rounded-[2rem] border border-white/10 bg-ink-800/70 p-6">
            <p class="text-lg font-semibold text-white">Character-driven</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">
              Color, light, typography, and details that give the page a strong identity.
            </p>
          </div>
          <div class="rounded-[2rem] border border-white/10 bg-ink-800/70 p-6">
            <p class="text-lg font-semibold text-white">Fast</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">
              Built for Nuxt and Tailwind so development stays smooth and output stays light.
            </p>
          </div>
          <div class="rounded-[2rem] border border-white/10 bg-ink-800/70 p-6">
            <p class="text-lg font-semibold text-white">Resume-ready</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">
              Great for showing work, skills, experience, and contact info in one place.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">Services</p>
        <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">What I Build</h2>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="item in services"
          :key="item.title"
          class="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/8"
        >
          <div class="flex items-start justify-between gap-4">
            <p class="text-3xl font-black text-cyan-200/80">{{ item.icon }}</p>
            <div class="h-10 w-10 rounded-2xl border border-white/10 bg-black/30 transition group-hover:border-cyan-400/30"></div>
          </div>
          <h3 class="mt-8 text-xl font-semibold text-white">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-400">{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section id="projects" class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">Projects</p>
          <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">A Few Ideas to Show Power</h2>
        </div>
        <p class="max-w-xl text-sm leading-7 text-slate-400">
          These cards are examples. You can replace them with your actual projects anytime.
        </p>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.name"
          class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div class="h-48 border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.26),_transparent_44%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.18),_transparent_36%),linear-gradient(180deg,rgba(15,23,42,0.55),rgba(3,7,18,0.95))]"></div>
          <div class="p-6">
            <p class="text-xs uppercase tracking-[0.3em] text-cyan-200/80">{{ project.type }}</p>
            <h3 class="mt-3 text-2xl font-bold text-white">{{ project.name }}</h3>
            <p class="mt-4 text-sm leading-7 text-slate-400">{{ project.text }}</p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="process" class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Process</p>
        <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">How the Work Moves</h2>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-4">
        <article
          v-for="(step, index) in processSteps"
          :key="step.title"
          class="rounded-[2rem] border border-white/10 bg-white/5 p-6"
        >
          <p class="text-sm font-semibold text-cyan-200">0{{ index + 1 }}</p>
          <h3 class="mt-4 text-xl font-semibold text-white">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-400">{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section id="stack" class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">Stack</p>
          <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">Tools I Work With Comfortably</h2>
          <p class="mt-5 text-base leading-8 text-slate-300">
            This section helps people quickly understand what you know and what kind of work fits your style.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div
            v-for="item in stack"
            :key="item"
            class="rounded-2xl border border-white/10 bg-ink-800/70 px-4 py-4 text-center text-sm font-medium text-slate-200"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">Feedback</p>
        <h2 class="mt-4 text-3xl font-black text-white sm:text-4xl">The Feeling It Should Give</h2>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <blockquote
          v-for="item in testimonials"
          :key="item.author"
          class="rounded-[2rem] border border-white/10 bg-white/5 p-6"
        >
          <p class="text-base leading-8 text-slate-300">“{{ item.quote }}”</p>
          <footer class="mt-6 text-sm font-semibold text-white">{{ item.author }}</footer>
        </blockquote>
      </div>
    </section>

    <section id="contact" class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div class="rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.82),rgba(3,7,18,0.96))] p-8 lg:p-12">
        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Contact</p>
            <h2 class="mt-4 text-3xl font-black text-white sm:text-5xl">
              Got a project?
              <span class="text-slate-300">Let’s make it sharp</span>
            </h2>
            <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              The final section should feel clear and inviting. Not too loud, not too empty, just direct and confident.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@kian.dev"
                class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                hello@kian.dev
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div class="rounded-[2rem] border border-white/10 bg-black/30 p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Status</p>
            <div class="mt-5 space-y-4">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-sm text-slate-400">availability</p>
                <p class="mt-1 text-lg font-semibold text-white">open for cool projects</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-sm text-slate-400">specialty</p>
                <p class="mt-1 text-lg font-semibold text-white">frontend, ui, motion</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-sm text-slate-400">mood</p>
                <p class="mt-1 text-lg font-semibold text-white">dark, premium, sharp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/5 py-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>Built with Nuxt + Tailwind for a sleek one-page portfolio.</p>
        <p>Designed for ideas, projects, and a little bit of flex 🗿</p>
      </div>
    </footer>
  </main>
</template>