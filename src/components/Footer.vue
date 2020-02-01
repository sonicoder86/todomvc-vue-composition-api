<script>
  import { mapActions, mapState, mapGetters } from 'vuex';
  import { FILTERS } from '../constants/Filters';

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
        return {
          [FILTERS.all]: 'All',
          [FILTERS.active]: 'Active',
          [FILTERS.completed]: 'Completed'
        };
      }
    }
  };
</script>
<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ itemsLeft }}</strong><span> {{ itemText }} left</span></span>
    <ul class="filters">
      <li v-for="filterKey in Object.keys(filterTitles)" :key="filterKey">
        <a
          href="#"
          :class="{ selected: filterKey === filter }"
          @click="onFilterSelect(filterKey)"
        >
          {{ filterTitles[filterKey] }}
        </a>
      </li>
    </ul>
    <button v-if="completedCount" class="clear-completed" @click="onClearCompleted">Clear completed</button>
  </footer>
</template>
