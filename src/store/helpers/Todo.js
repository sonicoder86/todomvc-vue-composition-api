import { FILTERS } from '../../constants/Filters';

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

export function selectNotCompleted(todos) {
  return todos.filter(todo => !todo.completed);
}

export function selectCompleted(todos) {
  return todos.filter(todo => todo.completed);
}
