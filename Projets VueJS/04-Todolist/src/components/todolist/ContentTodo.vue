<template>
    <div class="card my-2 items">
        <p>{{ tache }}</p>
        <button v-on:click="deleteItem" class="btn btn-success btn-delete">X</button>
    </div>
</template>

<script>
export default {
    name: "ContentTodo",
    props:['tache', 'deleteItem']
   
   
}
</script>

<style scoped>
.items {
    position: relative;
    font-size: 18px;
    padding: 20px 60px 20px 30px;
    height: 90px;
}

button {
    position: absolute!important;
    top: .5rem!important;
   right: 0.5rem!important;
}

</style>