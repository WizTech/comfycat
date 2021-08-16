<template>
    <section class="g_section litterDesc">
        <b-tabs class="sellProductTabs">
            <b-tab title="Description" active>
                <b-container>
                    <b-row>
                        <b-col lg="6">
                            <div class="content">
                                <h3>100% NATURAL premium CLUMPING LITTER</h3>
                                <p>
                                    Our Comfycat Litter is made only of 2 natural ingredients: Corn-Kernels and Soy-Beans (Tofu). The strength of Corn combined with the super absorbent Plant fibers found in Tofu quickly absorb liquids and produce solid, tight clumps.
                                </p>
                                <ul>
                                    <li>3x Better Clumping than Clay and most leading brands</li>
                                    <li>Very strong odor Control</li>
                                    <li>Low tracking</li>
                                    <li>Soft on paws</li>
                                    <li>Less litter required</li>
                                </ul>
                                <div class="contentPoints mt-4">
                                    <h4>100% Natural ingredients. No chemicals.</h4>
                                    <ul>
                                        <li>Healthier for Kitty’s lungs as there are no toxic chemicals</li>
                                        <li>Better for the environment: fully biodegradable & flushable</li>
                                    </ul>
                                </div>
                                <div class="contentPoints">
                                    <h4>Delivered to You</h4>
                                    <ul>
                                        <li>Choose one of our convenient plans and get the litter delivered to your door</li>
                                        <li>If you choose the subscription option, you can cancel your Plan at any time</li>
                                        <li>No more broken backs carrying this from the store! </li>
                                    </ul>
                                </div>
                            </div>
                        </b-col>
                        <b-col lg="6">  
                            <div class="gallerySection">
                                <div class="galleryVideo">
                                    <div class="with-video">
                                        <a href="javascript:void(0);" class="video-play"><font-awesome-icon :icon="['fa', 'play']"/></a>
                                        <b-img src="~assets/images/litterVideo.png" fluid alt="litterVideo"></b-img>
                                    </div>
                                </div>
                                <div class="galleryPhotos slick-round-arrows">
                                    <slot name="galleryPhotos"></slot>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-tab>
            <b-tab title="Specs">
                <div class="bg-light py-lg-5 py-4">
                    <b-container>
                        <b-row class="productSpecs">
                            <b-col lg="6">
                                <div class="content">
                                    <h3>100% NATURAL premium CLUMPING LITTER</h3>
                                    <div class="m-0 ingrdient">
                                        <p>Only Natural Ingredients:</p>
                                        <ul class="ing-item list-unstyle p-0">
                                            <li>
                                                <div class="single-item">
                                                    <img src="~assets/images/toofu.png" alt="toofu">
                                                    <p>Dry Soybean (Tofu): 70%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="single-item">
                                                    <img src="~assets/images/corn.png" alt="corn">
                                                    <p>Corn Starch: 30%</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
            </b-tab>
            <b-tab title="FAQ">
                <b-container>
                    <b-row>
                        <b-col cols="12">
                            <div class="content">
                                <h3>100% NATURAL premium CLUMPING LITTER</h3>
                            </div>
                            <div class="faqSection">
                                <div class="singleFaq">
                                    <div class="faqTitle">
                                        <h3>1. What is the litter made of?</h3>
                                        <b-button v-b-toggle.collapse-1 variant="transparent" class="active btn-med">
                                            <font-awesome-icon :icon="['fa', 'minus']"/>
                                            <font-awesome-icon :icon="['fa', 'plus']"/>
                                        </b-button>
                                    </div>
                                    <b-collapse visible id="collapse-1">
                                        <div class="faqDesc">
                                            <div class="content">
                                                <p>
                                                    Our Comfycat Litter is made only of 2 natural ingredients: Corn-Kernels and Soy-Beans (Tofu). The strength of Corn combined with the super absorbent Plant fibers found in Tofu quickly absorb liquids and produce solid, tight clumps.
                                                </p>
                                                <p>
                                                    It clumps 3x better than clay. Also, it is 100% natural with no chemicals or additives so it is healthier for your cat and for the environment.
                                                </p>
                                            </div>
                                        </div>
                                    </b-collapse>                                    
                                </div>
                                <div class="singleFaq">
                                    <div class="faqTitle">
                                        <h3>2. How does the subscription work?</h3>
                                        <b-button v-b-toggle.collapse-2 variant="transparent" class="active btn-med">
                                            <font-awesome-icon :icon="['fa', 'minus']"/>
                                            <font-awesome-icon :icon="['fa', 'plus']"/>
                                        </b-button>
                                    </div>
                                    <b-collapse visible id="collapse-2">
                                        <div class="faqDesc">
                                            <div class="content">
                                                <p>
                                                    You just have to select the quantity and how often we will ship (every 2 months or every 3 months) and pay with your credit card. Your order will ship 1-2 business days after your order and will continue shipping as per the delivery schedule. Your credit card will be billed as per the delivery schedule.
                                                </p>
                                            </div>
                                        </div>
                                    </b-collapse>                                    
                                </div>
                                <div class="singleFaq">
                                    <div class="faqTitle">
                                        <h3>3. How can I cancel my subscription?</h3>
                                        <b-button v-b-toggle.collapse-3 variant="transparent" class="active btn-med">
                                            <font-awesome-icon :icon="['fa', 'minus']"/>
                                            <font-awesome-icon :icon="['fa', 'plus']"/>
                                        </b-button>
                                    </div>
                                    <b-collapse visible id="collapse-3">
                                        <div class="faqDesc">
                                            <div class="content">
                                                <p>Just log into your account to cancel your subscription.</p>
                                            </div>
                                        </div>
                                    </b-collapse>                                    
                                </div>

                                <div class="singleFaq">
                                    <div class="faqTitle">
                                        <h3>4. What are shipping fees?</h3>
                                        <b-button v-b-toggle.collapse-4 variant="transparent" class="active btn-med">
                                            <font-awesome-icon :icon="['fa', 'minus']"/>
                                            <font-awesome-icon :icon="['fa', 'plus']"/>
                                        </b-button>
                                    </div>
                                    <b-collapse visible id="collapse-4">
                                        <div class="faqDesc">
                                            <div class="content">
                                                <p>Delivery is FREE within the contiguous US.</p>
                                            </div>
                                        </div>
                                    </b-collapse>                                    
                                </div>
                                <div class="singleFaq">
                                    <div class="faqTitle">
                                        <h3>5. How do I update my shipping information and pause deliveries?</h3>
                                        <b-button v-b-toggle.collapse-5 variant="transparent" class="active btn-med">
                                            <font-awesome-icon :icon="['fa', 'minus']"/>
                                            <font-awesome-icon :icon="['fa', 'plus']"/>
                                        </b-button>
                                    </div>
                                    <b-collapse visible id="collapse-5">
                                        <div class="faqDesc">
                                            <div class="content">
                                                <p>Just log into your account to manage your subscription to change the delivery address of skip some deliveries.</p>
                                            </div>
                                        </div>
                                    </b-collapse>                                    
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-tab>
            <b-tab title="Customers">
                <ProductComments />
            </b-tab>
        </b-tabs>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>