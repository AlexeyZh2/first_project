<template>
    <div class="project">
        <div class="project_links_container">
            <h2> ПРОЕКТ</h2>
            <router-link to="project1" class="main-link"> Проекты планировки и проекты межевания территории</router-link>
            <router-link to="project2" class="main-link">
                <p class="main-link">Технико-экономическое обоснование (ТЭО) проекта</p>
                <p class="main-link">Проектирование объектов капитального строительства</p>
            </router-link>
        </div>
        <div class="links_container">
            <router-link to="project3" class="link"> ПРОЕКТЫ ЗАСТРОЙКИ ТЕРРИТОРИИ</router-link>
            <p class="link" v-on:click="openZdanie">ОБЪЕКТНОЕ ПРОЕКТИРОВАНИЕ</p>
            <p  class="link" v-on:click="openPPT">ПРОЕКТЫ ПЛАНИРОВКИ ТЕРРИТОРИИ</p>
        </div>
        

    </div>
    <imagePopup :slides=slidesShow />
</template>
<script>
import imagePopup from "../components/popup.vue"
export default {
    components: {
        imagePopup,
    },
    data: function () {
        return {
            zdanie: [
                {
                    img: require("../assets/project_zdanie/zdanie1.jpg"),
                    
                },
                {
                    img: require("../assets/project_zdanie/zdanie2.jpg"),
                    
                },
                {
                    img: require("../assets/project_zdanie/zdanie3.jpg"),
                    
                },
                {
                    img: require("../assets/project_zdanie/zdanie4.jpg"),
                    
                },
                {
                    img: require("../assets/project_zdanie/zdanie5.jpg"),
                    
                },
                

            ],
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
        openZdanie () {
            this.slidesShow=this.zdanie
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openPPT () {
            this.slidesShow=this.ppt
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
    }

}

</script>
<style scoped>

.project {
    background-image: url(../assets/project_background.jpg);
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding: 50px;
    box-sizing: border-box;
    background-position: center;

}

h2 {
    margin-top: 0;
    font-size: 12px;
    font-weight: bold;
}

.links_container {
    margin-top: 50px;
}

.link {
    display: block;
    margin-bottom: 10px;
    color: black;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
}
.main-link {
    text-decoration: none;
    margin-top: 5px;
    margin-bottom: 5px;
    color: black;
    font-size: 12px;
}
@media screen and (max-width: 900px) {
    .project {
    
    background-position: left;

}
    
}

</style>