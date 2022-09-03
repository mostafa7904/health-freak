<template>
  <nav :class="computedClasses">
    <slot name="prepend" class="h-navigation-drawer__prepend"> </slot>
    <slot class="h-navigation-drawer__content"></slot>
    <slot name="append" class="h-navigation-drawer__append"></slot>
  </nav>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

export default defineComponent({
  name: 'HealthFreakNavigationDrawer',
  props: {
    value: null as unknown as PropType<any>
  },
  computed: {
    computedClasses(): any {
      return {
        'h-navigation-drawer': true,
        'h-navigation-drawer--open': this.value,
        'h-navigation-drawer--close': !this.value
      }
    }
  }
})
</script>

<style lang="scss">
.h-navigation-drawer {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  height: 100vh;
  overflow: auto;
  z-index: 999;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: transform, visibility, width;
  &__content {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  &--open {
    transform: translateX(0);
    html,
    body {
      overflow-y: hidden;
    }
  }
}
html[lang='fa_IR'] {
  .h-navigation-drawer--close {
    transform: translateX(100%);
  }
}
html[lang='en_US'] {
  .h-navigation-drawer--close {
    transform: translateX(-100%);
  }
}
</style>
