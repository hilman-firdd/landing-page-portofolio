<template>
    <section class="about section" id="about">
        <h2 class="section__title">whoami</h2>
        <span class="section__subtitle">cat about.md</span>

        <div class="about__container container grid">
            <img src="frontend/assets/img/about-2.jpeg" alt="" class="about__img">

            <div class="about__data term-window">
                <div class="term-window__bar">
                    <div class="term-window__dots"><span></span><span></span><span></span></div>
                    <span class="term-window__title"><i class="uil uil-file-alt"></i> about.md</span>
                </div>
                <div class="term-window__body">
                    <p class="about__prompt prompt">
                        <span class="user">hilman</span><span class="at">@</span><span class="host">portfolio</span><span class="sym">:</span><span class="path">~</span><span class="sym">$</span>
                        <span class="cmd">cat about.md</span>
                    </p>

                    <p class="about__description">Software Engineer with extensive knowledge and years of experience,
                        working across web technologies, SDET &amp; test automation, DevOps and UI/UX, delivering
                        quality work end-to-end.
                    </p>

                    <div class="about__info">
                        <div>
                            <span class="about__info-title">08+</span>
                            <span class="about__info-name">years <br> uptime</span>
                        </div>
                        <div>
                            <span class="about__info-title">50+</span>
                            <span class="about__info-name">projects <br> shipped</span>
                        </div>
                        <div>
                            <span class="about__info-title">04+</span>
                            <span class="about__info-name">companies <br> deployed</span>
                        </div>
                    </div>

                    <div class="about__buttons">
                        <a download="" href="frontend/assets/pdf/Hilman-Firdaus-CV.pdf" class="button button--flex">
                            wget resume.pdf<i class="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'About'
};
</script>
