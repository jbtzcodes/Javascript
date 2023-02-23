
<!--  partie 1 TEMPLATE -->
<template>
    <div class=" px-4">  

<!-- La même chose de mannière dynamique -->

  <h1 class="text-center my-5 ">{{ title }}</h1>
  <div class="btn btn-outline-success mx-2" v-on:click="component = 'OngletA'">Onglet A</div>
  <div class="btn btn-outline-success mx-2" v-on:click="component = 'OngletB'">Onglet B</div>
  <div class="btn btn-outline-success mx-2" v-on:click="component =' OngletC'">Onglet C</div>



  <div class="card my-5 p-3 text-light bg-success onglets">
      <component v-bind:is="component"></component>
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
        component: 'OngletA'
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