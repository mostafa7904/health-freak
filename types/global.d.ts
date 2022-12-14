/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue'
import { HealthFreak } from './framework'

declare module 'vue/types/vnode' {
  interface VNode {
    readonly $healthfreak: HealthFreak
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly $healthfreak: HealthFreak
  }
}
