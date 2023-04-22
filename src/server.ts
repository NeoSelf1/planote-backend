import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './schema';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} from "apollo-server-core";

const server = new ApolloServer({
  cache: "bounded",
  typeDefs,
  resolvers,
  plugins: [
    // Install a landing page plugin based on NODE_ENV
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: "my-graph-id@my-graph-variant",
          footer: false,
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});

server
  .listen(process.env.PORT || 4000)
  .then(() => console.log('Server is running on http://localhost:4000'));