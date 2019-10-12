import { selectNotCompleted, selectVisible, selectCompleted } from '../helpers/Todo';

export const getters = {
  visibleTodos: state => selectVisible(state.todos, state.filter),
  areAllCompleted: state => state.todos.length && state.todos.every(todo => todo.completed),
  itemsLeft: state => selectNotCompleted(state.todos).length,
  completedCount: state => selectCompleted(state.todos).length
};
