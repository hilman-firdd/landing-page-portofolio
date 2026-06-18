<template>
    <section class="qualification section">
        <h2 class="section__title">{{ qualification.title }}</h2>
        <span class="section__subtitle">{{ qualification.subtitle }}</span>

        <div class="qualification__container container">
            <div class="qualification__tabs">
                <div class="qualification__button button--flex qualification__active" data-target="#education">
                    <i class="uil uil-graduation-cap qualification__icon"></i>
                    education
                </div>

                <div class="qualification__button button--flex" data-target="#work">
                    <i class="uil uil-briefcase-alt qualification__icon"></i>
                    work
                </div>
            </div>
            <div class="qualification__sections">
                <!--==================== EDUCATION ====================-->
                <div class="qualification__content qualification__active" data-content id="education">
                    <div class="qualification__data" v-for="(item, i) in qualification.education" :key="'edu' + i">
                        <div>
                            <h3 class="qualification__title">{{ item.title }}</h3>
                            <span class="qualification__subtile">{{ item.place }}</span>
                            <div class="qualification__calender">
                                <i class="uil uil-calender-alt"></i>
                                {{ item.date }}
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <!--==================== WORK ====================-->
                <div class="qualification__content" data-content id="work">
                    <div class="qualification__data" v-for="(item, i) in qualification.work" :key="'work' + i">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">{{ item.title }}</h3>
                            <span class="qualification__subtile">{{ item.place }}</span>
                            <div class="qualification__calender">
                                <i class="uil uil-calender-alt"></i>
                                {{ item.date }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
    name: 'Qualification',
    data() {
        return { qualification: data.qualification }
    }
}
</script>
