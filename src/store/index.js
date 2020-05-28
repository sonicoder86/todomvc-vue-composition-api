import { createStore as createVuexStore } from 'vuex';
import { getters } from './getters/todo';
import { FILTERS } from '../constants/filter';

import { todosMutations } from './mutations/todo';
import { filterMutations } from './mutations/filter';

import { todoActions } from './actions/todo';
import { filterActions } from './actions/filter';

const mutations = {
  ...todosMutations,
  ...filterMutations
};

const actions = {
  ...todoActions,
  ...filterActions
};

export const createStore = (state = { todos: [], filter: FILTERS.all }) =>
  createVuexStore({ state, actions, mutations, getters });
