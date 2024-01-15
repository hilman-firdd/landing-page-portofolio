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

                <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            <image class="home__blob-img" x="12" y="-25" href="frontend/assets/img/home.png"/>
                        </g>
                    </svg>                            
                </div>

                <div class="home__data">
                    <h1 class="home__title" style="font-size: 25px;">Hi, I'am Hilman Firdaus</h1>
                    <h3 class="home__subtitle" style="font-size: 10px;"> Fullstack Developer & Software Enginer in Test (SDET)</h3>
                    <p class="home__description">High level experience in web design and development knowledge, producing high quality software.
                    </p>
                    <a href="#contact" class="button button--flex">
                        Contact Me <i class="uil uil-message button__icon"></i>
                    </a>
                </div>
            </div>

            <div class="home__scroll">
                <a href="#about" class="home__scroll-button button--flex">
                    <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span class="home__scroll-name">Scroll down</span>
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