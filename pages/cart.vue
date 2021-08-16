<template>
    <main class="no-banner">
        <Cart :ifProduct="ifProduct"/>
    </main>
</template>

<script>
    export default {
        data(){
            return {
                ifProduct: true,
            }
        },
        head() {
            return {
            title: "Comfycat | Cart",
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
