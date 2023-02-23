
<template>
<div id="box">
  
<!--  les keys modifier permet de gerer les événements de clavier,  Vue permet d'ajouter des modificateurs de clé pour v-on lors de l'écoute d'événements clés : -->
   
<!-- .enter = execute l'evenement seulement quand j'appuy sur entrer -->
<!-- 
  .enter = entrer
  .tab = tabulation
  .delete = supprimer
  .esc  = echappe
  .space = espace
  .up = fleche haut
  .down = fleche bas
  .left = fleche de gauche
  .right = fleche de droite
 -->
 <input type="text" id="txt" v-on:keyup.down="inpFunc">


<p></p>

</div>

</template>


<!--  partie 2 SCRIPT -->
<script>
export default {
  data() {
      return {

      }},

      methods: {
        inpFunc: function(){
        let input = document.querySelector('input'),
        txt = document.querySelector('p');
        let inputVal = input.value;
          txt.innerText = `${inputVal}`
        }
      }
}
</script>

<!--  partie 3 CSS -->
<style>

</style>