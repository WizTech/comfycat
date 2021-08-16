<template>
    <section class="g_section testimonial">
        <b-container>
            <b-row class="justify-content-center">
                <b-col md="11">
                    <div class="content text-center">
                        <h2>what our customers say</h2>
                    </div>
                    <slick :options="slickOptions" v-bind:class="{testimonialSlider: slickActive}">
                        <div class="slide">
                            <div class="img-withQuote">
                            <div class="slideImg">
                                <b-img src="~assets/images/test1.png" fluid alt="test1"></b-img>
                            </div>
                            <span class="quotes"></span>
                            </div>
                            <div class="slideCard">
                                <h4>Susie</h4>
                                <p>
                                Meeeeow! Mrrrreoow Meeeeeeeeeeeow!’ (Translated as ‘Finally! An all-natural litter that has ingredients not harmful for my breathing system. And gosh I can eat some of it without having any ingestion issues! And man, this thing clumps in seconds! 3x faster than clay!’)
                                </p>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="img-withQuote">
                                <div class="slideImg">
                                    <b-img src="~assets/images/test2.png" fluid alt="test2"></b-img>
                                </div>
                                <span class="quotes"></span>
                            </div>
                            <div class="slideCard">
                                <h4>Curcuma</h4>
                                <p>
                                Love the new design litter box my hooomans got me! So much more stylish than the old automated litter box hooomans were hiding next to the washing machine. My hooomans like it so much they put in in the living room. Puurrrrrrrrrrrrr
                                </p>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="img-withQuote">
                                <div class="slideImg">
                                    <b-img src="~assets/images/test1.png" fluid alt="test1"></b-img>
                                </div>
                                <span class="quotes"></span>
                            </div>
                            <div class="slideCard">
                                <h4>Susie</h4>
                                <p>
                                Meeeeow! Mrrrreoow Meeeeeeeeeeeow!’ (Translated as ‘Finally! An all-natural litter that has ingredients not harmful for my breathing system. And gosh I can eat some of it without having any ingestion issues! And man, this thing clumps in seconds! 3x faster than clay!’)
                                </p>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="img-withQuote">
                                <div class="slideImg">
                                    <b-img src="~assets/images/test2.png" fluid alt="test2"></b-img>
                                </div>
                                <span class="quotes"></span>
                            </div>
                            <div class="slideCard">
                                <h4>Curcuma</h4>
                                <p>
                                Love the new design litter box my hooomans got me! So much more stylish than the old automated litter box hooomans were hiding next to the washing machine. My hooomans like it so much they put in in the living room. Puurrrrrrrrrrrrr
                                </p>
                            </div>
                        </div>
                        </slick>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {   
        data() {
            return {
            slickActive: true,
            slickOptions: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                prevArrow: "<button type='button' class='slick-prev'><svg width='9' height='17' viewBox='0 0 9 17' fill='none'><path fill-rule='evenodd clip-rule='evenodd' d='M7.71758 17C8.05212 17.0012 8.37585 16.8721 8.62893 16.6359C8.86768 16.354 9 15.9851 9 15.6031C9 15.2211 8.86768 14.8534 8.62893 14.5714L3.09371 8.5L8.62893 2.42857C8.86768 2.14659 9 1.77889 9 1.3969C9 1.01491 8.86768 0.646026 8.62893 0.364048C8.37531 0.128876 8.05194 0 7.71758 0C7.38322 0 7.06 0.128876 6.80638 0.364048L0.371075 7.5288C0.133368 7.78701 0 8.13599 0 8.5C0 8.864 0.133368 9.21298 0.371075 9.47119L6.80638 16.6359C7.05945 16.8721 7.38305 17.0012 7.71758 17Z' fill='white'/></svg></button>",
                nextArrow: "<button type='button' class='slick-next'><svg width='9' height='17' viewBox='0 0 9 17' fill='none'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.28242 17C0.947882 17.0012 0.624149 16.8721 0.371075 16.6359C0.132323 16.354 0 15.9851 0 15.6031C0 15.2211 0.132323 14.8534 0.371075 14.5714L5.90629 8.5L0.371075 2.42857C0.132323 2.14659 0 1.77889 0 1.3969C0 1.01491 0.132323 0.646026 0.371075 0.364048C0.624695 0.128876 0.948056 0 1.28242 0C1.61678 0 1.94 0.128876 2.19362 0.364048L8.62893 7.5288C8.86663 7.78701 9 8.13599 9 8.5C9 8.864 8.86663 9.21298 8.62893 9.47119L2.19362 16.6359C1.94055 16.8721 1.61695 17.0012 1.28242 17Z' fill='white'/></svg></button>",
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            }
            }
        }     
    }
</script>

<style lang="scss" scoped>

</style>