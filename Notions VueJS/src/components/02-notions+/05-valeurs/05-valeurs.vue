
<!--  partie 1 TEMPLATE -->
<template>
  <div class="container bg-dark text-light">  

<!-- v-bind pour lier les datas -->
    <MyListe :films="films" :txt="txt"></MyListe>




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
      txt: "Hello world"
     
        }
      }    ,
      components: {
        'MyListe' : MyListe,
      },
      
    }
</script>

<!--  partie 3 CSS -->
<style>


</style>