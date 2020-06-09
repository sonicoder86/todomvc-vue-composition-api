<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { FILTERS } from '../../constants/filter';

export default {
  setup() {
    const store = useStore();

    const filterTitles = [
      { key: FILTERS.all, value: 'All' },
      { key: FILTERS.active, value: 'Active' },
      { key: FILTERS.completed, value: 'Completed' }
    ];
    const onClearCompleted = () => store.dispatch('onClearCompleted');
    const onFilterSelect = filter => store.dispatch('onFilterSelect', filter);

    return {
      filterTitles,
      filter: computed(() => store.state.filter),
      itemsLeft: computed(() => store.getters.itemsLeft),
      completedCount: computed(() => store.getters.completedCount),
      itemText: computed(() => (store.getters.itemsLeft === 1 ? ' item' : ' items')),
      onClearCompleted,
      onFilterSelect
    };
  }
};
</script>
<template>
  <footer class="footer">
    <span class="todo-count"
      ><strong>{{ itemsLeft }}</strong
      ><span> {{ itemText }} left</span></span
    >
    <ul class="filters">
      <li v-for="filterTitle in filterTitles" :key="filterTitle.key">
        <a href="./#" :class="{ selected: filterTitle.key === filter }" @click="onFilterSelect(filterTitle.key)">
          {{ filterTitle.value }}
        </a>
      </li>
    </ul>
    <button v-if="completedCount" class="clear-completed" @click="onClearCompleted">Clear completed</button>
  </footer>
</template>
