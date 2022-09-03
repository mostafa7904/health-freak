<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 mt-6">
    <div>
      <h1 class="text-3xl">{{ $t('intro_title') }}</h1>
      <p></p>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePageIntro'
})
</script>

<style lang="scss"></style>

<i18n>
{
    "en": {
        "intro_title": "Healthy Recepies"
    },
    "fa": {
        "intro_title": "غذای سالم"
    }
}
</i18n>
