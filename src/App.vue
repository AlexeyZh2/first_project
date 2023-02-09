<template>
  <div class="wrapper">
  <button v-if = "!menuOpen" class = "menu_button" 
  v-on:click="showMenu"
  ></button>
  <button v-else  class = "menu_button_close" 
  v-on:click="hideMenu"
  ></button>
  <nav class="main_nav">
    <router-link class="main_link" to="/">Главная страница</router-link>
    <router-link class="main_link" to="/about">О компании</router-link>
    <router-link class="main_link" to="/aboutproject">О проектах</router-link>
    <router-link class="main_link" to="/contests">Конкурсы</router-link>
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
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  position: relative;
  height: 50px;
  width: 80vw;
  margin: 30px auto;
}

.main_link {
  padding: 8px 2px;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 10px;
  
}
nav {
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}
.activ_menu {
  left:0
}
.main_nav_active {
  padding: 20px;
  color: #2c3e50;
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
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
