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