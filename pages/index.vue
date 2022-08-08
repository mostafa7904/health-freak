<template>
  <div>
    <a
      href="#"
      v-for="locale in $i18n.locales"
      :key="locale.code"
      @click.prevent.stop="$i18n.setLocale(locale.code)"
      >{{ locale.code }}</a
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LocaleObject } from "@nuxtjs/i18n";

export default Vue.extend({
  name: "IndexPage",
  computed: {
    availableLocales() {
      return (this.$i18n.locales as LocaleObject[]).filter(
        (i) => i.code !== this.$i18n.locale
      );
    },
  },
});
</script>
