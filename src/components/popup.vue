<template>
    <div :class="{ 'popup': !openPopup, 'popup popup_active': openPopup === true }">
        <div class="popup_container">
            <button class="popup_close_button" v-on:click="closePopup"></button>
            <div class="image_container">
                <a target="blank" :href="slideurl">
                    <img  class="popup_image" :src="slideurl" />
                </a>
            </div>
            <button :class="{ 'left_button': slidesLength > 1, noactive: slidesLength == 1 }"
                v-on:click=prevSlide></button>
                <div :class="{ index_container: slidesLength > 1, noactive: slidesLength == 1 }">
                <div v-for="item of slides" 
                :class="{'indicator indicator_active': slides.findIndex(i => i == item)==currentIndex,
            indicator : slides.findIndex(i => i == item)!==currentIndex}" 
                v-bind:key="slides.findIndex(i => i == item)"
                v-on:click="selectSlide(slides.findIndex(i => i == item))"></div>
            </div>
            <button :class="{ right_button: slidesLength > 1, noactive: slidesLength == 1 }"
                v-on:click=nextSlide></button>
        </div>
        
    </div>
    
    

</template>
<script>

export default {
    components: {
    },
    name: 'image-popup',
    props: {
        slides: {
            type: Array,
            default: () => [],
        }
    },
    data: function () {
        return {
            currentIndex: 0,
            openBigImage: false
        }
    },
    computed: {
        openPopup() {
            return this.$store.getters.OPEN_POPUP;
        },
        slideurl() {
            return this.$store.getters.SLIDE_URL;
        },
        slidesLength() {
            return this.slides.length 
        },
        
    },

    methods: {
        nextSlide() {
            if (this.currentIndex === this.slides.length - 1) {
                this.currentIndex = 0
            } else {
                this.currentIndex++
            }
            let payload = this.slides[this.currentIndex].img
            this.$store.commit('SET_SLIDE_URL', payload)
        },

        prevSlide() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.slides.length - 1
            } else {
                this.currentIndex--
            }
            let payload = this.slides[this.currentIndex].img
            this.$store.commit('SET_SLIDE_URL', payload)
        },
        selectSlide (number) {
            this.currentIndex=number
            let payload = this.slides[number].img
            this.$store.commit('SET_SLIDE_URL', payload)
        },

        closePopup() {
            this.$store.commit('SET_CLOSE_IMAGE_POPUP')
            this.$store.commit('SET_SLIDE_URL', "")
            this.currentUrl = ""
            this.currentIndex = 0
        },
       
        
    },

}
</script>

<style scoped>
.popup {
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    transition: all 0.5 ease;
    position: fixed;
}

.popup_active {
    visibility: visible;
}

.popup_close_button {
    background-image: url(../assets/4115230-cancel-close-cross-delete_114048.png);
    background-repeat: no-repeat;
    background-color: white;
    background-size: cover;
    height: 20px;
    width: 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    position: absolute;
    right: -20px;
    top: -20px
}

.popup_container {
    height: auto;
    width: 80vw;
    margin: 30px auto;
    position: relative;
    text-align: center;

}

.popup_image {
    max-height: 85vh;
    margin: 0 auto;
    max-width: 80vw;
    display: block;
}

.image_container {
    overflow: hidden;
}

.left_button {
    background-image: url(../assets/left_icon-icons.com_61213.png);
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 20px;
    cursor: pointer;
    border: none
}

.right_button {
    background-image: url(../assets/right_icon-icons.com_61212.png);
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    border: none
}
.indicator {
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border: 1px solid gray;
    margin-right: 5px;
    background-color: gray;
    cursor: pointer;
}
.indicator:last-child {
    margin-right: 0;
    border: 1px solid gray;
}
.indicator_active {
    background-color: black;
}
.index_container {
    display: inline-block;
    margin-right: 20px;
}

.noactive {
    display: none;
}
</style>