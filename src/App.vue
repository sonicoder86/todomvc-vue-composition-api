<template>
  <div id="app">
    <section class="todoapp">
      <Header />
      <List />
      <Footer />
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="http://github.com/blacksonic/">blacksonic</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header, List, Footer
  }
}
</script>
