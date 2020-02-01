<template>
  <div id="app">
    <section class="todoapp">
      <Header />
      <List v-if="todos.length" />
      <Footer v-if="todos.length" />
    </section>
    <CopyRight />
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import Header from './Header.vue';
  import List from './List.vue';
  import Footer from './Footer.vue';
  import CopyRight from './CopyRight.vue';
  import { TodoLocal } from '../services/TodoLocal';

  export default {
    components: { CopyRight, Header, List, Footer },
    computed: {
      ...mapState(['todos'])
    },
    methods: {
      ...mapActions(['onLoad'])
    },
    mounted() {
      this.onLoad(TodoLocal.loadTodos());
    },
    watch: {
      todos() {
        TodoLocal.storeTodos(this.todos);
      },
    }
  }
</script>
