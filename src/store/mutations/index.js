import { todosMutations } from './todos';
import { filterMutations } from './filter';

export const mutations = {
  ...todosMutations,
  ...filterMutations
};
