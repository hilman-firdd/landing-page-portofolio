<template>
    <section class="services section" id="services">
        <h2 class="section__title">{{ services.title }}</h2>
        <span class="section__subtitle">{{ services.subtitle }}</span>

        <div class="services__container container grid">
            <div class="services__content" v-for="(item, i) in services.items" :key="i">
                <div>
                    <i class="uil services__icon" :class="item.icon"></i>
                    <h3 class="services__title">{{ item.title }}</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">{{ item.modalTitle }}</h4>
                        <i class="uil uil-times services__modal-close"></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service" v-for="(point, pi) in item.services" :key="pi">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>{{ point }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
    name: 'Services',
    data() {
        return { services: data.services }
    }
}
</script>
