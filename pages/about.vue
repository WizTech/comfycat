<template>
    <main>
        <Banner
            banner_bg="cat_bg.png"
            banner_heading="our story"
            banner_description=""
            banner_image="about.png"
            bannerVersion="bannerGap"
        ></Banner>
        <About/>
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
        },
        head() {
            return {
            title: "Comfycat | About us",
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>