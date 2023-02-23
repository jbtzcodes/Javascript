
<template>
<div id="box">
  
   

<!-- rajouter dans data box:true -->

    <!-- <div 
    v-bind:class="{ box, change: toggle}"
    ></div> -->


    <!-- 2) avec computed qui fera reference à notre objets -->
      <!-- <div v-bind:class="obj"></div> -->


      <!-- 3 avec les tableaux nous pouvons ajouter plusieurs classes-->
      <!-- créer la classe bordure en css puis lajouter entre guillemets -->
      <!-- <div v-bind:class="[obj, 'bordure']"></div> -->
      
      <!-- avec operateur ternaire -->
      <div v-bind:class="[obj, toggle ? 'bordure' : '']"></div>
      


<button v-on:click="toggle = !toggle">Changer le CSS</button>


  
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
        return {
          toggle: false,
          // 1)
          // box: true,
        }},
        computed : {
          obj: function(){
            return {
              change: this.toggle,
              box: true
              // ensuite mettre en commentaire box: true dans data
            }
          }
        }
}
</script>

<!--  partie 3 CSS -->
<style>
  .box  {
    width: 150px;
    height: 150px;
    background: crimson;
  }
  .change {
    background: midnightblue;
  }
  .bordure {
   border:  8px solid rgb(255, 115, 0);
  }
</style>