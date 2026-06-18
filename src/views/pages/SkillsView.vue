<template>
    <section class="skills section" id="skills">
        <h2 class="section__title">{{ skills.title }}</h2>
        <span class="section__subtitle">{{ skills.subtitle }}</span>

        <div class="skills_container container grid">
            <div>
                <div v-for="(group, gi) in skills.groups" :key="gi" class="skills__content"
                    :class="gi === 0 ? 'skills__open' : 'skills__close'">
                    <div class="skills__header">
                        <i class="uil skills__icon" :class="group.icon"></i>

                        <div>
                            <h1 class="skills__titles">{{ group.title }}</h1>
                            <span class="skills__subtitle">{{ group.subtitle }}</span>
                        </div>

                        <i class="uil uil-angle-down skills__arrow"></i>
                    </div>

                    <div class="skills__list grid">
                        <div v-for="(item, ii) in group.items" :key="ii" class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills_name">{{ item.name }}</h3>
                                <span class="skills__number">{{ item.level }}%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage" :style="{ '--lvl': item.level + '%' }"></span>
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
    name: 'Skills',
    data() {
        return { skills: data.skills }
    }
}
</script>
