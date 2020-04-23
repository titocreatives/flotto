<template>
  <div :class="`page result-${lotteries.current}`">
    <section class="result-stage">
      <template v-if="!!drawData.draws">
        <div class="result-nav">
          <button
            @click="hasNext && drawsIndex++"
            :disabled="!hasNext"
            class="result-nav-prev"
          >
            ⟵
          </button>
          <Date :value="currentDraw.date" class="result-nav-date" />
          <button
            @click="hasPrev && drawsIndex--"
            :disabled="!hasPrev"
            class="result-nav-next"
          >
            ⟶
          </button>
          <select v-model="lotteries.current" @change="getResults">
            <option v-for="(t, i) in lotteries.all" :key="i" :value="t">
              {{ t }}
            </option>
          </select>
        </div>
        <HeroNumbers v-bind="currentDraw" />
      </template>
      <template v-else>{{ "Whoopsy" + error }}</template>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Date } from "@/components/atoms/index";
import { HeroNumbers } from "@/components/organisms/index";
import { drawData, drawQueryResult, LotteryTypes } from "@/types";
import { ApolloQueryResult } from "apollo-client";

export default Vue.extend({
  name: "ResultMaster",
  components: {
    Date,
    HeroNumbers
  },
  inject: ["$apollo"],
  data() {
    return {
      apollo: this.$apollo,
      drawData: {} as drawData,
      drawsIndex: 0,
      error: null,
      lotteries: {
        current: LotteryTypes.eurojackpot,
        all: [...Object.keys(LotteryTypes)]
      }
    };
  },
  props: {
    drawLimit: {
      type: Number,
      required: true
    },
    mockData: [Boolean, Object]
  },
  methods: {
    getResults(): void {
      this.drawsIndex = 0;

      this.apollo
        .query({
          query: require("@/graphql/draw.gql"),
          variables: {
            limit: this.drawLimit,
            type: this.lotteries.current
          }
        })
        .then(({ data: { draw } }: ApolloQueryResult<drawQueryResult>) => {
          this.drawData = draw;
        })
        .catch(e => {
          this.error = e.message;
          console.warn(e.message);
        })
        .finally(() => {
          this.$emit("slider-change", true);
        });
    }
  },
  computed: {
    hasNext(): Boolean {
      return this.drawsIndex < this.drawData.draws.length - 1;
    },
    hasPrev(): Boolean {
      return this.drawsIndex > 0;
    },
    currentDraw(): Object {
      return this.drawData.draws[this.drawsIndex];
    }
  },
  created(): void {
    if (this.mockData) {
      this.drawData = this.mockData;
    } else {
      this.getResults();
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "home") {
      this.$emit("slider-change", false);
      setTimeout(() => next(), 450);
    }
  }
});
</script>

<style lang="scss">
@import "@/scss/index-for-components";

$gutter: 2%;

.result {
  &-nav {
    $width: 400px;

    @include position($space-micro, null, null, $gutter);

    width: $width;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include breakpoint(small only) {
      left: 50%;
      transform: translateX(-50%);
    }

    &-prev,
    &-next {
      transform: scale(1);

      &:hover:not([disabled]) {
        transform: scale(1.2);
      }
    }

    select {
      text-transform: capitalize;
    }
  }

  &-stage {
    padding: $space-medium $gutter;
    background: $stage-gradient;

    @include breakpoint(medium up) {
      border-radius: $space-small;
    }

    @include breakpoint(small only) {
      padding-bottom: 0;
    }
  }
}
</style>
