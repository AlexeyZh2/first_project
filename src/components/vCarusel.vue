<template>
  <h2>Карусель)))</h2>
  <div class="carusel_container">
    <div class="v-carusel" :style="{'margin-left': '-' + (100*currentIndex) + '%'}">
      
    <vCaruselItem  :class="item_slide"
    v-for="item in slideList" 
  :key="item.id"
  :item_data="item"
  />

</div>

  </div>
  <button v-on:click="prevSlide">prev</button>
    <button v-on:click="nextSlide">next</button>
</template>

<script>

import vCaruselItem from "../components/v-carusel-item.vue"
export default {
  name: 'vCarusel',
  components: {
vCaruselItem
  },
  props: {
    interval :{ 
      type: Number,
      defoult: 0
    },
  },
  data ()  {
        return{
currentIndex: 0,
        }
    },
  computed: {
  slideList() {
    return this.$store.getters.CARUSEL_LIST;
  },
},

methods : {
  prevSlide () {
    if (this.currentIndex>0) {
        this.currentIndex--
    } else {
        this.currentIndex=3
    }
    
},
nextSlide () {
    if (this.currentIndex >= this.slideList.length-1) {
        this.currentIndex=0
    } else {
        this.currentIndex++
    }
    
},
},

mounted () {
  if (this.interval > 0) {
    let vm =this;
    setInterval(vm.nextSlide, vm.interval)

  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.v-carusel {
  display: flex;
  transition: all ease .5s;
}
.carusel_container {
  height: 200px;
  width: 80vw;
  margin: 0 auto;
  overflow: hidden;

}

button {
    color:black;
  }
  button:hover {
    cursor:pointer;
  }

</style>
