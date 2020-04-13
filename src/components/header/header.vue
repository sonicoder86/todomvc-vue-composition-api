<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';

const ENTER_KEY = 'Enter';

export default {
  setup() {
    const store = useStore();
    const state = reactive({
      name: ''
    });

    const handleChange = event => (state.name = event.target.value);
    const handleSubmit = event => {
      if (event.key !== ENTER_KEY) {
        return;
      }

      store.dispatch('onCreate', state.name);
      state.name = '';
    };

    return {
      ...toRefs(state),
      handleChange,
      handleSubmit
    };
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
