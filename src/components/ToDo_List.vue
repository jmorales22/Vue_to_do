<template>
  <div>
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Add ToDo Item" />
      </p>
      <p class="control">
        <a class="button is-info">
          Add
        </a>
      </p>
      <div class="content"></div>
    </div>
    <div
      class="notification has-background-primary"
      v-for="todo in todos"
      :key="todo.text"
    >
      <button class="delete" v-on:click="deleteToDoListItem(todo.text)"></button>
      {{ todo.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo_List',
  data: function() {
    return {
      todos: [
        {
          text: 'finish to do list',
        },
        {
          text: 'clean the house',
        },
        {
          text: 'wash the car',
        },
      ],
    };
  },
  methods: {
    deleteToDoListItem: function(toDoText) {
        for(let i = 0; i < this.todos.length; i++){
            if(this.todos[i].text === toDoText){
                this.todos.splice(i, 1);
            }
        }
    },
  },
};
</script>

<style></style>
