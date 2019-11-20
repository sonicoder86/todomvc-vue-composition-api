<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ itemsLeft }}</strong><span> {{ itemText }} left</span></span>
    <ul class="filters">
      <li v-for="filterKey in Object.keys(filterTitles)" :key="filterKey">
        <router-link :class="{ selected: filterKey === filter }" :to="`/${filterKey}`" >
          {{ filterTitles[filterKey] }}
        </router-link>
      </li>
    </ul>
    <button v-if="!!completedCount" class="clear-completed" @click="onClearCompleted">Clear completed</button>
  </footer>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex';
  import { FILTERS } from '../constants/Filters';

  export default {
    name: 'Footer',
    methods: {
      ...mapActions(['onClearCompleted']),
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
