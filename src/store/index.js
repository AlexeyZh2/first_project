import { createStore } from 'vuex'

export default createStore({
  state: {
    carusel_list: [
      {
        id: 1,
        img: require("../assets/image1.jpeg"),
        name: "Фото 1"
      },
      {
        id: 2,
        img: require("../assets/image2.jpg"),
        name: "Фото 2"

      },
      {
        id: 3,
        img: require("../assets/image3.jpg"),
        name: "Фото 3"

      },
      {
        id: 4,
        img: require("../assets/image4.jpg"),
        name: "Фото 4"

      },

    ]
  },
  getters: {
    CARUSEL_LIST(state) {
      return state.carusel_list;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
