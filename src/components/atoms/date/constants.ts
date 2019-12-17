import { MonthTranslation } from "@/types";

const GermanMonths: MonthTranslation = {
  Jan: "Januar",
  Feb: "Februar",
  Mar: "März",
  Apr: "April",
  May: "Mai",
  Jun: "Juni",
  Jul: "Juli",
  Aug: "August",
  Sep: "September",
  Oct: "Oktober",
  Nov: "November",
  Dec: "Dezember"
};

export const GER_MONTH = new Map(Object.entries(GermanMonths));
