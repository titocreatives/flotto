import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

declare module "vue/types/vue" {
  interface Vue {
    $apollo: ApolloClient<InMemoryCache>;
  }
}