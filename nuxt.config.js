export default {
  // View on mobile phone
  server: {
    host: "0.0.0.0", // default:localhost
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "adi-template-1.0",
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: "has-navbar-fixed-top",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "ADI Template" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;0,900;1,300&display=swap",
      },
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/2a3ec0abd4.js",
        crossorigin: "anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/global.scss"],

  // js
  script: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/aos.client.js", mode: "client" },
    { src: "~/plugins/vue-glide.js" },
    { src: "~/plugins/headroom.client.js", mode: "client" },
    { src: "~/plugins/vue-parallaxy.client.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Style resources allows you to use bulma variables in all components. I've imported the _all.sass file into bulma_vars.scss in the assets directory. style resources is an npm package.
  styleResources: {
    // your settings here
    scss: [
      "@/assets/styles/bulma/bulma_vars.scss",
      "@/assets/styles/modules/vars.scss",
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
