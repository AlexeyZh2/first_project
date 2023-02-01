<template>
    <h2>Контакты</h2>
    <vCarusel/>
</template>
<script>
import vCarusel from "../components/vCarusel.vue"
export default {
    components: {
        vCarusel,
    },
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