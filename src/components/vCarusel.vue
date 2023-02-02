<template>
  <h2>Карусель)))</h2>
  <div class="slider_container">
  <div class="slider">
        <img v-for="item in carusel_list_start" :key="item.id"
:src="item.img" class="slider_item" :style="item.style" v-on:click="stopSlideShow"/>

    </div>
    <div>
      <span class="dot" v-bind:class="{ active: currentSlide == item.id - 1 }" 
      v-for="item in slideList" :key="item.id" :id="item.id"
      v-on:click="userChoiseSlide"></span>
    </div>
    <button v-on:click="prevSlide" class="left_button"></button>
    <button v-on:click="nextSlide" class="right_button"></button>
    </div>
    <button v-if ="!slideShow" v-on:click="slidesShow">Начать показ слайдов</button>
    <button v-else v-on:click="stopSlideShow">Остановить показ слайдов</button>
</template>

<script>

export default {
  name: 'vCarusel',
  data() {
    return {
      carusel_list_start: [
        {
          id: 1,
          img: require("../assets/image4.jpg"),
          name: "Фото 4",
          style: "left: -80vw"
        },
        {
          id: 2,
          img: require("../assets/image1.jpeg"),
          name: "Фото 1",
          style: "left: 0"
        },
        {
          id: 3,
          img: require("../assets/image2.jpg"),
          name: "Фото 2",
          style: "left: 80vw"
        },
      ],

      step: 2,
      offset: 600,
      step2: -1,
      slideShow: false,
      currentSlide: 0,
      startInterval: Number
    }
  },

  computed: {
    slideList() {
      return this.$store.getters.CARUSEL_LIST;
    },
  },
  methods: {
    slidesShow() {
      this.startInterval = setInterval(this.nextSlide, 5000);
      this.slideShow = true;
    },

    stopSlideShow() {
      clearInterval(this.startInterval);
      this.slideShow = false;
    },

    userChoiseSlide(event) {
      let step = +event.target.id - 1 - this.currentSlide
      if (step > 0) {
        while (step > 0) {
          setTimeout(this.nextSlide, 500)
          step--
        }
      } else {

        while (step < 0) {
          setTimeout(this.prevSlide, 500)
          step++
        }
      }

    },
    nextSlide() {
      let container = document.querySelector(".slider")
      let img = document.createElement('img');
      img.classList.add('slider_item')
      img.src = this.slideList[this.step].img
      img.style.cssText = `
      left: 160vw;
      `;
      if (this.step >= this.slideList.length - 1) {
        this.step = 0;
      } else {
        this.step++;
      }
      if (this.currentSlide >= this.slideList.length - 1) {
        this.currentSlide = 0
      } else {
        this.currentSlide++
      }
      let offset2 = -1;
      container.append(img)
      let slides = document.querySelectorAll(".slider_item")
      console.log(slides)
      for (let i = 0; i <= slides.length - 1; i++) {
        slides[i].style.left = offset2 * 80 - 80 + 'vw';
        offset2++
      }
      slides[0].remove()

    },
    prevSlide() {
      let container = document.querySelector(".slider")
      let img = document.createElement('img');
      img.classList.add('slider_item')
      img.src = this.slideList[this.step].img
      img.style.cssText = `
       left: -160vw;
       `;
      if (this.step <= 0) {
        this.step = this.slideList.length - 1
      } else {
        this.step--
      }
      if (this.currentSlide <= 0) {
        this.currentSlide = this.slideList.length - 1
      } else {
        this.currentSlide--
      }
      let offset2 = -2;
      container.prepend(img)
      let slides = document.querySelectorAll(".slider_item")
      console.log(slides)
      for (let i = 0; i <= slides.length - 1; i++) {
        slides[i].style.left = offset2 * 80 + 80 + 'vw';
        offset2++
      }
      slides[slides.length - 1].remove()
    },
  },
}
</script>
<style>
button {
  cursor: pointer;
}

.slider {
  width: 80vw;
  height: 200px;
  margin: 20px auto 20px;
  overflow: hidden;
  position: relative;
}

.slider_container {
  position: relative;
}

.left_button {
  width: 30px;
  height: 30px;
  background-image: url("../assets/left_icon-icons.com_61213.png");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 80px;
  left: 70px;
  border: none;
}

.right_button {
  width: 30px;
  height: 30px;
  background-image: url("../assets/right_icon-icons.com_61212.png");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 80px;
  right: 70px;
  border: none;
}

.slider_item {
  width: 80vw;
  height: 200px;
  object-fit: cover;
  position: absolute;
  top: 0;
  transition: all ease .6s;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: black;
}
</style>
