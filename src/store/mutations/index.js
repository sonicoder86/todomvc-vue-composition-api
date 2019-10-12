import { todosReducer } from './todos';
import { filterReducer } from './filter';

export const mutations = {
  ...todosReducer,
  ...filterReducer
};
