<template>
    <main>
        <ProductBanner>
            <template slot="sliderSection">
                <div class="sliderThumbnail">
                    <slick :options="sliderNav" ref="sliderSecondary" @beforeChange="syncSliders">
                        <div class="imgContainer"><b-img fluid src="~/assets/images/banner_2.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/eo16.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/product3.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/selfClean/photo4.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/eo17.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/eo16.png"></b-img></div>
                    </slick>
                </div>
                <div class="sliderProduct">
                    <slick :options="sliderFor" ref="sliderPrimary" @beforeChange="syncSliders">
                        <div class="imgContainer"><b-img fluid src="~/assets/images/banner_2.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/eo16.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/product3.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/selfClean/photo4.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/eo17.png"></b-img></div>
                        <div class="imgContainer"><b-img fluid src="~/assets/images/eo16.png"></b-img></div>
                    </slick>
                </div>
            </template>
        </ProductBanner>
        <SellProductDescription :product="product">
            <template slot="galleryPhotos">
                <slick :options="galleryPhotos">
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo1.png" fluid alt="photo1"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo2.png" fluid alt="photo2"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo3.png" fluid alt="photo3"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo4.png" fluid alt="photo4"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo5.png" fluid alt="photo5"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo6.png" fluid alt="photo6"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo7.png" fluid alt="photo7"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo8.png" fluid alt="photo8"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo9.png" fluid alt="photo9"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo10.png" fluid alt="photo10"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo5-1.png" fluid alt="photo10"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo6-1.png" fluid alt="photo10"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo7-1.png" fluid alt="photo10"></b-img></div>
                    <div class="imgContainer"><b-img src="~assets/images/selfClean/photo8-1.png" fluid alt="photo10"></b-img></div>
                </slick>
            </template>
        </SellProductDescription>
        <PopularProducts>
            <template slot="popularProduct">
                <slick :options="popularProduct">
                    <div class="singlePopProd">
                        <div class="singlePopImg">
                            <b-img src="~assets/images/product1.png" fluid alt="eo14"></b-img>
                        </div>
                        <div class="singlePopDesc">
                            <h2>100% Natural Premium Clumping Litter</h2>
                            <b-button variant="theme" class="no-line" to="product_detail"><span>25$</span> VIEW NOW</b-button>
                        </div>
                    </div>
                    <div class="singlePopProd">
                        <div class="singlePopImg">
                            <b-img src="~assets/images/eo3_1.png" fluid alt="eo14"></b-img>
                        </div>
                        <div class="singlePopDesc">
                            <h2>COMFYCAT ZEN SELF-CLEANING LITTER BOX (pink)</h2>
                            <b-button variant="theme" class="no-line" to="product_detail"><span>25$</span> VIEW NOW</b-button>
                        </div>
                    </div>
                    <div class="singlePopProd">
                        <div class="singlePopImg">
                            <b-img src="~assets/images/eo22.png" fluid alt="eo14"></b-img>
                        </div>
                        <div class="singlePopDesc">
                            <h2>COMFYCAT ZEN SELF-CLEANING LITTER BOX (blue)</h2>
                            <b-button variant="theme" class="no-line" to="product_detail"><span>25$</span> VIEW NOW</b-button>
                        </div>
                    </div>
                    <div class="singlePopProd">
                        <div class="singlePopImg">
                            <b-img src="~assets/images/eo23.png" fluid alt="eo14"></b-img>
                        </div>
                        <div class="singlePopDesc">
                            <h2>COMFYCAT MAX SELF-CLEANING LITTER BOX (white)</h2>
                            <b-button variant="theme" class="no-line" to="product_detail"><span>25$</span> VIEW NOW</b-button>
                        </div>
                    </div>
                    <div class="singlePopProd">
                        <div class="singlePopImg">
                            <b-img src="~assets/images/product1.png" fluid alt="eo14"></b-img>
                        </div>
                        <div class="singlePopDesc">
                            <h2>100% Natural Premium Clumping Litter</h2>
                            <b-button variant="theme" class="no-line" to="product_detail"><span>25$</span> VIEW NOW</b-button>
                        </div>
                    </div>
                </slick>
            </template>
        </PopularProducts>
    </main>
