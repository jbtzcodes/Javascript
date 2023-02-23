<template>
 <div class="container">
  <img  class='logo' alt="Vue logo" src="./assets/logo.png">



<MyModale></MyModale>


 </div>
</template>

<script>


import MyModale from './components/Modale/MyModale.vue'

 
export default {
  name: 'App',
  components: {

    "MyModale": MyModale,

  }
}
</script>

<style>
.logo {
  display: block;
  margin: 5rem auto;
}
</style>
