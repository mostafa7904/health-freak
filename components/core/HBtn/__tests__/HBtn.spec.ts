// Libraries
import Vue from "vue";

// Plugins
import Router from "vue-router";

// Components
import HBtn from "../HBtn.vue";

// Utilities
import {
  createLocalVue,
  mount,
  Wrapper,
  RouterLinkStub,
} from "@vue/test-utils";

describe("HBtn.vue", () => {
  let mountFunction: (options?: object) => Wrapper<Vue>;
  let router: Router;
  let localVue: typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(HBtn, {
        localVue,
        router,
        stubs: {
          Nuxt: true,
          NuxtLink: RouterLinkStub,
        },
        ...options,
      });
    };
  });

  it("should render component and match snapshot", () => {
    const html = mountFunction().html();
    expect(html).toMatchSnapshot();
  });

  it("should render component with color prop and match snapshot", () => {
    expect(
      mountFunction({
        propsData: {
          color: "green darken-1",
        },
      }).html()
    ).toMatchSnapshot();
  });

  it("should render an <a> tag when using href prop", () => {
    const wrapper = mountFunction({
      propsData: {
        href: "http://www.google.com",
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render specified tag when using tag prop", () => {
    const wrapper = mountFunction({
      propsData: {
        tag: "div",
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emit a click event", async () => {
    const wrapper = mountFunction();

    const click = jest.fn();
    wrapper.vm.$on("click", click);
    wrapper.trigger("click");

    await wrapper.vm.$nextTick();

    expect(click).toHaveBeenCalled();
  });

  it("should render an <a> tag when provided a to prop", () => {
    const wrapper = mountFunction({
      propsData: {
        to: "/foo",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
