

<script>
import bus from '../../../main';


export default {

  
  data(){
    return {
      titleHeader: "Titre du header"
    }
  },
  // Quand les éléments vont s'afficher nous allons avoir accès a plusieurs méthodes .
  beforeCreate(){
console.log('Début création élément');
  },
  created(){
    console.log('Création élément');
    bus.$on('changeHeader', (data) => {
      this.header = data 
    })
  
  },
  beforeMount(){
    console.log("L'élément est monter dans le DOM");
  },
  mounted(){
    console.log("L'élément est integrer dans le DOM");
  },
  beforeUpdate(){
    console.log("L'élément va ce mettre à jour");
  },
  updated(){
    console.log('Mise à jour');
  },
  

}

</script>

<template>
  <div class="header-top">
    <p >{{ titreHeader }}</p>
  </div>
</template>

<style scoped>
.header-top {
height: 50px;
background: midnightblue;
width: 100%;
position: fixed;
top: 0;
left: 0;
text-align: center;
color: #f1f1f1;
font-weight: bold;
line-height: 50px;
}

</style>