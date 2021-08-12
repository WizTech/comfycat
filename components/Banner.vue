<template>
    <div class="banner InnerBanner">
        <div class="banner-bg">
            <b-img :src="require('@/assets/images/' + banner_bg + '')" alt="thanks"></b-img>
        </div>
        <div class="banner-content" v-bind:class="bannerVersion">
        <b-container>
            <b-row class="align-items-center">
                <b-col lg="6">
                    <div class="content">
                        <h2>{{banner_heading}}</h2>
                        <p>
                            {{banner_description}}
                        </p>
                    </div>
                </b-col>
                <b-col lg="6" class="pr-md-3 pr-0">
                    <div class="banner-partImg text-center text-lg-left">
                        <b-img :src="require('@/assets/images/' + banner_image + '')" alt="thanks" fluid></b-img>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        props:['banner_bg','banner_heading', 'banner_description', 'banner_image', 'bannerVersion'],
        // data(){
        //     return {
        //         getBannerVersion: this.bannerVersion
        //     }
        // },
        // computed: {
        //     checkVersion(){
        //         let _self = this

        //     }
        // }
        
    }
</script>

<style lang="scss" scoped>

</style>