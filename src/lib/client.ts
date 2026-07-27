import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_WPGRAPHQL_ENDPOINT || 'https://allianceactionsafrique.com/graphql',
  fetch: (uri, options) => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3000)
    return fetch(uri, { ...options, signal: controller.signal }).finally(() => clearTimeout(timeout))
  },
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: false,
            merge(existing, incoming) {
              return incoming
            },
          },
          projects: {
            keyArgs: false,
            merge(existing, incoming) {
              return incoming
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})
