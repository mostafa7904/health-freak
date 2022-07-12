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
      {{ error.statusCode === 404 ? pageNotFound : otherError }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    pageNotFound: "Seems like you got lost...",
    otherError: "Something went wrong...",
  }),
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
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
