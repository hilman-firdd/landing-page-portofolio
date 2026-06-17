<template>
    <section class="contact section" id="contact">
        <h2 class="section__title">ssh hilman@contact</h2>
        <span class="section__subtitle">open a connection — let's talk</span>

        <div class="contact__container container grid">
            <div>
                <div class="contact__information">
                    <i class="uil uil-phone contact__icon"></i>

                    <div>
                        <h3 class="contact__title">Call me</h3>
                        <span class="contact__subtitle">081914209656</span>
                    </div>
                </div>

                <div class="contact__information">
                    <i class="uil uil-envelope contact__icon"></i>

                    <div>
                        <h3 class="contact__title">Email</h3>
                        <span class="contact__subtitle">halo@hilmanfirdd.my.id</span>
                    </div>
                </div>

                <div class="contact__information">
                    <i class="uil uil-map-marker contact__icon"></i>

                    <div>
                        <h3 class="contact__title">Location</h3>
                        <span class="contact__subtitle">Cigondewah - Kota Bandung</span>
                    </div>
                </div>
            </div>

            <form action="" class="contact__form grid">
                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">name</label>
                        <input type="text" class="contact__input" placeholder="your_name">
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">email</label>
                        <input type="email" class="contact__input" placeholder="you@domain.com">
                    </div>
                </div>
                <div class="contact__content">
                    <label for="" class="contact__label">project</label>
                    <input type="text" class="contact__input" placeholder="--name my-awesome-app">
                </div>
                <div class="contact__content">
                    <label for="" class="contact__label">message</label>
                    <textarea name="" id="" cols="0" rows="7" class="contact__input" placeholder="echo 'your message here...'"></textarea>
                </div>

                <div>
                    <a href="" class="button button--flex">
                        send --message
                        <i class="uil uil-message button__icon"></i>
                    </a>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact'
}
</script>