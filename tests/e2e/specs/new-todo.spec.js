describe('New todo', () => {
  it('it should create new todo', () => {
    cy.visit('/');
    cy.contains('h1', 'todos');

    const newTodo = cy.get('.new-todo');
    newTodo.type('Demo');
    newTodo.type('{enter}');

    cy.get('.main .todo-list .view').contains('Demo');
  });
});
