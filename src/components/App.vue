<template>
  <div id="app">
    <section class="todoapp">
      <Header />
      <List :todos="visibleTodos" />
      <Footer todos="todos" filter="filter" />
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="http://github.com/blacksonic/">blacksonic</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';
  import Header from './Header.vue';
  import List from './List.vue';
  import Footer from './Footer.vue';
  import { TodoLocal } from '../services/TodoLocal';

  export default {
    name: 'app',
    components: {
      Header, List, Footer
    },
    computed: {
      ...mapState(['todos', 'filter']),
      ...mapGetters(['visibleTodos'])
    },
    methods: {
      ...mapActions(['onLoad'])
    },
    mounted() {
      this.onLoad(TodoLocal.loadTodos());
    },
    beforeUpdate() {
      TodoLocal.storeTodos(this.todos);
    }
  }
</script>