</template>

<script>
    import { mapGetters } from 'vuex'
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
                galleryPhotos:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    mobileFirst: true,
                    arrows: true,
                    dots: false,
                    prevArrow: "<button type='button' class='slick-prev'><svg width='9' height='17' viewBox='0 0 9 17' fill='none'><path fill-rule='evenodd clip-rule='evenodd' d='M7.71758 17C8.05212 17.0012 8.37585 16.8721 8.62893 16.6359C8.86768 16.354 9 15.9851 9 15.6031C9 15.2211 8.86768 14.8534 8.62893 14.5714L3.09371 8.5L8.62893 2.42857C8.86768 2.14659 9 1.77889 9 1.3969C9 1.01491 8.86768 0.646026 8.62893 0.364048C8.37531 0.128876 8.05194 0 7.71758 0C7.38322 0 7.06 0.128876 6.80638 0.364048L0.371075 7.5288C0.133368 7.78701 0 8.13599 0 8.5C0 8.864 0.133368 9.21298 0.371075 9.47119L6.80638 16.6359C7.05945 16.8721 7.38305 17.0012 7.71758 17Z' fill='white'/></svg></button>",
                    nextArrow: "<button type='button' class='slick-next'><svg width='9' height='17' viewBox='0 0 9 17' fill='none'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.28242 17C0.947882 17.0012 0.624149 16.8721 0.371075 16.6359C0.132323 16.354 0 15.9851 0 15.6031C0 15.2211 0.132323 14.8534 0.371075 14.5714L5.90629 8.5L0.371075 2.42857C0.132323 2.14659 0 1.77889 0 1.3969C0 1.01491 0.132323 0.646026 0.371075 0.364048C0.624695 0.128876 0.948056 0 1.28242 0C1.61678 0 1.94 0.128876 2.19362 0.364048L8.62893 7.5288C8.86663 7.78701 9 8.13599 9 8.5C9 8.864 8.86663 9.21298 8.62893 9.47119L2.19362 16.6359C1.94055 16.8721 1.61695 17.0012 1.28242 17Z' fill='white'/></svg></button>",
                    responsive: [
                        {
                            breakpoint: 769,
                            settings: 'unslick'
                        }
                    ]
                },
                sliderNav: {
                    inifinite: false,
                    arrows: true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    dots: false,
                    vertical: true,
                    verticalSwiping: true,
                    focusOnSelect: true,
                    asNavFor: this.$refs.sliderPrimary,
                    centerMode: true,
                    centerPadding: '0px',
                    prevArrow: "<button type='button' class='slick-prev'><svg width='30' height='14' viewBox='0 0 30 14' fill='none'><path d='M15 2.68226L27.1875 13.9492H30L15 0.0821533L0 13.9492H2.81248L15 2.68226Z' fill='#9B9797'/></svg></button>",
                    nextArrow: "<button type='button' class='slick-next'><svg width='30' height='15' viewBox='0 0 30 15' fill='none'><path d='M15 11.7601L27.1875 0.493164L30 0.493164L15 14.3602L0 0.493164L2.81248 0.493164L15 11.7601Z' fill='#9B9797'/></svg></button>",
                    responsive: [{
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                        }
                    }]
                },
                sliderFor: {
                    inifinite: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    focusOnSelect: true,
                    asNavFor: this.$refs.sliderSecondary,
                    responsive: [{
                        breakpoint: 991,
                        settings: {
                            dots: true,
                        }
                    }]
                },
                title: this.$route.params.id
            }
        },
        methods: {
            syncSliders(currentPosition, nextPosition) {
                this.$refs.sliderPrimary.next()
                this.$refs.sliderSecondary.next()
            }
        },
        computed: {
            product(){
                return this.$store.getters.getProductById(this.$route.params.id);
            }
        },
        head() {
            return {
            title: "Comfycat | "+this.title,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
