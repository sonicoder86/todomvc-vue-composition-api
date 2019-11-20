<template>
  <section class="todoapp">
    <Header />
    <List />
    <Footer />
  </section>
</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './Header.vue';
  import List from './List.vue';
  import Footer from './Footer.vue';
  import { FILTERS } from '../constants/Filters';

  export default {
    name: 'todos',
    components: { Header, List, Footer },
    methods: {
      ...mapActions(['onFilterSelect']),
    },
    mounted() {
      this.onFilterSelect(this.$route.params.filter || FILTERS.all);
    },
    watch: {
      $route() {
        this.onFilterSelect(this.$route.params.filter || FILTERS.all);
      }
    }
  }
</script>
