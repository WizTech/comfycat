<template>
    <section>
        <div class="productBreadcrumb d-lg-block d-none">
            <b-container>
                <b-row>
                    <b-breadcrumb class="m-0">
                        <b-breadcrumb-item to="/">Premium Clumping Litter </b-breadcrumb-item>
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
                            <b-form>
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
                                            <b-button variant="theme" class="w-100" to="payment">checkout now</b-button>
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="singleCheckout dashboardForm">
                                    <h4>billing</h4>
                                    <b-row>
                                        <b-col md="6">
                                            <div class="form-group">
                                                <b-form-input placeholder="First Name"></b-form-input>
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group">
                                                <b-form-input placeholder="Last Name"></b-form-input>
                                            </div>
                                        </b-col>
                                        <b-col md="12">
                                            <div class="form-group">
                                                <b-form-input type="email" placeholder="Email"></b-form-input>
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group">
                                                <b-form-input type="password" placeholder="Password"></b-form-input>
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group">
                                                <b-form-input type="password" placeholder="Confirm Password"></b-form-input>
                                            </div>
                                        </b-col>
                                        <b-col md="12">
                                            <div class="form-group">
                                                <b-form-input type="text" placeholder="Phone number"></b-form-input>
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group">
                                                <b-form-input type="text" placeholder="Address"></b-form-input>
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <div class="form-group">
                                                <b-form-input type="text" placeholder="Apartment"></b-form-input>
                                            </div>
                                        </b-col>
                                        <b-col md="12">
                                            <div class="form-group">
                                                <b-form-input type="text" placeholder="City"></b-form-input>
                                            </div>
                                        </b-col>
                                        <b-col md="4">
                                            <div class="form-group">
                                                <b-form-select>
                                                    <b-form-select-option>Country / Region</b-form-select-option>
                                                </b-form-select>
                                            </div>
                                        </b-col>
                                        <b-col md="4">
                                            <div class="form-group">
                                                <b-form-select>
                                                    <b-form-select-option>State</b-form-select-option>
                                                </b-form-select>
                                            </div>
                                        </b-col>
                                        <b-col md="4">
                                            <div class="form-group">
                                                <b-form-input type="text" placeholder="ZIP code"></b-form-input>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="singleCheckout dashboardForm">
                                    <h4>Shipping method</h4>
                                    <b-row>
                                        <b-col cols="12">
                                            <div class="form-group block-radio">
                                                <b-form-radio name="shippingTime">
                                                    Standard (3-7 Day Delivery)
                                                    <strong>Free</strong>
                                                </b-form-radio>
                                            </div>
                                            <div class="form-group block-radio">
                                                <b-form-radio name="shippingTime">
                                                    Expedited (1-3 Day Delivery)
                                                    <strong>$30.00</strong>
                                                </b-form-radio>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                                <b-row class="align-items-center">
                                    <b-col md="6">
                                        <b-button variant="theme" class="w-100" to="payment">continue to payment</b-button>
                                    </b-col>
                                    <b-col md="6" class="mt-md-0 mt-3">
                                        <NuxtLink to="cart" class="text-uppercase bold active text-md-left text-center d-block">return to cart</NuxtLink>    
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
                                        <div class="forFree mt-4">
                                            <div class="freeItem bg-white">
                                                <div class="freeImg">
                                                    <b-img src="~assets/images/product1.png" fluid alt="product"></b-img>
                                                </div>
                                                <div class="freeDesc cartCard">
                                                    <div class="summaryCart text-left">
                                                        <h6>100% Natural Premium Clumping litter </h6>
                                                        <h5 class="active d-block d-lg-none">$25</h5>
                                                        <p>Size: 20lb</p>
                                                        <p>Quantity: 2</p>
                                                        <p>(Once every 2 months)</p>
                                                    </div>
                                                    <h5 class="active d-none d-lg-block">$25</h5>
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
                                                    <p>$50.00</p>
                                                </div>
                                                <div class="singleTotal">
                                                    <p>Shipping</p>
                                                    <p>Free</p>
                                                </div>
                                                <div class="singleTotal total">
                                                    <p>Total</p>
                                                    <p>$50.00</p>
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
    export default {
        data(){
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>