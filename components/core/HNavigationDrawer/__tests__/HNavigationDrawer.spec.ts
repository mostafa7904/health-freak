// Libraries
import Vue from 'vue'

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'

// Components
import HNavigationDrawer from '../HNavigationDrawer.vue'

describe('HNavigationDrawer.vue', () => {
  let mountFunction: (options?: object) => Wrapper<Vue>

  let localVue: typeof Vue

  beforeEach(() => {
    localVue = createLocalVue()

    mountFunction = (options = {}) => {
      return mount(HNavigationDrawer, {
        localVue,
        ...options
      })
    }
  })

  it('should render navigation drawer closed if no value is passed', () => {
    const html = mountFunction().html()
    expect(html).toMatchSnapshot()
  })

  it('should render navigation drawer open if value passed is true', () => {
    const html = mountFunction({
      propsData: {
        value: true
      }
    }).html()
    expect(html).toMatchSnapshot()
  })

  it('should change the state if the value is changed', async () => {
    const wrapper = mountFunction({
      propsData: {
        value: true
      }
    })
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({ value: false })
    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
