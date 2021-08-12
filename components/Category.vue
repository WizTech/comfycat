<template>
    <section class="g_section-half">
        <b-tabs class="sellProductTabs">
            <b-tab title="cat litter" active>
                <b-container>
                    <b-row class="mb-5">
                        <b-col lg="6">
                            <div class="catLitterBanner">
                                <div class="bannerBg">
                                    <b-img src="~assets/images/bg.png" alt="catLitterBg"></b-img>
                                </div>
                                <div class="bannerContent">
                                    <div class="content text-center">
                                        <h2 class="m-0 active">100% Natural Premium Clumping Litter</h2>
                                        <b-img src="~assets/images/catLitter.png" fluid alt="catLitter"></b-img>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col lg="6">
                            <div class="popProduct-noHeading popProduct-noPadding">
                                <PopularProducts>
                                    <template slot="popularProduct">
                                        <slick :options="popularProductTwice">
                                            <div class="singlePopProd"
                                                 v-for="product in products"
                                                :key="product.id"
                                                 v-if="product.category ==='zen'"
                                            >
                                                <div class="singlePopImg">
<!--                                                    <b-img src="~assets/images/product1.png" fluid alt="eo14"></b-img>-->
                                                    <b-img :src="require(`@/assets/images/${product.images}`)"  fluid alt="eo14"></b-img>
                                                </div>
                                                <div class="singlePopDesc">
                                                    <h2>{{product.name}}</h2>
                                                    <b-button variant="theme" class="no-line" :to="`/product/${product.slug}`"><span>{{product.price}}$</span> VIEW NOW</b-button>
                                                </div>
                                            </div>
                                        </slick>
                                    </template>
                                </PopularProducts>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="6">
                            <div class="catLitterBanner">
                                <div class="bannerBg">
                                    <b-img src="~assets/images/cat_bg.png" alt="catLitterBg"></b-img>
                                </div>
                                <div class="bannerContent">
                                    <div class="content text-center">
                                        <h2 class="m-0 active">SELF-CLEANING LITTER BOXES</h2>
                                        <b-img src="~assets/images/product2.png" fluid alt="catLitter"></b-img>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col lg="6">
                            <div class="popProduct-noHeading popProduct-noPadding">
                                <PopularProducts>
                                    <template slot="popularProduct">
                                        <slick :options="popularProductTwice">
                                            <div class="singlePopProd"
                                                 v-for="product in products"
                                                 :key="product.id"
                                                  v-if="product.category ==='max'"
                                            >
                                                <div class="singlePopImg">
                                                  <b-img :src="require(`@/assets/images/${product.images}`)"  fluid alt="eo14"></b-img>
                                                </div>
                                                <div class="singlePopDesc">
                                                    <h2>{{product.name}}</h2>
                                                    <b-button variant="theme" class="no-line" :to="`/product/${product.slug}`"><span>{{product.price}}$</span> VIEW NOW</b-button>
                                                </div>
                                            </div>
                                        </slick>
                                    </template>
                                </PopularProducts>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-tab>
            <b-tab title="Self-Cleaning Litter Boxes">
                <div class="popProduct-noPadding">
                    <PopularProducts>
                        <template slot="popularProduct">
                            <slick :options="popularProduct">
                                <div class="singlePopProd">
                                    <div class="singlePopImg">
                                        <b-img src="~assets/images/product1.png" fluid alt="eo14"></b-img>
                                    </div>
                                    <div class="singlePopDesc">
                                        <h2>COMFYCAT MAX SELF-CLEANING LITTER BOX</h2>
                                        <b-button variant="theme" class="no-line" to="product_detail"><span>499$</span> VIEW NOW</b-button>
                                    </div>
                                </div>
                                <div class="singlePopProd">
                                    <div class="singlePopImg">
                                        <b-img src="~assets/images/eo3_1.png" fluid alt="eo14"></b-img>
                                    </div>
                                    <div class="singlePopDesc">
                                        <h2>COMFYCAT ZEN SELF-CLEANING LITTER BOX</h2>
                                        <b-button variant="theme" class="no-line" to="product_detail"><span>399$</span> VIEW NOW</b-button>
                                    </div>
                                </div>
                            </slick>
                        </template>
                    </PopularProducts>
                </div>
            </b-tab>
        </b-tabs>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data(){
            return {
                popularProduct: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: "<button type='button' class='slick-prev'><svg width='9' height='17' viewBox='0 0 9 17' fill='none'><path fill-rule='evenodd clip-rule='evenodd' d='M7.71758 17C8.05212 17.0012 8.37585 16.8721 8.62893 16.6359C8.86768 16.354 9 15.9851 9 15.6031C9 15.2211 8.86768 14.8534 8.62893 14.5714L3.09371 8.5L8.62893 2.42857C8.86768 2.14659 9 1.77889 9 1.3969C9 1.01491 8.86768 0.646026 8.62893 0.364048C8.37531 0.128876 8.05194 0 7.71758 0C7.38322 0 7.06 0.128876 6.80638 0.364048L0.371075 7.5288C0.133368 7.78701 0 8.13599 0 8.5C0 8.864 0.133368 9.21298 0.371075 9.47119L6.80638 16.6359C7.05945 16.8721 7.38305 17.0012 7.71758 17Z' fill='white'/></svg></button>",
                    nextArrow: "<button type='button' class='slick-next'><svg width='9' height='17' viewBox='0 0 9 17' fill='none'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.28242 17C0.947882 17.0012 0.624149 16.8721 0.371075 16.6359C0.132323 16.354 0 15.9851 0 15.6031C0 15.2211 0.132323 14.8534 0.371075 14.5714L5.90629 8.5L0.371075 2.42857C0.132323 2.14659 0 1.77889 0 1.3969C0 1.01491 0.132323 0.646026 0.371075 0.364048C0.624695 0.128876 0.948056 0 1.28242 0C1.61678 0 1.94 0.128876 2.19362 0.364048L8.62893 7.5288C8.86663 7.78701 9 8.13599 9 8.5C9 8.864 8.86663 9.21298 8.62893 9.47119L2.19362 16.6359C1.94055 16.8721 1.61695 17.0012 1.28242 17Z' fill='white'/></svg></button>",
                    responsive: [{
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        }
                    }]
                },
                popularProductTwice: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: "<button type='button' class='slick-prev'><svg width='9' height='17' viewBox='0 0 9 17' fill='none'><path fill-rule='evenodd clip-rule='evenodd' d='M7.71758 17C8.05212 17.0012 8.37585 16.8721 8.62893 16.6359C8.86768 16.354 9 15.9851 9 15.6031C9 15.2211 8.86768 14.8534 8.62893 14.5714L3.09371 8.5L8.62893 2.42857C8.86768 2.14659 9 1.77889 9 1.3969C9 1.01491 8.86768 0.646026 8.62893 0.364048C8.37531 0.128876 8.05194 0 7.71758 0C7.38322 0 7.06 0.128876 6.80638 0.364048L0.371075 7.5288C0.133368 7.78701 0 8.13599 0 8.5C0 8.864 0.133368 9.21298 0.371075 9.47119L6.80638 16.6359C7.05945 16.8721 7.38305 17.0012 7.71758 17Z' fill='white'/></svg></button>",
                    nextArrow: "<button type='button' class='slick-next'><svg width='9' height='17' viewBox='0 0 9 17' fill='none'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.28242 17C0.947882 17.0012 0.624149 16.8721 0.371075 16.6359C0.132323 16.354 0 15.9851 0 15.6031C0 15.2211 0.132323 14.8534 0.371075 14.5714L5.90629 8.5L0.371075 2.42857C0.132323 2.14659 0 1.77889 0 1.3969C0 1.01491 0.132323 0.646026 0.371075 0.364048C0.624695 0.128876 0.948056 0 1.28242 0C1.61678 0 1.94 0.128876 2.19362 0.364048L8.62893 7.5288C8.86663 7.78701 9 8.13599 9 8.5C9 8.864 8.86663 9.21298 8.62893 9.47119L2.19362 16.6359C1.94055 16.8721 1.61695 17.0012 1.28242 17Z' fill='white'/></svg></button>",
                    responsive: [{
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        }
                    },{
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                    ]
                },
            }
        },
        computed:{
            ...mapState([
                'products'
            ])
        }

    }
</script>

<style lang="scss" scoped>

</style>
