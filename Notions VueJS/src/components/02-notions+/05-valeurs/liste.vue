
<!--  partie 1 TEMPLATE -->
<template>
  <div>  
    <ul class="liste py-2">
  <li v-for="(film, index) in films" v-bind:key="index" >

    <div class="card my-2 text-dark">
      <div class="card-body">
        Titre: {{ film.titre }} 
        <br>
        Date: {{ film.date}}
      </div>
    </div>
  
  </li>
</ul>
<p> {{ txt }}</p>

<!-- valeurs de reference: tableau et objet qui feront toujours reference à l'objet en lui meme -->
<!-- valeur primitif : string, number , boolean etc...-->
<div v-on:click="supprFilm" class="btn btn-danger my-2">Supprimer</div>


</div>
    
    </template>
    
    
    <!--  partie 2 SCRIPT -->
    <script>
 export default {
  name: 'MyListe',
  data() {
    return {
      film: this.films,
      text: this.txt
    }
  }, 
  methods: {
    supprFilm: function(){
      this.film.pop();
    },

  },

  props: ['films', 'txt'],

    }
  
    </script>
    


<style scoped >


ul {
  list-style: none;
}


    </style>