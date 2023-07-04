<template>
    <div class="agtp_container">
        <div class="agtp_img"></div>
        <div class="agtp_text">
            <div class="container_coseption_link">
                <h2>КОНЦЕПЦИЯ</h2>
                <router-link class="link" to="/consept1">
                    <p class="link">Концепция градостаительного развития территории</p>
                    <p class="link">Формирование идеи градостраительного освоения территории</p>
                </router-link>
                <router-link class="link" to="/consept2">Разработка документации градостроительной концепции</router-link>
                <p class="link_active_page" >Подготовка документации АГПТ</p>
                <router-link class="link" to="/conseptAGO">Подготовка документации АГО</router-link>
                <router-link class="link" to="/consept">Инициативные концептуальные предложения</router-link>
            </div>
            <h2>ПОДГОТОВКА ДОКУМЕНТАЦИИ "АРХИТЕКТУРНО-ГРАДОСТРОИТЕЛЬНЫЙ
                ПОТЕНЦИАЛ ТЕРРИТОРИИ" (АГПТ)</h2>
            <p>АГПТ - Архитектурно-градостроительный потенциал территории.
                В отдельных случаях, для выдачи разрешения на строительство на
                территориях, для которых не разработаны, или не могут быть разработаны
                проекты планировки и проекты межевания, предусмотрена процедура
                согласования документов архитектурно-градостроительного потенциала
                территории (АГПТ).
            </p>
            <p>Наши специалисты подготовят пакет документов заказчика,
                содержащий:</p>
            <ul>
                <li>альбом АГПТ;</li>
                <li>заявление по установленной форме;</li>
                <li>комплект учредительных документов заказчика.</li>
            </ul>
            <p>Документы подаются на рассмотрение Градостроительной комиссии,
                созданной в соответствии с Постановлением Правительства
                Санкт-Петербурга №314 от 24.05.21 «О создании Градостроительной
                комиссии».</p>
            <p>Основной задачей Градостроительной комиссии является рассмотрение
                материалов АГПТ на предмет социальной эффективности проекта.
                АГПТ - важный технический документ, необходимый для согласования
                проектов строительства в Санкт-Петербурге жилых домов, комплексов
                апартаментов с учетом их обеспеченности социальной инфраструктурой.</p>
            <p>Альбом АГПТ содержит материалы и градостроительное обоснование,
                позволяющие выявить основные градостроительные и планировочные ограничения
                и варианты градостроительного развития территории с учетом имеющихся ограничений
                и возможных укрупненных технико-экономических показателей планируемой застройки. </p>
            <p>По результатам рассмотрения и согласования материалов АГПТ,
                Градостроительная комиссия Санкт-Петербурга делает выписку из протокола
                Градостроительной комиссии с утвержденным решением по объекту.</p>
            <div class="slides_container">
                <div class="agtp_slides" v-on:click="openSanatoriy">
                    <img src="../assets/background_conseptAGTP.jpg">
                    <div class="agtp_slides_text">
                        <p class="footer_item_text">Санкторий. Зеленогорск</p>
                    </div>
                </div>
                <div class="slides_linl_container">
                    <router-link class="footer_link" to="">КОНЦЕПЦИИ "АГ ПОРТАЛ"</router-link>
                    <router-link class="footer_link" to="/consept">НАШИ ИНИЦИАТИВНЫЕ ПРЕДЛОЖЕНИЯ</router-link>
                </div>
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
            sanatoriy_zelenogorsk: [
                {
                    img: require("../assets/AGTP/sanatoriy1.jpg"),
                   
                },
                {
                    img: require("../assets/AGTP/sanatoriy2.jpg"), 
                   
                },
                {
                    img: require("../assets/AGTP/sanatoriy3.jpg"), 
                   
                },
                {
                    img: require("../assets/AGTP/sanatoriy4.jpg"), 
                   
                },
            ],
            slidesShow: [],
        }
    },
    methods: {
        openSanatoriy () {
            this.slidesShow=this.sanatoriy_zelenogorsk
            this.$store.commit('SET_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', this.slidesShow[0].img)
        }
    }
}
</script>
<style scoped>
.agtp_container {
    display: flex;
    box-sizing: border-box;
    height: auto;
    width: 100%;
}

.agtp_img {
    background-image: url(../assets/background_conseptAGTP.jpg);
    width: 65%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: auto;

}

.agtp_text {
    width: 45%;
    background-color: #006064;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    font-size: 11px;
}

.agtp_slides {
    width: 25%;
    cursor: pointer;
}
img {
    width: 100%;
    height: 60px;
}
.slides_container {
    display: flex;
    justify-content: space-between;
    margin-left: 30px;

}
.slides_linl_container {
    width: 65%;
    padding-top: 20px;
    box-sizing: border-box;
}
.footer_link {
    color: white;
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
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
.agtp_slides_text{
    background-color: rgb(0, 77, 64);
    border-radius: 4px;
    text-align: center;
    margin-top: 0
}
.footer_item_text {
    margin: 0;
}
h2 {
    font-size: 12px;
}
.container_coseption_link {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 30px;
}
</style>