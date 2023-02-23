<template>
 <div class="container">
  <img  class='logo' alt="Vue logo" src="./assets/logo.png">


<MyBlog></MyBlog>

 </div>
</template>

<script>


import MyBlog from './components/blog/MyBlog.vue'
 
export default {
  name: 'App',
  components: {

    "MyBlog": MyBlog,
  }
}
</script>

<style>
.logo {
  display: block;
  margin: 5rem auto;
}
</style>
