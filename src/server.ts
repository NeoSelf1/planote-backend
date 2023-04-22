import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './schema';
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";

const server = new ApolloServer({
  cache: "bounded",
  typeDefs,
  resolvers,
  introspection:true,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

server
  .listen(process.env.PORT || 4000)
  .then(() => console.log('Server is running on http://localhost:4000'));