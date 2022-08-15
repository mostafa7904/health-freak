<template>
  <div>
    <!-- <a
      v-for="locale in $i18n.locales"
      :key="locale.code"
      class="mx-6"
      href="#"
      @click.prevent.stop="changeLang(locale)"
    >
      {{ locale.code }}
    </a> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { LocaleObject } from '@nuxtjs/i18n'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: this.$t('page_title') as string
    }
  },
  methods: {
    changeLang(locale: LocaleObject) {
      this.$i18n.setLocale(locale.code)
      document.documentElement.setAttribute('lang', locale.code)
      document.location.reload()
    }
  }
})
</script>

<i18n>
{
  "en": {
    "page_title": "Health freak | Your friendly healthy food partner"
  },
  "fa": {
    "page_title": "هلث فریک | دوست تو در پخت و پز غذای سالم"
  }
}
</i18n>
