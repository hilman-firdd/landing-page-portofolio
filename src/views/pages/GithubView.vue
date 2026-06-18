<template>
    <section class="github section" id="github">
        <h2 class="section__title">{{ meta.title }}</h2>
        <span class="section__subtitle">{{ meta.subtitle }}</span>

        <div class="github__container container">
            <div class="github__window term-window">
                <div class="term-window__bar">
                    <div class="term-window__dots"><span></span><span></span><span></span></div>
                    <span class="term-window__title"><i class="uil uil-github"></i> contributions @{{ username }}</span>
                </div>
                <div class="term-window__body">
                    <p class="github__cmd prompt">
                        <span class="user">hilman</span><span class="at">@</span><span class="host">github</span><span class="sym">:</span><span class="path">~</span><span class="sym">$</span>
                        <span class="cmd">gh contributions --year last</span>
                    </p>

                    <!-- loading -->
                    <p v-if="loading" class="github__loading">
                        fetching contribution graph<span class="cursor"></span>
                    </p>

                    <!-- live custom heatmap -->
                    <div v-else-if="weeks.length" class="github__data">
                        <p class="github__total">
                            <span class="github__count">{{ total.toLocaleString() }}</span> contributions in the last year
                        </p>

                        <div class="github__graph">
                            <div class="github__side">
                                <span class="github__months-spacer"></span>
                                <div class="github__weekdays">
                                    <span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span>
                                </div>
                            </div>

                            <div class="github__chart">
                                <div class="github__months">
                                    <span class="github__month" v-for="(m, i) in months" :key="'m' + i">{{ m }}</span>
                                </div>
                                <div class="github__grid">
                                    <div class="github__week" v-for="(week, wi) in weeks" :key="'w' + wi">
                                        <span v-for="(day, di) in week" :key="'d' + di" class="github__day"
                                            :class="{ 'github__day--empty': !day }"
                                            :data-level="day ? day.level : null"
                                            :title="day ? (day.date + ': ' + day.count + ' contributions') : ''"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="github__legend">
                            <span>less</span>
                            <span class="github__day" data-level="0"></span>
                            <span class="github__day" data-level="1"></span>
                            <span class="github__day" data-level="2"></span>
                            <span class="github__day" data-level="3"></span>
                            <span class="github__day" data-level="4"></span>
                            <span>more</span>
                        </div>
                    </div>

                    <!-- fallback: static themed chart image -->
                    <div v-else class="github__fallback">
                        <p class="comment">live api unreachable — rendering cached chart</p>
                        <img :src="'https://ghchart.rshah.org/3ee07f/' + username" :alt="username + ' github contribution chart'">
                    </div>

                    <a :href="'https://github.com/' + username" target="_blank" class="button button--flex github__btn">
                        view --profile <i class="uil uil-external-link-alt button__icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
    name: 'Github',
    data() {
        return {
            meta: data.github,
            username: data.profile.username,
            weeks: [],
            months: [],
            total: 0,
            loading: true
        }
    },
    mounted() {
        this.fetchContributions()
    },
    methods: {
        async fetchContributions() {
            try {
                const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${this.username}?y=last`)
                if (!res.ok) throw new Error('bad response')
                const data = await res.json()
                const days = data.contributions || []
                if (!days.length) throw new Error('no data')

                this.total = (data.total && data.total.lastYear != null)
                    ? data.total.lastYear
                    : days.reduce((acc, d) => acc + (d.count || 0), 0)

                // pad the start so each row maps to a fixed weekday (Sun..Sat)
                const firstDow = new Date(days[0].date).getDay()
                const padded = new Array(firstDow).fill(null).concat(days)

                const weeks = []
                for (let i = 0; i < padded.length; i += 7) {
                    weeks.push(padded.slice(i, i + 7))
                }
                this.weeks = weeks

                // one month label per column, only when the month changes
                const names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                let last = -1
                this.months = weeks.map((week) => {
                    const real = week.find((d) => d)
                    if (!real) return ''
                    const m = new Date(real.date).getMonth()
                    if (m !== last) { last = m; return names[m] }
                    return ''
                })
            } catch (e) {
                this.weeks = []
            } finally {
                this.loading = false
            }
        }
    }
}
</script>
