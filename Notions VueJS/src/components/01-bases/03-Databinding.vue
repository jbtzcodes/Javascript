  <!-- le databinding permet de liéer nos attributs avec nos données afin de changer la valeur de l'attribut dynamiquement-->

<template>
<div id="box">

    <!-- 3) on le lie à notre href grâce à la directive: v-bind-->
    <a v-bind:href="URLGoogle">Accéder au site de Google</a>
    
    <!-- 4) version plus courte -->
    <a :href="URLGoogle">Accéder au site de Google</a>

    
    <!-- 5) idem pour l'attribut src  -->
    <img v-bind:src="URLImage" alt="">
    <img :src="URLImage" alt="">
    
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>
export default {
  data(){
    return {

       //1) par exemple pour un lien
        URLGoogle : 'http://google.com',
        URLImage: 'https://images.unsplash.com/photo-1673468199846-fb5572dfb862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    }
  },
}
</script>

<!--  partie 3 CSS -->
<style>
</style>