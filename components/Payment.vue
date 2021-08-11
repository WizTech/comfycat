<template>
    <section>
        <div class="productBreadcrumb d-lg-block d-none">
            <b-container>
                <b-row>
                    <b-breadcrumb class="m-0">
                        <b-breadcrumb-item to="/">Premium Clumping Litter </b-breadcrumb-item>
                        <b-breadcrumb-item to="cart">Cart</b-breadcrumb-item>
                        <b-breadcrumb-item to="checkout">Checkout</b-breadcrumb-item>
                        <b-breadcrumb-item active>Payment</b-breadcrumb-item>
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
                                <h2>Payment</h2>
                            </div>
                            <b-form>
                                <div class="singleCheckout">
                                    <div class="getInfo">
                                        <div class="infoSingle">
                                            <div class="infoDetail">
                                                <p>Contact</p>
                                                <div class="inputValue">
                                                    <p></p>
                                                </div>
                                            </div>
                                            <a href="" class="active">Change</a>
                                        </div>
                                        <div class="infoSingle">
                                            <div class="infoDetail">
                                                <p>Ship to</p>
                                                <div class="inputValue">
                                                    <p></p>
                                                </div>
                                            </div>
                                            <a href="" class="active">Change</a>
                                        </div>
                                        <div class="infoSingle">
                                            <div class="infoDetail">
                                                <p>Method</p>
                                                <div class="inputValue">
                                                    <p>Standard (3-7 Day Delivery)</p>
                                                </div>
                                            </div>
                                            <a href="" class="active">Change</a>
                                        </div>
                                    </div> 
                                </div>
                                <div class="singleCheckout dashboardForm">
                                    <h4 class="mb-2">Payment</h4>
                                    <p>All transactions are secure and encrypted</p>
                                    <div class="getInfo">
                                        <div class="infoSingle">
                                            <div class="form-group block-radio m-0 dashboardForm">
                                                <b-form-radio name="paymentType" @change="checkPaymenttype" value="credit card">
                                                    Credit card
                                                    <span>
                                                        <b-img src="~assets/images/mastercard.png" fluid alt="mastercard" class="mr-2"></b-img>
                                                        <b-img src="~assets/images/visa.png" fluid alt="visa"></b-img>
                                                    </span>
                                                </b-form-radio>
                                            </div>
                                        </div>
                                        <b-collapse v-model="payment_CC_form">
                                            <b-row>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <b-form-input type="text" placeholder="Card number"></b-form-input>
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <b-form-input type="text" placeholder="Name on card"></b-form-input>
                                                    </div>
                                                </b-col>
                                                <b-col md="6">
                                                    <div class="form-group">
                                                        <b-form-input type="text" placeholder="Expiration date (MM / YY)"></b-form-input>
                                                    </div>
                                                </b-col>
                                                <b-col md="6">
                                                    <div class="form-group">
                                                        <b-form-input type="text" placeholder="Security code"></b-form-input>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </b-collapse>
                                        <div class="infoSingle">
                                            <div class="form-group block-radio m-0">
                                                <b-form-radio name="paymentType" @change="checkPaymenttype" value="paypal">
                                                    <b-img src="~assets/images/paypal.png" fluid alt="paypal"></b-img>
                                                </b-form-radio>
                                            </div>
                                        </div>
                                        <b-collapse v-model="payment_PP_form">
                                            <b-row>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <b-form-input type="text" placeholder="Card number"></b-form-input>
                                                    </div>
                                                </b-col>
                                                <b-col md="12">
                                                    <div class="form-group">
                                                        <b-form-input type="text" placeholder="Name on card"></b-form-input>
                                                    </div>
                                                </b-col>
                                                <b-col md="6">
                                                    <div class="form-group">
                                                        <b-form-input type="text" placeholder="Expiration date (MM / YY)"></b-form-input>
                                                    </div>
                                                </b-col>
                                                <b-col md="6">
                                                    <div class="form-group">
                                                        <b-form-input type="text" placeholder="Security code"></b-form-input>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </b-collapse>
                                    </div> 
                                </div>                                
                                <b-row class="align-items-center">
                                    <b-col md="6">
                                        <b-button variant="theme" class="w-100" to="thankyou">pay now</b-button>
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
                payment_CC_form: false,
                payment_PP_form: false,
            }
        },
        methods: {
            checkPaymenttype(e){
                if(e == "credit card"){
                    this.payment_CC_form = true,
                    this.payment_PP_form = false
                }
                else if(e == "paypal"){
                    this.payment_CC_form = false
                    this.payment_PP_form = true
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>