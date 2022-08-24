export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Health Freak',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: ''
      },
      // // Open sans
      // {
      //   rel: "stylesheet",
      //   href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-",
      //   crossorigin: "",
      // },
      // VazirMatn
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap&text=آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی ّ/ء',
        crossorigin: ''
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
        crossorigin: ''
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/variables.scss', '@/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // add custom directives
    `~/directives/index.ts`
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components/core', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', dir: 'ltr' },
      { code: 'fa', iso: 'fa_IR', dir: 'rtl' }
    ],
    defaultLocale: 'en',
    vueI18nLoader: true,
    strategy: 'no_prefix',
    seo: true
  },

  render: {
    asyncScripts: true,
    crossorigin: 'anonymous',
    http2: {
      push: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false,
    optimizeCSS: true,
    parallel: true,
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: undefined,
      cacheGroups: {}
    },
    html: {
      minifyCSS: true,
      minifyJS: false
    },
    terser: {
      parallel: true,
      cache: false,
      sourceMap: true,
      extractComments: {
        filename: 'LICENSES'
      },
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: { drop_console: true },
        mangle: true, // Note `mangle.properties` is `false` by default.
        module: false,
        output: { comments: false },
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false
      }
    }
  },

  vue: {
    config: {
      productionTip: false,
      devtools: false
    }
  }
}
