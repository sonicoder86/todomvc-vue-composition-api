import { expect } from 'chai';
import { todosMutations } from '@/store/mutations/todos';

describe('todosMutations', function() {
  it('should set list of items on load', function() {
    const state = {};
    const todos = [{ id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: false }];

    todosMutations.load(state, { todos });

    expect(state.todos).to.eql(todos);
    expect(state.todos).to.have.length(1);
    expect(state.todos).to.contain(todos[0]);
  });
});
