import colors from "vuetify/es5/util/colors";

export default {
  server: {
    port: process.env.PORT,
    host: process.env.HOST
  },
  ssr: true,
  target: "server",
  head: {
    titleTemplate: "%s",
    title: "Chatbee",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    script: [
      { type: "text/javascript", src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js' },
      { type: "text/javascript", src: 'https://cdn.jsdelivr.net/npm/chart.js' },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/chatbee-logo.png" },{
        href:"https://fonts.googleapis.com/css2?family=Mitr:wght@200;400;600&display=swap",
        rel:"stylesheet"
      },{
        href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css',
        rel: "stylesheet"
      },{
        href:
          "https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600;700;800&display=swap",
        rel: "stylesheet"
      },{
        href:
          "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@200;300;400;500;600;700&display=swap",
        rel: "stylesheet"
      },{
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap",
        rel: "stylesheet"
      },{
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap",
        rel: "stylesheet"
      },{
        href:
          "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css",
        rel: "stylesheet"
      }
    ]
  },
  css: [],
  plugins: [
    { src: "~/plugins/anime.js" },
    { src: "~/plugins/TiptapVuetify" },
    { src: "~/plugins/lodash.js" },
    { src: "~/plugins/Vuesemantic.js" },
  ],
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],
  axios: {
    baseURL: "https://dev-backoffice-composite.cbapi-nonprod.com/",
    proxy: true,
  },
  modules: [
    "@nuxtjs/axios"
  ],
  proxy: {
    '/v1/': {
      target: 'https://dev-backoffice-composite.cbapi-nonprod.com',
      pathRewrite: {'^/': ''},
      changeOrigin: true
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss", "~/assets/base.scss"],
    theme: {
      dark: false,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vuetify/lib", "tiptap-vuetify"]
  }
};
