
<template>
<div id="box">
  
   
  <ul>
    <li v-for="pays in tab"  :key="pays">{{ pays }}</li>
  </ul>
  <!-- pour avoir l'index d'un élément -->
  <ul>
    <li v-for="(pays, index) in tab"  :key="pays">{{ index }} {{ pays }}</li>
  </ul>

  <!-- ou -->
    <ul>
      <li v-for="(pays, i) in tab"  :key="pays">{{ i}} {{ pays }}</li>
    </ul>




    <!-- boucle avec un objet -->

    <!--  une valur return les valeurs seulement -->
      <ul>
        <li v-for="props in voiture"  :key="props"> {{ props }} </li>
      </ul>

    <!-- ou -->

  <ul>
    <li v-for="(val, props) in voiture"  :key="val"> {{ props }} : {{ val }} </li>
  </ul>



  <!-- boucle avec tableau qui contient des objets -->
  
<ul>
  <li v-for="obj in tab2"  :key="obj">
    <div v-for="(val, props) in obj"  :key="props">
      {{val}}
    </div>
  </li>
</ul>

<!-- ou -->

<ul>
  <li v-for="obj in tab2"  :key="obj">
    <div v-for="(val, props) in obj"  :key="props">
      {{props}} {{val}}
    </div>
  </li>
</ul>

</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
              return {
                tab: ['France', 'Argentine', 'Algerie', 'Maroc'],
                voiture: {marque: 'Opel', annee: 2015, prix: 12000},
                tab2: [
              { marque: 'Bmw', annee: 2019, prix: 14000 },
              { marque: 'Mercedes', annee: 2017, prix: 18000 },
              { marque: 'Citroen', annee: 2017, prix: 18000 },
              { marque: 'Jaguar', annee: 2017, prix: 18000 },
              { marque: 'Tesla', annee: 2017, prix: 180000 }
              ]
              }
            },

}
</script>

<!--  partie 3 CSS -->
<style>

</style>