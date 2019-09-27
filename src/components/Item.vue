<template>
  <li>
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.completed"
        @change="handleCompleted"
      />
      <label @dblclick="handleEdit">{{ todo.name }}</label>
      <button class="destroy" @click="handleRemove" />
    </div>
    <!--<input class="edit" value="" />-->
  </li>
</template>
<script>
  export default {
    name: 'Item',
    data: function() {
      return {
        editing: false,
        name: ''
      }
    },
    props: ['todo'],
    methods: {
      handleRemove() {
        this.$emit('remove', this.todo.id);
      },
      handleEdit() {
        this.editing = true;
      },
      handleCompleted() {
        this.$emit('update', { completed: !this.todo.completed });
      }
    },
    mounted() {
      this.name = this.todo.name;
    }
  };
</script>
