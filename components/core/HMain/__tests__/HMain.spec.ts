// Libraries
import Vue from "vue";

// Components
import HMain from "../HMain.vue";

// Utilities
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";

describe("HMain.vue", () => {
  let mountFunction: (options?: object) => Wrapper<Vue>;

  let localVue: typeof Vue;

  beforeEach(() => {
    localVue = createLocalVue();

    mountFunction = (options = {}) => {
      return mount(HMain, {
        localVue,
        ...options,
      });
    };
  });

  it("should render component and match snapshot", () => {
    const html = mountFunction().html();
    expect(html).toMatchSnapshot();
  });
});
