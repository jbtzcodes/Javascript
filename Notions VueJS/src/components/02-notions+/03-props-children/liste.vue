
<!--  partie 1 TEMPLATE -->
<template>
  <div>  


<ul class="liste">
  <li v-for="(el, index) in pays" v-bind:key="index">{{ el }}</li>
</ul>
<p> {{ prenom }}  </p>
<p> {{ age }}  </p>
  <p> {{ voiture }}  </p>
  <p> {{ tab }}  </p>
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
    },
    // PROPS CHILDREN
    props: ['prenom', 'age', 'voiture', 'tab']
    }
  
    </script>
    
<style scoped src="./style.css">
    </style>