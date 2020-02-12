import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { storeFactory } from '@/store/factory';

describe('storeFactory', () => {
  it('should create a new instance of store', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = storeFactory();

    expect(store.state.todos).to.eql([]);
    expect(store.state.filter).to.eql('all');
  });

  it('should add new todo', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = storeFactory();

    store.dispatch('onCreate', 'Demo');

    expect(store.state.todos).to.have.length(1);
    expect(store.state.todos[0].id).to.be.a('string');
    expect(store.state.todos[0].name).to.eql('Demo');
    expect(store.state.todos[0].completed).to.eql(false);
  });
});
