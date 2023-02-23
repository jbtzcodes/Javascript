<template>
<!--  Les routes sont des chemins qui vont afficher certains composants selon l'URLurl-->

<!-- 1) installer vue router:  npm install vue-router@next-->
<!-- 2)créer fichier router puis aller dans le main.js -->
    <div class="container mx-auto">
        <h1 class="text-center">ROUTING</h1>

        
        <!-- ROUTING -->
        <div id="nav">
            <router-link to="/">Accueil</router-link>
            <router-link to="/portfolio">Portfolio</router-link>
            <router-link to="/blog">Blog</router-link>
            
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
        
 
    
    </div>
    
    
    </template>
    
    <script>
    


    
    
    export default {
        name: "PagaAccueil",



}
    </script>
    
    <style scoped>

    #nav {
        width: 100%;
        height: 80px;
        background: #000;
        position: fixed;
        top: 0;
        left: 0;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    a {
        font-weight: bold;
        color: #f1f1f1;
        margin: 0 1rem;
        text-decoration: none;
    }

    a:hover {
        color: green;
    }
h1 {
    margin-top: 50px;
}
    </style>