
<template>
<div id="box">
  

  <!-- v-for permet de faire une boucle for -->
  <!-- créer tab dans data -->
<ul>
  <li  v-for="nb in tab" :key="nb">{{ nb }}</li>
</ul>

</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
              return {
                tab: [1,2,3,4,5]
              }
            },

}
</script>

<!--  partie 3 CSS -->
<style>

</style>