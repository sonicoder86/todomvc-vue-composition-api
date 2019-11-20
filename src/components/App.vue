<template>
  <div id="app">
    <router-view />
    <CopyRight />
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import CopyRight from './CopyRight.vue';
  import { TodoLocal } from '../services/TodoLocal';

  export default {
    name: 'app',
    components: { CopyRight },
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
