<template>
    <h1>Page Blog</h1>

    <!-- Bouton retour -->
    <button v-on:click="funcRetour" class="btn btn-success">Retour</button>
</template>

<script>

export default {
name: 'PageBlog',
methods: {
    // function retour
    funcRetour: function(){
        this.$router.push('/')
    }
}
}

</script>

<style></style>