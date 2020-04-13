import { v4 as uuidv4 } from 'uuid';
import { ACTION_TYPES } from '../../constants/action-types';
import { selectCompleted, selectNotCompleted } from '../getters/todo';

const areAllCompleted = state => state.length && selectCompleted(state).length === state.length;

export const todosMutations = {
  [ACTION_TYPES.load]: (state, { todos }) => (state.todos = todos),
  [ACTION_TYPES.create]: (state, { name }) =>
    (state.todos = [...state.todos, { id: uuidv4(), name, completed: false }]),
  [ACTION_TYPES.update]: (state, values) =>
    (state.todos = state.todos.map(todo => (todo.id === values.id ? { ...todo, ...values } : todo))),
  [ACTION_TYPES.remove]: (state, { id }) => (state.todos = state.todos.filter(todo => todo.id !== id)),
  [ACTION_TYPES.completeAll]: state => {
    state.todos = state.todos.map(todo => ({ ...todo, ...{ completed: !areAllCompleted(state) } }));
  },
  [ACTION_TYPES.clearCompleted]: state => (state.todos = selectNotCompleted(state.todos))
};
