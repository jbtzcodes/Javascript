
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


<!-- SLOTS -->
<!-- si le parent contient du contenu il le rajoutera entre cest balises -->
<!-- si j'ecrit à linterieur des balises slot et que le parent na pas de contenu je peut rajouter un comportement par default -->
<slot>envoi en cour...</slot>
<slot name="info"></slot>




</div>
    
    </template>
    
    
    <!--  partie 2 SCRIPT -->
    <script >


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


  },

  props: ['films', 'txt'],
  
    }
  
    </script>
    


<style scoped >



    </style>