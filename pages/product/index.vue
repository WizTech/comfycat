<template>
    <main>
        <Banner
            banner_bg="cat_bg.png"
            banner_heading="self-cleaning litter boxes"
            banner_description="No more Scooping. Beautiful automated self-cleaning litter boxes. For stylish Cats. And cool interior design."
            banner_image="cat_img.png"
            bannerVersion="bannerGap"
        ></Banner>
        <Category/>
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
