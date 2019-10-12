<template>
  <div id="app">
    <section class="todoapp">
      <Header />
      <List />
      <Footer />
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
    name: 'app',
    components: { Header, List, Footer, CopyRight },
    computed: {
      ...mapState(['todos'])
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
