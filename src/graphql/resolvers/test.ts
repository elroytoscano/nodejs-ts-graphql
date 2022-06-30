import { IResolvers } from '@graphql-tools/utils';

export const AllResolvers: IResolvers = {
  Query: {
    name: () => 'hello whatever your name is ',
  },
};
