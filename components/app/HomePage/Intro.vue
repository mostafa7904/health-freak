<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 mt-6">
    <div>
      <h1 class="text-3xl">
        {{ $t('intro_title') }}
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta
        dolore, molestiae recusandae, quam quia dolorem, animi accusantium
        consequatur soluta earum sit. Suscipit soluta quasi error, sunt
        perspiciatis maiores illo.
      </p>
    </div>
    <div>
      <picture>
        <!-- AVIF -->
        <source srcset="/avif/home/intro.avif" type="image/avif" />
        <source
          srcset="/avif/home/intro-450-260.avif"
          media="(min-width: 780px)"
          type="image/avif"
        />
        <source
          srcset="/avif/home/intro-300-190.avif"
          media="(min-width: 600px)"
          type="image/avif"
        />

        <!-- WEBP -->
        <source srcset="/webp/home/intro.webp" type="image/webp" />
        <source
          srcset="/webp/home/intro-450-260.webp"
          media="(min-width: 780px)"
          type="image/webp"
        />
        <source
          srcset="/webp/home/intro-300-190.webp"
          media="(min-width: 600px)"
          type="image/webp"
        />

        <!-- PNG -->
        <source srcset="/png/home/intro.png" />
        <source
          srcset="/png/home/intro-450-260.png"
          media="(min-width: 780px)"
        />
        <source
          srcset="/png/home/intro-300-190.png"
          media="(min-width: 600px)"
        />

        <img width="100%" src="/png/home/intro.png" alt="healthy food" />
      </picture>
    </div>
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
