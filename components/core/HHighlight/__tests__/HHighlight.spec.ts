// Libraries
import Vue from "vue";

// Components
import HHighlight from "../HHighlight.vue";

// Utilities
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";

describe("HHighlight.vue", () => {
  let mountFunction: (options?: object) => Wrapper<Vue>;

  let localVue: typeof Vue;

  beforeEach(() => {
    localVue = createLocalVue();

    mountFunction = (options = {}) => {
      return mount(HHighlight, {
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
