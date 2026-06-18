<template>
    <section class="testimonial section">
        <h2 class="section__title">{{ testimonials.title }}</h2>
        <span class="section__subtitle">{{ testimonials.subtitle }}</span>

        <div class="testimonial__container container swiper">
            <div class="swiper-wrapper">
                <div class="testimonial__content swiper-slide" v-for="(item, i) in testimonials.items" :key="i">
                    <div class="testimonial__data">
                        <div class="testimonial__header">
                            <img :src="item.image" class="testimonial__img" alt="">

                            <div>
                                <h3 class="testimonial__name">{{ item.name }}</h3>
                                <span class="testimonial__client">{{ item.role }}</span>
                            </div>
                        </div>

                        <div>
                            <i class="uil uil-star testimonial__icon-star" v-for="n in item.rating" :key="n"></i>
                        </div>
                    </div>

                    <p class="testimonial__description">{{ item.text }}</p>
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-testimonial"></div>
        </div>
    </section>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
    name: 'Testimonial',
    data() {
        return { testimonials: data.testimonials }
    }
}
</script>
