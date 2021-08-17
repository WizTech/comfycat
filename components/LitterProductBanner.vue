<template>
    <div class="productBanner litterBanner">
        <div class="productBreadcrumb d-lg-block d-none">
            <b-container>
                <b-breadcrumb>
                    <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
                    <b-breadcrumb-item href="#">Natural Premium Clumping Litter</b-breadcrumb-item>
                    <b-breadcrumb-item active>Premium Clumping Litter</b-breadcrumb-item>
                </b-breadcrumb>
            </b-container>
        </div>
        <div class="productDescWithSlider">
            <b-container fluid="lg">
                <b-row>
                    <b-col lg="6">
                        <div class="productSlider sliderOnly">
                            <slot name="sliderSection"></slot>                            
                        </div>
                        <div class="productSlider">
                            <div class="productSlider-extra">
                                <div class="sliderThumbnail play-icon">
                                    <a href="#">
                                        <font-awesome-icon :icon="['fa', 'play']"/>
                                    </a>
                                </div>
                                <div class="sliderProduct ingrdient">
                                    <p>Only Natural Ingredients. Better for Kitty. Better for the Environment:</p>
                                    <ul class="ing-item">
                                        <li>
                                            <div class="single-item">
                                                <img class="lazyload" src="~assets/images/toofu.png" alt="toofu">
                                                <p>TOFU-SOYBEAN</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="single-item">
                                                <img class="lazyload" src="~assets/images/corn.png" alt="corn">
                                                <p>Corn kernels </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="6" class="bg-sm-white">
                        <div class="productDesc">
                            <LitterProductDescription/>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
