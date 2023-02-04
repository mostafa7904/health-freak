<template>
  <component :is="tag">
    <template v-if="items.length">
      <!-- <slot v-for="(item, key) in items" :key="key" name="item"></slot> -->
    </template>
    <slot v-else></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HealthFreakList',
  props: {
    items: {
      type: Array,
      default: () => [],
      validator: v => !!v
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  data: () => ({})
})
</script>
