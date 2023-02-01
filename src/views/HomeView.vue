<template>

<div class="slideshow-container">


<div class="mySlides fade" v-bind:class="{ mySlides_active: slideIndex == 1 }">
  <div class="numbertext">1 / 3</div>
  <img src="../assets/image1.jpeg" v-on:click="showSlides" style="width:100%">
  <div class="text">Caption One</div>
</div>

<div class="mySlides fade" v-bind:class="{ mySlides_active: slideIndex == 2 }">
  <div class="numbertext">2 / 3</div>
  <img src="../assets/image2.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade" v-bind:class="{ mySlides_active: slideIndex == 3 }">
  <div class="numbertext">3 / 3</div>
  <img src="../assets/image3.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

<!-- Next and previous buttons -->
<a class="prev" v-on:click="slideIndex == 1 ? slideIndex = 3 : slideIndex -= 1">&#10094;</a>
<a class="next" v-on:click="slideIndex == 3 ? slideIndex = 1 : slideIndex += 1">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
<span class="dot" v-bind:class="{ active: slideIndex == 1 }" v-on:click="slideIndex = 1"></span>
<span class="dot" v-bind:class="{ active: slideIndex == 2 }" v-on:click="slideIndex = 2"></span>
<span class="dot" v-bind:class="{ active: slideIndex == 3 }" v-on:click="slideIndex = 3"></span>
</div>
  <h1>В ЛУЧШИХ ТРАДИЦИЯХ САНКТ-ПЕТЕРБУРГА</h1>
  <p>Новый пригород на берегу Финского залива формируется в лучших 
    традициях исторических пригородов Санкт-Петербурга. Проект 
    комплексного развития территории севернее пос. Лисий Нос – это воплощение 
    стратегии развития России, это стремление к реализации новых принципов, 
    затрагивающих технологические и экономические вопросы развития промышленной 
    сферы, сфер культуры, здравоохранения, образования, управления и развития бизнеса. 
    Главным в этой стратегии является осознание того факта, что 
    развитие человека это и основная цель и необходимое условие прогресса современного общества. 
    Создание привлекательных и комфортных для проживания населенных мест, 
    а также модернизация существующих городов и пригородных поселений — определяющий вектор 
    развития градостроительной отрасли экономики России.  Строительство Нового пригорода Санкт-Петербурга 
    может стать шагом в направлении решения этой задачи.</p>
  


</template>

<script>

export default {
  data: function () {
    return {
      slideIndex: 1

    }
  },
  computed: {
  },


  methods: {
    showSlides() {
      let vm = this
      setInterval(vm.incrementSlideIndex, 5000)
      setInterval(function () {
        vm.slideIndex++
        if (vm.slideIndex == 4) {
          vm.slideIndex = 1
        }
      }, 5000)

    }

  },

  incrementSlideIndex() {
    this.slideIndex++
    if (this.slideIndex == 3) {
      this.slideIndex = 1;
    }
  }
}


</script>
<style scoped>
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

.mySlides_active {
  display: block;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
  right: 0;

}

.prev {
  left: 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
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
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1s;
  animation-name: fade;
  animation-duration: 1s;
}

img {
  height: 20vh;
  object-fit: cover;
}

@-webkit-keyframes fade {
  from {
    opacity: .4
  }

  to {
    opacity: 1
  }
}

@keyframes fade {
  from {
    opacity: .4
  }

  to {
    opacity: 1
  }
}
</style>
