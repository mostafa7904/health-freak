<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita commodi
    tenetur officiis ducimus eligendi voluptatem numquam accusantium cupiditate,
    earum dolorum assumenda sunt. Ab doloribus eligendi, recusandae numquam
    distinctio quidem quo!
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SearchPage',
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
    "page_title": "Health freak | Search in healthy food recepies"
  },
  "fa": {
    "page_title": "هلث فریک | جست و جو در بین غذاهای سالم"
  }
}
</i18n>
