<template>
    <section class="g_section faq">
        <b-container>
            <b-row>
                <b-col lg="6">
                    <div class="content">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                    </div>
                </b-col>
                <b-col lg="6">
                    <div class="faq-section">
                        <div class="faqSingle">
                            <h3 class="faqTitle" v-b-toggle.collapse-1>How can I stop my Litter subscription?</h3>
                            <b-collapse id="collapse-1">
                                <p>
                                    Just log into your account at any time to cancel your subscription without any cancellation fees.
                                </p>
                            </b-collapse>
                        </div>
                        <div class="faqSingle">
                            <h3 class="faqTitle" v-b-toggle.collapse-2>How can I make adjustments to my Litter subscription?</h3>
                            <b-collapse id="collapse-2">
                                <p>
                                    You can log into your account to make changes such as changing the quantity or skipping some deliveries. We will also send you emails before we ship so you have the opportunity to make adjustments, if required.
                                </p>
                            </b-collapse>
                        </div>
                        <div class="faqSingle">
                            <h3 class="faqTitle" v-b-toggle.collapse-3>I am not happy with my order and/or My order is incomplete.</h3>
                            <b-collapse id="collapse-3">
                                <p>
                                    Just submit a ticket and we will be right on it.
                                </p>
                            </b-collapse>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>