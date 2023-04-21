"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = require("./schema");
var server = new apollo_server_1.ApolloServer({
    cache: "bounded",
    typeDefs: schema_1.typeDefs,
    resolvers: schema_1.resolvers,
});
server
    .listen()
    .then(function () { return console.log('Server is running on http://localhost:4000'); });
//# sourceMappingURL=server.js.map