
<!--  partie 1 TEMPLATE -->
<template>
  <div class="container bg-dark text-light ">  
    <!-- changeons le titre à partir de l'enfant -->
<h1>{{ title }}</h1>


<!-- rajouter le dernier v-on à la fin -->
    <MyListe v-bind:films="films" v-on:changer="changementTitle($event)" :txt="txt"></MyListe>

  </div>

</template>


<!--  partie 2 SCRIPT -->
<script>
import MyListe from './liste.vue'

export default {
     name: 'MyValeurs',
    //   PROPS CHILDREN
    data(){
      return {
      films : [
        {titre: 'Mercredi', date: 2021},
        {titre: 'Avatar', date: 2009},
        {titre: 'Pearlhabor', date: 2001}
      ],
      txt: "Hello world",
      title: "Je suis le titre"
     
        }
      }    ,
      components: {
        'MyListe' : MyListe,
      },
      methods : {
        changementTitle: function(newTitle){
          this.title = newTitle;
        }
      }
    }
</script>

<!--  partie 3 CSS -->
<style>


</style>