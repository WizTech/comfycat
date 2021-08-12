<template>
    <div class="productCartDesc seller">
        <div class="sell_desc">
            <h2>{{product.name}}</h2>
            <div class="sell_price">
                <h2 class="active">${{product.price}}</h2>
            </div>
            <hr>
            <div class="content">
                <p>Your scooping days are over. Comfycat Zen is a fully automatic, self-cleaning litter box for cats. It is safe & quiet and has great odour control.</p>
                <ul>
                    <li><font-awesome-icon :icon="['fa', 'check-square']"/>Self-Cleaning, Hands-off</li>
                    <li><font-awesome-icon :icon="['fa', 'check-square']"/>Works with all Clumping Litters</li>
                    <li><font-awesome-icon :icon="['fa', 'check-square']"/>Best with cats 4.4 lb to 15.4 lb</li>
                    <li><font-awesome-icon :icon="['fa', 'check-square']"/>Free Shipping.  Ships in 3-7 days</li>
                    <li><font-awesome-icon :icon="['fa', 'check-square']"/>Wi-Fi enabled. Cat Health Tracking</li>
                    <li><font-awesome-icon :icon="['fa', 'check-square']"/>30 Days Money Back Guarantee</li>
                </ul>
            </div>
            <div class="sellCard">
                <div class="shipping-zone">
                    <b-row>
                        <b-col lg="5" cols="5">
                            <div class="s-ship">
                                <div class="ship-icon"><b-img src="~assets/images/free_shipping_1.png" fluid alt="free_shipping"></b-img></div>
                                <p>free <br>shipping</p>
                            </div>
                        </b-col>
                        <b-col lg="5" cols="7">
                            <div class="s-ship">
                                <div class="ship-icon"><b-img src="~assets/images/guarantee.png" fluid alt="guarantee"></b-img></div>
                                <p>30-day risk free guarantee</p>
                            </div>
                        </b-col>
                    </b-row>
                </div>
                <b-row class="mb-md-4">
                    <b-col md="5">
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
                    <b-col md="6" class="mt-md-0 mt-3">
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
                </b-row>
                <b-row>
                    <b-col lg="12" class="pt-md-2">
                        <b-button variant="theme" class="w-100" v-b-modal.addToCart>add to cart</b-button>
                    </b-col>
                </b-row>
            </div>
        </div>
        <div class="forFree">
            <b-col cols="12">
                <p>INCLUDED FOR FREE ($50 VALUE):</p>
            </b-col>
            <b-col lg="9">
                <div class="freeItem">
                    <div class="freeImg">
                        <b-img src="~assets/images/product1.png" fluid alt="product"></b-img>
                    </div>
                    <div class="freeDesc">
                        <p>20LB - 100% Natural Premium Clumping litter (2 months’ supply for a Cat)</p>
                    </div>
                </div>
            </b-col>
        </div>
        <b-modal id="addToCart" title="your cart" hide-footer modal-class="addToCart">
            <div class="addCartSection">
                <p class="active text-center"><font-awesome-icon :icon="['far', 'check-square']" class="mr-2"/>You qualify for free shipping!</p>
                <div class="productSelected">
                    <div class="singleProduct">
                        <div class="singleImage">
                            <b-img src="~assets/images/product1.png" fluid alt="product1"></b-img>
                        </div>
                        <div class="singleDesc">
                            <b-button variant="transparent" class="discardProduct"><font-awesome-icon :icon="['far', 'times-circle']"/></b-button>
                            <h5>100% natural premium clumping litter</h5>
                            <h5>Size: 20lb</h5>
                            <h5>Price: <span class="active">$25</span></h5>
                            <h5>Deliver:</h5>
                            <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" checked>
                                Once every 2 months
                            </b-form-checkbox>
                            <b-form-checkbox id="checkbox-2" name="checkbox-2" value="accepted">
                                Once every 3 months
                            </b-form-checkbox>
                            <div class="quantity mt-3">
                                <div class="quantity-btns d-md-none d-block">
                                    <b-button variant="dec"><font-awesome-icon :icon="['fa', 'angle-down']"/></b-button>
                                </div>
                                <p class="quantity-no m-0">
                                    <span class="d-md-inline-block d-none ml-2">Quantity:</span>
                                    <span class="itemInCart">1</span>
                                </p>
                                <div class="quantity-btns">
                                    <b-button variant="inc"><font-awesome-icon :icon="['fa', 'angle-up']"/></b-button>
                                    <b-button variant="dec" class="d-none d-md-block"><font-awesome-icon :icon="['fa', 'angle-down']"/></b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cartRecommended">
                <h5>RECOMMENDED WITH:</h5>
                <div class="forFree">
                    <div class="freeItem">
                        <div class="freeImg">
                            <b-img src="~assets/images/product1.png" fluid alt="product"></b-img>
                        </div>
                        <div class="freeDesc">
                            <p>Comfycat Zen Self-Cleaning Litter Box</p>
                            <b-button variant="outline-theme" class="btn-med w-100">$399 – ADD TO CART</b-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="addCartSection footer">
                <p class="text-center bold">SUBTOTAL: $50 <a href="#" class="active ml-4">VIEW CART</a></p>
                <b-button variant="theme" class="w-100" to="checkout">checkout now</b-button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
        export default {
            computed: {
                  product(){
                      return this.$store.getters.getProductById(this.$route.params.id);
                  }
              }
        }
</script>

<style lang="scss" scoped>

</style>
