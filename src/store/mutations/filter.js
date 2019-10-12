import { ACTION_TYPES } from '../../constants/ActionTypes';

export const filterReducer = {
  [ACTION_TYPES.selectFilter]: (state, { filter }) =>
    state.filter = filter
};
