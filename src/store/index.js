import Vue from 'vue'
import Vuex from 'vuex'
import { mockCarousel, mockFilms, mockGenres, mockPerson, mockComments } from './mock.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filmsList: [],
    personList: [],
    carouselList: [],
    commentList: [],
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
    },
    setCommentList (state, payload) {
      state.commentList = payload
    },
    addComment (state, payload) {
      state.commentList = [payload, ...state.commentList]
    }
  },
  getters: {
    getFilmsList: state => state.filmsList,
    getPersonsList: state => state.personList,
    getCarouselList: state => state.carouselList,
    getIsVisible: state => state.isVisible,
    getCommentList: state => state.commentList,
    getGenres: state => state.genres
  },
  actions: {
    fetchFilms ({ commit }, genre) {
      return genre
        ? commit('setFilmsList', mockFilms.filter(
          film => {
            return film.genre.toLowerCase().includes(genre.name.toLowerCase())
          }
        ))
        : commit('setFilmsList', mockFilms)
    },
    fetchPerson ({ commit }) {
      return commit('setPersonList', mockPerson)
    },
    fetchCarousel ({ commit }) {
      return commit('setCarouselList', mockCarousel)
    },
    toggleIsVisible ({ commit }, payload) {
      commit('setIsVisible', payload)
    },
    fetchComments ({ commit }) {
      return commit('setCommentList', mockComments)
    },
    fetchAddComment ({ commit }, payload) {
      commit('addComment', payload)
    },
    fetchGenres ({ commit }) {
      commit('setGenres', mockGenres)
    }
  }
})
