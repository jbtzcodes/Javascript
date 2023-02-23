<template>
 <div class="container">
  <img  class='logo' alt="Vue logo" src="./assets/logo.png">


<ElOnglet></ElOnglet>


 </div>
</template>

<script>


import ElOnglet from './components/Onglets/ElOnglet'

 
export default {
  name: 'App',
  components: {
    "ElOnglet": ElOnglet,

  }
}
</script>

<style>
.logo {
  display: block;
  margin: 5rem auto;
}
</style>
