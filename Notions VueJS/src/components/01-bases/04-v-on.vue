
<template>
<div id="box">

   <!-- v-on est une directive qui permet d'ajouter des evenements -->
  

<!-- 1) méthode 1: directement dans l'attributs -->

<!-- <h2>Compteur: {{ compteur }}</h2>
<button v-on:click="compteur++">+</button>
<button  v-on:click="compteur--">-</button> -->


<!-- 2) méthode 2: avec une méthodes -->
<h2>Compteur: {{ compteur }}</h2>
<button v-on:click="plus">+</button>
<button  v-on:click="moins">-</button>


<!-- 3) recuperer les coordonnées de la souris  -->
<p>{{ x }} / {{ y }}</p>

<div class="box" v-on:mousemove="position"></div>
    
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>
export default {
  data() {
      return {
        // #1
        compteur: 0,
        // 3
        x: 0,
        y: 0
      }},
      // #2
      methods: {
        plus: function(){this.compteur++},
        moins: function(){this.compteur--},

        // #3
        position: function(e){
          console.log(e);
          this.x = e.offsetX;
          this.y = e.offsetY;
        }
      }
}
</script>

<!--  partie 3 CSS -->
<style>
  .box {
    width: 400px;
    height: 400px;
    background: rgb(255, 59, 59);
  }
</style>