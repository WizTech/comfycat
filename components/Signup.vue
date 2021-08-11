<template>
    <section class="loginSignup">
        <b-container>
            <b-row class="justify-content-center">
                <b-col lg="6">
                    <div class="content text-center">
                        <h2>create account</h2>
                        <p>Faster Checkout. View and Track orders. Ship to multiple addresses. Please enter your information</p>
                    </div>
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
                                    <b-form-input type="password" placeholder="Password"></b-form-input>
                                </div>
                            </b-col>
                            <b-col md="12">
                                <div class="form-group">
                                    <b-form-input type="password" placeholder="Confirm Password"></b-form-input>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <p class="m-0">By clicking Creating Account, you agree to Comfycat’s  <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.</p>
                                </div>
                            </b-col>
                        </b-row>
                        
                        <div class="text-center">
                            <b-button variant="theme" class="mx-auto">create account</b-button>
                        </div>
                    </b-form>
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