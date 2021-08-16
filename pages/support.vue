<template>
    <main>
        <Banner
            banner_bg="bg.png"
            banner_heading="support"
            banner_description="Please submit a ticket to get quick help with a ComfyCat order or product."
            banner_image="support.png"
            bannerVersion="bannerGap"
        ></Banner>
        <Support/>
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
            title: "Comfycat | Support",
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>