
<template>
<div id="box">
  
   


  <button v-on:click="toggle = !toggle">Toogle</button>
<!--  v-if permet de faire des conition true / false -->
  <div
  v-if="toggle"
  class="box"></div>

  <!-- pour un else if -->
  <!--  les deux doit etre coller dans le DOM -->

  <!-- exemple2 else if  -->


  <!--  rajouter nb=1 à data -->
  <p v-if="nb === 1">Valeur : 1</p>
  <p v-else-if="nb === 2">Valeur : 2</p>
  <p v-else-if="nb === 3">Valeur : 3</p>
  <p v-else>error</p>


</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
        return {
          nb: 3,
          toggle: true
        }},

}
</script>

<!--  partie 3 CSS -->
<style>
.box {
  width: 250px;
  height: 250px;
  background: #000;
}
</style>