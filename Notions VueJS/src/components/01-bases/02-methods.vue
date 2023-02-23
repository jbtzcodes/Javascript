

<template>
<div id="box">
<p> {{ str }}</p>


<!-- 3) utiliser la méthode -->

<p>{{ calc(2,2) }}</p>
<p>{{ func() }}</p>
</div>

</template>


<!--  partie 2 SCRIPT -->
<script>
// 1) Créer une instance
export default {
  data(){
    return {
      str: "Les méthodes",
      // 1) créer une data nb=7
      nb: 7,
    }
  },
  //  2) Créer une méthode
  methods: {
    calc: function(a,b){
      return a * b;
    },
     //  avec les méthodes nous avons accès à tout ce quil y à dans data grace au mot clé This
     func: function() {
        return this.str + this.nb
      }
  }
}
</script>

<!--  partie 3 CSS -->
<style>
</style>