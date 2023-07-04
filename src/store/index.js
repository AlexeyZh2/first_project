import { createStore } from 'vuex'

export default createStore({
  state: {
    sestrorezk_center: [
      {
        img: require("../assets/Sestrorezk_center/sestrorezk_center1.jpg"),
      },
      {
        img: require("../assets/Sestrorezk_center/sestrorezk_center2.jpg"),
      },
      {
        img: require("../assets/Sestrorezk_center/sestrorezk_center3.jpg"),
      },
      {
        img: require("../assets/Sestrorezk_center/sestrorezk_center4.jpg"),
      },
      {
        img: require("../assets/Sestrorezk_center/sestrorezk_center5.jpg"),
      },

    ],
    sestrorezk_zavod: [
      {
        img: require("../assets/sestrorezk_zavod/sestrorezk_zavod1.jpg"),
      },
      {
        img: require("../assets/sestrorezk_zavod/sestrorezk_zavod2.jpg"),
      },
    ],
    gorskaya: [
      {
        img: require("../assets/gorskaya/gorskaya1.jpg"),
      },
      {
        img: require("../assets/gorskaya/gorskaya2.jpg"),
      },
    ],
    spbgu: [
      {
        img: require("../assets/spgu/SPBGU_on_VO.jpg"),
      },
    ],
    openPopup: false,
    openBigImage: false,
    slideurl: ""
  },
  getters: {
    CARUSEL_LIST: (state) => { return state.carusel_list },
    OPEN_POPUP: (state) => { return state.openPopup },
    SLIDE_URL: (state) => { return state.slideurl },
    SESTROR_CENTER: (state) => {return state.sestrorezk_center},
    SESTROR_ZAVOD: (state) => {return state.sestrorezk_zavod},
    GORSKAYA: (state) => {return state.gorskaya},
    SPBGU: (state) => {return state.spbgu},
    OPEN_BIG_IMAGE: (state) =>{return state.openBigImage}

  },
  mutations: {
    SET_IMAGE_POPUP: (state) => {
      state.openPopup = true;
    },
    SET_CLOSE_IMAGE_POPUP: (state) => {
      state.openPopup = false;
    },
    SET_SLIDE_URL: (state, payload) => {
      state.slideurl = payload
    },
    SET_BIG_IMAGE_OPEN: (state) => {
      state.openBigImage=true
    },
    SET_BIG_IMAGE_CLOSE: (state) => {
      state.openBigImage=false
    }
  },
  actions: {
  },
  modules: {
  }
})
