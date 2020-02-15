<script>
  import { mapActions } from 'vuex';
  const ENTER_KEY = 'Enter';

  export default {
    data: () => ({
      name: ''
    }),
    methods: {
      handleChange(event) {
        this.name = event.target.value;
      },
      handleSubmit(event) {
        if (event.key !== ENTER_KEY) {
          return;
        }

        this.onCreate(this.name);
        this.name = '';
      },
      ...mapActions(['onCreate'])
    }
  };
</script>
<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      :value="name"
      @input="handleChange"
      @keyup="handleSubmit"
    />
  </header>
</template>
