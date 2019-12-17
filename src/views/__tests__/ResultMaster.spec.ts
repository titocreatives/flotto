import { mount } from "@vue/test-utils";
import ResultMaster from "./../ResultMaster.vue";
import { Date } from "@/components/atoms";
import { HeroNumbers } from "@/components/organisms";

const MOCK_DATA = {
  success: true,
  backendError: null,
  draws: [
    {
      date: "Dec 13 2019",
      numbers: ["25", "31", "38", "49", "50"],
      additionalNumbers: ["5", "10"]
    },
    {
      date: "Dec 06 2019",
      numbers: ["8", "14", "23", "30", "45"],
      additionalNumbers: ["1", "9"]
    },
    {
      date: "Nov 29 2019",
      numbers: ["2", "3", "30", "31", "45"],
      additionalNumbers: ["6", "8"]
    }
  ]
};

describe("Page ResultMaster", () => {
  let cmp: any;

  beforeAll(() => {
    cmp = mount(ResultMaster, {
      propsData: {
        drawLimit: 20,
        drawType: "eurojackpot",
        mockData: MOCK_DATA
      },
      provide: {
        $apollo: {}
      }
    });
  });

  it("matches snapshot", () => {
    expect(cmp.element).toMatchSnapshot();
  });

  it("passes correct currentDraw data to atom Date and organism HeroNumbers", () => {
    const date = cmp.find(Date);
    const heroNumbers = cmp.find(HeroNumbers);

    expect(date.vm.value).toMatch(
      cmp.vm.currentDraw.date && MOCK_DATA.draws[0].date
    );
    expect(heroNumbers.vm.numbers).toEqual(
      cmp.vm.currentDraw.numbers && MOCK_DATA.draws[0].numbers
    );
    expect(heroNumbers.vm.additionalNumbers).toEqual(
      cmp.vm.currentDraw.additionalNumbers &&
        MOCK_DATA.draws[0].additionalNumbers
    );
  });

  it("can navigate results - next", () => {
    const next = cmp.find(".result-nav-next");
    next.trigger("click");
    expect(cmp.vm.drawsIndex).toBe(1);
  });

  it("disables next button", () => {
    cmp.setData({ drawsIndex: MOCK_DATA.draws.length - 1 });
    const next = cmp.find(".result-nav-next");
    expect(next.attributes("disabled")).toBe("disabled");
  });

  it("can navigate results - prev", () => {
    cmp.setData({ drawsIndex: 1 });
    const prev = cmp.find(".result-nav-prev");
    prev.trigger("click");
    expect(cmp.vm.drawsIndex).toBe(0);
  });

  it("disables prev button", () => {
    const prev = cmp.find(".result-nav-prev");
    expect(prev.attributes("disabled")).toBe("disabled");
  });
});
