<template>
    <div class="text_container">
        <div class="container">

            <h2>Инициативные концептуальные предложения</h2>
            <p class="main-text">Мы внимательно следим за градостроительными тенденциями в нашем городе,
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
        <div class="container_coseption_link">
            <h2>КОНЦЕПЦИЯ</h2>
            <router-link class="link" to="/consept1">
                <p class="link">Концепция градостаительного развития территории</p>
                <p class="link">Формирование идеи градостраительного освоения территории</p>
            </router-link>
            <router-link class="link" to="/consept2">Разработка документации градостроительной концепции</router-link>
            <router-link class="link" to="/conseptAGTP">Подготовка документации АГПТ</router-link>
            <router-link class="link" to="/conseptAGO">Подготовка документации АГО</router-link>
            <p class="link_active_page">Инициативные концептуальные предложения</p>
        </div>
    </div>
    <div class="consept">


    </div>
    <div class="black-line"></div>
    <div class="footer">
        <div class="footer_container1">
            <router-link to="/consept1" class="footer_text_link">КОНЦЕПЦИИ "АГ ПОРТАЛ"</router-link>

        </div>
        <div class="footer_container2">
            <div class="footer_item" v-on:click="openSPBGU">
                <img class="item_img" src="../assets/SPBGU_on_VO.jpg">
                <div class="footer_text">
                    <p class="footer_item_text">Кампус СПбГУ на ВО</p>
                </div>
            </div>
            <div class="footer_item" v-on:click="openGorskaya">
                <img class="item_img" src="../assets/Gorskaja.jpg">
                <div class="footer_text">
                    <p class="footer_item_text">Промзона "Горская"</p>
                </div>
            </div>
            <div class="footer_item" v-on:click="openSestrorezkCenter">
                <img class="item_img" src="../assets/Sestroreck_zentr.jpg">
                <div class="footer_text">
                    <p class="footer_item_text">Сестрорецк. Центр</p>
                </div>
            </div>
            <div class="footer_item" v-on:click="openSestrorezkZavod">
                <img class="item_img" src="../assets/Sestroreck_zavod.jpg">
                <div class="footer_text">
                    <p class="footer_item_text">Сестрорецкий завод</p>
                </div>
            </div>

        </div>
    </div>
        <image-popup :slides=slidesShow />
    
</template>
<script>
import imagePopup from "../components/popup.vue"

import { mapMutations } from 'vuex';
export default {
    components: {
        imagePopup,
    },
    data: function () {
        return {
            slidesShow: [],
            
           
        }
    },
    computed: {
        sestrorezk_center() {
            return this.$store.getters.SESTROR_CENTER;
        },
        sestrorezk_zavod() {
            return this.$store.getters.SESTROR_ZAVOD;
        },
        gorskaya() {
            return this.$store.getters.GORSKAYA;
        },
        spbgu () {
            return this.$store.getters.SPBGU; 
        }

    },

    methods: {
        ...mapMutations(['SET_IMAGE_POPUP']),
        openSestrorezkCenter() {
            
            this.slidesShow = this.sestrorezk_center
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openSestrorezkZavod() {
            this.slidesShow = this.sestrorezk_zavod
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openGorskaya() {
            this.slidesShow = this.gorskaya
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        },
        openSPBGU() {
            this.slidesShow = this.spbgu
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        }
    }
}
</script>
<style scoped>
.consept {
    background-image: url(../assets/consept_background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    box-sizing: border-box;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    margin-top: -100px;
}
.text_container {
    display: flex;
    color: white;
    background-color: black;
    justify-content:space-between;
    margin-bottom: 0;
    width: 100vw;
}

.container {
    width: 35%;
    padding-left: 30px;
}

.container_coseption_link {
    width: 35%;
}

h2 {
    margin-top: 60px;
    color: white;
    font-size: 14px;
}

.main-text {
    color: white;
    font-size: 11px;
    text-align: justify;
    text-indent: 20px;
}

.container {
    width: 50%;
    padding: 20px;
}

.footer {
    background-color: rgb(0, 77, 64);
    height: 20vh;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

}

.footer_text_link {
    margin-top: 20px;
    display: inline-block;
    color: white;
    font-size: 12px;
    margin-left: 40px;
}

.item_img {
    width: 100%;
    height: 50%;
}

.footer_container2 {
    display: flex;
    min-width: 40%;
    justify-content: space-between;

}
.footer_container1 {
    width: auto;

}

.footer_text {
    background-color: rgb(96, 125, 139);
    border-radius: 5px;
    margin-top: 5px;
    width: 100%;
}

.footer_item {
    margin-right: 20px;
    cursor: pointer;
    width: 23%;
    opacity: 0.7;
}
.footer_item:hover {
    opacity: 1;
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
.black-line {
    height: 6px;
    background-color: black;
    margin-top: -6px;
    width: 100%;
}
.footer_item_text {
    color: white;
    font-size: 12px;
    text-align: center;
    width: 70%;
    margin: 0 auto;
}
@media screen and (max-width: 600px) {
    .footer {
        flex-direction: column-reverse;
        height: auto;
        padding-bottom: 30px;
    }
    .footer_container2 {
        margin-left: 20px;
    }
    
}
</style>