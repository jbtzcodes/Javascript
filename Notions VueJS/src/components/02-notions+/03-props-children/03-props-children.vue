
<!--  partie 1 TEMPLATE -->
<template>
  <div>  
    <p>{{ title }}</p>
    <MyListe 
    v-bind:prenom="prenom" 
    v-bind:age="age" v-bind:voiture="voiture.marque" v-bind:tab="tab[2]"></MyListe>
  </div>

</template>


<!--  partie 2 SCRIPT -->
<script>
import MyListe from './liste.vue'

export default {
     name: 'ContenuB',
    //   PROPS CHILDREN
    data(){
      return {
        prenom: 'jonathan',
        age: 30,
        voiture: {
          marque: 'Opel',
          annee: 2015
        },
        tab: ['Rouge', 'Bleu', 'Vert']
      }
     },
      props: ['title'],
      // 3
      components: {
        'MyListe' : MyListe,
      }
    }
</script>

<!--  partie 3 CSS -->
<style>


</style>