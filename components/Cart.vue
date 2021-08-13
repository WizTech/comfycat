<template>
  <section class="doubleLayout">
    <b-container v-if="Object.keys(cartData).length == 0">
      <b-row>
        <b-col lg="7" class="order-lg-0 order-1">
          <div class="checkout-main">
            <div class="content">
              <h2>your cart</h2>
            </div>
            <div class="checkout-no-content">
              <b-img src="~assets/images/cart.png" fluid alt="cart"></b-img>
              <div class="no-content">
                <h4>Your cart is empty.</h4>
                <p>Kitty is waiting for his goodies!</p>
                <b-button variant="theme">Browse products</b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="5" class="order-lg-1 order-0">
          <aside>
            <div class="sidebarContent">
              <div class="content text-lg-left text-md-center text-left">
                <h3>order summary</h3>
                <p class="active">
                  <font-awesome-icon :icon="['fa', 'info-circle']" class="mr-2"/>
                  Just $20 away from free shipping.
                </p>
                <p class="bold">Add items to your cart to show your totals.</p>
                <b-button variant="gray" class="w-100 m-0">checkout now</b-button>
              </div>
            </div>
          </aside>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-else>
      <b-row>
        <b-col lg="7" class="order-lg-0 order-1">
          <div class="checkout-main">
            <div class="content">
              <h2>your cart</h2>
            </div>
            <div class="addCartSection">
              <div class="productSelected">
                <div class="singleProduct" v-for="product in cartData" :key=product.id>
                  <div class="singleImage">
                    <b-img src="~assets/images/product1.png" fluid alt="product1"></b-img>
                  </div>
                  <div class="singleDesc">
                    <b-button variant="transparent" class="discardProduct">
                      <font-awesome-icon :icon="['far', 'times-circle']"/>
                    </b-button>
                    <h5 class="title">{{product.name}}</h5>
                    <h5>Size: 20lb</h5>
                    <h5>Price: <span class="active">${{product.price}}</span></h5>
                    <div class="checkType">
                      <h5>How frequently should we ship this product?</h5>
                      <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" checked>
                        One Time Purchase
                      </b-form-checkbox>
                      <b-form-checkbox id="checkbox-2" name="checkbox-2" value="accepted">
                        Subscription (Regular Deliveries) – Save 20%
                      </b-form-checkbox>
                    </div>
                    <div class="checkType">
                      <h5>Deliver:</h5>
                      <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" checked>
                        Once every 2 months
                      </b-form-checkbox>
                      <b-form-checkbox id="checkbox-2" name="checkbox-2" value="accepted">
                        Once every 3 months
                      </b-form-checkbox>
                    </div>
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
              <h5>RECOMMENDED WITH:</h5>
              <b-row>
                <b-col lg="6">
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
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
        <b-col lg="5" class="order-lg-1 order-0">
          <aside>
            <b-col md="10">
              <div class="sidebarContent">
                <div class="content text-lg-left text-md-center text-left">
                  <h3>order summary</h3>
                  <p class="active">
                    <font-awesome-icon :icon="['fa', 'check-square']" class="mr-2"/>
                    You qualify for free shipping!
                  </p>
                  <div class="summary">
                    <div class="summaryTotals">
                      <div class="singleTotal">
                        <p>Subtotal</p>
                        <p>$50.00</p>
                      </div>
                      <div class="singleTotal total">
                        <p>Total</p>
                        <p>$50.00</p>
                      </div>
                    </div>
                    <p class="text-center bold text-uppercase small">
                      <NuxtLink to="/">Continue to shopping</NuxtLink>
                    </p>
                    <b-button variant="theme" class="w-100 m-0" to="checkout">checkout now</b-button>
                  </div>
                </div>
              </div>
            </b-col>

          </aside>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState([
                'cartData', 'subTotal'
            ])

        }

    }
</script>

<style lang="scss" scoped>

</style>
