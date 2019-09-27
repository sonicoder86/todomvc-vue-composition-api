import { todosReducer } from './todos';
import { filterReducer } from './filter';

export const rootReducer = {
  ...todosReducer,
  ...filterReducer
};
