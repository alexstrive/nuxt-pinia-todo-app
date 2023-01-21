import { defineStore } from 'pinia';

type Todo = { content: string; id: number; complete?: boolean };

type TodoListState = {
  todos: Todo[];
};

export const useTodoListStore = defineStore('todos', {
  state: (): TodoListState => ({ todos: [] }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push({ ...todo, complete: false });
    },
    completeTodo(id: number) {
      const targetIndex = this.todos.findIndex((todo) => todo.id === id);
      this.todos[targetIndex].complete = true;
    },
  },
});
