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
                  <b-button variant="theme" to="litter">SUBSCRIBE NOW</b-button>
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
    <section class="g_section comfy-kit">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <div class="content text-center">
                        <h2>KITTY Products</h2>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="6" class="d-none d-lg-block">
                    <b-img src="~assets/images/coming-soon2.png" fluid alt="coming-soon"></b-img>
                </b-col>
                <b-col lg="6">
                    <div class="kits">
                        <div class="single-kit">
                            <div class="kit-img">
                                <b-img src="~assets/images/c_kitty1.png" fluid alt="c_kitty1"></b-img>
                            </div>
                            <b-button variant="theme" class="mx-auto w-100" to="product">Shop Automatic Litter Boxes</b-button>
                        </div>
                        <div class="single-kit">
                            <div class="kit-img">
                                <b-img src="~assets/images/c_kitty2.png" fluid alt="c_kitty2"></b-img>
                            </div>
                            <b-button variant="theme" class="mx-auto w-100" to="litter">SHOP 100% NATURAL LITTER</b-button>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
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
