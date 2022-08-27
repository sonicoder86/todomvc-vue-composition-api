<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const name = ref('');

const handleSubmit = () => {
  store.dispatch('onCreate', name.value);
  name.value = '';
};
</script>
<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" v-model="name" @keyup.enter="handleSubmit" />
  </header>
</template>
