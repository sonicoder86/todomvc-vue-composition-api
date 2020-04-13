const LOCAL_STORAGE_KEY = 'todoapp_todos';

export class TodoLocal {
  static loadTodos() {
    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  }

  static storeTodos(todos) {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }
}
