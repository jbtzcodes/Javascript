<template>

<!-- Pour faire un appel à une API ouvrez le terminal : npm install axios -->

<div class="container mx-auto">
   <h1 class="text-center">Appel à une API avec Vue JS</h1>

<div class="card box mx-auto">
    <img v-bind:src="urlImg" alt="">
    <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, repellat.</p>
        <a v-bind:href="url">Accéder à l'url</a>
    </div>
</div>

</div>


</template>

<script>


// 1) on limporte
import axios from 'axios'


export default {
    name: "MyApi",
    data(){
        return {
            urlImg: null,
            title: null,
            url: null,
        }
    },
    methods: {

    },
mounted(){
axios.get('https://jsonplaceholder.typicode.com/photos')
.then(reponse => {
    console.log(reponse);
    this.urlImg = reponse.data[0].thumbnailUrl
    this.title= reponse.data[0].title
    this.url = reponse.data[0].url
})
}
}
</script>

<style scoped>
.box {
    max-width: 400px!important;
}
</style>