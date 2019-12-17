<template>
  <div class="o hero-numbers">
    <div class="hero-numbers-grid">
      <div
        class="hero-numbers-cell"
        v-for="(number, i) in [...numbers, ...additionalNumbers]"
        :key="`${number}-${i}-${Math.random()}`"
      >
        <figure class="ball" :class="i < 5 ? 'as-default' : 'as-additional'">
          <span class="ball-number f-number">{{ number }}</span>
          <span class="ball-shadow" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeroNumbers",
  props: {
    numbers: Array,
    additionalNumbers: Array
  },
  inheritAttrs: false
});
</script>

<style src="./hero-numbers.scss" lang="scss"></style>
