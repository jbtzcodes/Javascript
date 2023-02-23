
<template>
<div id="box">
   <!--  .once = execute l'évenement une seul fois-->
   <button v-on:click.once="func">Cliquer ici</button>


<!--  .stop =  stopper la propagation de l'evenement  -->
<div v-on:click="func">
  <p>
    Je suis du texte
    <button v-on:click.stop="func">Cliquer ici</button>
  </p>
</div>

<!-- .pevent =  pour le prevent default -->
<form v-on:submit.prevent="onSubmit">
<label for="txt">Texte</label>
<input type="text" id="txt">
<button>Envoyer</button>
</form>
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>
export default {
  
  data() {
      return {

      }},

      methods: {
        func: function(){
          console.log('Hello depuis la fonction');
        }
      }
}
</script>

<!--  partie 3 CSS -->
<style>

</style>