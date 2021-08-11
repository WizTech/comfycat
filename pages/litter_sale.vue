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
        }
        
    }
</script>

<style lang="scss" scoped>

</style>