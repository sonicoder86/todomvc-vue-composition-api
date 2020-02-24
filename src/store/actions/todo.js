import { ACTION_TYPES } from '../../constants/action-types';

export const todoActions = {
  onLoad: ({ commit }, todos) => commit(ACTION_TYPES.load, { todos }),
  onCreate: ({ commit }, name) => commit(ACTION_TYPES.create, { name }),
  onRemove: ({ commit }, id) => commit(ACTION_TYPES.remove, { id }),
  onUpdate: ({ commit }, payload) => commit(ACTION_TYPES.update, payload),
  onCompleteAll: ({ commit }) => commit(ACTION_TYPES.completeAll),
  onClearCompleted: ({ commit }) => commit(ACTION_TYPES.clearCompleted)
};
