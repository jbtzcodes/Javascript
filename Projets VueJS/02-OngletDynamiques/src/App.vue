<template>
 <div class="container">
  <img  class='logo' alt="Vue logo" src="./assets/logo.png">



<ElDyna></ElDyna>


 </div>
</template>

<script>


import ElDyna from './components/Dyna/ElDyna'

 
export default {
  name: 'App',
  components: {
    "ElDyna": ElDyna,

  }
}
</script>

<style>
.logo {
  display: block;
  margin: 5rem auto;
}
</style>
