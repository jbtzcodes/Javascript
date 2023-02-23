
<!--  partie 1 TEMPLATE -->
<template>
  <div class="container bg-dark text-light">  

<!-- v-bind pour lier les datas -->
    <MyListe v-bind:tab="tab[1]"></MyListe>



    <p> {{ func() }} </p>
  </div>

</template>


<!--  partie 2 SCRIPT -->
<script>
import MyListe from './liste.vue'

export default {
     name: 'MyPropsValidity',
    //   PROPS CHILDREN
    data(){
      return {
        tab: ['Rouge', 'Bleu', 'Vert'],
        // nous pouvons return des fonction depuis le parent
        func: function(){
          console.log('hello');
        }
      }
     },
      components: {
        'MyListe' : MyListe,
      }
    }
</script>

<!--  partie 3 CSS -->
<style>


</style>