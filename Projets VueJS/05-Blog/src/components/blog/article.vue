<template>
    <h1>Article {{  id  }}</h1>

    <div class="py-4 container mb-4">
        <img v-bind:src="articleUnique.thumbnailUrl" alt="">
        <h2>{{ articleUnique.title }}</h2>
    </div>

    <!-- Bouton retour -->
    <button v-on:click="funcRetour" class="btn btn-success">Retour</button>
</template>

<script>
import axios from 'axios'
export default {
name: 'PageArticle',
data(){
    return {
        id: this.$route.params.id,

        articleUnique: []
    }
},
methods: {
    // function retour
    funcRetour: function(){
        this.$router.push('/')
    }
},
mounted(){
    axios
    .get(`https://jsonplaceholder.typicode.com/photos/${this.id}`)
    .then(reponse =>{
        // console.log(reponse);
        this.articleUnique = reponse.data
        
    } )
}
}

</script>

<style scoped>
img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
</style>