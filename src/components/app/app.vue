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
  import Header from '../header/header.vue';
  import List from '../list/list.vue';
  import Footer from '../footer/footer.vue';
  import CopyRight from '../copy-right/copy-right.vue';
  import { TodoLocal } from '../../services/todo-local';

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
