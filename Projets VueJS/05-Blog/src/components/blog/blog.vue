<template>
    
    <div>
        <h1 class="text-center">Bienvenue sur le blog</h1>
    
        <h2 class="text-center text-success">Découvrez nos articles</h2>%

        <ul>
            <li v-for="(article, index) in allArticles" v-bind:key="index">
                <!-- +1 pour ne pas afficher l'index0 car un tableau à un index qui commence à 0 -->
           <router-link v-bind:to="`/blog/post/${index + 1}`">
            <div class="card m-2">
                <img :src="article.thumbnailUrl" alt="">
                <h4>{{ article.title }}</h4>
                <p>ID: {{ article.id }}</p>
                <p>URL: {{ article.url }}</p>
            </div>
           </router-link>
        </li>
        </ul>



    </div>
</template>

<script>

import axios from 'axios'

export default {
name: 'PagaAccueil',
data() {
    return {
        allArticles: []
    }
},
created(){
    axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then(reponse =>{
        console.log(reponse);
        for(const blogPost of reponse.data) {
            this.allArticles.push(blogPost)
        }
    } )
}
}

</script>

<style scoped>
.card {
    
width: 350px;
height: 550px;
}

ul {
    list-style: none;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>