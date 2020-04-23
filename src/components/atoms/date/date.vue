<template>
  <div class="atom date f-date">
    <span class="date-day">{{ date.day | formatDay }}</span>
    <span class="date-month">
      {{ date.month | formatMonth }}
    </span>
    <span class="date-year">{{ date.year }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Date } from "@/types";
import { GER_MONTH } from "./constants";

export default Vue.extend({
  name: "Date",
  props: {
    value: String
  },
  methods: {
    getDate(v: string): Date {
      const [month, day, year]: string[] = v.split(" ");

      return {
        month,
        day,
        year
      };
    }
  },
  computed: {
    date(): Date {
      return this.getDate(this.value);
    }
  },
  filters: {
    formatDay(val: string) {
      const hasZero: boolean = val.charAt(0) === "0";
      val = hasZero ? `${+val}` : val;
      return val + ".";
    },
    formatMonth(val: string) {
      return GER_MONTH.get(val);
    }
  }
});
</script>
