import Vuex from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { FILTERS } from '../constants/Filters';

const defaultState = { todos: [], filter: FILTERS.all };

export const storeFactory = (state = defaultState) => new Vuex.Store({ state, actions, mutations, getters });
