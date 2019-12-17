import { shallowMount } from "@vue/test-utils";
import Date from "./";

const MOCK_DATE = "Dec 01 2019";

const MOCK_DATE_OBJ = {
  month: "Dec",
  day: "01",
  year: "2019"
};

const MOCK_DATE_FORMATTED = {
  month: "Dezember",
  day: "1.",
  year: "2019"
};

describe("Atom Date", () => {
  let cmp: any;

  beforeAll(() => {
    cmp = shallowMount(Date, {
      propsData: {
        value: MOCK_DATE
      }
    });
  });

  it("matches snapshot", () => {
    expect(cmp.element).toMatchSnapshot();
  });

  it("has computed that returns correct date object from string", () => {
    expect(cmp.vm.date).toEqual(MOCK_DATE_OBJ);
  });

  it("has correct formatted strings", () => {
    const day = cmp.find(".date-day");
    const month = cmp.find(".date-month");
    const year = cmp.find(".date-year");

    expect(day.text().trim()).toMatch(MOCK_DATE_FORMATTED.day);
    expect(month.text().trim()).toMatch(MOCK_DATE_FORMATTED.month);
    expect(year.text().trim()).toMatch(MOCK_DATE_FORMATTED.year);
  });
});
