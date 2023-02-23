
<template>
<div id="box">
  
    
    <!--  nous pouvons rentrée directement des expressions -->
    <!-- une expression peut etre une variable à qui on réasigne la valeur comme compteur -->
    <button v-on:click="compteur++">+</button>
    <button v-on:click="compteur--">-</button>
    <p> {{ compteur }} {{ 2+4 }}</p>

    <!-- nous pouvon sfaire des operatoir ternaire -->
    <p>{{ compteur ? "true" : "false"}}</p>
    <!-- 0 est compter comme false en javascript -->



    <!-- V-html permet de transformer du HTML brut en HTML -->
    <!-- on le lie avec le data que l'ont veut -->
    <p v-html="txt"></p>
  
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
        return {
          compteur: 0,
          // si je veut mettre de HTML brut
          txt: '<span>Hello tout le monde</span>'
        }},

}
</script>

<!--  partie 3 CSS -->
<style>

</style>