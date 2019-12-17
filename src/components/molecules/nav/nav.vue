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
  // ¯\_(ツ)_/¯
  // render(h: CreateElement): VNode {
  //   return h(
  //     "nav",
  //     this.links.map((link, i) =>
  //       h(
  //         "router-link",
  //         {
  //           props: {
  //             to: link.to
  //           },
  //           class: ["f-nav"],
  //           key: `link-${link.title}-${i}`
  //         },
  //         [link.title]
  //       )
  //     )
  //   );
  // }
});
</script>

<style src="./nav.scss" lang="scss"></style>
