import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Header from '@/components/Header.vue';
import { storeFactory } from '@/store/factory';

describe('Header', () => {
  it('should add new element to store', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = storeFactory();

    const wrapper = shallowMount(Header, { localVue, store });

    const input = wrapper.find('input');
    input.element.value = 'New';
    input.trigger('input');
    input.trigger('keyup.enter');

    expect(store.state.todos).to.eql([]);
  });
});
