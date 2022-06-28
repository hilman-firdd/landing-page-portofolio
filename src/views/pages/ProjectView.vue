<template>
    <section class="project section">
        <div class="project__bg">
            <div class="project__container container grid">
                <div class="project__data">
                    <h2 class="project__title">You have a new project</h2>
                    <p class="project__description">Contact me now and get a 30% discount on your new project.
                    </p>
                    <a href="#contact" class="button button--flex button--white">
                        Contact Me <i class="uil uil-message project__icon button__icon"></i>
                    </a>
                </div>

                <img src="frontend/assets/img/project1.png" alt="" class="project__img">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Project'
}

</script>