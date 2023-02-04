<template>
  <main class="h-main">
    <div class="h-main__wrap">
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HealthFreakMain'
})
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.h-main {
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
  }
}
</style>
