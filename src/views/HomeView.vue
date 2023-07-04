<template>
  <div class="main_container">
    <div class="container1">
      <div class="about_item">
        <h4>КОНЦЕПЦИЯ</h4>
        <router-link class="link" to="/consept1">Концепция градостроительного развития территории.</router-link>
        <router-link class="link" to="/consept1">Формирование идеи градостроительного освоения территории.</router-link>
        <router-link class="link" to="/consept2">Разработка документации градостроительной концепции.</router-link>
        <router-link class="link" to="/conseptAGTP">Подготовка документации АГПТ.</router-link>
        <router-link class="link" to="/conseptAGO">Подготовка документации АГО.</router-link>
        <router-link class="link" to="/consept">Инициативные концептуальные предложения.</router-link>
      </div>
      <div class="about_item">
        <h4>ПРОЕКТ</h4>
        <router-link class="link" to="/project1">Проекты планировки и проекты межевания территории.</router-link>
        <router-link class="link" to="/project2">Технико-экономическое обоснование (ТЭО) проекта.</router-link>
        <router-link class="link" to="/project2">Проектирование объектов строительства.</router-link>
      </div>
    </div>
    <div class="container2">
      <div class="about_item">
        <h4>ЭКОНОМИЧЕСКАЯ ЭФФЕКТИВНОСТЬ ПРОЕКТА</h4>
        <router-link class="link" to="/economic_efficiency">Алгоритм расчета экономической эффективности проекта.</router-link>
        <router-link class="link" to="/economic_efficiency">Анализ рынка недвижимости.</router-link>
        <router-link class="link" to="/economic_efficiency">Расчет капитальных затрат.</router-link>
        <router-link class="link" to="/economic_efficiency">Обоснование финансового дохода.</router-link>
        <router-link class="link" to="/economic_efficiency">Разработка финансовой модели проекта.</router-link>
      </div>
      <div class="about_item">
        <h4>КОНСАЛТИНГ</h4>
        <router-link class="link" to="/consulting">Анализ территории.</router-link>
        <router-link class="link" to="/consulting">Анализ градостроительного потенциала земельных участков.</router-link>
        <router-link class="link" to="/consulting">Анализ эскизов и предложений заказчика.</router-link>
        <router-link class="link" to="/consulting1">Разработка «Дорожной карты» проекта.</router-link>
        <router-link class="link" to="/consulting1">Подготовка документации на получение УРВИ и отклонений.</router-link>
      </div>
      <div class="about_item">
        <h4>РЕАЛИЗАЦИЯ</h4>
        <router-link class="link" to="/implementation">Управление проектом.</router-link>
        <router-link class="link" to="/implementation">Функции технического заказчика.</router-link>
        
      </div>
    </div>

  </div>
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

  }
}


</script>
<style scoped>
.main_container {
  background-image: url(../assets/title_page_background.jpg);
  background-size: cover;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 30px 50px 50px 50px;
  height: 100vh;
  background-position: top;
}

p {
  margin: 0;
  text-align: justify;
  font-size: 10px;
  color: white;
}

h4 {
  color: white;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 10px;
}
.about_item {
  padding-top: 10px
}
.container1{
  width: 40%;
}
.container2 {
  width: 50%;
}
.link {
  text-decoration: none;
  color: white;
  font-size: 10px;
  display: block;
}
@media  screen and (max-width: 480px) {
  .main_container {
    flex-direction: column;
    height: auto;
    background-size: cover;
    background-position: left;
  }
  .container1{
  width: 90%;
}
.container2 {
  width: 90%;
}
}
</style>
