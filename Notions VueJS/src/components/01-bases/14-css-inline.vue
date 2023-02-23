
<template>
<div id="box">
  
   

      <!-- CSS Inline -->
      <!-- 1) écrire en Camelcase les propriété qui possèdent plusieurs mots. -->
      <p :style="{color: 'orange', backgroundColor: 'blue'}">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit unde assumenda consequatur beatae veritatis fugiat laudantium aperiam quae aliquam vel.</p>

      <!-- 2) avec computed -->

      <p :style="style">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
        unde assumenda consequatur beatae veritatis fugiat laudantium aperiam quae aliquam vel.</p>

</div>

</template>


<!--  partie 2 SCRIPT -->
<script>


export default {
  data() {
        return {
          color: 'orangered',
          width: 50
        }},
        computed : {
          style: function(){
            return {
              backgroundColor: this.color,
              width: this.width + "%"
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
</style>