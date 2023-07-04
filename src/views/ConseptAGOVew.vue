<template>
    <div class="AGO_container">
        <div class="main_text_container">
            <h2>Подготовка документации АГО</h2>
            <p>АГО - Архитектурно-градостроительный облик объекта. В объектном проектировании,
                особенно при работах по застройке в исторической части города, важнейшим
                требованием является стилистическое художественное решение фасадов и силуэтов
                зданий, при соблюдении требований по допустимым показателям строительства.</p>
            <p>Основными задачами АГО являются:</p>
            <ul>
                <li>обеспечение визуальной привлекательности объекта;</li>
                <li>ансамблевость с существующей застройкой;</li>
                <li>выбор архитектурного стиля;</li>
                <li>гармоничность линий и силуэтов;</li>
                <li>комфортность и доступность;</li>
                <li>соответствие законодательству в области градостроительного планирования.</li>
            </ul>
            <p>Архитектурно-градостроительный облик объекта (АГО) разрабатывается на основании
                Распоряжения Комитета по градостроительству и архитектуре (КГА) от 10.08.2022
                № 10-н «Об утверждении формы и состава материалов архитектурно-градостроительного
                облика объекта капитального строительства и административного регламента комитета
                по градостроительству и архитектуре по предоставлению государственной услуги
                по согласованию архитектурно-градостроительного облика объекта капитального
                строительства».</p>
            <p>Мы подготовим для заказчика альбом АГО, который будет содержать графические
                и текстовые материалы, необходимые для согласования в исполнительных органах
                государственной власти объекта капитального строительства (ОКС).</p>
        </div>
        <div class="container_right">
            <div class="container1">
                <h2>КОНЦЕПЦИЯ</h2>
                <router-link to="/consept1">
                    <p class="link">Концепция градостаительного развития территории</p>
                    <p class="link">Формирование идеи градостраительного освоения территории</p>
                </router-link>
                <router-link class="link" to="/consept2">Разработка документации градостроительной концепции</router-link>
                <router-link class="link" to="/conseptAGTP">Подготовка документации АГПТ</router-link>
                <p class="link_active_page" to="/conseptAGO">Подготовка документации АГО</p>
                <router-link class="link" to="/consept">Инициативные концептуальные предложения</router-link>
            </div>
            <div class="slides_container">
                <div v-for="item in initial_slides" :key=item.name 
                v-on:click="item.open" class="slide_item">
                    <img class=slide_img :src="item.img">
                    <div class="slide_item_text">
                        <p class="item_text">{{ item.name }}</p>
                    </div>
                </div>
            </div>
            <div class="footer_links_container">
                <router-link class="footer_link" to="/consept1">КОНЦЕПЦИИ "АГ ПОРТАЛ"</router-link>
                <router-link class="footer_link" to="/consept">НАШИ ИНИЦИАТИВНЫЕ ПРЕДЛОЖЕНИЯ</router-link>
            </div>
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
            initial_slides: [
                {
                    img: require("../assets/AGO/AGO_bisnes_center/bisnes_center1.jpg"),
                    name: "Бизнес центр. Петербург",
                    open: this.openBisnesCenter,
                },
                {
                    img: require("../assets/AGO/AGO_delovoy_center/delovoy_center1.jpg"),
                    name: "Деловой цент. Петербург",
                    open: this.openDelovoyCenter,

                },
                {
                    img: require("../assets/AGO/AGO_apartament_zelenogorsk/apartament_zelenogorsk1.jpg"),
                    name: "Апартаменты. Зеленогорск",
                    open: this.openZelenogosk,


                },

            ],
            slidesShow: [],
            bisnes_center : [
                {
                    img: require("../assets/AGO/AGO_bisnes_center/bisnes_center1.jpg"),   
                },
                {
                    img: require("../assets/AGO/AGO_bisnes_center/bisnes_center2.jpg"),   
                },
            ],
            delovoy_center: [
                {
                    img: require("../assets/AGO/AGO_delovoy_center/delovoy_center1.jpg"), 
                },
                {
                    img: require("../assets/AGO/AGO_delovoy_center/delovoy_center2.jpg"), 
                },
                {
                    img: require("../assets/AGO/AGO_delovoy_center/delovoy_center3.jpg"), 
                },
                
            ],
            zelenogorsk: [
                {
                    img: require("../assets/AGO/AGO_apartament_zelenogorsk/apartament_zelenogorsk1.jpg"),   
                },
                {
                    img: require("../assets/AGO/AGO_apartament_zelenogorsk/apartament_zelenogorsk2.jpg"),   
                },
            ]
        }
    },
    methods: {
        openBisnesCenter () {
            this.slidesShow=this.bisnes_center
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openDelovoyCenter () {
            this.slidesShow=this.delovoy_center
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openZelenogosk () {
            this.slidesShow=this.zelenogorsk
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
    },
}
</script>
<style scoped>
.AGO_container {
    background-image: url(../assets/background_AGO.jpg);
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    box-sizing: border-box;
    height: 100vh;
}

.main_text_container {
    width: 35%;
    color: white;
    font-size: 11px;
    padding: 60px 0 20px 30px;
}

.link_active_page {
    font-size: 12px;
    font-weight: 900;
    margin-bottom: 0;
    margin-top: 0;
    color: white;
}

.link {
    color: black;
    font-size: 11px;
    text-decoration: none;
    display: block;
    color: white;
    margin-top: 0;
    margin-bottom: 0;
}

h2 {
    color: white;
    font-size: 12px;
    margin-top: 40px;
}

.right_container {
    width: 30%;
}

.slide_img {
    width: 100%;
    height: 70px;
}

.slide_item {
    width: 33%;
    height: auto;
    box-sizing: border-box;
    margin-left: auto;
    margin-top: 20px;
    cursor: pointer;
}

.item_text {
    color: white;
    font-size: 8px;
    margin-top: 0;
    margin-bottom: 0;
}

.slide_item_text {
    background-color: rgb(96, 125, 139);
    width: 100%;
    padding: 5px;
    border-radius: 3px;
    box-sizing: border-box;
}
.slides_container {
    padding-right: 50px;
}
.footer_link {
    color: white;
    font-size: 10px;
    margin-right: 30px;
    font-weight: bold;
}
.footer_links_container {
    margin-top: 50px;
}
</style>