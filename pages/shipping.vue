<template>
    <main>
        <div class="banner InnerBanner shippingBanner">
            <div class="banner-bg">
                <b-img src="~assets/images/bg.png" alt="thanks"></b-img>
            </div>
            <div class="banner-content" v-bind:class="bannerVersion">
                <b-container>
                    <b-row class="align-items-center">
                        <b-col lg="6">
                            <div class="content">
                                <h2>Shipping</h2>
                            </div>
                        </b-col>
                        <b-col lg="6" class="pr-md-3 pr-0">
                            <div class="banner-partImg text-center text-lg-left">
                                <b-img src="~assets/images/shipping_cat.png" alt="thanks" fluid></b-img>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
        <Shipping/>
    </main>
</template>

<script>
    export default {
        head() {
            return {
            title: "Comfycat | Shipping",
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>