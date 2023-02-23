
<template>
<div id="box">
  
<!--  les méthodes classiques elle s'éxécute tout le temps lorsque une donnée va changer ce qui fait qu'elles se metterons constament à jour -->

    <!-- <button v-on:click="compteurA++">+</button>
    <button v-on:click="compteurA--">-</button>
    <p> {{ compteurA }} </p>
    <p>{{ view() }}</p> -->

    <button v-on:click="compteurA++">+</button>
        <button v-on:click="compteurA--">-</button>
        <p> {{ compteurA }} </p>
        <!--  pour les computed pas besoin de mettre de parentheses -->
        <p>{{ view() }} ||||| {{ com }}</p>


      <button v-on:click="compteurB++">+</button>
    <button v-on:click="compteurB--">-</button>
    <p> {{ compteurB }} </p>
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
        return {
          compteurA: 0,
          compteurB: 0,
        }},

      methods: {
        // 1
        view: function(){
          // nous pouvons voir que la fonction ce lance quand on augmente le compteur B
          console.log('start');
          return this.compteurA > 10 ? "Il est superieur à 10" : "Il est inferieur à 10"
        }
      },
      // Pour eviter cela nous faison des methodes computed qui n'executera pas la fonction si sa valeur ne change pas
      computed : {
        com: function(){
            console.log('start com');
          return this.compteurA > 10 ? "Il est superieur à 10" : "Il est inferieur à 10"
        }
      }
}
</script>

<!--  partie 3 CSS -->
<style>

</style>