"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = require("./schema");
var apollo_server_core_1 = require("apollo-server-core");
var server = new apollo_server_1.ApolloServer({
    cache: "bounded",
    typeDefs: schema_1.typeDefs,
    resolvers: schema_1.resolvers,
    introspection: true,
    plugins: [
        (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
    ],
});
server
    .listen(process.env.PORT || 4000)
    .then(function () { return console.log('Server is running on http://localhost:4000'); });
//# sourceMappingURL=server.js.map