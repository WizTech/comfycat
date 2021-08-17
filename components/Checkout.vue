<template>
  <section>
    <div class="productBreadcrumb d-lg-block d-none">
      <b-container>
        <b-row>
          <b-breadcrumb class="m-0">
            <b-breadcrumb-item to="/">Premium Clumping Litter</b-breadcrumb-item>
            <b-breadcrumb-item to="cart">Cart</b-breadcrumb-item>
            <b-breadcrumb-item active>Checkout</b-breadcrumb-item>
          </b-breadcrumb>
        </b-row>
      </b-container>
    </div>
    <section class="doubleLayout">
      <b-container>
        <b-row>
          <b-col lg="7" class="order-lg-0 order-1">
            <div class="checkout-main">
              <div class="content">
                <h2>checkout</h2>
              </div>
              <b-form v-bind:class="{ 'd-none': newUser }">
                <div class="singleCheckout dashboardForm">
                  <h4>checkout method</h4>
                  <b-row>
                    <b-col md="6">
                      <h6>Returning customer?</h6>
                      <div class="form-group">
                        <b-form-input type="email" placeholder="Email"></b-form-input>
                      </div>
                      <div class="form-group">
                        <b-form-input type="password" placeholder="Password"></b-form-input>
                        <b-form-text>
                          <p><a href="#">Forgot your password?</a></p>
                        </b-form-text>
                      </div>
                      <b-button variant="theme" class="w-100">login</b-button>
                    </b-col>
                    <b-col md="6" class="mt-md-0 mt-3">
                      <h6>New customer?</h6>
                      <b-button variant="theme" class="w-100" @click="setNewUser(true)">checkout now</b-button>
                    </b-col>
                  </b-row>
                </div>
              </b-form>
              <b-form @submit="submitBilling($event)">
                <div class="singleCheckout dashboardForm" ref="billingDiv">
                  <h4>billing</h4>
                  <div class="alert alert-danger text-left mt-2" v-if="errors.length">
                    <p><b>Please correct the following error(s):</b></p>
                    <ul>
                      <li v-for="error in errors">{{ error }}</li>
                    </ul>
                  </div>
                  <b-row>
                    <b-col md="6">
                      <div class="form-group">
                        <b-form-input placeholder="First Name" v-model="form.first_name"></b-form-input>
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="form-group">
                        <b-form-input placeholder="Last Name"  v-model="form.last_name"></b-form-input>
                      </div>
                    </b-col>
                    <b-col md="12">
                      <div class="form-group">
                        <b-form-input type="email" placeholder="Email" v-model="form.email"></b-form-input>
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="form-group">
                        <b-form-input type="password" placeholder="Password" v-model="form.password"></b-form-input>
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="form-group">
                        <b-form-input type="password" placeholder="Confirm Password"
                                      v-model="form.c_password"></b-form-input>
                      </div>
                    </b-col>
                    <b-col md="12">
                      <div class="form-group">
                        <b-form-input type="text" placeholder="Phone number" v-model="form.phone"></b-form-input>
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="form-group">
                        <b-form-input type="text" placeholder="Address" v-model="form.address"></b-form-input>
                      </div>
                    </b-col>
                    <b-col md="6">
                      <div class="form-group">
                        <b-form-input type="text" placeholder="Apartment" v-model="form.apartment"></b-form-input>
                      </div>
                    </b-col>
                    <b-col md="12">
                      <div class="form-group">
                        <b-form-input type="text" placeholder="City" v-model="form.city"></b-form-input>
                      </div>
                    </b-col>
                    <b-col md="4">
                      <div class="form-group">
                        <b-form-select @change="setCountry($event)">
                          <b-form-select-option  v-for="country in  this.countryStates" :value="country.countryCode">{{country.name}}</b-form-select-option>
                        </b-form-select>
                      </div>
                    </b-col>
                    <b-col md="4">
                      <div class="form-group">
                        <b-form-select @change="setState($event)">
                          <b-form-select-option v-for="state in  this.states">{{state.name}}</b-form-select-option>
                        </b-form-select>
                      </div>
                    </b-col>
                    <b-col md="4">
                      <div class="form-group">
                        <b-form-input type="text" placeholder="ZIP code" v-model="form.zip"></b-form-input>
                      </div>
                    </b-col>
                  </b-row>
                </div>
                <div class="singleCheckout dashboardForm">
                  <h4>Shipping method</h4>
                  <b-row>
                    <b-col cols="12">
                      <div class="form-group block-radio">
                        <b-form-radio name="shippingTime" value="Standard (3-7 Day Delivery)"
                                      v-model="form.shipping_method">
                          Standard (3-7 Day Delivery)
                          <strong>Free</strong>
                        </b-form-radio>
                      </div>
                      <div class="form-group block-radio">
                        <b-form-radio name="shippingTime" value="Expedited (1-3 Day Delivery)"
                                      v-model="form.shipping_method">
                          Expedited (1-3 Day Delivery)
                          <strong>$30.00</strong>
                        </b-form-radio>
                      </div>
                    </b-col>
                  </b-row>
                </div>
                <b-row class="align-items-center">
                  <b-col md="6">
                    <b-button variant="theme" type="submit" class="w-100">continue to payment</b-button>
                  </b-col>
                  <b-col md="6" class="mt-md-0 mt-3">
                    <NuxtLink to="cart" class="text-uppercase bold active text-md-left text-center d-block">return to
                      cart
                    </NuxtLink>
                  </b-col>
                </b-row>
              </b-form>
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
                    <div class="forFree mt-4" v-for="product in cartData" :key="product.id">
                      <div class="freeItem bg-white">
                        <div class="freeImg">
                          <b-img :src="require(`@/assets/images/${product.images}`)" fluid alt="eo14"></b-img>
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
                          <p>Free</p>
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
  </section>

