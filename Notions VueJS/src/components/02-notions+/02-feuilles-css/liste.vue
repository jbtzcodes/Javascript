
<!--  partie 1 TEMPLATE -->
<template>
  <div>  


<ul class="liste">
  <li v-for="(el, index) in pays" v-bind:key="index">{{ el }}</li>
</ul>
</div>
    
    </template>
    
    
    <!--  partie 2 SCRIPT -->
    <script>
 export default {
  name: 'MyListe',
    data(){
      return {
        pays: ['Argentine', 'Algerie', 'Maroc', 'France']
      }
    }
    }
  
    </script>
    

  <!--  partie 3 CSS -->
<!-- scoped = applique le CSS seulement au composant -->
<!-- si on importe une feuille de style le scoped ne fonctionne plus -->
<style scoped src="./style.css">


/* Mauvaise mannière de faire
importer une feuille de style */
/* @import './style.css'; */
    </style>