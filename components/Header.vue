<template>
    <header>
        <div class="freeShipping dark-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p class="text-theme m-0"><i class="icon"><img src="~assets/images/offer_free.png" alt="shipping"></i>FREE SHIPPING ON ORDERS $20+</p>
                    </div>
                </div>
            </div>
        </div>
        <b-navbar toggleable="lg" class="py-0 pt-lg-0 pt-md-4 pt-0">
            <b-container class="main-nav">
                <div class="nav-logo d-xl-none">
                    <div class="menu-toogler">
                        <b-navbar-toggle target="nav-collapse"><span></span></b-navbar-toggle>
                        <div class="searchMenu d-lg-none d-md-block d-none">
                            <a href="#"><font-awesome-icon :icon="['fa', 'search']"/></a>
                        </div>
                    </div>
                </div>
                <b-navbar-brand to="/"><img src="~assets/images/logo.png" alt="logo"></b-navbar-brand>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="me-auto mb-2 mb-lg-0">
                        <b-nav-item-dropdown>
                            <template #button-content>
                                <i class="active">Subscribe</i>
                                cat litter
                            </template>
                            <b-dropdown-item to="/litter" @click="setBuyType('subscribe')">
                                <div class="dropdown-img">
                                    <img src="~assets/images/cat_litter3.png" alt="Cat litter">
                                </div>
                                100% Natural Corn & Tofu Litter
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown>
                            <template #button-content>
                                <i class="active">Purchase</i>
                                cat litter
                            </template>
                            <b-dropdown-item to="/litter" @click="setBuyType('purchase')">
                                <div class="dropdown-img">
                                    <img src="~assets/images/cat_litter3.png" alt="Cat litter">
                                </div>
                                100% Natural Corn & Tofu Litter
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item to="/category">
                            Self-Cleaning Litter Boxes 
                        </b-nav-item>
                    </b-navbar-nav>
                    <div class="profileMobile d-flex d-lg-none">
                        <div class="single-profile-icon">
                            <a href=""><font-awesome-icon :icon="['fa', 'search']"/></a>
                        </div>
                        <div class="single-profile-icon">
                            <NuxtLink to="/dashboard"><font-awesome-icon :icon="['fa', 'user']"/></NuxtLink>
                        </div>
                    </div>
                </b-collapse>

                <div class="nav-extras">
                    <ul class="menu-icons">
                        <li class="d-none d-lg-block"><a href="#"><font-awesome-icon :icon="['fa', 'search']"/></a></li>
                        <li class="d-none d-md-block"><NuxtLink to="/dashboard"><font-awesome-icon :icon="['fa', 'user']"/></NuxtLink></li>
                        <li>
                            <NuxtLink to="/cart" class="cart">
                                <i class="icon">
                                    <img src="~assets/images/box.png" alt="box">
                                </i>
                                <span class="count">
                                    <font-awesome-icon :icon="['fa', 'heart']"/>
                                    {{cartData.length }}
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>              
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        
        methods:{
            ...mapMutations([
                'setBuyType'
            ]),
        },
        computed: {
            ...mapState([
                'cartData',
                'buyType'
            ])

        }
    }
</script>

<style lang="scss" scoped>

</style>