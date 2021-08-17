<template>
    <main class="max-sale">
        <InnerBanner/>
        <Shippingzone/>
        <ComfySale :version="version"/>
        <EvenOddDescriptionMax />
        <ProductComments />
        <ComfySale :version="version" :withArrows="withArrows"/>
        <CtaModel></CtaModel>
    </main>
</template>

<script>
    export default {
        data(){
            return {
                version: true,
                versionV2: false,
                withArrows: false,
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