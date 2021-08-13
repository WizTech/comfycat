<template>
    <section class="loginSignup dashboard">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <b-tabs pills vertical class="dashboardPanel">
                        <b-tab title="account information" active>
                            <div class="dashboardForm">
                                <div class="content">
                                    <h3>account information</h3>
                                    <b-form>
                                        <b-row>
                                            <b-col md="6">
                                                <div class="form-group">
                                                    <b-form-input type="text" placeholder="First Name"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col md="6">
                                                <div class="form-group">
                                                    <b-form-input type="text" placeholder="Last Name"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col md="12">
                                                <div class="form-group">
                                                    <b-form-input type="email" placeholder="Email"></b-form-input>
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
                                        <b-row>
                                            <b-col md="6">
                                                <b-button variant="theme" class="w-100">save changes</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-form>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="address book">
                            <div class="dashboardForm">
                                <div class="content">
                                    <h3>add a new address</h3>
                                    <b-form>
                                        <b-row>
                                            <b-col md="6">
                                                <div class="form-group">
                                                    <b-form-input type="text" placeholder="First Name"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col md="6">
                                                <div class="form-group">
                                                    <b-form-input type="text" placeholder="Last Name"></b-form-input>
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
                                        <b-row>
                                            <b-col md="6">
                                                <b-button variant="theme" class="w-100">add address</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-form>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="my credit cards">
                            <div class="dashboardForm">
                                <div class="content">
                                    <h3>ENTER CREDIT CARD DETAILS</h3>
                                    <b-form>
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
                                        <b-row>
                                            <b-col md="6">
                                                <b-button variant="theme" class="w-100">save credit card</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-form>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="order history">
                            <div class="dashboardForm">
                                <div class="content">
                                    <h3>order history</h3>                                    
                                </div>
                                <h4>You have placed no orders.</h4>
                                <div class="previousOrders">
                                    <div class="forFree">
                                        <div class="freeItem bg-white">
                                            <div class="freeImg">
                                                <b-img src="~assets/images/product1.png" fluid alt="product"></b-img>
                                            </div>
                                            <div class="freeDesc cartCard">
                                                <div class="summaryCart text-left">
                                                    <p class="mb-2"><small>15/10/2020</small></p>
                                                    <h6>100% Natural Premium Clumping litter </h6>
                                                    <h5 class="active d-block d-lg-none">$25</h5>
                                                    <p>Size: 20lb</p>
                                                    <p>Quantity: 2</p>
                                                    <p>(Once every 2 months)</p>
                                                </div>
                                                <h5 class="active d-none d-lg-block m-0">$25</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="log out"></b-tab>
                    </b-tabs>
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