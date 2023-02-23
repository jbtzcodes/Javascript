<template>
    <h1>Page Portfolio</h1>

    <!-- Bouton retour -->
    <button v-on:click="funcRetour" class="btn btn-success">Retour</button>
</template>

<script>

export default {
name: 'PagePortfolio',
methods: {
    // function retour
    funcRetour: function(){
        this.$router.push('/')
    }
}
}

</script>

<style></style>