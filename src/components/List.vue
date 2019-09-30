<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="areAllCompleted" readonly />
    <label htmlFor="toggle-all" @click="onCompleteAll"></label>

    <ul class="todo-list">
      <Item v-for="todo in todos" :key="todo.id" :todo="todo" @remove="onRemove" @update="onUpdate" />
    </ul>
  </section>
</template>

<script>
  import { mapActions } from 'vuex';
  import Item from './Item.vue';

  export default {
    name: 'List',
    components: {
      Item
    },
    props: ['todos'],
    computed: {
      areAllCompleted() {
        return this.todos.length && this.todos.every(todo => todo.completed);
      }
    },
    methods: {
      ...mapActions(['onRemove', 'onUpdate', 'onCompleteAll'])
    }
  };
</script>
