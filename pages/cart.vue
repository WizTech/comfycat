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
        }

    }
</script>

<style lang="scss" scoped>

</style>
