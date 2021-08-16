<template>
    <main class="max-sale">
        <InnerBanner/>
        <Shippingzone/>
        <ComfySale :versionV2="versionV2"/>
        <EvenOddDescription />
        <ProductComments />
        <ComfySale :versionV2="versionV2" :withArrows="withArrows"/>
        <CtaModel></CtaModel>
    </main>
</template>

<script>
    export default {
        data(){
            return {
                version: false,
                versionV2: true,
                withArrows: false
            }
        },
        head() {
            return {
            title: "Comfycat | Max Sales",
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>