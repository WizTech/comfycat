<template>
  <div class="productCartDesc seller">
    <div class="sell_desc">
      <h2>{{product.name}}</h2>
      <div class="sell_price">
        <h2 class="active">${{product.price}}</h2>
      </div>
      <hr>
      <div class="content">
        <p>Your scooping days are over. Comfycat Zen is a fully automatic, self-cleaning litter box for cats. It is safe
          & quiet and has great odour control.</p>
        <ul>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Self-Cleaning, Hands-off
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Works with all Clumping Litters
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Best with cats 4.4 lb to 15.4 lb
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Free Shipping. Ships in 3-7 days
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            Wi-Fi enabled. Cat Health Tracking
          </li>
          <li>
            <font-awesome-icon :icon="['fa', 'check-square']"/>
            30 Days Money Back Guarantee
          </li>
        </ul>
      </div>
      <div class="sellCard">
        <div class="shipping-zone">
          <b-row>
            <b-col lg="5" cols="5">
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
          </b-row>
        </div>
        <b-row class="mb-md-4">
          <b-col md="5">
            <div class="color_pallete">
              <p>Color: <strong data-color-refer="white">white</strong></p>
              <div class="palletes">
                <!--<div class="single">
                  <b-form-radio name="product_color" value="blue" class="form-check">
                    <span style="background: #DBE7FF"></span>
                  </b-form-radio>
                </div>
                <div class="single">
                  <b-form-radio name="product_color" value="blue" class="form-check">
                    <span style="background: #FCF0ED"></span>
                  </b-form-radio>
                </div>-->
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
        </b-row>
        <b-row>
          <b-col lg="12" class="pt-md-2">
            <b-button @click="addItem(product.id);addGoal()" variant="theme" class="w-100"   v-b-modal.addToCart>add to cart
            </b-button>
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
        <p class="active text-center">
          <font-awesome-icon :icon="['far', 'check-square']" class="mr-2"/>
          You qualify for free shipping!
        </p>
        <div class="productSelected">
          <div class="singleProduct" v-for="cartProduct in cartData" :key="cartProduct.id">

            <div class="singleImage">
              <b-img :src="require(`@/assets/images/${cartProduct.images}`)"  fluid alt="eo14"></b-img>
            </div>
            <div class="singleDesc">
              <b-button variant="transparent" class="discardProduct" @click="removeItem(cartProduct.id)">
                <font-awesome-icon :icon="['far', 'times-circle']"/>
              </b-button>
              <h5 class="text-uppercase">{{cartProduct.name}}</h5>
              <h5>Size: 20lb</h5>
              <h5>Price: <span class="active">${{cartProduct.price}}</span></h5>
              <!--<h5>Deliver:</h5>
              <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" checked>
                Once every 2 months
              </b-form-checkbox>
              <b-form-checkbox id="checkbox-2" name="checkbox-2" value="accepted">
                Once every 3 months
              </b-form-checkbox>-->
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
      <div class="cartRecommended">
        <h5>INCLUDED FOR FREE:</h5>
        <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" checked>
          <small>Subscription to Litter automatically activated but users get 2 Free months of the subscription</small>
        </b-form-checkbox>
        <div class="forFree">
          <div class="freeItem">
            <div class="freeImg">
              <b-img src="~assets/images/product1.png" fluid alt="product"></b-img>
            </div>
            <div class="freeDesc">
              <p>{{recommendProduct.name}}</p>
              <!-- <b-button @click="addItem(recommendProduct.id)" variant="outline-theme" class="btn-med w-100">Free</b-button> -->
            </div>
          </div>
        </div>
      </div>
      <div class="addCartSection footer">
        <p class="text-center bold">SUBTOTAL: ${{subTotal}} <NuxtLink to="/cart" class="active ml-4">VIEW CART</NuxtLink></p>
        <b-button variant="theme" class="w-100" :to="'/checkout'">checkout now</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
    import {mapGetters, mapState, mapMutations} from 'vuex'

    export default {
        methods: {
            addGoal() {
                this.$ga.event('Button', 'Click', 'Add to Cart Button', Date.now())
            },
            ...mapMutations(['addItem', 'removeItem'])
        },
        computed: {
            product() {
                return this.$store.getters.getProductById(this.$route.params.id);
            },
            recommendProduct() {
                return this.$store.getters.getRecommendProductById(this.$route.params.id);
            },
            ...mapState([
                'cartData','subTotal'
            ])

        }
    }
</script>

<style lang="scss" scoped>

</style>
