import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { storeFactory } from './factory';

describe('storeFactory', function() {
  it('should create a new instance of vuex store', function() {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = storeFactory();

    expect(store.state.todos).to.eql([]);
    expect(store.state.filter).to.eql('all');
  });
});
