<template>
    <main class="max-sale">
        <InnerBanner/>
        <Shippingzone/>
        <ComfySale :version="version"/>
        <EvenOddDescription />
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
        mounted(){
           
        }
        
    }
</script>

<style lang="scss" scoped>

</style>