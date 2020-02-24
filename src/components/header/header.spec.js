import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Header from './header.vue';
import { createStore } from '../../store/index';

describe('Header', () => {
  it('should add new element to store', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = createStore();

    const wrapper = shallowMount(Header, { localVue, store });

    const input = wrapper.find('input');
    input.element.value = 'Demo';
    input.trigger('input');
    input.trigger('keyup', { key: 'Enter' });

    expect(store.state.todos).to.have.length(1);
    expect(store.state.todos[0].id).to.be.a('string');
    expect(store.state.todos[0].name).to.eql('Demo');
    expect(store.state.todos[0].completed).to.eql(false);
  });
});
