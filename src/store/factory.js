import Vuex from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { FILTERS } from '../constants/Filters';

export const storeFactory =
  (state = { todos: [], filter: FILTERS.all }) => new Vuex.Store({ state, actions, mutations, getters });
