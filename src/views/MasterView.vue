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
        
        <!--==================== SCROLL TOP ====================-->
        <a href="#" class="scrollup" id="scroll-up">
            <i class="uil uil-arrow-up scrollup__icon"></i>
        </a>
</template>


<script>
import Headerr from './pages/HeaderrView.vue';
import Home from './pages/HomeView.vue';
import About from './pages/AboutView.vue';
import Skills from './pages/SkillsView.vue';
import Qualification from './pages/QualificationView.vue';
import Services from './pages/ServicesView.vue';
import Portfolio from './pages/PortfolioView.vue';
import Project from './pages/ProjectView.vue';
import Testimonial from './pages/TestimonialView.vue';
import Contact from './pages/ContactView.vue';
import Footerr from './pages/FooterView.vue';

export default {
    components: {Headerr, Home, About, Skills, Qualification, Services, Portfolio, Project, Testimonial, Contact, Footerr},
    name: 'Master'
};
</script>