</template>

<script>
    import {mapState, mapMutations,mapGetters} from 'vuex'

    import json from '../store/country-state'

    export default {
        data() {
            return {
                errors: [],
                states: [],
                countryStates: json,
                form: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    c_password: 0,
                    phone: '',
                    country: '',
                    address: '',
                    apartment: '',
                    city: '',
                    state: '',
                    zip: '',
                    shipping_method: ''
                },
            }
        },
        methods: {
            getStatesByCode(code) {
                return this.countryStates.find(country => country.countryCode == code)
            },
            setCountry(code){
                let country = this.getStatesByCode(code);
              this.states = country.stateProvinces;
              this.form.country = country.name;
            },
            setState(state){
                this.form.state = state;
            },
            ...mapMutations(['saveBillingInfo', 'setNewUser']),
            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            submitBilling(event) {
                event.preventDefault();
                const formData = this.form;
                this.errors = [];
                if (!this.form.first_name) {
                    this.errors.push('First Name required.');
                }

                if (!this.form.last_name) {
                    this.errors.push('Last Name required.');
                }

                if (!this.form.phone) {
                    this.errors.push('Phone required.');
                }

                if (!this.form.email) {
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.form.email)) {
                    this.errors.push('Valid email required.');
                }

                if (!this.form.address) {
                    this.errors.push('Address required.');
                }

                if (!this.form.apartment) {
                    this.errors.push('Apartment required.');
                }

                if (!this.form.zip) {
                    this.errors.push('Apartment required.');
                }

                if (!this.form.city) {
                    this.errors.push('Apartment required.');
                }

                if (this.errors.length == 0) {
                    this.saveBillingInfo(formData)

                    let obj = this;
                    setTimeout(function () {
                        obj.$router.push("/payment");
                    }, 200)
                } else {
                    let element = this.$refs['billingDiv'];
                    let top = element.offsetTop;
                    window.scrollTo(0, top);
                }
            }
        },
        computed: {
            ...mapGetters(['billingData']),
            ...mapState([
                'cartData', 'subTotal', 'newUser','billingData'
            ])

        },
        mounted() {
            console.log(this.countryStates[0])
        }
    }
</script>

<style lang="scss" scoped>

</style>
