<script>
import { reactive, toRefs } from 'vue';

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      editing: false,
      name: props.todo.name
    });

    const handleRemove = () => emit('remove', props.todo.id);
    const handleCompleted = () => emit('update', { id: props.todo.id, completed: !props.todo.completed });
    const handleEdit = () => (state.editing = true);
    const handleChange = event => (state.name = event.target.value);
    const handleBlur = () => {
      emit('update', { id: props.todo.id, name: state.name });
      state.editing = false;
    };

    return {
      ...toRefs(state),
      handleRemove,
      handleCompleted,
      handleEdit,
      handleChange,
      handleBlur
    };
  }
};
</script>
<template>
  <li :class="{ completed: todo.completed, editing: editing }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" @change="handleCompleted" />
      <label @dblclick="handleEdit">{{ todo.name }}</label>
      <button class="destroy" @click="handleRemove" />
    </div>
    <input v-if="editing" class="edit" :value="name" @input="handleChange" @blur="handleBlur" />
  </li>
</template>
