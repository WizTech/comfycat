<template>
  <section class="doubleLayout">
    <b-container>
      <b-row>
        <b-col lg="7" class="order-lg-0 order-1">
          <div class="checkout-main">
            <div class="content">
                <h2>Thank You</h2>
            </div>
            <div class="orderConfirmTitle">
              <h4 class="text-uppercase">
                Your Order is booked
              </h4>
            </div>
            <div class="orderConfirmedDesc">
              <div class="content">
                  <ul class="mb-md-4 mb-3">
                    <li>Your order is now in production</li>
                    <li>Estimated shipping time is: <strong>{{estimateTime}}.</strong></li>
                    <li><strong>1 week before shipping, we will send you an email with a payment request.</strong></li>
                  </ul>
                  <p class="fs-1 mb-md-4 mb-2">
                    We thank you for your interest and welcome you to the Comfycat.com Community and soon, to a life wthout scooping!
                  </p>
                  <p class="fs-1">
                    Kind regards, <br>
                    The <NuxtLink to="/">www.comfycat.com</NuxtLink> team!
                  </p>
              </div>
            </div>
            <div class="checkoutTerms">
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col lg="5" class="order-lg-1 order-0">
          <aside>
            <b-col lg="11" md="8">
              <div class="sidebarContent">
                <div class="content text-lg-left text-md-center text-left">
                  <h3>order summary</h3>
                  <div class="forFree mt-4" v-for="product in cartData">
                    <div class="freeItem bg-white">
                      <div class="freeImg">
                        <b-img :src="require(`@/assets/images/${product.images}`)" fluid alt="product"></b-img>
                      </div>
                      <div class="freeDesc cartCard">
                        <div class="summaryCart text-left">
                          <h6>{{product.name}}</h6>
                          <h5 class="active d-block d-lg-none">${{product.price}}</h5>
                          <p>Size: 20lb</p>
                          <p>Quantity: 1</p>
                          <p>(Once every 2 months)</p>
                        </div>
                        <h5 class="active d-none d-lg-block">${{product.price}}</h5>
                      </div>
                    </div>
                  </div>
                  <div class="promoCode">
                      <b-form>
                          <b-row>
                              <b-col lg="8" cols="8" class="pr-0">
                                  <b-form-input placeholder="Discount code"></b-form-input>
                              </b-col>
                              <b-col lg="4" cols="4">
                                  <b-button variant="theme" disabled class="btn-med no-line mt-0 w-100">apply</b-button>
                              </b-col>
                          </b-row>
                      </b-form>
                  </div>
                  <div class="summary">
                    <div class="summaryTotals m-0">
                      <div class="singleTotal">
                        <p>Subtotal</p>
                        <p>${{subTotal}}</p>
                      </div>
                      <div class="singleTotal">
                        <p>Shipping</p>
                        <p>{{billingData.shipping_method}}</p>
                      </div>
                      <div class="singleTotal total">
                        <p>Total</p>
                        <p>${{subTotal}}</p>
                      </div>
                    </div>
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
    import {mapState} from 'vuex'

    export default {
        data(){
            return {
              estimateTime: Date.now()
            }
        },
        methods: {
            callFunction: function () {
                let future = new Date();
                future.setDate(future.getDate() + 30);
                const monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"
                ];

                let estimateMonth = monthNames[future.getMonth()];
                let estimateDate = future.getDate()
                this.estimateTime = estimateMonth+' '+estimateDate;
            }
        },
        mounted() {
            this.callFunction()
        },
        computed: {
            ...mapState([
                'cartData', 'subTotal', 'billingData'
            ])

        }
    }
</script>

<style lang="scss" scoped>

</style>
