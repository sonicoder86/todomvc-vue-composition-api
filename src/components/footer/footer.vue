<script>
  import { mapActions, mapState, mapGetters } from 'vuex';
  import { FILTERS } from '../../constants/filter';

  export default {
    methods: {
      ...mapActions(['onClearCompleted', 'onFilterSelect']),
    },
    computed: {
      ...mapState(['todos', 'filter']),
      ...mapGetters(['itemsLeft', 'completedCount']),
      itemText() {
        return this.itemsLeft === 1 ? 'item' : 'items';
      },
      filterTitles() {
        return [
          { key: FILTERS.all, value: 'All' },
          { key: FILTERS.active, value: 'Active' },
          { key: FILTERS.completed, value: 'Completed' }
        ];
      }
    }
  };
</script>
<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ itemsLeft }}</strong><span> {{ itemText }} left</span></span>
    <ul class="filters">
      <li v-for="filterTitle in filterTitles" :key="filterTitle.key">
        <a
          href="#"
          :class="{ selected: filterTitle.key === filter }"
          @click="onFilterSelect(filterTitle.key)"
        >
          {{ filterTitle.value }}
        </a>
      </li>
    </ul>
    <button v-if="completedCount" class="clear-completed" @click="onClearCompleted">Clear completed</button>
  </footer>
</template>
