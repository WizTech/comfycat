<template>
    <div class="productBanner">
        <div class="productBreadcrumb d-lg-block d-none">
            <b-container>
                <b-breadcrumb>
                    <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
                    <b-breadcrumb-item href="#">Self-cleaning Litter Boxes</b-breadcrumb-item>
                    <b-breadcrumb-item active>Automatic Litter Boxes</b-breadcrumb-item>
                </b-breadcrumb>
            </b-container>
        </div>
        <div class="productDescWithSlider">
            <b-container>
                <b-row>
                    <b-col lg="6">
                        <div class="productSlider no-bg">
                            <slot name="sliderSection"></slot>
                        </div>
                    </b-col>
                    <b-col lg="6" class="bg-sm-white">
                        <div class="productDesc">
                            <ProductDescription/>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
              product(){
                  return this.$store.getters.getProductById(this.$route.params.id);
              }
          }
    }
</script>

<style lang="scss" scoped>

</style>
