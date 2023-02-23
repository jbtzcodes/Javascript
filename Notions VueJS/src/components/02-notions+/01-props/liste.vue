
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
    <style>
    </style>