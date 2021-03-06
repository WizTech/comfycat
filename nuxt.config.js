export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'comfycat-nuxt',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },

    googleAnalytics: {
      id: 'UA-205130555-1'
    },
    target: 'static',
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/fonts/stylesheet.css',
        '@/assets/css/main.scss',
        'slick-carousel/slick/slick.css',
        'slick-carousel/slick/slick-theme.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/slick', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/fontawesome',
        '@nuxtjs/google-analytics'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',

        '@nuxtjs/style-resources',
        '@nuxtjs/fontawesome'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    styleResources: {
        scss: [
            '~/assets/scss/variables.scss',
        ]
    },

    fontawesome: {
        icons: {
            solid: true,
            brands: true,
            regular: true
        }
    },
}
