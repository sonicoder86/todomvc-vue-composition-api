import { ACTION_TYPES } from '../../constants/action-types';
import uuid from 'uuid/v4';
import { selectCompleted, selectNotCompleted } from '../getters/todo';

export const todosMutations = {
  [ACTION_TYPES.load]: (state, { todos }) =>
    state.todos = todos,
  [ACTION_TYPES.create]: (state, { name }) =>
    state.todos = [...state.todos, { id: uuid(), name, completed: false }],
  [ACTION_TYPES.update]: (state, values) =>
    state.todos = state.todos.map(
      todo => todo.id === values.id ? { ...todo, ...values } : todo
    ),
  [ACTION_TYPES.remove]: (state, { id }) =>
    state.todos = state.todos.filter(todo => todo.id !== id),
  [ACTION_TYPES.completeAll]: state => {
    const areAllCompleted = state.todos.length && selectCompleted(state.todos).length === state.todos.length;
    state.todos = state.todos.map(
      todo => ({ ...todo, ...{ completed: !areAllCompleted } })
    );
  },
  [ACTION_TYPES.clearCompleted]: state =>
    state.todos = selectNotCompleted(state.todos)
};
