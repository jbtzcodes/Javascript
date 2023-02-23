
<!--  partie 1 TEMPLATE -->
<template>
  <div>  
    <p> {{ tab }}  </p>
    <p>{{ reverse() }}</p>
    
    <p> {{ age }}  </p>
</div>
    
    </template>
    
    
    <!--  partie 2 SCRIPT -->
    <script>
 export default {
  name: 'MyListe',
    data(){
      return {
         // ceci provoquera une erreur
      age: 10 + 5,
      }
    },
    // pour eviter le probleme
    props: ['tab'],
  methods: {
    reverse: function(){
      return this.tab.split('').reverse().join('')
    }
  }
    }
  
    </script>
    


<style scoped >



    </style>