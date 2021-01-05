<template>
  <div>
    <form class="field is-grouped" @submit.prevent="addToDoListItem">
      <p class="control is-expanded">
        <input v-model="inputText" class="input" type="text" placeholder="Add ToDo Item" />
      </p>
      <p class="control">
        <input type="submit" value="add" class="button is-info" />
      </p>
      <div class="content"></div>
    </form>
    <div
      class="notification has-background-primary"
      v-for="todo in todos"
      :key="todo.id"
    >
      <button class="delete" v-on:click="deleteToDoListItem(todo.id)"></button>
      {{ todo.text }}
    </div>
  </div>
</template>

<script>
import CreateToDoObject from './HelperFunctions/CreateToDoObject';
export default {
  name: 'ToDo_List',
  data: function() {
    return {
      todos: [],
      inputText: ''
    };
  },
  created: function(){
   const cookieData = this.$cookies.get('jennifer_vue_todo');
   this.todos = cookieData && cookieData.todos || [];
  },
  methods: {
    deleteToDoListItem: function(toDoId) {
        for(let i = 0; i < this.todos.length; i++){
            if(this.todos[i].id === toDoId){
                this.todos.splice(i, 1);
            }
        } 
        this.setToDoCookie();
    },
    addToDoListItem: function(){
    if(this.inputText === ''){
        return;
    }
        this.todos.push(CreateToDoObject(this.inputText));
        this.setToDoCookie();
        this.inputText = '';
    },
    setToDoCookie: function(){
        const stringifedTodos = JSON.stringify({'todos': this.todos})
        this.$cookies.set('jennifer_vue_todo', stringifedTodos);
    }
  },
};
</script>

<style>
form{
    overflow: scroll;
}
</style>
