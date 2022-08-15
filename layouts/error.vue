<template>
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
  >
    <div class="not-found-text">
      4
      <img
        class="tomato-o-img"
        src="/png/not-found/tomato-o.png"
        alt="tomato, not found"
      />
      4
    </div>
    <div class="mt-4">
      {{ error.statusCode === 404 ? $t('pageNotFound') : $t('otherError') }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: '404 - Not found'
    }
  }
}
</script>

<style lang="scss">
$size: 120px;
.tomato-o-img {
  margin-top: 0.1 * $size;
  width: $size - 50px;
  height: $size - 50px;
}
.not-found-text {
  line-height: 1;
  display: flex;
  font-size: $size;
  align-items: center;
  justify-content: center;
}
</style>

<i18n>
{
  "en": {
    "pageNotFound": "Seems like you are lost...",
    "otherError": "Something went wrong..."
  },
  "fa": {
    "pageNotFound": "مثل این که راه رو گم کردی...",
    "otherError": "یه مشکلی پیش اومد..."
  }
}
</i18n>
