
<!--  partie 1 TEMPLATE -->
<template>
  <div>  
    <p>{{ title }}</p>
    <MyListe />
  </div>

</template>


<!--  partie 2 SCRIPT -->
<script>
import MyListe from './liste.vue'

export default {
     name: 'ContenuB',
      props: ['title'],
      // 3
      components: {
        'MyListe' : MyListe,
      }
    }
</script>

  <!--  partie 3 CSS -->
<!-- scoped = applique le CSS seulement au composant -->
<!-- si on importe une feuille de style le scoped ne fonctionne plus -->
<style scoped src="./style.css">


/* Mauvaise mannière de faire
importer une feuille de style */
/* @import './style.css'; */
    </style>