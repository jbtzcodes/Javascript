<template>
 <div class="container">
  <img  class='logo' alt="Vue logo" src="./assets/logo.png">



<MyTodolist></MyTodolist>


 </div>
</template>

<script>


import MyTodolist from './components/todolist/MyTodolist.vue'

 
export default {
  name: 'App',
  components: {

    "MyTodolist": MyTodolist,

  }
}
</script>

<style>
.logo {
  display: block;
  margin: 5rem auto;
}
</style>
