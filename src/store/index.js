import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const srv = 'http://localhost:3003'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filmsList: [],
    personList: [],
    carouselList: [],
    genres: [],
    isVisible: true
  },
  mutations: {
    setFilmsList (state, payload) {
      state.filmsList = payload
    },
    setPersonList (state, payload) {
      state.personList = payload
    },
    setCarouselList (state, payload) {
      state.carouselList = payload
    },
    setIsVisible (state, payload) {
      state.isVisible = payload
    },
    setGenres (state, payload) {
      state.genres = payload
    }
  },
  getters: {
    getFilmsList: state => state.filmsList,
    getPersonsList: state => state.personList,
    getCarouselList: state => state.carouselList,
    getIsVisible: state => state.isVisible,
    getGenres: state => state.genres
  },
  actions: {
    fetchFilms ({ commit }, genre) {
      if (genre) {
        axios
          .get(srv + '/films/' + genre.route)
          .then(res => { commit('setFilmsList', res.data) })
      } else {
        axios.get(srv + '/films').then(res => { commit('setFilmsList', res.data) })
      }
    },
    fetchPerson ({ commit }) {
      axios.get(srv + '/person').then(res => { commit('setPersonList', res.data) })
    },
    fetchCarousel ({ commit }) {
      axios.get(srv + '/carousel.json').then(res => { commit('setCarouselList', res.data) })
    },
    toggleIsVisible ({ commit }, payload) {
      commit('setIsVisible', payload)
    },
    fetchGenres ({ commit }) {
      axios.get(srv + '/genres').then(res => { commit('setGenres', res.data) })
    }
  }
})
