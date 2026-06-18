<template>
    <section class="project section">
        <div class="project__bg">
            <div class="project__container container grid">
                <div class="project__data">
                    <h2 class="project__title">{{ project.title }}</h2>
                    <p class="project__description">{{ project.description }}</p>
                    <a href="#contact" class="button button--flex button--white">
                        {{ project.button }} <i class="uil uil-message project__icon button__icon"></i>
                    </a>
                </div>

                <img :src="project.image" alt="" class="project__img">
            </div>
        </div>
    </section>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
    name: 'Project',
    data() {
        return { project: data.projectCta }
    }
}
</script>
