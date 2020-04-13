import { ACTION_TYPES } from '../../constants/action-types';

export const filterMutations = {
  [ACTION_TYPES.selectFilter]: (state, { filter }) => (state.filter = filter)
};
