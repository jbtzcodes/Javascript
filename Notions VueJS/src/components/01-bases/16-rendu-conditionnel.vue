
<template>
<div id="box">
  
   
  <button v-on:click="toggle = !toggle">Toogle</button>



  <!-- la balise template permet de faire des rendu conditionnel de groupe. Cette balise n'apparait pas dans le DOM -->
<template v-if="toggle">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in!</p>
</template>

</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
        return {
          toggle: true
        }},

}
</script>

<!--  partie 3 CSS -->
<style>

</style>