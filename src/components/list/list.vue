<script>
  import { mapActions, mapGetters } from 'vuex';
  import Item from '../item/item.vue';

  export default {
    components: { Item },
    computed: {
      ...mapGetters(['areAllCompleted', 'visibleTodos'])
    },
    methods: {
      ...mapActions(['onRemove', 'onUpdate', 'onCompleteAll'])
    }
  };
</script>
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="areAllCompleted" readonly />
    <label htmlFor="toggle-all" @click="onCompleteAll"></label>

    <ul class="todo-list">
      <Item
        v-for="todo in visibleTodos"
        :key="todo.id"
        :todo="todo"
        @remove="onRemove"
        @update="onUpdate"
      />
    </ul>
  </section>
</template>
