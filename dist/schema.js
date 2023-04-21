"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
var load_files_1 = require("@graphql-tools/load-files");
var merge_1 = require("@graphql-tools/merge");
//file들을 탐색
var loadedTypes = (0, load_files_1.loadFilesSync)("".concat(__dirname, "/**/*.typeDefs.{ts,js}"));
var loadedResolvers = (0, load_files_1.loadFilesSync)("".concat(__dirname, "/**/*.resolvers.{ts,js}"));
exports.typeDefs = (0, merge_1.mergeTypeDefs)(loadedTypes);
// export const resolvers = mergeResolvers(loadedResolvers);
exports.resolvers = (0, merge_1.mergeResolvers)(loadedResolvers);
//# sourceMappingURL=schema.js.map