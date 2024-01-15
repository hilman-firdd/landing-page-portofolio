<template>
    <section class="services section" id="services">
        <h2 class="section__title">Services</h2>
        <span class="section__subtitle">What i offer</span>

        <div class="services__container container grid">

            <!--==================== SERVICES 1 ====================-->
            <div class="services__content">
                <div>
                    <i class="uil uil-pen services__icon"></i>
                    <h3 class="services__title">Software Enginer <br> in Test (SDET)</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Software <br> Quality</h4>
                        <i class="uil uil-times services__modal-close"></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I create testcase and idea for test strategies.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Implementations in the automation tools.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--==================== SERVICES 2 ====================-->
            <div class="services__content">
                <div>
                    <i class="uil uil-arrow services__icon"></i>
                    <h3 class="services__title">Frondend <br> Developer</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Frondend <br> Developer</h4>
                        <i class="uil uil-times services__modal-close"></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Client-side development</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Test web for usability.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Operation a API between server.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>maintenance features.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--==================== SERVICES 3 ====================-->
            <div class="services__content">
                <div>
                    <i class="uil uil-server-connection services__icon"></i>
                    <h3 class="services__title">Backend <br> Developer</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Backend <br> Developer</h4>
                        <i class="uil uil-times services__modal-close"></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Make a system.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>adding features and maintennace.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>make API between client side.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--==================== SERVICES 4 ====================-->
            <div class="services__content">
                <div>
                    <i class="uil uil-web-grid services__icon"></i>
                    <h3 class="services__title">Ui/Ux <br> Designer</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Ui/Ux <br> Designer</h4>
                        <i class="uil uil-times services__modal-close"></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I develop the user interface.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Web page development.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I create ux element interactions.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

</template>

<script>
export default {
    name: 'Services'
}
</script>