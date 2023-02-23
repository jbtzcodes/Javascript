
<!--  partie 1 TEMPLATE -->
<template>
    <div class=" px-4">  

  <h1 class="text-center my-5 ">{{ title }}</h1>
  <div class="btn btn-outline-success mx-2" v-on:click="toggleOngletA">Onglet A</div>
  <div class="btn btn-outline-success mx-2" v-on:click="toggleOngletB">Onglet B</div>
  <div class="btn btn-outline-success mx-2" v-on:click="toggleOngletC">Onglet C</div>



  <div class="card my-5 p-3 text-light bg-success onglets">
      <OngletA   v-if="toggleA"></OngletA>
      <OngletB   v-if="toggleB"></OngletB>
      <OngletC   v-if="toggleC"></OngletC>
  </div>


  
    </div>
  
  </template>
  
  
  <!--  partie 2 SCRIPT -->
  <script>
  
import OngletA from "./OngletA.vue"
import OngletB from "./OngletB.vue"
import OngletC from "./OngletC.vue"

  export default {
       name: 'MyOnglet',
      //   PROPS CHILDREN
      data(){
        return {
        title: "Système Onglets avec Vue.JS",
        toggleA: true,
        toggleB: false ,
        toggleC: false ,
          }
        }    ,
        components: {
            "OngletA": OngletA,
            "OngletB": OngletB,
            "OngletC": OngletC,
        },
        methods : {
            toggleOngletA: function(){
                this.toggleA = true;
                this.toggleB = false;
                this.toggleC = false;
            },
            toggleOngletB: function(){
                this.toggleB = true;
                this.toggleA = false;
                this.toggleC = false;
            },
            toggleOngletC: function(){
                this.toggleC = true;
                this.toggleA = false;
                this.toggleB = false;
            }
        }
      }
  </script>
  

  <style scoped>


  
  </style>