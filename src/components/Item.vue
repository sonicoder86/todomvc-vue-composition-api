<template>
  <li :class="{ completed: todo.completed, editing: editing }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.completed"
        @change="handleCompleted"
      />
      <label @dblclick="handleEdit">{{ todo.name }}</label>
      <button
        class="destroy"
        @click="handleRemove"
      />
    </div>
    <input
      class="edit"
      v-if="editing"
      v-model="name"
      @blur="handleBlur"
      autofocus
    />
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
        this.$emit('update', { id: this.todo.id, values: { completed: !this.todo.completed } });
      },
      handleBlur() {
        this.$emit('update', { id: this.todo.id, values: { name: this.name } });
        this.editing = false;
      }
    },
    mounted() {
      this.name = this.todo.name;
    }
  };
</script>
