
<template>
<div id="box">
  
    
  <!--  La propriété watch va lancer une fonction seulement lorsque une valeurs va changée. Cela ressemble a computed mais il possède une grande difference -->



  <button v-on:click="compteurA++">+</button>
        <button v-on:click="compteurA--">-</button>
        <p> {{ compteurA }} </p>
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
        view: function(){
          console.log('start');
          return this.compteurA > 10 ? "Il est superieur à 10" : "Il est inferieur à 10"
        }
      },
      watch : {
        // watch va dabord surveiller une propriété pour cela on est mais le meme nom que la propriété que l'ont veut surveiller
        // cette fonction va ce lancer sans etre declare dans le template

        // avec fonction classique
        // compteurA: function(){
          //     var res = this;
        //    setTimeout(function () {
        //     console.log("Reset validé");
        //     res.compteurA = 0;
        //   }, 1500)
        // }

        // Avec fonction fléché
        compteurA: function () {
          setTimeout(() => {
            console.log("Reset validé");
            this.compteurA = 0;
          }, 1500)
        }
      },
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