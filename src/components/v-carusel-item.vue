<template>
    <div class="carusel_image">
    <img :src="require('../assets/' + item_data.img)" v-bind:alt="item_data.name"/>
    
</div>
  </template>
  
  <script>
  export default {
    name: 'v-carusel',
    props: {
item_data: {
    type: Object,
    default: ()=>{},

}
    },
   
    computed: {
  slideList() {
    return this.$store.getters.CARUSEL_LIST;
  },
  },
  methods: {

  }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .carusel_image {
    width: 80vw;
  }
  img {
    width: 80vw;
    height: 200px;
    object-fit: cover;
  }
  
  </style>