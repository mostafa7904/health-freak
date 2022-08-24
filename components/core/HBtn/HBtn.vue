<template>
  <component :is="computedTag" v-bind="computedAttrs" @click="click">
    <span v-if="!loading" class="h-btn__content">
      <slot />
    </span>
    <slot v-else name="loader" />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  genBackgroundColor,
  genBorderColor,
  genBoxShadowColor,
  genTextColor
} from '~/utils/theme'

export default defineComponent({
  name: 'HealthFreakButton',

  props: {
    activeClass: {
      type: String,
      default: ''
    },
    block: Boolean,
    flat: Boolean,
    icon: Boolean,
    loading: Boolean,
    outlined: Boolean,
    plain: Boolean,
    rounded: Boolean,
    disabled: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    text: Boolean,
    tile: Boolean,
    to: {
      type: String,
      default: null,
      validator(v: string) {
        if (!v) return true
        const pattern = new RegExp('(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*')
        return !!pattern.test(v)
      }
    },
    href: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    }
  },

  computed: {
    computedClasses(): any {
      return {
        'h-btn': true,
        // "h-btn--block": this.block,
        'h-btn--disabled': this.disabled,
        'h-btn--icon': this.icon,
        'h-btn--loading': this.loading,
        'h-btn--outlined': this.outlined,
        'h-btn--plain': this.plain,
        'h-btn--rounded': this.rounded,
        'h-btn--link': this.to || this.href,
        'h-btn--text': this.text,
        'h-btn--tile': this.tile
      }
    },
    computedStyles(): any {
      let styles: any = {
        ...genTextColor(this.color)
      }
      if (this.hasBg) styles = { ...styles, ...genBackgroundColor(this.color) }
      if (!this.flat && this.hasBg)
        styles = { ...styles, ...genBoxShadowColor(this.color) }
      if (this.outlined) styles = { ...styles, ...genBorderColor(this.color) }
      return styles
    },
    computedTag() {
      if (this.to) return 'nuxt-link'
      if (this.href) return 'a'
      return this.tag
    },
    computedAttrs() {
      const attrs = {
        href: this.href,
        to: this.to,
        disabled: this.disabled,
        'aria-disabled': this.disabled,
        style: { ...this.computedStyles },
        class: { ...this.computedClasses },
        ...this.$attrs
      } as any

      return attrs
    },
    hasBg(): boolean {
      return !this.text && !this.plain && !this.outlined && !this.icon
    }
  },

  methods: {
    click(e: MouseEvent): void {
      this.$emit('click', e)
    }
  }
})
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.h-btn {
  position: relative;
  width: fit-content;
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: -0.0027rem;
  justify-content: center;
  outline: 0;
  text-decoration: none;
  text-indent: -0.0027rem;
  text-transform: none;
  vertical-align: middle;
  white-space: nowrap;
  border-radius: map-get($map: $h-radius, $key: 'md');
  box-sizing: border-box;
  background: transparent;
  overflow: hidden;
  cursor: pointer;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  &__content {
    padding: 10px 12px;
    width: 100%;
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
    transition: inherit;
    transition-property: opacity;
  }
  &--link {
    &:hover {
      text-decoration: none;
    }
  }
  &--icon > &__content {
    padding: 5px !important;
  }
  &--outlined {
    border: thin solid;
  }
  &--disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
  &--rounded {
    border-radius: map-get($map: $h-radius, $key: 'xl');
  }
}
</style>
