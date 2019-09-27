import Vuex from 'vuex';
import { FILTERS } from './constants/Filters';
import { actions } from './actions';
import { rootReducer as mutations } from './reducers';
import { selectVisible } from './selectors/Todo';

export const storeFactory = () => new Vuex.Store({
  state: { todos: [], filter: FILTERS.all },
  actions,
  mutations,
  getters: {
    visibleTodos: state => selectVisible(state.todos, state.filter)
  }
});
