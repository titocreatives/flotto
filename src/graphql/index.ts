import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "http://localhost:1337/proxy/graphql"
});

const onErrorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
});

const apolloClient = new ApolloClient({
  link: onErrorLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default apolloClient;
