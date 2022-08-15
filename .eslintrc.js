module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    curly: 0,
    camelcase: 0,
    'space-before-function-paren': 0,
    'prefer-regex-literals': 0,
    'vue/html-self-closing': 0
  }
}
