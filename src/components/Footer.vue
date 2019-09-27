<template>
    <footer class="footer">
        <span class="todo-count"><strong>2</strong><span> items left</span></span>
        <ul class="filters">
            <li>
                <a href="#" class="selected">
                  All
                </a>
                <a href="#" class="">
                  Active
                </a><a href="#" class="">
                  Completed
                </a>
            </li>
        </ul>
        <button class="clear-completed">Clear completed</button>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: ['todos', 'filter']
  };
</script>
