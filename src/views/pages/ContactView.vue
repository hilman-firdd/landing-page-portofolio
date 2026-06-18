<template>
    <section class="contact section" id="contact">
        <h2 class="section__title">{{ contact.title }}</h2>
        <span class="section__subtitle">{{ contact.subtitle }}</span>

        <div class="contact__container container grid">
            <div>
                <div class="contact__information" v-for="(info, i) in contact.items" :key="i">
                    <i class="uil contact__icon" :class="info.icon"></i>

                    <div>
                        <h3 class="contact__title">{{ info.title }}</h3>
                        <span class="contact__subtitle">{{ info.value }}</span>
                    </div>
                </div>
            </div>

            <form action="" class="contact__form grid">
                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">name</label>
                        <input type="text" class="contact__input" placeholder="your_name">
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">email</label>
                        <input type="email" class="contact__input" placeholder="you@domain.com">
                    </div>
                </div>
                <div class="contact__content">
                    <label for="" class="contact__label">project</label>
                    <input type="text" class="contact__input" placeholder="--name my-awesome-app">
                </div>
                <div class="contact__content">
                    <label for="" class="contact__label">message</label>
                    <textarea name="" id="" cols="0" rows="7" class="contact__input" placeholder="echo 'your message here...'"></textarea>
                </div>

                <div>
                    <a href="" class="button button--flex">
                        send --message
                        <i class="uil uil-message button__icon"></i>
                    </a>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
    name: 'Contact',
    data() {
        return { contact: data.contact }
    }
}
</script>