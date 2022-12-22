<template>
  <nav>
    <router-link class="main_link" to="/">Главная страница</router-link>
    <router-link class="main_link" to="/about">О компании</router-link>
    <router-link class="main_link" to="/aboutproject">О проектах</router-link>
    <router-link class="main_link" to="/contests">Конкурсы</router-link>
    <router-link class="main_link" to="/contacts">Контакты</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main_link {
  padding: 30px;
  color: #2c3e50;
  text-decoration: none;
  
}
nav {
  margin-bottom: 50px;
}
.main_nav_active {
  padding: 30px;
  color: #2c3e50;
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 4px solid  #42b983;
}
</style>
