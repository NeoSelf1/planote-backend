import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

//file들을 탐색
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.{ts,js}`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.{ts,js}`);
export const typeDefs = mergeTypeDefs(loadedTypes);
// export const resolvers = mergeResolvers(loadedResolvers);
export const resolvers: any = mergeResolvers(loadedResolvers);
