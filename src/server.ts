import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './schema';
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import Keyv from "keyv";


const server = new ApolloServer({
  cache: "bounded",
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(() => console.log('Server is running on http://localhost:4000'));