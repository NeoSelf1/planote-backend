import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './schema';


const server = new ApolloServer({
  cache: "bounded",
  typeDefs,
  resolvers,
  introspection:true
});

server
  .listen(process.env.PORT || 4000)
  .then(() => console.log('Server is running on http://localhost:4000'));