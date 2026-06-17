<template>
    <section class="home section" id="home">
        <div class="home__container container grid">
            <div class="home__content grid">
                <div class="home__social">
                    <a href="https://www.linkedin.com/in/hilmanfirdd/" class="home__social-icon" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://www.instagram.com/hilman_firdd" class="home__social-icon" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://github.com/hilman-firdd" class="home__social-icon" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=6281914209656" class="home__social-icon" target="_blank">
                        <i class="uil uil-whatsapp"></i>
                    </a>
                </div>

                <div class="home__data">
                    <div class="hero-term term-window">
                        <div class="term-window__bar">
                            <div class="term-window__dots"><span></span><span></span><span></span></div>
                            <span class="term-window__title"><i class="uil uil-shell"></i> hilman@portfolio: ~</span>
                        </div>
                        <div class="term-window__body hero-term__body">
                            <p class="hero-line"><span class="prompt"><span class="user">visitor</span><span class="at">@</span><span class="host">portfolio</span><span class="sym">:</span><span class="path">~</span><span class="sym">$</span></span> <span id="hero-cmd" class="cmd"></span><span class="cursor" id="hero-cursor"></span></p>
                            <div class="hero-output" id="hero-output" style="display:none">
                                <h1 class="home__title">Hi, I'm <span class="accent">Hilman Firdaus</span></h1>
                                <h3 class="home__subtitle">
                                    <span class="sym">&gt;</span> <span class="role" id="typed-role"></span><span class="cursor"></span>
                                </h3>
                                <p class="home__description">
                                    High level experience in web design &amp; development, building, testing and
                                    shipping high quality software end-to-end.
                                </p>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" class="button button--flex">
                        ./contact.sh <i class="uil uil-message button__icon"></i>
                    </a>
                </div>
            </div>

            <div class="home__scroll">
                <a href="#about" class="home__scroll-button button--flex">
                    <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span class="home__scroll-name">scroll --down</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home'
};
</script>
