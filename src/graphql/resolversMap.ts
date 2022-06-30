import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { AllResolvers } from './resolvers/test';

const resolverMap: IResolvers = merge(AllResolvers);
export default resolverMap;
