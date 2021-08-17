<template>
    <section class="contactPg">
        <div class="g_section-half">
            <b-container>
                <b-row align-h="center">
                    <b-col lg="7">
                        <div class="content text-center b_hours">
                            <h3>BUSINESS HOURS:</h3>
                            <p><strong>PST TIME ZONE (SAN FRANCISCO):</strong> Mon - Fri from 9 a.m to 5 p.m</p>
                            <p><strong>EST TIME ZONE (NEW YORK, BOSTON):</strong> Mon - Fri from noon to 8 p.m</p>
                            <p><strong>CET TIME ZONE (PARIS, ROME):</strong> Mon - Fri from 6 p.m to 2 a.m</p>
                        </div>
                    </b-col>
                </b-row>
                <b-row align-h="center">
                    <b-col lg="7">
                        <div class="content text-center inTouch">
                            <h3>get in touch with us!</h3>
                            <ul>
                                <li>
                                    <div class="singleIntouch">
                                        <div class="intouchIcon">
                                            <b-img src="~assets/images/mail.png" alt="mail"></b-img>
                                        </div>
                                        <div class="inTouchDesc">
                                            <p>email</p>
                                            <a href="mailto:service@comfycat.com">service@comfycat.com</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
                <b-row align-h="center">
                    <b-col lg="7">
                        <div class="content text-center">
                            <p class="mb-4"><strong>If you got any questions please do not hesitate to send us a message</strong></p>
                        </div>
                        <b-form>
                            <div class="form-group">
                                <b-form-input type="text" placeholder="Your Name"></b-form-input>
                            </div>
                            <div class="form-group">
                                <b-form-input type="email" placeholder="Email"></b-form-input>
                            </div>
                            <div class="form-group">
                                <b-form-input type="text" placeholder="Subject"></b-form-input>
                            </div>
                            <div class="form-group">
                                <b-form-textarea placeholder="Message..." rows="3" max-rows="6"></b-form-textarea>
                            </div>
                            <b-button variant="theme" class="mx-auto">send message</b-button>
                        </b-form>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="contactMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6307.039150533177!2d-122.42223032388047!3d37.77786164903603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808eb456e2dd%3A0xcb1742ab59d38bda!2sCivic%20Center%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2s!4v1629158367223!5m2!1sen!2s" width="600" height="700" style="border:0;" allowfullscreen="" loading="lazy" class="w-100"></iframe>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>