import { shallowMount } from "@vue/test-utils";
import Layout from "./";

describe("Organism Layout", () => {
  let cmp: any;

  beforeAll(() => {
    cmp = shallowMount(Layout, {
      slots: {
        above: "above",
        underneath: "underneath"
      },
      stubs: ["router-view"]
    });
  });

  it("matches snapshot", () => {
    expect(cmp.element).toMatchSnapshot();
  });

  it("it renders slots", () => {
    expect(cmp.find(".layout-above").text()).toMatch("above");
    expect(cmp.find(".layout-underneath").text()).toMatch("underneath");
  });
});
