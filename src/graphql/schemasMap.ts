import 'graphql-import-node';
import * as testTypeDefs from './schemas/test.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import resolvers from './resolversMap';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, testTypeDefs],
  resolvers,
});

export default schema;
