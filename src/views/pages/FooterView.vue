<template>
    <footer class="footer">
        <div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <h1 class="footer__title">{{ footer.title }}</h1>
                    <span class="footer__subtitle">{{ footer.subtitle }}</span>
                </div>

                <ul class="footer__links">
                    <li v-for="(link, i) in footer.links" :key="i">
                        <a :href="link.href" class="footer_link">{{ link.label }}</a>
                    </li>
                </ul>

                <div class="footer__socials">
                    <a v-for="(social, i) in footer.socials" :key="i" :href="social.url"
                        class="footer__social" target="_blank" rel="noopener">
                        <i class="uil" :class="social.icon"></i>
                    </a>
                </div>
            </div>

            <div class="footer__bottom">
                <a href="#home" class="footer__top">
                    cd ~/top <i class="uil uil-arrow-up"></i>
                </a>
                <p class="footer__copy">&#169; {{ footer.copyright }}</p>
            </div>
        </div>
    </footer>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
    name: 'Footer',
    data() {
        return { footer: data.footer }
    }
}
</script>
