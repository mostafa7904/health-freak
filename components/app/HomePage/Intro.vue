<template>
  <section class="intro-section">
    <div class="intro-section__container grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h1 class="text-3xl">
          {{ $t('intro_title') }}
        </h1>
        <p class="mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta
          dolore, molestiae recusandae, quam quia dolorem, animi accusantium
          consequatur soluta earum sit. Suscipit soluta quasi error, sunt
          perspiciatis maiores illo.
        </p>
      </div>
      <!-- <div>
      <picture>
        <source srcset="/avif/home/intro.avif" type="image/avif" />

        <source srcset="/webp/home/intro.webp" type="image/webp" />

        <img
          src="/png/home/intro.png"
          decoding="async"
          loading="lazy"
          width="100%"
          alt="healthy food"
        />
      </picture>
    </div> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePageIntro'
})
</script>

<style lang="scss">
@import '~/assets/variables.scss';
.intro-section {
  width: 100%;
  height: 100%;
  margin-top: $main-padding;

  &__container {
    padding: $main-padding;
    @media screen and (max-width: #{map-get($display-breakpoints, "md")}) {
      padding: $main-mobile-padding;
    }
  }
}
</style>

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
