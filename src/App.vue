<template>
  <header>
    <div class="header_logo"></div>
    <p class="header_text">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "АГ Портал" 
      ОГРН 1197847066867, ИНН 7810753446, КПП 784301001</p>
  </header>
  <div class="wrapper">
  <button v-if = "!menuOpen" class = "menu_button" 
  v-on:click="showMenu"
  ></button>
  <button v-else  class = "menu_button_close" 
  v-on:click="hideMenu"
  ></button>
  <nav class="main_nav">
    <router-link class="main_link" to="/">Главная страница</router-link>
    <router-link class="main_link" to="/about_us">О нашей команде</router-link>
    <router-link class="main_link" to="/consept">Концепция</router-link>
    <router-link class="main_link" to="/project" v-bind:class="{ 'main-link-active': this.$route.name=='project1' ||  this.$route.name=='project2'}">Проект</router-link>
    <router-link class="main_link" to="/economic_efficiency">Зкономическая эффективность проекта</router-link>
    <router-link class="main_link" to="/consulting"  v-bind:class="{ 'main-link-active': this.$route.name=='consulting1' }">Консалтинг</router-link>
    <router-link class="main_link" to="/implementation">Реализация</router-link>
    <router-link class="main_link" to="/contacts">Контакты</router-link>
  </nav>
</div>
  <router-view/>
</template>
<script>
export default {
    
    data: function () {
    return {  
      menuOpen: false,
    }
  },
    computed: {
  
  
},
    methods: {
      showMenu () {
        let nav = document.querySelector('.main_nav');
        nav.classList.add('activ_menu');
        this.menuOpen=true;
      },
      hideMenu () {
        let nav = document.querySelector('.main_nav');
        nav.classList.remove('activ_menu');
        this.menuOpen=false;
      }
     
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.wrapper {
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  
}

.main_link {
  padding: 8px 2px;
  color: white;
  text-decoration: none;
  margin-right: 10px;
  
}

nav {
  display: flex;
  justify-content: space-between;
  background-color: rgb(0, 150, 136);
  color: white;
}
.activ_menu {
  left:0
}
.main_nav_active {
  padding: 20px;
  color: #2c3e50;
  text-decoration: none;
}
header {
  background-color: rgb(0, 77, 64);
  padding: 20px 50px 20px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  box-sizing: border-box;
  

} 
.header_logo {
  
  background-image: url(../src/assets/main_logo.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-left: 0px;
  margin-right: auto;
  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: black;
  border-bottom: 3px solid  black;
}
.main-link-active {
  color: black;
  border-bottom: 3px solid  black;
}
.menu_button {
  display: none;
  width: 30px;
  height: 30px;
  background-image: url("../src/assets/Menu_icon_2_icon-icons.com_71856.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border: 0;
}
.menu_button_close {
  display: none;
  width: 30px;
  height: 30px;
  background-image: url("../src/assets/4115230-cancel-close-cross-delete_114048.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border: 0;
}
.header_text {
  color: white;
  display: inline-block;
  width: 500px;
  margin-right: 0px;
  margin-left: auto;
  text-indent: 0ch;
  font-size: 12px;
  width: 40%;
}
@media screen and (max-width: 696px){
  .menu_button {
  display: block;
}
.menu_button_close {
  display: block;
}
.main_link {
  padding: 10px;
  display: block;
  width: fit-content;
}
nav {
  position: absolute;
  display: block;
  width: 200px;
  left: -280px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 1);
  transition: all ease 1s;
}
.wrapper {
  position: relative;
  height: 40px;
  width: 80vw;
  margin: 20px auto;
}
}
</style>
