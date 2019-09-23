<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all"></label>

        <ul class="todo-list">
            <Item />
        </ul>
    </section>
</template>

<script>
  import Item from './Item.vue';

  export default {
    name: 'List',
    components: {
      Item
    }
  };
</script>
