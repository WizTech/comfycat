<template>
    <main>
        <InnerBanner/>
        <Shippingzone/>
        <ComfySale/>
        <EvenOddDescription />
        <ProductComments />
        <ComfySale :withArrows="withArrows"/>
    </main>
</template>

<script>
    export default {
        data(){
            return {
                withArrows: false,
            }
        },
        head() {
            return {
            title: "Comfycat | Litter Sales",
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>