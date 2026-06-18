<template>
        <!--==================== HEADER ====================-->
        <headerr/>

        <!--==================== MAIN ====================-->
        <main class="main">
            <!--==================== HOME ====================-->
            <home/>

            <!--==================== ABOUT ====================-->
            <about/>

            <!--==================== SKILLS ====================-->
            <skills/>

            <!--==================== GITHUB ACTIVITY ====================-->
            <github/>

            <!--==================== QUALIFICATION ====================-->
            <qualification/>

            <!--==================== SERVICES ====================-->
            <services/>

            <!--==================== PORTFOLIO ====================-->
            <portfolio/>

            <!--==================== PROJECT IN MIND ====================-->
            <project/>

            <!--==================== TESTIMONIAL ====================-->
            <testimonial/>

            <!--==================== CONTACT ME ====================-->
            <contact/>
        </main>

        <!--==================== FOOTER ====================-->
        <footerr/>
        
        <!--==================== WHATSAPP FLOAT ====================-->
        <a :href="'https://wa.me/' + whatsapp" class="whatsapp-float" target="_blank" rel="noopener"
            aria-label="Chat on WhatsApp">
            <i class="uil uil-whatsapp"></i>
        </a>
</template>


<script>
import Headerr from './pages/HeaderrView.vue';
import Home from './pages/HomeView.vue';
import About from './pages/AboutView.vue';
import Skills from './pages/SkillsView.vue';
import Github from './pages/GithubView.vue';
import Qualification from './pages/QualificationView.vue';
import Services from './pages/ServicesView.vue';
import Portfolio from './pages/PortfolioView.vue';
import Project from './pages/ProjectView.vue';
import Testimonial from './pages/TestimonialView.vue';
import Contact from './pages/ContactView.vue';
import Footerr from './pages/FooterView.vue';
import data from '../data/portfolio.json';

export default {
    components: {Headerr, Home, About, Skills, Github, Qualification, Services, Portfolio, Project, Testimonial, Contact, Footerr},
    name: 'Master',
    data() {
        return { whatsapp: data.whatsapp }
    }
};
</script>