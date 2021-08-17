<template>
  <b-modal ref="ctaModals" id="ctaModal" title="" hide-footer size="lg" modal-class="ctaModal">
    <div class="content">
      <div class="col-md-7">
        <h3>How to Choose the Best Self-Cleaning Litter Box &amp; Healthiest Litter for Your Cat? </h3>
        <p>
          Download this action-packed E-Book. You are responsible for the Health and Well-being of your Cat (it’s FREE!)
          Inside you’ll learn:
        </p>
        <ul>
          <li>
            Why do you need a Self-Cleaning Litter Box <strong>with UV light sterilization</strong> ? (hint: to kill
            99.9% of bacterias and viruses and to prevent bad odors... )
          </li>
          <li>
            Why do you need a Self-Cleaning Litter Box <strong>with a lot of internal head room / vertical
            space</strong> ? (hint: to avoid cat squatting too close to their faces and for larger cats... )
          </li>
          <li>
            Why is a <strong>Natural</strong> Litter critical for the Health of Your Cat? (hint: clay litter contains
            Bentonite which can cause intestinal blockages if ingested... )
          </li>
        </ul>
        <p>... There are many other pitfalls. </p>
      </div>
    </div>
    <div class="ctaForm">
      <b-form>
        <b-row>
          <b-col md="4">
            <b-form-input placeholder="First Name"></b-form-input>
          </b-col>
          <b-col md="4">
            <b-form-input placeholder="Email address"></b-form-input>
          </b-col>
          <b-col md="4">
            <b-button variant="theme" class="w-100">free instant access</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'

    export default {
        data() {
            return {}
        },
        methods: {
            ...mapMutations(['hideCTModal']),
            openModal() {
                if(this.ctModalOpen){
                    this.$refs['ctaModals'].show()
                    this.hideCTModal()

                }
            }

        },
        computed: {
            ...mapState([
                'ctModalOpen'
            ])

        },
        mounted() {
            let _self = this
            setTimeout(function (scope) {
                _self.openModal()
            }, 4000, this);

        },
    }
</script>

<style lang="scss" scoped>

</style>
