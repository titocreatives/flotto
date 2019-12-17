<template>
  <main id="app">
    <article>
      <Layout>
        <Logo slot="above" />
        <Nav slot="underneath" :links="links" />
      </Layout>
    </article>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

import apolloProvider from "@/graphql";

import { Layout } from "@/components/organisms";
import { Logo } from "@/components/atoms";
import { Nav } from "@/components/molecules";

import { NavLinks } from "./types";

export default Vue.extend({
  name: "App",
  provide: () => ({ $apollo: apolloProvider }),
  components: { Layout, Logo, Nav },
  props: {
    links: Array as () => NavLinks
  }
});
</script>

<style src="@/scss/main.scss" lang="scss"></style>
