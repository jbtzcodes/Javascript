
<!--  partie 1 TEMPLATE -->
<template>
  <div class="container bg-dark text-light my-5 box">  
    <!-- changeons le titre à partir de l'enfant -->
<h1>{{ title }}</h1>


<!-- Les slots permets de rajouter du contenu a des composants -->
<!--  On rajoute du contenu puis dans la liste on rajoute la balise slot -->
<!-- si il ya plusieurs elements il faut rajouter les balises template -->
    <MyListe v-bind:films="films" v-on:changer="changementTitle($event)" :txt="txt">
      <!-- v-slot pour donner un name à notre template puis on le rajoute dans liste comme attribut -->
      <button class="btn btn-danger mx2">Envoyer</button>
   <template v-slot:info> 
    <h1>Développeur front</h1>
   </template>
    </MyListe>

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
.box {
  margin-top: 10rem!important;
}

</style>