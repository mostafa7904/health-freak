<template>
  <mark class="h-highlight">
    <slot> </slot>
  </mark>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HealthFreakHighlight",
});
</script>

<style lang="scss">
.h-highlight {
  background-image: url("/svg/highlight.svg");
  background-color: transparent;
  background-position: bottom;
  background-repeat: no-repeat;
  color: inherit;
}
</style>
