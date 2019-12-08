import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import Todos from '@/components/Todos.vue';
import { storeFactory } from '@/store/factory';
import { routerFactory } from '@/routes';

describe('Todos', function() {
  it('should handle route change', function() {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    const store = storeFactory();
    const router = routerFactory();

    shallowMount(Todos, { localVue, store, router });
    router.push('/completed');

    expect(store.state.filter).to.eql('completed');
  });
});
