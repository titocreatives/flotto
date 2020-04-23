<template>
  <div class="o layout">
    <div class="layout-slide">
      <header class="layout-above">
        <slot name="above" />
      </header>
      <section class="layout-content" :class="{ 'is-open': sliderIsOpen }">
        <transition name="fade">
          <router-view @slider-change="controlSlider" />
        </transition>
      </section>
      <div class="layout-underneath">
        <slot name="underneath" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Layout",
  data() {
    return {
      sliderIsOpen: false
    };
  },
  methods: {
    controlSlider(isOpen: boolean) {
      this.sliderIsOpen = isOpen;
    }
  }
});
</script>

<style src="./layout.scss" lang="scss" />
