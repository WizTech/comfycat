<template>
    <section class="g_section seller">
        <b-container>
            <b-row class="align-items-center">
                <b-col lg="6">
                    <div class="sell_image text-center">
                        <b-img src="~assets/images/product3.png" fluid alt="product2"></b-img>
                    </div>
                </b-col>
                <b-col lg="6">
                    <div class="sell_desc" v-bind:class="{ sellV2: version_v2}">
                        <h2 class="text-uppercase">ComfyCat Max Self-Cleaning Litter Box </h2>
                        <div class="sell_price" v-if="!this.version_v1">
                            <h2>$399</h2>
                            <h4 class="cut-price active"><strike>$499 USD</strike> (20% OFF, VERSION 2.0 LAUNCH SPECIAL)</h4>
                        </div>
                        <div class="sell_price" v-else>
                            <h2 class="active">$499</h2>
                            <h4 class="cut-price"><strike>$650</strike></h4>
                        </div>
                        <p>Only <strong>10</strong> left at New Launch Price</p>
                        <b-row class="mt-4">
                            <b-col md="5" class="order-0">
                                <div class="color_pallete">
                                    <p>Color: <strong data-color-refer="blue">blue</strong></p>
                                    <div class="palletes">
                                        <div class="single">
                                            <b-form-radio name="product_color" value="blue" class="form-check">
                                                <span style="background: #DBE7FF"></span>
                                            </b-form-radio>
                                        </div>
                                        <div class="single">
                                            <b-form-radio name="product_color" value="blue" class="form-check">
                                                <span style="background: #FCF0ED"></span>
                                            </b-form-radio>
                                        </div>
                                        <div class="single">
                                            <b-form-radio name="product_color" value="blue" class="form-check">
                                                <span style="background: #F5F7F6"></span>
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                            <b-col md="6" class="order-md-1 order-2">
                                <div class="d-flex">
                                    <div class="quantity">
                                        <div class="quantity-btns d-md-none d-block">
                                            <b-button variant="dec"><font-awesome-icon :icon="['fa', 'angle-down']"/></b-button>
                                        </div>
                                        <p class="quantity-no">
                                            <span class="d-md-inline-block d-none ml-2">Quantity:</span>
                                            <span class="itemInCart">1</span>
                                        </p>
                                        <div class="quantity-btns">
                                            <b-button variant="inc"><font-awesome-icon :icon="['fa', 'angle-up']"/></b-button>
                                            <b-button variant="dec" class="d-none d-md-block"><font-awesome-icon :icon="['fa', 'angle-down']"/></b-button>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="12" class="order-md-2 order-1">
                                <div class="giveaway">
                                    <div class="giveaway_img">
                                        <b-img src="~assets/images/giveaway.png" fluid alt="giveaway"></b-img>
                                    </div>
                                    <div class="giveaway_desc">
                                        <p>
                                            Free Gift if order placed before April 15th:
                                            USB rechargeable Crazy Jumping and Rolling Cat Ball!
                                            <strong class="d-block">A $50 Value</strong>
                                        </p>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col lg="12" v-if="this.version_v2">
                                <div class="form-group">
                                    <b-form-input placeholder="Your email address"></b-form-input>
                                </div>
                                <b-row class="ready-btn">
                                    <b-col md="6" class="mb-md-0 mb-3">
                                        <b-button variant="theme" class="w-100" to="cart" >I AM READY: ADD TO CART</b-button>
                                    </b-col>
                                    <b-col md="6">
                                        <b-button variant="theme" class="w-100">
                                            I AM NOT READY:
                                            <small class="d-block">
                                                Email me More information &amp; Your Free e-book: ‘How to Choose the Perfect Self-Cleaning Cat Litter Box and the Healthiest Cat Litter
                                            </small>
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col lg="10" v-else>
                                <div class="form-group" v-show="this.version_v1">
                                    <b-form-input placeholder="Your email address"></b-form-input>
                                </div>
                                <b-button variant="theme" class="w-100" to="cart">add to cart</b-button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div v-show="this.showHideArrows" class="spinner scroll-down"> <a class="animate"></a> </div>
    </section>
</template>

<script>
    export default {
        props: ['version', 'withArrows', 'versionV2'],
        data(){
            return {
                version_v1: this.version,
                version_v2: this.versionV2,
                showHideArrows: this.withArrows,
            }
        },
        methods: {
            addGoal() {
                this.$ga.event('Button', 'Click', 'Add to Cart Button', Date.now())
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
