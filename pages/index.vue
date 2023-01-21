<template>
  <div v-for="todo in todoList.todos" :key="todo.id">
    <span :class="{ todo__complete: todo.complete }">{{ todo.content }}</span>
    <button @click="handleTodoComplete(todo.id)" v-show="!todo.complete">
      x
    </button>
  </div>
  <input v-model.trim="todo" />
  <button @click="handleAddTodo">Add</button>
</template>

<script setup>
import { useTodoListStore } from '~/store/useTodoListStore';

const todo = ref();

const todoList = useTodoListStore();

const handleAddTodo = () => {
  todoList.addTodo({
    id: todoList.todos.length + 1,
    content: todo.value,
  });

  todo.value = '';
};

const handleTodoComplete = (id) => {
  todoList.completeTodo(id);
};
</script>

<style>
.todo__complete {
  text-decoration: line-through;
}
</style>
