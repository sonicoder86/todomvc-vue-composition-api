import { expect } from 'chai';
import { todosMutations } from '@/store/mutations/todos';

describe('todosMutations', function() {
  it('should set list of items on load', function() {
    const state = { todos: [] };
    const todos = [{ id: 'e2bb892a', name: 'Demo', completed: false }];

    todosMutations.load(state, { todos });

    expect(state.todos).to.eql(todos);
    expect(state.todos).to.have.length(1);
    expect(state.todos).to.contain(todos[0]);
  });

  it('should create new todo', function() {
    const state = { todos: [] };

    todosMutations.create(state, { name: 'Demo' });

    expect(state.todos).to.have.length(1);
    expect(state.todos[0].id).to.be.a('string');
    expect(state.todos[0].name).to.eql('Demo');
    expect(state.todos[0].completed).to.eql(false);
  });

  it('should update existing todo', function() {
    const state = { todos: [{ id: 'e2bb892a', name: 'Demo', completed: false }] };

    todosMutations.update(state, { id: 'e2bb892a', values: { name: 'Demo2' } });

    expect(state.todos[0].name).to.eql('Demo2');
  });

  it('should remove existing todo', function() {
    const state = { todos: [{ id: 'e2bb892a', name: 'Demo', completed: false }] };

    todosMutations.remove(state, { id: 'e2bb892a' });

    expect(state.todos).to.have.length(0);
  });
});
