
<template>
<div id="box">
  
   


<!-- changer une class dynamiquement -->
<!-- on créer un objet avec v-bind -->
<div class="box"
    v-bind:class="{ change: toggle}"
    >

    </div>
<button v-on:click="toggle = !toggle">Changer le CSS</button>

  
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
        return {
          toggle: false
        }}

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
</style>