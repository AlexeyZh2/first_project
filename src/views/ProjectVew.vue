<template>
<div class="project">
    <h2> ПРОЕКТ</h2>
    <p> Проекты планировки и проекты межевания территории</p>
    <p>Технико-экономическое обоснование (ТЭО) проекта</p>
    <p>Проектирование объектов капитального строительства</p>

    <div class="links_container">
        <router-link class="link" to="/project2">ПРОЕКТЫ ЗАСТРОЙКИ ТЕРРИТОРИИ</router-link>
        <router-link class="link" to="/project2">ОБЪЕКТНОЕ ПРОЕКТИРОВАНИЕ</router-link>
        <router-link class="link" to="/project1">ПРОЕКТЫ ПЛАНИРОВКИ ТЕРРИТОРИИ</router-link>
        
    </div>

</div>
</template>
<script>
</script>
<style scoped>
.project {
    background-image: url(../assets/project_background.jpg);
    background-size: 100% 100%; 
    width: 100vw;
    height: 100vh;

}
h2 {
    margin-top: 0;
}
.links_container {
    margin-top: 50px;
}
.link {
    display: block;
    margin-bottom: 10px;
    color: black;
    font-size: 12px;
}
</style>