import Vuex from 'vuex';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const storeFactory = () => new Vuex.Store({ state, actions, mutations, getters });
