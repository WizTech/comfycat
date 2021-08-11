<template>
    <section class="g_section pt-0">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <div class="content text-center">
                        <h2>Popular products</h2>
                    </div>
                </b-col>
                <b-col cols="12">
                    <div class="popularProductSlider slick-round-arrows">
                        <slot name="popularProduct"></slot>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>