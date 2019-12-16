<template>
  <div class="todo" ref="todo">
    <h2 class="todo-head">Todos</h2>
    <ul class="todo-list">
      <li class="todo-item" v-for="todo in todos"
        :key="todo.id"
        :class="{done: todo.done}"
      >
        <label>
          <div class="checkbox">
            <input type="checkbox" :checked="todo.done"
              @change="todoDone(todo.id)"
            >
            <span class="markcheck"></span>
          </div>
        </label>
        {{todo.title}}
        <span class="todo-del"
          @click="$emit('delTodo', todo.id)"
        ></span>
      </li>
    </ul>
    <div class="todo-footer">
      <form @submit.prevent="addTodo">
        <input type="text" placeholder="Type new todo..." 
          v-model="title"
        >
        <button type="submit">Add Todo</button>
      </form>
    </div>
  </div>
</template>

<!-- ------------------------------------- -->
<script>
export default {
  props: {
    todos: [Array],
    'max-width': {
      type: [Number],
      default: 400
    }
  },
  data: () => ({
    title: ''
  }),
  methods: {
    todoDone(id) {
      this.$emit('todoComplete', id)
    },
    addTodo() {
      if (this.title === '') return

      const newTodo = {
        id: Math.random(),
        title: this.title,
        done: false
      }

      this.todos.push(newTodo)
      this.title = ''
    }
  },
  mounted() {
    this.$refs.todo.style.maxWidth = `${this.maxWidth}px`
  }
}
</script>

<!-- ------------------------------------- -->
<style lang='sass'>
@import '@/assets/colors'

.todo
  margin: 0 auto
  background: #ffffff
  border-radius: 5px
  overflow: hidden
  .todo-head
    padding: 10px 10px
    color: $light-green
    text-align: center
    font-size: 25px
    box-shadow: 0px 5px 12px 0px rgba(166,166,166,0.3)
.todo-list
  .todo-item
    height: 50px
    border-bottom: 1px solid #eee
    display: flex
    align-items: center
    font-size: 15px
    &.done
      text-decoration: line-through
    &:last-child
      border-bottom: none
    &:first-child
      border-top: 1px solid #eee
    label
      align-self: flex-start
    .todo-del
      margin-left: auto
      height: 40px
      width: 40px
      border-radius: 50%
      position: relative
      cursor: pointer
      &:hover::before,
      &:hover::after
        background: #cccccc
      &::before,
      &::after
        position: absolute
        left: 50%
        top: 50%
        content: ''
        width: 2px
        height: 15px
        background: #eee
        transition: 0.3s
      &::before
        transform: translate(-50%, -50%) rotateZ(45deg)
      &::after
        transform: translate(-50%, -50%) rotateZ(-45deg)
        
// Custom checkbox
.checkbox
  position: relative
  cursor: pointer
  input[type="checkbox"]
    opacity: 0
    margin-right: 50px
    &:checked ~ .markcheck:after
      border-color: $light-green
  .markcheck
    position: absolute
    left: 0
    top: 0
    width: 50px
    height: 49px
    border-right: 1px solid #eee
    &:after
      display: block
      position: absolute
      top: 12px
      left: 18px
      content: ''
      width: 10px
      height: 15px
      border: solid #eee
      border-width: 0 2px 2px 0
      transform: rotateZ(45deg)
      transition: 0.3s

// todo footer
.todo-footer
  padding-left: 10px
  height: 50px
  background: $light-green
  form
    display: flex
    justify-content: space-between
    height: 100%
  input[type="text"]
    position: relative
    background: transparent
    margin-right: 15px
    color: #f1f1f1
    border: none
    font-size: 15px
    align-self: center
    line-height: 30px
    transition: 0.3s
    border-bottom: 1px solid transparent
    flex-grow: 1
    &::placeholder
      color: #f1f1f1
    &:focus
      outline: none
      border-bottom: 1px solid #f1f1f1
  button[type="submit"]
    position: relative
    border: none
    background: transparent
    color: #ffffff
    font-weight: 600
    cursor: pointer
    height: 100%
    padding: 0px 12px
    transition: 0.3s
    border-bottom-left-radius: 20px
    &:hover
      background: darken($light-green, 5)
    &:active
      background: darken($light-green, 10)
    &:focus
      outline: none
    &:before,
    &:after
      content: ''
      position: absolute
      width: 25px
      height: 25px
      border: 3px solid 
      cursor: default
    &:before
      left: 0px
      bottom: -3px
      border-left-color: #fff
      border-top-color: transparent
      border-right-color: transparent
      border-bottom-left-radius: 20px
      border-top-left-radius: 0
    &:after
      left: -28px
      top: -3px
      border-right-color: #fff
      border-bottom-color: transparent
      border-left-color: transparent
      border-top-right-radius: 20px
      border-bottom-left-radius: 0
</style>