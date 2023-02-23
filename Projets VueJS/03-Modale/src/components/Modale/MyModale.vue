<template>

<div>
    <ContentModale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></ContentModale>

    <div v-on:click="toggleModale" class="btn btn-success btnOpenModale">Ouvrir la modale</div>
</div>


</template>

<script>

import ContentModale from './ContentModale.vue'

export default {
    name: "MyModale",
    data(){
        return {
            revele: false,
        }
    },
    methods: {
        toggleModale: function(){
            this.revele = !this.revele
        }
    },
components: {
    'ContentModale': ContentModale,
}
}
</script>

<style scoped>
.btnOpenModale {
    max-width: 200px;
    display: block;
    margin: 0 auto!important;
}
</style>