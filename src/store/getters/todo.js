import { FILTERS } from '../../constants/filter';

export function selectCompleted(todos) {
  return todos.filter(todo => todo.completed);
}

export function selectNotCompleted(todos) {
  return todos.filter(todo => !todo.completed);
}

export function selectVisible(todos, filter) {
  switch (filter) {
    case FILTERS.all:
      return [...todos];
    case FILTERS.completed:
      return selectCompleted(todos);
    case FILTERS.active:
      return selectNotCompleted(todos);
    default:
      return [...todos];
  }
}

export const getters = {
  visibleTodos: state => selectVisible(state.todos, state.filter),
  areAllCompleted: state => state.todos.length && state.todos.every(todo => todo.completed),
  itemsLeft: state => selectNotCompleted(state.todos).length,
  completedCount: state => selectCompleted(state.todos).length
};
