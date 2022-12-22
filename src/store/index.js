import { createStore } from 'vuex'

export default createStore({
  state: {
    carusel_list: [
      {
        id: 1,
     img: "image1.jpeg"
      },
      {
        id: 2,
        img: "image2.jpg"

      },
      {
        id: 3,
        img: "image3.jpg"

      },
      {
        id:4,
        img: "image4.jpg"

      },

    ]
  },
    getters: {  
      CARUSEL_LIST (state){ 
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
