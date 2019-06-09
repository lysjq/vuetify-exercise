<template>
  <v-card ripple class="sr-card"> 
    <v-card class="cardover-card ma-3 green lighten-2 sr-card-1">
      <v-card-title primary-title>
        <v-avatar size="60" color="yellow" class="ma-1">
          <img src="../assets/avator1.jpg" alt="alt">
        </v-avatar>
        card-title
      </v-card-title>
    </v-card>
    <v-card-title primary-title class="sr-card-3">title</v-card-title>
    <slot></slot>
    <v-card-text class="sr-card-3">jtl3d</v-card-text>
  </v-card>
</template>
<script>
// import ScrollReveal from 'scrollreveal';
// /// <reference path="scrollreveal" />
export default {
  mounted(){
    ScrollReveal({
      reset:true,
    }).reveal('.sr-card',{delay:100,duration:400});
    ScrollReveal({reset:true}).reveal('.sr-card-1',{origin:'top', delay:200, duration:1000, distance:'100px', scale:0.5, rotate:{ x: 45, y: 56,z: 0}});
    ScrollReveal({reset:true}).reveal('.sr-card-3',{origin:'right', delay:500, duration:1000, distance:'100px'});
  }
};
</script>
<style>
.cardover-card {
  border-radius: 8px;
  top: -12px;
}
</style>
