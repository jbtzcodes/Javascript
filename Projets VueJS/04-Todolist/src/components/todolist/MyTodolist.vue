<template>

<div class="container-modale px-2 " >
        <h1 class="text-center mb-4">TodoList avec Vue.JS</h1>


        <form>
            <div class="form-group">
                <label class="form-label" for="taches">Entrer une tache:</label>
                <input v-model="formData.tache" class="form-control" type="text" id="taches">
            </div>

            <button v-on:click.prevent="createItem" class="btn btn-success my-3">Enregistrer</button>
        </form>

        <ul>
            <li class="m-3 " v-bind:key="index" v-for="(tache,index) in tabTaches">
                <Item v-bind:id="index" :tache="tache" :deleteItem="deleteItem"></Item>
            </li>
        </ul>
   
    </div>


</template>

<script>


import Item from './ContentTodo.vue'


export default {
    name: "MyModale",
    data() {
        return {
            formData:  {
                tache: ""
            },
            tabTaches: ['Html', 'Css', 'Javascript', 'Php']
        }
    },
    methods: {
createItem : function(){
    // push nouvelle valeur
    this.tabTaches.push(this.formData.tache);

    // remettre l'input à zéro
    this.formData.tache = ''
},
deleteItem: function(e){
    this.tabTaches.splice(e.target.parentNode.id, 1)
}
    },
components: {
   "Item": Item
}
}
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>