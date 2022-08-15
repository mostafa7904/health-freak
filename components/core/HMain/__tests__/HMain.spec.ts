// Libraries
import Vue from 'vue'

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

// Components
import HMain from '../HMain.vue'

describe('HMain.vue', () => {
  let mountFunction: (options?: object) => Wrapper<Vue>

  let localVue: typeof Vue

  beforeEach(() => {
    localVue = createLocalVue()

    mountFunction = (options = {}) => {
      return mount(HMain, {
        localVue,
        ...options
      })
    }
  })

  it('should render component and match snapshot', () => {
    const html = mountFunction().html()
    expect(html).toMatchSnapshot()
  })
})
