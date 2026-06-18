<template>
    <section class="portfolio section" id="portfolio">
        <h2 class="section__title">{{ portfolio.title }}</h2>
        <span class="section__subtitle">{{ portfolio.subtitle }}</span>

        <div class="portofolio__container container swiper">
            <div class="swiper-wrapper">
                <div class="portofolio__content grid swiper-slide" v-for="(item, i) in portfolio.items" :key="i">
                    <img :src="item.image" alt="" class="portofolio__img">

                    <div class="portofolio__data">
                        <h3 class="portofolio__title">{{ item.title }}</h3>
                        <p class="portofolio__description">{{ item.description }}</p>
                        <a :href="item.url" target="_blank" rel="noopener"
                            class="button button--flex button--small portofolio__button">
                            Demo
                            <i class="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <!-- add arrows -->
            <div class="swiper-button-next">
                <i class="uil uil-angle-right-b swiper-portofolio-icon"></i>
            </div>
            <div class="swiper-button-prev">
                <i class="uil uil-angle-left-b swiper-portofolio-icon"></i>
            </div>

            <!-- add pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
    name: 'Portfolio',
    data() {
        return { portfolio: data.portfolio }
    }
}
</script>
