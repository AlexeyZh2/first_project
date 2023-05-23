<template>
  <div class="main_container">
    <div class="container1">
      <div class="about_item">
        <h4>КОНЦЕПЦИЯ</h4>
        <p>Концепция градостроительного развития территории.</p>
        <p>Формирование идеи градостроительного освоения территории.</p>
        <p>Разработка документации градостроительной концепции.</p>
        <p>Подготовка документации АГПТ.</p>
        <p>Подготовка документации АГО.</p>
        <p>Инициативные концептуальные предложения.</p>
      </div>
      <div class="about_item">
        <h4>ПРОЕКТ</h4>
        <p>Проекты планировки и проекты межевания территории.</p>
        <p>Технико-экономическое обоснование (ТЭО) проекта.</p>
        <p>Проектирование объектов строительства.</p>
      </div>
    </div>
    <div class="container2">
      <div class="about_item">
        <h4>ЭКОНОМИЧЕСКАЯ ЭФФЕКТИВНОСТЬ ПРОЕКТА</h4>
        <p>Алгоритм расчета экономической эффективности проекта.</p>
        <p>Анализ рынка недвижимости.</p>
        <p>Расчет капитальных затрат.</p>
        <p>Обоснование финансового дохода.</p>
        <p>Разработка финансовой модели проекта.</p>
      </div>
      <div class="about_item">
        <h4>КОНСАЛТИНГ</h4>
        <p>Анализ территории.</p>
        <p>Анализ градостроительного потенциала земельных участков.</p>
        <p>Анализ эскизов и предложений заказчика.</p>
        <p>Разработка «Дорожной карты» проекта.</p>
        <p>Подготовка документации на получение УРВИ и отклонений.</p>
      </div>
      <div class="about_item">
        <h4>РЕАЛИЗАЦИЯ</h4>
        <p>Управление проектом.</p>
        <p>Функции технического заказчика.</p>
        <p>Экспертиза проектов (сопровождение проекта до заключения экспертизы).</p>
        <p>Разрешение на строительство (сопровождение проекта до получения РНС).</p>
        <p>Авторский надзор.</p>
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
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  width: 100vw;
  padding: 50px;
  height: 100vh;
}

p {
  margin: 0;
  text-align: justify;
  font-size: 10px;
  color: white;
}

h4 {
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
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
</style>
