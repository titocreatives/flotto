import { mount, RouterLinkStub } from "@vue/test-utils";
import Nav from "./";
import { NavLinks } from "@/types";

const MOCK_LINKS: NavLinks = [
  {
    to: "/foo",
    title: "Foo"
  },
  {
    to: "/bar",
    title: "Bar"
  }
];

describe("Molecule Nav", () => {
  let cmp: any;

  beforeAll(() => {
    cmp = mount(Nav, {
      propsData: {
        links: MOCK_LINKS
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
  });

  it("matches snapshot", () => {
    expect(cmp.element).toMatchSnapshot();
  });

  it("passes Props to router-link", () => {
    const RouterLinks = cmp.findAll(RouterLinkStub);

    for (let i = 0; i < RouterLinks.length; i++) {
      expect(RouterLinks.at(i).props().to).toBe(MOCK_LINKS[i].to);
      expect(RouterLinks.at(i).text()).toEqual(MOCK_LINKS[i].title);
    }
  });
});
