# Health Freak API 🖥️

- ## [Semantic Commits](/api/commits.md)

## Syntax

There are some syntax in .vscode folder. You can change them if you want to or add your own. [More about vscode code snippets.](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

<!-- ### Synaxes:

- docsPage:

```readme
## Title [emoji]


Description


- List Item

```

- testPage:

```js
import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import Vuetify from "vuetify";
import component from "@/path";

describe("Name", () => {
  const localVue = createLocalVue();
  let vuetify, wrapper;

  // Setup the test
  beforeAll(() => {
    vuetify = new Vuetify();

    wrapper = mount(Component, {
      localVue,
      vuetify,
      stubs: {
        RouterLink: RouterLinkStub,
        Nuxt: true,
        NuxtLink: true,
      },
    });
  });

  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
``` -->

## Image optimization

All the media in static folder must be optimized (Video, Image, Audio and etc.).

Image optimization process:

1. [Optimzie with lossy settings](https://shortpixel.com/online-image-compression)
2. [Resize to the right aspect-ratio](https://ezgif.com/resize)

<sub style="color: orange">note: If the images looked low quality, feel free to change the process. maybe optimize the image with lossless settings.</sub>
