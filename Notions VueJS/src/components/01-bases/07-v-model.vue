
<template>
<div id="box">
  
<!--  v-model = lier une donnée avec un input qui va lier directement les données que l'ont veut avec notre input-->


 
<!-- méthode 1 sans v-model -->
    <!-- <input type="text" id="txt" v-on:keyup="inpFunc"> -->


    <!-- methode 2 avec v-model -->
    <input type="text" id="txt" v-model="valeur">
    <p>{{ valeur }}</p>



<p></p>

</div>

</template>


<!--  partie 2 SCRIPT -->
<script>
export default {
  data() {
      return {
        // 01
        valeur: ""

      }},

      methods: {
        // Méthode 1 sans v-model
      //   inpFunc: function(e){
      //  this.valeur = e.target.value;
      //  console.log(this.valeur);
      //   }
      }
}
</script>

<!--  partie 3 CSS -->
<style>

</style>