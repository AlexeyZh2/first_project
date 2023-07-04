<template>
    <div class="project1">
        <div class="container">
            <h2> ПРОЕКТ</h2>
            <p class="active_link"> Проекты планировки и проекты межевания территории</p>
            <router-link to="project2" class="link">
            <p class="link">Технико-экономическое обоснование (ТЭО) проекта</p>
            <p class="link">Проектирование объектов капитального строительства</p>
        </router-link>
        </div>
        <div class="container1">
            <h2>ПРОЕКТЫ ПЛАНИРОВКИ И ПРОЕКТЫ МЕЖЕВАНИЯ ТЕРРИТОРИИ</h2>
            <p>Документация по планировке территории разрабатывается в соответствии с
                требованиями Градостроительного кодекса РФ, федеральных и региональных
                законодательных актов, нормативных документов территориального
                планирования.</p>
            <p>Основная задача разработки градопланировочной документации - обеспечение
                устойчивого развития территорий в соответствии с документами территориального
                планирования и нормативами градостроительного проектирования. </p>
            <p>Проект планировки территории (ППТ) — градостроительная документация,
                разрабатываемая в отношении застроенных или подлежащих застройке территорий,
                в целях выделения элементов планировочной структуры, установления параметров
                планируемого развития элементов планировочной структуры, зон планируемого
                размещения объектов федерального значения, объектов регионального значения,
                объектов местного значения.</p>
            <p>Проект межевания территории (ПМ) — градостроительная документация,
                разрабатываемая в отношении застроенных или подлежащих застройке территорий,
                в границах элементов планировочной структуры, определенных проектом планировки
                территории, в целях установления границ застроенных земельных участков и
                границ незастроенных земельных участков.</p>
            <p>Результат разработки и утверждения проекта планировки – правовая и
                градостроительная основа последующих проектных решений генерального плана
                территории, объектного проектирования, расчета эффективной экономической
                модели инвестиционного проекта строительства, реновации, развития территории.</p>
                  
        </div>
        <p  class="footer_link" v-on:click="openPPT">ПРОЕКТЫ ПЛАНИРОВКИ ТЕРРИТОРИИ</p> 
        <imagePopup :slides=slidesShow />
    </div>
     
</template>
<script>
import imagePopup from "../components/popup.vue"
export default {
    components: {
        imagePopup,
    },
    data: function () {
        return {
            ppt: [
                {
                    img: require("../assets/ppt/ppt1.jpg"),   
                },
                {
                    img: require("../assets/ppt/ppt2.jpg"), 
                },
            ],
            slidesShow: [],   
        }
    },
    methods: {
        openPPT () {
            this.slidesShow=this.ppt
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        }

    }
}
</script>
<style scoped>
.project1 {
    background-image: url(../assets/project1_background.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    padding: 30px;
    box-sizing: border-box;
    position: relative;

}

h2 {
    margin-top: 0;
    color: white;
    font-size: 14px;
}
p {
    color: white;
    font-size: 11px;
    margin-top: 0;
    margin-bottom: 0;
}
p:last-child {
    margin-bottom: 50px;
}
.container1 {
    width: 60%;
}
.active_link {
    font-size: 13px;
    font-weight: bold;
}
.link{
    font-size: 11px;
    text-decoration: none;
}
.footer_link {
    color: white;
    font-size: 12px;
    position: absolute;
    bottom: 60px;
    right: 280px;
    text-decoration: underline;
    cursor: pointer;
}
</style>