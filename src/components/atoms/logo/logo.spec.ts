import { shallowMount } from "@vue/test-utils";
import Logo from "./";

describe("Atom Logo", () => {
  it("matches snapshot", () => {
    const cmp = shallowMount(Logo);

    expect(cmp.element).toMatchSnapshot();
  });
});
