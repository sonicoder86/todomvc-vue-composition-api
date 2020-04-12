import { expect } from 'chai';
import { createStore } from './index';

describe('createStore', () => {
  it('should create a new instance of store', () => {
    const store = createStore();

    expect(store.state.todos).to.eql([]);
    expect(store.state.filter).to.eql('all');
  });

  it('should add new todo', () => {
    const store = createStore();

    store.dispatch('onCreate', 'Demo');

    expect(store.state.todos).to.have.length(1);
    expect(store.state.todos[0].id).to.be.a('string');
    expect(store.state.todos[0].name).to.eql('Demo');
    expect(store.state.todos[0].completed).to.eql(false);
  });
});
