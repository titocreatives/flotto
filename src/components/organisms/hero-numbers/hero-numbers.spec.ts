import { shallowMount } from "@vue/test-utils";
import HeroNumbers from "./";

const MOCK_NUMBERS: string[] = ["25", "31", "38", "49", "50"];
const MOCK_ADDTIONAL_NUMBERS: string[] = ["5", "10"];
const MOCK_ALL_NUMBERS: string[] = [...MOCK_NUMBERS, ...MOCK_ADDTIONAL_NUMBERS];

describe("Organism HeroNumbers", () => {
  let cmp: any;

  beforeAll(() => {
    cmp = shallowMount(HeroNumbers, {
      propsData: {
        numbers: MOCK_NUMBERS,
        additionalNumbers: MOCK_ADDTIONAL_NUMBERS
      }
    });
  });

  it("matches snapshot", () => {
    expect(cmp.element).toMatchSnapshot();
  });

  it("has correct amount of balls", () => {
    let balls = cmp.findAll(".ball");
    expect(balls).toHaveLength(MOCK_ALL_NUMBERS.length);
  });

  it("renders correct numbers in order", () => {
    let balls = cmp.findAll(".ball-number");

    for (let i = 0; i < balls.length; i++) {
      expect(balls.at(i).text()).toMatch(MOCK_ALL_NUMBERS[i]);
    }
  });

  it("additional numbers have .as-additional modifier class", () => {
    let balls = cmp.findAll(".ball");
    expect(balls.at(5).classes() && balls.at(6).classes()).toContain(
      "as-additional"
    );
  });
});
