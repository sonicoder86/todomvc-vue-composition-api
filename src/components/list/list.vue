<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Item from '../item/item.vue';

export default {
  components: { Item },
  setup() {
    const store = useStore();

    const onRemove = todoId => store.dispatch('onRemove', todoId);
    const onUpdate = todo => store.dispatch('onUpdate', todo);
    const onCompleteAll = () => store.dispatch('onCompleteAll');

    return {
      visibleTodos: computed(() => store.getters.visibleTodos),
      areAllCompleted: computed(() => store.getters.areAllCompleted),
      onRemove,
      onUpdate,
      onCompleteAll
    };
  }
};
</script>
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="areAllCompleted" readonly />
    <label htmlFor="toggle-all" @click="onCompleteAll"></label>

    <ul class="todo-list">
      <Item v-for="todo in visibleTodos" :key="todo.id" :todo="todo" @remove="onRemove" @update="onUpdate" />
    </ul>
  </section>
</template>
