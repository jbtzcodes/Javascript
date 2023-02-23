<!-- API: https://pokebuildapi.fr/api/v1 -->

<template>
  <div class="container">
    <div class="img-header">
      <img v-bind:src="urlImageHome" >
    </div>
    <h1 class="text-center my-3 fs-1 fw-bold">{{ titleHome }}</h1>


    <div class="row">
            <div class="col col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3" v-for="(pokemon, index) in allPokemons" v-bind:key="index">
                <!-- +1 pour ne pas afficher l'index0 car un tableau à un index qui commence à 0 -->
            <div class="card m-2">
                <img class="card-img-top" :src="pokemon.image" alt="">
                <div class="card-body">
                  <h4>{{ pokemon.name }}</h4>
                <p>ID: {{ pokemon.id }}</p>
                <ul class="cat">
                  <li> <span>HP:</span> {{ pokemon.stats.HP }}</li>
                  <li> <span>ATT:</span> {{ pokemon.stats.attack }}</li>
                  <li> <span>DEF:</span> {{ pokemon.stats.defense }}</li>
                  <li> <span>ATT SPE:</span> {{ pokemon.stats.special_attack}}</li>
                  <li> <span>DEF SPE:</span> {{ pokemon.stats.special_defense}}</li>
                  <li> <span>VIT:</span> {{ pokemon.stats.speed}}</li>
                </ul>
                </div>
            </div>
          </div>
          </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PageHome',
  data() {
    return {
        allPokemons: [],
        urlImageHome: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
        titleHome: "POKEDEX"
    }
},
created(){
    axios.get(`https://pokebuildapi.fr/api/v1/pokemon`).then(reponse =>{
        console.log(reponse);
        for(const pokemonPost of reponse.data) {
            this.allPokemons.push(pokemonPost)
        }
    } )
}
}
</script>

<style scoped>
.img-header {
  width: 100%;
  height: 50vh;
}
.img-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

ul {
  list-style:  none;
}



p {
  padding: 10px 0;
  border-bottom: 1px solid crimson;
}



.cat li {
  width: 100%;
}

.cat li span{
  font-weight: bold;
  color: orangered;
}
</style>