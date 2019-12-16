<template>
  <div id="app">
    <todo-list v-bind:todos="todos"
      :max-width="420"
      @todoComplete="todoComplete"
      @delTodo="delTodo"
    ></todo-list>
  </div>
</template>

<!-- ------------------------------------- -->
<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  data: () => ({
    todos: [
      { id: 1, title: 'Todo item 1', done: false },
      { id: 2, title: 'Todo item 2', done: true },
      { id: 3, title: 'Todo item 3', done: false },
    ]
  }),
  methods: {
    todoComplete(id) {
      this.todos.find(el => el.id === id ? el.done = !el.done : '')
    },
    delTodo(id) {
      this.todos = this.todos.filter(el => el.id !== id)
    }
  },
  components: {
    TodoList
  }
}
</script>

<!-- ------------------------------------- -->
<style lang="sass">
@import './assets/colors'

*
  box-sizing: border-box
  margin: 0
  padding: 0

body
  background: $grey
  padding-top: 20px
  
ul li 
  list-style: none
  
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50



  
</style>

