export type NavLink = {
  to: string;
  title: string | undefined;
};

export type NavLinks = NavLink[];

// manually because apollo codegen failed → Apollo does not support anonymous operations

type draw = {
  date: string;
  numbers: string[];
  additionNumbers: string[];
};

export type drawData = {
  success: boolean;
  backendError: string;
  draws: draw[];
};

export type drawQueryResult = {
  draw: drawData;
};

export type Date = {
  month: string;
  day: string;
  year: string;
};

export type MonthTranslation = {
  Jan: string;
  Feb: string;
  Mar: string;
  Apr: string;
  May: string;
  Jun: string;
  Jul: string;
  Aug: string;
  Sep: string;
  Oct: string;
  Nov: string;
  Dec: string;
};

export enum LotteryTypes {
  eurojackpot = "eurojackpot",
  powerball = "powerball",
  megamillions = "megamillions"
}
