<template>
    <section class="about section" id="about">
        <h2 class="section__title">{{ about.title }}</h2>
        <span class="section__subtitle">{{ about.subtitle }}</span>

        <div class="about__container container grid">
            <img :src="about.image" alt="" class="about__img">

            <div class="about__data term-window">
                <div class="term-window__bar">
                    <div class="term-window__dots"><span></span><span></span><span></span></div>
                    <span class="term-window__title"><i class="uil uil-file-alt"></i> {{ about.windowTitle }}</span>
                </div>
                <div class="term-window__body">
                    <p class="about__prompt prompt">
                        <span class="user">hilman</span><span class="at">@</span><span class="host">portfolio</span><span class="sym">:</span><span class="path">~</span><span class="sym">$</span>
                        <span class="cmd">cat {{ about.windowTitle }}</span>
                    </p>

                    <p class="about__description">{{ about.description }}</p>

                    <div class="about__info">
                        <div v-for="(stat, i) in about.stats" :key="i">
                            <span class="about__info-title">{{ stat.value }}</span>
                            <span class="about__info-name">{{ stat.label }}</span>
                        </div>
                    </div>

                    <div class="about__buttons">
                        <a download="" :href="about.cv" class="button button--flex">
                            wget resume.pdf<i class="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import data from '../../data/portfolio.json'

export default {
    name: 'About',
    data() {
        return { about: data.about }
    }
};
</script>
