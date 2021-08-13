<template>
    <main>
        <Banner
            banner_bg="bg.png"
            banner_heading="contact us"
            banner_description=""
            banner_image="contact.png"
            bannerVersion="bannerGap"
        ></Banner>
        <Contact/>
    </main>
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