import { ACTION_TYPES } from '../../constants/ActionTypes';

export const filterMutations = {
  [ACTION_TYPES.selectFilter]: (state, { filter }) =>
    state.filter = filter
};
