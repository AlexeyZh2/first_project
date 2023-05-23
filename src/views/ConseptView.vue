<template>
    <div class="consept">

        <div class="container">

            <h2>Инициативные концептуальные предложения</h2>
            <p>Мы внимательно следим за градостроительными тенденциями в нашем городе,
                анализируем градостроительные предложения, знаковые для нашего города.
                В тоже время, достаточная изученность проблем, связанных с реновацией
                «серых» промышленных зон, сложных транспортных узлов, доступности береговой
                полосы Финского залива и ее нераскрытый потенциал, позволяют нам, как
                специалистам моделировать градостроительные ситуации. Искать возможные
                варианты освоения, иногда альтернативные выбранным городом градопланировочные
                решения. Наши инициативные концептуальные предложения носят рекомендательный
                характер. В ряде случаев – представлены на городских и международных форумах,
                или в органах государственной власти.</p>
        </div>
        <div class="container1">
            <h2>КОНЦЕПЦИЯ</h2>
            <p>Концепция градостаительного развития территории</p>
            <p>Формирование идеи градостраительного освоения территории</p>
            <p>Разработка документации градостроительной концепции</p>
            <p>Подготовка документации АГПТ</p>
            <p>Подготовка документации АГО</p>
            <p>Инициативные концептуальные предложения</p>
        </div>
    </div>
    <div class="footer">
        <div class="footer_container1">
<p  class="footer_text">КОНЦЕПЦИИ "АГ ПОРТАЛ"</p>
<p class="footer_text">НАШИ ИНИЦИАТИВНЫЕ ПРЕДЛОЖЕНИЯ</p>
        </div>
        <div class="footer_container2">
            <div class="footer_item">
                <img src="../assets/SPBGU_on_VO.jpg">
                <div class="footer_item_text">
                    <p class="footer_item_text">Кампус СПб ГУ на ВО</p>
                </div>
            </div>
            <div class="footer_item">
                <img src="../assets/Gorskaja.jpg">
                <div class="footer_item_text">
                    <p class="footer_item_text">Промзона "Горская"</p>
                </div>
            </div>
            <div class="footer_item">
                <img src="../assets/Sestroreck_zentr.jpg">
                <div class="footer_item_text">
                    <p class="footer_item_text">Сестрорецк центр</p>
                </div>
            </div>
            <div class="footer_item">
                <img src="../assets/Sestroreck_zavod.jpg">
                <div class="footer_item_text">
                    <p class="footer_item_text">Сестрорецкий завод</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.consept {
    background-image: url(../assets/consept_background.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100vw;
    box-sizing: border-box;
    height: 80vh;
    display: flex;
    justify-content: space-between;
}
.container {
    width: 40%;
}
.container1 {
    width: 40%;
}
h2 {
    margin-top: 60px;
    color: white;
    font-size: 14px;
}

p {
    color: white;
    font-size: 11px;
}

.container {
    width: 50%;
    padding: 20px;
}

.footer {
    background-color: rgb(0, 77, 64);
    height: 20vh;
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 10px;

}
.footer_text {
    margin-top: 0;
    display: inline-block;
}
img {
    width: 90px;
    height: 60px;
}
.footer_container2 {
    display: flex;
    width: 40%;

}
.footer_item_text {
    color: white;
    background-color: rgb(96, 125, 139);
    border-radius: 5px;
    margin-top: 5px;
}
.footer_item {
    margin-right: 20px;
}
</style>