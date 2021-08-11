<template>
    <div class="thanksPg">
        <Banner
            banner_bg="bg.png"
            banner_heading="Thank you!"
            banner_description="Your order is successful! We have sent you an email with your order."
            banner_image="thanks.png"
            bannerVersion="innerBanner"
        ></Banner>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                banner_bg: '',
                banner_heading: '',
                banner_description: '',
                banner_image: '',
                bannerVersion: ''
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>