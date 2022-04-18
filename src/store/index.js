import Vue from 'vue'
import Vuex from 'vuex'
import { mockCarousel, mockFilms, mockGenres, mockPerson } from './mock.js'

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
            console.log(film.genre)
            console.log(genre)
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
      return commit('setCommentList', [
        {
          filmRoute: 'avatar',
          username: 'Гость 1',
          comment: 'Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1,Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1.',
          datetime: '18.04.2022, 18:30',
          id: '1'
        },
        {
          filmRoute: 'hurrypotter-azkaban',
          username: 'Гость 8',
          comment: 'Текст коментария 2, Текст коментария 2, Текст коментария 2, Текст коментария 2',
          datetime: '18.04.2022, 18:30',
          id: '2'
        },
        {
          filmRoute: 'avatar',
          username: 'Гость 2',
          comment: 'Текст коментария3',
          datetime: '18.04.2022, 19:00',
          id: '3'
        },
        {
          filmRoute: 'snowwhite',
          username: 'Гость 2',
          comment: 'Текст коментария 4, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
          datetime: '18.04.2022, 18:30',
          id: '4'
        },
        {
          filmRoute: 'matrix',
          username: 'Гость 4',
          comment: 'Текст коментария 5, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
          datetime: '18.04.2022, 19:00',
          id: '5'
        },
        {
          filmRoute: 'everest',
          username: 'Гость 2',
          comment: 'Текст коментария 6',
          datetime: '18.04.2022, 19:00',
          id: '6'
        },
        {
          filmRoute: 'hurrypotter-azkaban',
          username: 'Гость 1',
          comment: 'Текст коментария 7',
          datetime: '18.04.2022, 19:00',
          id: '7'
        }
      ])
    },
    fetchAddComment ({ commit }, payload) {
      commit('addComment', payload)
    },
    fetchGenres ({ commit }) {
      commit('setGenres', mockGenres)
    }
  }
})
