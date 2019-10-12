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
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Item from './Item.vue';

  export default {
    name: 'List',
    components: { Item },
    computed: {
      ...mapState(['todos']),
      ...mapGetters(['areAllCompleted'])
    },
    methods: {
      ...mapActions(['onRemove', 'onUpdate', 'onCompleteAll'])
    }
  };
</script>
