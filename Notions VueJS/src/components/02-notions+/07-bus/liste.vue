
<!--  partie 1 TEMPLATE -->
<template>
  <div>  


    <ul class="liste py-2">
  <li v-for="(film, index) in films" v-bind:key="index">

    <div class="card my-2 text-dark">
      <div class="card-body">
        Titre: {{ film.titre }} 
        <br>
        Date: {{ film.date}}
      </div>
    </div>
  
  </li>
</ul>

    
<p>{{ txt }}</p>
<div v-on:click="supprFilm" class="btn btn-danger my-2">Supprimer</div>
<button v-on:click="changeTitle" class="btn btn-info text-light my-4">Modifier le titre</button>
<button v-on:click="changeHeader" class="btn btn-primary text-light my-4">Modifier Header</button>




</div>
    
    </template>
    
    
    <!--  partie 2 SCRIPT -->
    <script >

import bus from '../../../main'

 export default {
  name: 'MyListe',
  data() {
    return {
      film: this.films ,
      text: this.txt
    }
  }, 
  methods: {
    supprFilm: function(){
      this.film.pop();
    },
    changeTitle: function(){
      this.$emit('changer', 'Mon nouveau titre')
    },
    changeHeader: function(){
    bus.$emit('changer', 'Titre depuis le BUS')
    }

  },

  props: ['films', 'txt'],
  
    }
  
    </script>
    


<style scoped >



    </style>