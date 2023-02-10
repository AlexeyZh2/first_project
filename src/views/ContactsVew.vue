<template>
    <h2>Контакты</h2>
    <p>Адрес:</p>
    <p>Васиьевский остров 16</p>
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

</style>