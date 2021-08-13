<template>
    <main>
        <Banner
            banner_bg="cat_bg.png"
            banner_heading="legal"
            banner_description=""
            banner_image="legal.png"
            bannerVersion="bannerGap"
        ></Banner>
        <Legal/>
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