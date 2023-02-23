
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
<style>
</style>