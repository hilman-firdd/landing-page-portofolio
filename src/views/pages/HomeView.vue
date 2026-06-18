<template>
    <section class="home section" id="home">
        <div class="home__container container grid">
            <div class="home__content grid">
                <div class="home__social">
                    <a v-for="(social, i) in profile.socials" :key="i" :href="social.url"
                        class="home__social-icon" target="_blank" rel="noopener">
                        <i class="uil" :class="social.icon"></i>
                    </a>
                </div>

                <div class="home__data">
                    <div class="hero-term term-window">
                        <div class="term-window__bar">
                            <div class="term-window__dots"><span></span><span></span><span></span></div>
                            <span class="term-window__title"><i class="uil uil-shell"></i> {{ profile.terminalTitle }}</span>
                        </div>
                        <div class="term-window__body hero-term__body">
                            <p class="hero-line"><span class="prompt"><span class="user">visitor</span><span class="at">@</span><span class="host">portfolio</span><span class="sym">:</span><span class="path">~</span><span class="sym">$</span></span> <span id="hero-cmd" class="cmd" :data-cmd="profile.heroCommand"></span><span class="cursor" id="hero-cursor"></span></p>
                            <div class="hero-output" id="hero-output" style="display:none">
                                <h1 class="home__title">Hi, I'm <span class="accent">{{ profile.name }}</span></h1>
                                <h3 class="home__subtitle">
                                    <span class="sym">&gt;</span> <span class="role" id="typed-role" :data-roles="rolesJson"></span><span class="cursor"></span>
                                </h3>
                                <p class="home__description">{{ profile.description }}</p>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" class="button button--flex">
                        ./contact.sh <i class="uil uil-message button__icon"></i>
                    </a>
                </div>
            </div>

            <div class="home__scroll">
                <a href="#about" class="home__scroll-button button--flex">
                    <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span class="home__scroll-name">scroll --down</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
    name: 'Home',
    data() {
        return { profile: data.profile }
    },
    computed: {
        rolesJson() {
            return JSON.stringify(this.profile.roles)
        }
    }
};
</script>
