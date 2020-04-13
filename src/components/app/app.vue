<template>
  <div id="app">
    <section class="todoapp">
      <Header />
      <List v-if="todosLength" />
      <Footer v-if="todosLength" />
    </section>
    <CopyRight />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, watchEffect, computed } from 'vue';
import Header from '../header/header.vue';
import List from '../list/list.vue';
import Footer from '../footer/footer.vue';
import CopyRight from '../copy-right/copy-right.vue';
import { TodoLocal } from '../../services/todo-local';

export default {
  components: { CopyRight, Header, List, Footer },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('onLoad', TodoLocal.loadTodos());

      watchEffect(() => {
        TodoLocal.storeTodos(store.state.todos);
      });
    });

    return {
      todosLength: computed(() => store.state.todos.length)
    };
  }
};
</script>
