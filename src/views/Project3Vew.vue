<template>
    <div class="main_container">
        <h3>ПРОЕКТЫ ЗАСТРОЙКИ ТЕРРИТОРИИ</h3>
        <div class="slides">
            <div class="slide_item" v-on:click="openKalin">
                <img class="slide_item_img" src="../assets/pzt/kalin/kalin3.jpg" />
                <div class="slide_item_text_container">
                    <p class="slide_item_text">Жилая застройка Калининский район</p>
                </div>
            </div>
            <div class="slide_item" v-on:click="openSestrorezk">
                <img class="slide_item_img" src="../assets/pzt/sestrorezk/sestrorezk1.jpg" />
                <div class="slide_item_text_container">
                    <p class="slide_item_text">Застройка жилого квартала Сестрорецк</p>
                </div>
            </div>
            <div class="slide_item" v-on:click="openPushgory">
                <img class="slide_item_img" src="../assets/pzt/pushgory/pushgory1.jpg" />
                <div class="slide_item_text_container">
                    <p class="slide_item_text">Проект загородного гостиничного комплекса Пушгоры</p>
                </div>
            </div>
        </div>
        <router-link  class="link" to="/project">Вернуться на страницу "ПРОЕКТ"</router-link>
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
            kalin: [
                {
                    img: require("../assets/pzt/kalin/kalin1.jpg"),
                },
                {
                    img: require("../assets/pzt/kalin/kalin2.jpg"),
                },
                {
                    img: require("../assets/pzt/kalin/kalin3.jpg"),
                },

            ],
            sestrorezk: [
                {
                    img: require("../assets/pzt/sestrorezk/sestrorezk1.jpg"),
                },
                {
                    img: require("../assets/pzt/sestrorezk/sestrorezk2.jpg"),
                },
                {
                    img: require("../assets/pzt/sestrorezk/sestrorezk3.jpg"),
                },
                {
                    img: require("../assets/pzt/sestrorezk/sestrorezk4.jpg"),
                },
                {
                    img: require("../assets/pzt/sestrorezk/sestrorezk5.jpg"),
                },
                {
                    img: require("../assets/pzt/sestrorezk/sestrorezk6.jpg"),
                },

            ],
            pushgory:[
                {
                    img: require("../assets/pzt/pushgory/pushgory1.jpg"),   
                },
                {
                    img: require("../assets/pzt/pushgory/pushgory2.jpg"),   
                },
                {
                    img: require("../assets/pzt/pushgory/pushgory3.jpg"),   
                }
            ],
            slidesShow: [],
        }
    },
    methods: {
        openKalin() {
            this.slidesShow=this.kalin
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openSestrorezk() {
            this.slidesShow=this.sestrorezk
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openPushgory() {
            this.slidesShow=this.pushgory
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        }
    }
}
</script>
<style scoped>
.slides {
    display: flex;
    justify-content: space-around;
}
.slide_item {
    width: 30%;
    cursor: pointer;
    box-shadow: 10px 5px 5px black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
}
.slide_item:hover {
    opacity: 0.7;
}
.slide_item_img {
    width: 100%;
    height: 60%;
}
.main_container {
    color: white;
    padding: 50px;
}
h3 {
    width:fit-content;
    margin: 50px auto;
    color: black;
}
.link {
    color: black;
    margin-left: auto;
    display: block;
    width: fit-content;
    margin-right: 50px;
    margin-top: 50px;
}
.slide_item_text_container {
    background-color: rgb(0, 77, 64);
    height: 40%;
    margin-bottom: 0;
    padding-top: 10%;
    text-align: center;
    box-sizing: border-box;
}
.slide_item_text {
    text-align: center;
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 0;
    display:inline;
    
}


</style>