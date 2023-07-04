<template>
    <div class="consept1_container">
        <div class="all_container">
            <div class="container1">
                <h2>КОНЦЕПЦИЯ</h2>
                <p class="link_active_page">Концепция градостаительного развития территории</p>
                <p class="link_active_page">Формирование идеи градостраительного освоения территории</p>
                <router-link class="link" to="/consept2">Разработка документации градостроительной концепции</router-link>
                <router-link class="link" to="/conseptAGTP">Подготовка документации АГПТ</router-link>
                <router-link class="link" to="/conseptAGO">Подготовка документации АГО</router-link>
                <router-link class="link" to="/consept">Инициативные концептуальные предложения</router-link>
            </div>
            <div class="container2">
                <p class="main-text"><span>КОНЦЕПЦИЯ</span> градостроительного развития территории - комплексный документ,
                    содержащий:</p>
                <ul class="main-text">
                    <li>градостроительный анализ территории проекта;</li>
                    <li>сформированную идею градостроительного проекта;</li>
                    <li>градостроительную документацию.</li>
                </ul>
                <div class="idea">
                <p class="main-text"><span>ФОРМИРОВАНИЕ ИДЕИ</span> градостроительного освоения территории.</p>
                <p class="main-text">Идея градостроительного проекта обретает конкретные черты в процессе
                    формирования единого представления, полученного о земельном участке в
                    процессе анализа территории проектирования. Она обретает окончательную
                    форму в градостроительной документации по застройке территории.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.consept1_container {
    background-image: url(../assets/background_consept1.jpg);
    background-size: cover;
    background-position: right;
    min-height: 110vh;
    width: 100%;
    box-sizing: border-box;
}

.link_active_page {
    font-size: 12px;
    font-weight: 900;
    margin-bottom: 0;
    margin-top: 0;
}

.link {
    color: black;
    font-size: 11px;
    text-decoration: none;
    display: block;
}
.all_container {
    width: 40%;
    margin-left: auto;
    padding-top: 15px;
    padding-right: 20px;
}
h2 {
    margin-top: 0;
    font-size: 12px;
}
.main-text {
    font-size: 10px;
    margin-bottom: 0;
    margin-top: 0;
}
span {
    font-weight: bold;
}
ul {
    margin-top: 0;
}
.idea {
    width: 75%;
    margin-left: auto;
}
.container1 {
    margin-bottom: 20px;
}
@media screen and (max-width: 700px) {
    .all_container{
        width: 70%;
    }
}
@media screen and (max-width: 450px) {
    .all_container{
        width: 90%;
    }
}
</style>