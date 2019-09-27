<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all"></label>

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
    methods: {
      ...mapActions(['onRemove', 'onUpdate'])
    }
  };
</script>
