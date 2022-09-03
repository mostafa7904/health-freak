<template>
  <div class="home-page">
    <home-page-intro />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: this.$t('page_title') as string
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
