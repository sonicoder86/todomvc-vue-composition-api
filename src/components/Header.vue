<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      :value="name"
      @keyup="handleChange"
    />
  </header>
</template>

<script>
  import { mapActions } from 'vuex';

  const ENTER_KEY = 13;

  export default {
    name: 'Header',
    data: function() {
      return {
        name: ''
      }
    },
    methods: {
      handleChange(event) {
        if (event.which === ENTER_KEY) {
          this.onCreate(this.name);
          this.name = '';
        } else {
          this.name = event.target.value;
        }
      },
      ...mapActions(['onCreate'])
    }
  };
</script>
