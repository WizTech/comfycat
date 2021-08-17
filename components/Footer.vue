<template>
    <footer class="dark-bg">
        <div class="g_section-half">
            <b-container>
                <b-row>
                    <b-col lg="3">
                        <a href="#" class="footer-brand"><img src="~assets/images/logo-white.png" alt="logo"></a>
                        <ul class="socail-media">
                            <li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']"/></a></li>
                            <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']"/></a></li>
                            <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a></li>
                            <li><a href="#"><font-awesome-icon :icon="['fab', 'linkedin']"/></a></li>
                        </ul>
                    </b-col>
                    <b-col lg="5" class="my-lg-0 my-5">
                        <div class="footer-menus">
                            <ul class="single-menu">
                                <li><NuxtLink to="product">Cat Litter Subscription</NuxtLink></li>
                                <li><NuxtLink to="product">Self-Cleaning Litter Boxes</NuxtLink></li>
                            </ul>
                            <ul class="single-menu">
                                <li><NuxtLink to="about">ABOUT US</NuxtLink></li>
                                <li><NuxtLink to="contact_us">contact US</NuxtLink></li>
                                <li><NuxtLink to="support">SUPPORT</NuxtLink></li>
                            </ul>
                            <ul class="single-menu">
                                <li><NuxtLink to="legal">LEGAL</NuxtLink></li>
                                <li><NuxtLink to="shipping">SHIPPING</NuxtLink></li>
                                <li><NuxtLink to="return">RETURNS</NuxtLink></li>
                            </ul>
                        </div>
                    </b-col>
                    <b-col lg="4" md="8">
                        <div class="newsletter">
                            <h4>NEWSLETTER</h4>
                            <p>Kitty fun and goodies for you on the meeeeownu (menu). Get in touch!</p>
                            <b-form>
                                <b-input-group>
                                    <b-form-input placeholder="Enter your email"></b-form-input>
                                    <template #append>
                                        <b-button variant="theme" class="btn-med no-line">Subscribe</b-button>
                                    </template>
                                </b-input-group>
                            </b-form>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="cpr">
            <p>© 2021, COMFYCAT </p>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>