import { ACTION_TYPES } from '../../constants/action-types';

export const filterActions = {
  onFilterSelect: ({ commit }, filter) => commit(ACTION_TYPES.selectFilter, { filter })
};
