
<!--  partie 1 TEMPLATE -->
<template>
<div id="box">
    <!-- 2) Faire reference à "str" dans data grâce à la synthaxe moustaches -->
<p> {{ str }}</p>
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>
// 1) Créer une instance
export default {
  data(){
    return {
      name: 'MyInstance',
      str: "Hello world depuis l'instance"
    }
  }
}
</script>

<!--  partie 3 CSS -->
<style>
</style>