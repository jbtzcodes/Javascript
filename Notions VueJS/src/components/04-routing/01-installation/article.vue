<template>
    <h1>Article {{  id  }}</h1>

    <!-- Bouton retour -->
    <button v-on:click="funcRetour" class="btn btn-success">Retour</button>
</template>

<script>

export default {
name: 'PageArticle',
data(){
    return {
        id: this.$route.params.id
    }
},
methods: {
    // function retour
    funcRetour: function(){
        this.$router.push('/')
    }
}
}

</script>

<style></style>