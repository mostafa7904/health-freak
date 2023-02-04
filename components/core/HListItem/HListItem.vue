<template>
  <component :is="tag"> </component>
</template>

<script>
export default {
  name: 'HealthFreakListItem',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss"></style>
