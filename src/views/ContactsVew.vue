<template>
    <h2>Наш адрес:</h2>
      <p>199397</p>
      <p>Санкт-Петербург</p>
      <p>Наличная улица,  дом 46, корпус 2</p>
    
    
</template>
<script>
export default {
    
    data: function () {
    return {  
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
<style scoped>
h2 {
  font-size: 18px;
  margin-left: 60px;
  margin-top: 30px;
}
p {
  margin-left: 60px;
}

</style>