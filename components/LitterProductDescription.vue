<template>
  <div class="productCartDesc seller litterSale">
    <div class="sell_desc">
      <h2 class="text-uppercase">100% Natural Corn & Tofu Litter</h2>
      <div class="sell_price">
        <h2 class="active">$25 per month per Cat. 10lbs of 100% Natural Litter</h2>
      </div>
      <hr>
      <div class="content">
        <p>Only made of natural ingredients: Corn-Kernels and Soy-Beans (Tofu). The strength of Corn combined with the super absorbent Plant fibers found in Tofu quickly absorb liquids and produce solid, tight clumps. </p>
        <ul>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            3x Better Clumping than Clay
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Healthier for your cat (all Natural)
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Very strong odor control
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Free shipping. Ships in 2-5 days
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Low tracking and Soft on Paws
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Cancel Plan anytime
          </li>
        </ul>
      </div>
        <b-tabs class="subscribeTabs" v-model="tabIndex">
            <b-tab title="purchase">
                <div class="sellCard">
                    <b-row>
                        <b-col cols="12" class="mb-md-3 mb-2">
                            <p>Minimum order size of 20lb</p>
                        </b-col>
                        <b-col cols="12" class="radio-pill">
                            <b-form-group label="Size: ">
                                <b-form-radio name="p_size" value="20lb ($50)" button button-variant="outline-gray" class="mr-2">20lb ($50)</b-form-radio>
                                <b-form-radio name="p_size" value="30lb ($70)" button button-variant="outline-gray">30lb ($70)</b-form-radio>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" class="radio-pill mb-md-4 mb-3">
                            <b-button variant="outline-gray" to="/litter"  @click="setBuyType('subscribe')">Subscribe and Save 20%</b-button>
                        </b-col>
                        <b-col cols="12">
                            <p class="mb-md-4 mb-3">Order ships in the next 24 hours. <strong>Free shipping.</strong></p>
                        </b-col>
                        <b-col lg="5">
                            <div class="d-flex">
                                <div class="quantity">
                                    <div class="quantity-btns d-md-none d-block">
                                    <b-button variant="dec">
                                        <font-awesome-icon :icon="['fa', 'angle-down']"/>
                                    </b-button>
                                    </div>
                                    <p class="quantity-no">
                                    <span class="d-md-inline-block d-none ml-2">Quantity:</span>
                                    <span class="itemInCart">1</span>
                                    </p>
                                    <div class="quantity-btns">
                                    <b-button variant="inc">
                                        <font-awesome-icon :icon="['fa', 'angle-up']"/>
                                    </b-button>
                                    <b-button variant="dec" class="d-none d-md-block">
                                        <font-awesome-icon :icon="['fa', 'angle-down']"/>
                                    </b-button>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col lg="7">
                            <b-button variant="theme" class="w-100" @click="addItem(1);addGoal"  v-b-modal.addToCart>
                                add to cart
                            </b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-tab>
            <b-tab title="subscribe">
                <div class="sellCard">
                    <b-row>
                        <b-col cols="12" class="mb-md-3 mb-2">
                            <p>We recommend 10 lb per Month per Cat</p>
                        </b-col>
                        <b-col cols="12" class="radio-pill">
                            <b-form-group label="Size: ">
                                <b-form-radio name="p_size" value="20lb" button button-variant="outline-gray">20lb</b-form-radio>
                                <b-form-radio name="p_size" value="30lb" button button-variant="outline-gray">30lb</b-form-radio>
                                <b-form-radio name="p_size" value="40lb" button button-variant="outline-gray">40lb</b-form-radio>
                                <b-form-radio name="p_size" value="50lb" button button-variant="outline-gray">50lb</b-form-radio>
                                <b-form-radio name="p_size" value="60lb" button button-variant="outline-gray">60lb</b-form-radio> <br>
                                <b-form-radio name="p_size" value="70lb" button button-variant="outline-gray">70lb</b-form-radio>
                                <b-form-radio name="p_size" value="80lb" button button-variant="outline-gray">80lb</b-form-radio>
                                <b-form-radio name="p_size" value="90lb" button button-variant="outline-gray">90lb</b-form-radio>
                                <b-form-radio name="p_size" value="120lb" button button-variant="outline-gray">120lb</b-form-radio>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" class="radio-pill mt-2">
                            <b-form-group label="How frequently:">
                                <b-form-radio name="p_size" value="Once every 2 months" button button-variant="outline-gray">Once every 2 months</b-form-radio>
                                <b-form-radio name="p_size" value="Once every 3 months – save 10%" button button-variant="outline-gray">Once every 3 months – save 10%</b-form-radio>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" class="mb-md-4 mb-3">
                            <p class="mb-2">We will ship <strong>40 lb</strong> every <strong>3 months</strong></p>
                            <p class="mb-2">This is enough Litter for <strong>1 Cat</strong>.</p>
                            <p class="mb-2">Order ships in the next 24 hours. <strong>Free shipping.</strong></p>
                            <p class="mb-2">You can Cancel Anytime the Subscription.</p>
                        </b-col>
                        <b-col lg="7">
                            <b-button variant="theme" class="w-100" @click="addItem(1);addGoal" v-b-modal.addToCart>
                                add to cart
                            </b-button>
                        </b-col>
                        <b-col cols="12">
                            <div class="shipping-zone mb-0 mt-4">
                                <b-row>
                                    <b-col lg="4" cols="5">
                                    <div class="s-ship">
                                        <div class="ship-icon">
                                        <b-img src="~assets/images/free_shipping_1.png" fluid alt="free_shipping"></b-img>
                                        </div>
                                        <p>free <br>shipping</p>
                                    </div>
                                    </b-col>
                                    <b-col lg="5" cols="7">
                                        <div class="s-ship">
                                            <div class="ship-icon">
                                            <b-img src="~assets/images/guarantee.png" fluid alt="guarantee"></b-img>
                                            </div>
                                            <p>30-day risk free guarantee</p>
                                        </div>
                                    </b-col>
                                    <b-col lg="3" cols="5">
                                        <div class="s-ship">
                                            <div class="ship-icon">
                                            <b-img src="~assets/images/cancel.png" fluid alt="guarantee"></b-img>
                                            </div>
                                            <p>Cancel <br> anytime</p>
                                        </div>
                                    </b-col>
                                </b-row>
                                </div>
                        </b-col>
                    </b-row>
                </div>
            </b-tab>
        </b-tabs>
    </div>
    <div class="forFree">
      <b-row>
        <b-col cols="12">
            <p>RECOMMENDED WITH:</p>
        </b-col>
        <b-col lg="9">
            <div class="freeItem">
            <div class="freeImg">
                <b-img src="~assets/images/selfClean.png" fluid alt="litterRecommend"></b-img>
            </div>
            <div class="freeDesc">
                <p>Comfycat Max Self-Cleaning Litter Box</p>
                <b-button variant="outline-theme" size="sm" @click="addItem(1);addGoal()">$399 – ADD TO CART</b-button>
            </div>
            </div>
        </b-col>
      </b-row>
    </div>
    <b-modal id="addToCart" title="your cart" hide-footer modal-class="addToCart">
      <div class="addCartSection">
        <p class="active text-center">
          <font-awesome-icon :icon="['far', 'check-square']" class="mr-2"/>
          You qualify for free shipping!
        </p>
        <div class="productSelected">
          <div class="singleProduct">
            <div class="singleImage">
              <b-img src="~assets/images/eo14.png"  fluid alt="eo14"></b-img>
            </div>
            <div class="singleDesc">
              <b-button variant="transparent" class="discardProduct">
                <font-awesome-icon :icon="['far', 'times-circle']"/>
              </b-button>
              <h5 class="text-uppercase">100% Natural Corn & Tofu Litter</h5>
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
                  <b-button variant="dec">
                    <font-awesome-icon :icon="['fa', 'angle-down']"/>
                  </b-button>
                </div>
                <p class="quantity-no m-0">
                  <span class="d-md-inline-block d-none ml-2">Quantity:</span>
                  <span class="itemInCart">1</span>
                </p>
                <div class="quantity-btns">
                  <b-button variant="inc">
                    <font-awesome-icon :icon="['fa', 'angle-up']"/>
                  </b-button>
                  <b-button variant="dec" class="d-none d-md-block">
                    <font-awesome-icon :icon="['fa', 'angle-down']"/>
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cartRecommended d-none">
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
        <p class="text-center bold">SUBTOTAL: $50 <NuxtLink to="cart" class="active ml-4">VIEW CART</NuxtLink></p>
        <b-button variant="theme" class="w-100" :to="'/checkout'">checkout now</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
    import {mapGetters, mapState, mapMutations} from 'vuex'
    export default {
        methods:{
            ...mapMutations(['addItem', 'removeItem']),
          addGoal(){
              this.$ga.event('Button', 'Click', 'Add to Cart Button', Date.now())
          },
          ...mapMutations([
              'setBuyType'
          ]),
        },
        computed: {
            tabIndex(){
              return this.buyType == 'subscribe' ? 1 : 0;
            },
            ...mapState([
                'buyType'
            ])

        }
    }
</script>

<style lang="scss" scoped>

</style>
