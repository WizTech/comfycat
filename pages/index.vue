<template>
  <main>
      <div class="banner">
        <div class="banner-bg">
            <img class="lazyload" src="~assets/images/bg.png" alt="bg"/>
        </div>
        <div class="banner-content">
          <b-container>
            <b-row class="align-items-center">
              <b-col md="6">
                <div class="content">
                  <h2>CAT LITTER SUBSCRIPTION</h2>
                  <p class="d-none d-lg-block">
                      <strong class="d-block">100% Natural Premium Clumping Litter.</strong>
                      Dust free. Clumps in seconds. Flushable. Great odor control. Absorbs 3x better than Clay.  Delivered to your doorstep.
                  </p>
                  <b-button variant="theme">SUBSCRIBE NOW</b-button>
                </div>
                <div class="ingrdient">
                    <p>Only Natural Ingredients. Better for Kitty. Better for the Environment:</p>
                    <ul class="ing-item">
                        <li>
                            <div class="single-item">
                                <img class="lazyload" src="~assets/images/toofu.png" alt="toofu">
                                <p>TOFU-SOYBEAN</p>
                            </div>
                        </li>
                        <li>
                            <div class="single-item">
                                <img class="lazyload" src="~assets/images/corn.png" alt="corn">
                                <p>Corn kernels </p>
                            </div>
                        </li>
                    </ul>
                </div>
              </b-col>
              <b-col md="6">
                <div class="banner-partImg">
                    <img src="~assets/images/banner_cat.png" alt="banner_cat" class="img-fluid lazyload">
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
    </div>
    <PerfectComfy/>
    <CategoryHalf/>
    <Slider></Slider>
    <WhyComfy/>
    <PerfectComfy/>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "Comfycat | Index",
    }
  }
}
</script>
