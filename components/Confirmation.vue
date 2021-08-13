<template>
    <section class="doubleLayout">
        <b-container>
            <b-row>
                <b-col lg="7" class="order-lg-0 order-1">
                    <div class="checkout-main">
                        <div class="orderConfirmTitle">
                            <font-awesome-icon :icon="['far', 'check-circle']" class="active mr-3"/>
                            <h4>
                                <span>Order# 1234</span>
                                Thank You For Ordering.
                            </h4>
                        </div>
                        <div class="orderConfirmedDesc">
                            <div class="singleDesc">
                                <div class="content">
                                    <h3>Your Order is Confirmed</h3>
                                    <p>We've accepted your order, and we are getting it ready. Come back to this page for updates on your shipment status.</p>
                                </div>
                            </div>
                            <div class="singleDesc">
                                <b-row align-v="center">
                                    <b-col md="7">
                                        <div class="content">
                                            <h3>Tracking Number</h3>
                                            <p>012543987</p>
                                        </div>
                                    </b-col>
                                    <b-col md="5">
                                        <b-button variant="theme" class="w-100">Track</b-button>
                                    </b-col>
                                </b-row>
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
                                    <div class="summary mt-5">
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
</template>

<script>
    export default {
                
    }
</script>

<style lang="scss" scoped>

</style>