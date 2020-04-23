<template>
  <nav class="m nav">
    <router-link
      v-for="(link, i) in links"
      :key="`link-${link.title}-${i}`"
      :to="link.to"
      v-text="link.title"
      class="nav-item f-nav"
    />
  </nav>
</template>

<script lang="ts">
import Vue, { CreateElement, VNode } from "vue";
import { NavLinks } from "@/types";

export default Vue.extend({
  name: "Nav",
  props: {
    links: Array as () => NavLinks
  }
});
</script>

<style src="./nav.scss" lang="scss" />
