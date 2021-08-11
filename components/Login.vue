<template>
    <section class="loginSignup">
        <b-container>
            <b-row class="justify-content-center">
                <b-col lg="6">
                    <div class="content text-center">
                        <h2>login</h2>
                    </div>
                    <b-form>
                        <div class="form-group">
                            <b-form-input type="email" placeholder="Email"></b-form-input>
                        </div>
                        <div class="form-group">
                            <b-form-input type="password" placeholder="Password"></b-form-input>
                        </div>
                        <div class="text-center">
                            <b-button variant="theme" class="mx-auto" to="dashboard">log in</b-button>
                        </div>
                        <div class="text-center mt-4">
                            <p class="m-0">Don’t have an account? <NuxtLink  to="signup">Create account</NuxtLink></p>
                            <p class="m-0"><a href="#">Forgot password?</a></p>
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