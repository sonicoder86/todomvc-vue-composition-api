import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Header from './Header.vue';
import { storeFactory } from '../store/factory';

describe('Header', function() {
  it('should add new element to store', function() {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = storeFactory();

    const wrapper = shallowMount(Header, { localVue, store });

    wrapper.vm.name = 'New';
    wrapper.find('input').trigger('keyup.enter');

    expect(store.state.todos).to.eql([]);
  });
});
