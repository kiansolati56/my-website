<section id="experience" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">Experience</h2>
            </div>

            <div class="mt-4 md:mt-8 sm:pl-7 sm:border-l-3 border-white/12 space-y-4">
                <article v-for="item in experience" :key="`${item.company}-${item.role}`"
                    class="rounded-2xl border border-white/8 bg-white/4 p-5">
                    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                            <h3 class="text-base font-semibold text-foreground">
                                {{ item.role }}
                            </h3>
                            <p class="text-sm text-muted-foreground">
                                {{ item.company }}
                            </p>
                        </div>

                        <span class="text-xs sm:text-sm text-muted-foreground font-mono">
                            {{ item.period }}
                        </span>
                    </div>

                    <p class="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {{ item.description }}
                    </p>
                </article>
            </div>
        </section>

<section id="skills" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">Skills</h2>
            </div>

            <div class="mt-4 md:mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <article v-for="group in skillGroups" :key="group.title"
                    class="rounded-2xl border border-white/8 bg-white/4 p-5">
                    <h3 class="text-base font-semibold text-foreground mb-4">
                        {{ group.title }}
                    </h3>

                    <div class="flex flex-wrap gap-2">
                        <span v-for="skill in group.items" :key="skill"
                            class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground/85">
                            {{ skill }}
                        </span>
                    </div>
                </article>
            </div>
        </section>

<section id="projects" class="mt-13 md:mt-26 container scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">Projects</h2>
            </div>

            <div class="mt-4 md:mt-8 grid gap-4 lg:grid-cols-3">
                <article v-for="project in projects" :key="project.title"
                    class="rounded-2xl border border-white/8 bg-white/4 p-5 hover:bg-white/6 transition-colors">
                    <div class="flex items-start justify-between gap-3">
                        <h3 class="text-base font-semibold text-foreground">
                            {{ project.title }}
                        </h3>
                        <span class="size-2 rounded-full bg-white/40 mt-2 shrink-0"></span>
                    </div>

                    <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {{ project.description }}
                    </p>

                    <div class="mt-4 flex flex-wrap gap-2">
                        <span v-for="tag in project.tags" :key="tag"
                            class="rounded-lg bg-white/6 border border-white/10 px-2.5 py-1 text-xs text-foreground/75">
                            {{ tag }}
                        </span>
                    </div>
                </article>
            </div>
        </section>

<section id="contact-me" class="mt-13 md:mt-26 container pb-16 scroll-mt-24">
            <div class="flex items-center gap-4">
                <div class="h-1 w-4 rounded-full bg-linear-to-r from-foreground/30 via-foreground to-foreground/30">
                </div>
                <h2 class="text-xl font-bold tracking-tight md:text-2xl">Contact</h2>
            </div>

            <div class="mt-4 md:mt-8 grid gap-4 lg:grid-cols-2">
                <div class="rounded-2xl border border-white/8 bg-white/4 p-5">
                    <p class="text-sm sm:text-base leading-relaxed text-muted-foreground">
                        I’m always open to new opportunities, collaborations, and interesting frontend work.
                        Feel free to reach out if you want to build something solid and clean.
                    </p>

                    <div class="mt-5 flex flex-wrap gap-3">
                        <a href="mailto:kianfarrokhzad@gmail.com"
                            class="h-9 px-4 rounded-lg bg-white/90 hover:bg-white text-black center gap-2 text-sm font-medium">
                            <span>Email me</span>
                        </a>

                        <a href="https://t.me/MrCrowlley" target="_blank" rel="noreferrer"
                            class="h-9 px-4 rounded-lg bg-thgray-100/80 hover:bg-thgray-300/80 border border-thgray-200 center gap-2 text-sm font-medium text-foreground">
                            <span>Telegram</span>
                        </a>
                    </div>
                </div>

                <div class="rounded-2xl border border-white/8 bg-white/4 p-5">
                    <div class="space-y-4 text-sm sm:text-base">
                        <div class="flex items-center justify-between gap-4">
                            <span class="text-muted-foreground">Email</span>
                            <a href="mailto:kianfarrokhzad@gmail.com" class="text-foreground hover:underline">
                                kianfarrokhzad@gmail.com
                            </a>
                        </div>

                        <div class="flex items-center justify-between gap-4">
                            <span class="text-muted-foreground">Location</span>
                            <span class="text-foreground">Mashhad, Iran</span>
                        </div>

                        <div class="flex items-center justify-between gap-4">
                            <span class="text-muted-foreground">GitHub</span>
                            <a href="https://github.com/kiansolati56" target="_blank" rel="noreferrer"
                                class="text-foreground hover:underline">
                                github.com/kiansolati56
                            </a>
                        </div>

                        <div class="flex items-center justify-between gap-4">
                            <span class="text-muted-foreground">Telegram</span>
                            <a href="https://t.me/MrCrowlley" target="_blank" rel="noreferrer"
                                class="text-foreground hover:underline">
                                @MrCrowlley
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>