<template>
    <div class="consept2_container">
        <div class="image_container">

        </div>
        <div class="text_container">
            <div class="container1">
                <h2>КОНЦЕПЦИЯ</h2>
                <router-link class="link" to="consept1">
                    <p class="link">Концепция градостаительного развития территории</p>
                    <p class="link">Формирование идеи градостраительного освоения территории</p>
                </router-link>
                <p class="link_active_page" to="/consept2">Разработка документации градостроительной концепции</p>
                <router-link class="link" to="/conseptAGTP">Подготовка документации АГПТ</router-link>
                <router-link class="link" to="/conseptAGO">Подготовка документации АГО</router-link>
                <router-link class="link" to="/consept">Инициативные концептуальные предложения</router-link>
            </div>
            <div>
                <h3>РАЗРАБОТКА ДОКУМЕНТАЦИИ ГРАДОСТРОИТЕЛЬНОЙ КОНЦЕПЦИИ</h3>
                <p class="main_text">Документация градостроительной концепции - разработанные проектные
                    решения функционального зонирования, расположения зданий и строений
                    на участке, схемы транспортного обеспечения, инженерных сетей, расчет
                    необходимого количества парковочных мест, локация зон отдыха, детских и
                    спортивных площадок.</p>
                <p class="main_text">В рамках градостроительной концепции определяются перспективы и
                    максимальные возможности застройки земельного участка, предельные
                    параметры зданий, разрабатывается технико-экономическое обоснование
                    проекта (ТЭО). Градостроительная документация формирует исходную
                    архитектурно-планировочную модель застройки. Увидеть очертания будущей
                    застройки позволят материалы визуализации (3D модель).</p>
                <p class="main_text">Градостроительная концепция – один из важнейших исходных документов
                    для определения на последующих этапах архитектурно-градостроительного
                    потенциала территории (АГПТ), разработки архитектурно-градостроительного
                    облика отдельных объектов и комплексов (АГО), разработки проекта
                    планировки с проектом межевания (ППТ и ПМ), проектной документации
                    объектов капитального строительства, параметров расчета капитальных
                    вложений инвестора (CFPEX) и экономической эффективности проекта в целом.</p>
            </div>
            <p class="link_aftetext">КОНЦЕПЦИИ "АГ ПОРТАЛ"</p>
            <p class="link_aftetext">НАШИ ИНИЦИАТИВНЫЕ ПРЕДЛОЖЕНИЯ</p>
            <div class="slides_container">
                <div class="slide_item" v-on:click="openIndustrialPark">
                    <img src="../assets/consept_foto/industrial_park/industrial_park1.jpg">
                    <div class="slide_item_text">
                        <p class="">Индустриальный парк</p>
                    </div>
                </div>
                <div class="slide_item" v-on:click="openHotelRepino">
                    <img src="../assets/consept_foto/hostel_repino/hostel_repino1.jpg">
                    <div class="slide_item_text">
                        <p class="slide_item_text">Гостиница. Репино</p>
                    </div>
                </div>
                <div class="slide_item" v-on:click="openPushGory">
                    <img src="../assets/consept_foto/Pushgory/pushgory1.jpg">
                    <div class="slide_item_text">
                        <p class="slide_item_text">Гостиница. Пушгоры</p>
                    </div>
                </div>
                <div class="slide_item" v-on:click="openKamenka">
                    <img src="../assets/consept_foto/kamenka/kamenka.jpg">
                    <div class="slide_item_text">
                        <p class="slide_item_text">Концепция развития. Каменка.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
        <image-popup :slides=slidesShow />
    
</template>
<script>
import imagePopup from "../components/popup.vue"
export default {
    components: {
        imagePopup,
    },
    data: function () {
        return {
            slidesShow: [],
            industrial_park: [
                {
                    img: require("../assets/consept_foto/industrial_park/industrial_park1.jpg")
                },
                {
                    img: require("../assets/consept_foto/industrial_park/industrial_park2.jpg")
                },
                {
                    img: require("../assets/consept_foto/industrial_park/industrial_park3.jpg")
                },
                {
                    img: require("../assets/consept_foto/industrial_park/industrial_park4.jpg")
                },
                {
                    img: require("../assets/consept_foto/industrial_park/industrial_park5.jpg") 
                },
            ],
            hostel_repino: [
                {
                    img: require("../assets/consept_foto/hostel_repino/hostel_repino1.jpg")
                },
                {
                    img: require("../assets/consept_foto/hostel_repino/hostel_repino2.jpg")
                },
                {
                    img: require("../assets/consept_foto/hostel_repino/hostel_repino3.jpg")
                },
            ],
            pushgory: [
                {
                    img: require("../assets/consept_foto/Pushgory/pushgory1.jpg")
                },
                {
                    img: require("../assets/consept_foto/Pushgory/pushgory2.jpg")
                },
                {
                    img: require("../assets/consept_foto/Pushgory/pushgory3.jpg")
                },
                {
                    img: require("../assets/consept_foto/Pushgory/pushgory4.jpg")
                },
            ],
            kamenka: [
                {
                    img: require("../assets/consept_foto/kamenka/kamenka1.jpg")
                }
            ],

        }
    },
    methods: {
        openIndustrialPark () {
            this.slidesShow=this.industrial_park
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openHotelRepino () {
            this.slidesShow=this.hostel_repino
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openPushGory () {
            this.slidesShow=this.pushgory
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openKamenka () {
            this.slidesShow=this.kamenka
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        }
        
    },
}

</script>
<style scoped>
.consept2_container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    height: auto;
}

.image_container {
    background-image: url(../assets/consept2_background.jpg);
    background-size: cover;
    background-position: center;
    height: auto;
    width: 60%;
}

.text_container {
    width: 40%;
    color: white;
    background-color: rgb(0, 77, 64);

    padding: 20px;
}

.link_active_page {
    font-size: 12px;
    font-weight: 900;
    margin-bottom: 0;
    margin-top: 0;
}

.link {
    color: white;
    font-size: 11px;
    text-decoration: none;
    display: block;
    margin-top: 0;
    margin-bottom: 0;
}

.main_text {
    font-size: 11px;
     text-align: justify;
     text-indent: 15px;
}

h2,
h3 {
    margin-top: 0;
    font-size: 12px;
}

.container1 {
    margin-bottom: 20px;
}

.slides_container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

img {
    width: 100%;
    height: 45px;
}

.slide_item {
    width: 20%;
    cursor: pointer;
}

.slide_item_text {
    font-size: 11px;
}
.link_aftetext {
    margin-top: 20px;
    font-size: 12px;
}
.link_aftetext:last-child {
    margin-bottom: 20px;
}

</style>