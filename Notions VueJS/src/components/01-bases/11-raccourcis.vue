
<template>
<div id="box">
  
   

<!-- v-on peut etre remplacer par @ -->
<button @:click="compteurA++">+</button>
        <button @:click="compteurA--">-</button>
        <p> {{ compteurA }} </p>
        <p>{{ view() }} ||||| {{ com }}</p>

<!-- v-bind peut etre remplacer par les : directement -->
        <!-- <a :href="">Accéder au site</a> -->

  
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
        return {
          compteurA: 0,
        }},

      methods: {
        view: function(){
          console.log('start');
          return this.compteurA > 10 ? "Il est superieur à 10" : "Il est inferieur à 10"
        }
      },
      watch : {
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