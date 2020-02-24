<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      editing: false,
      name: ''
    }),
    methods: {
      handleEdit() {
        this.editing = true;
      },
      handleCompleted() {
        this.$emit('update', { id: this.todo.id, completed: !this.todo.completed });
      },
      handleRemove() {
        this.$emit('remove', this.todo.id);
      },
      handleChange(event) {
        this.name = event.target.value;
      },
      handleBlur() {
        this.$emit('update', { id: this.todo.id, name: this.name });
        this.editing = false;
      }
    },
    mounted() {
      this.name = this.todo.name;
    }
  };
</script>
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
      v-if="editing"
      class="edit"
      :value="name"
      @input="handleChange"
      @blur="handleBlur"
    />
  </li>
</template>
