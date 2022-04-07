import Vue from 'vue'
import Vuex from 'vuex'
/*
import Avatar from '@/assets/avatar.jpeg'
import Hurry from '@/assets/garri.jpeg'
import Everest from '@/assets/everest.jpeg'
import SnowWhite from '@/assets/belo.jpeg'
import Matrix from '@/assets/matrica.jpeg'
import Spiderman from '@/assets/chel.jpeg'
*/
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filmsList: [],
    carouselList: [],
    reactionFilm: [],
    isVisible: true
  },
  mutations: {
    setFilmsList (state, payload) {
      state.filmsList = payload
    },
    setCarouselList (state, payload) {
      state.carouselList = payload
    },
    setIsVisible (state, payload) {
      state.isVisible = payload
    },
    setReactionFilm (state, payload) {
      state.reactionFilm = payload
    }
  },
  getters: {
    getFilmsList: state => state.filmsList,
    getCarouselList: state => state.carouselList,
    getIsVisible: state => state.isVisible,
    getReactionFilm: state => state.reactionFilm
  },
  actions: {
    fetchFilms ({ commit }) {
      return axios.get('http://localhost:3003/')
        .then(res => {
          commit('setFilmsList', res.data)
        })
    },
    fetchCarousel ({ commit }) {
      return commit('setCarouselList', [
        {
          src: 'https://nigelclarkepresenter.co.uk/reviews/wp-content/uploads/2018/02/BP-08-copy.jpg'
        },
        {
          src: 'https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm209-movie-film-poster-batman-begins_5b951e0b-1000x1000.jpg'
        },
        {
          src: 'https://avatars.mds.yandex.net/get-zen_doc/1888829/pub_5d8c753179c26e00ae002ede_5d8cd9120ce57b00ade9d04d/scale_1200'
        },
        {
          src: 'https://www2.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/silent-running-1971-002-poster.jpg?itok=Ho6VqqL5'
        }
      ])
    },
    toggleIsVisible ({ commit }, payload) {
      commit('setIsVisible', payload)
    },
    fetchReactionFilm ({ commit }, payload) {
      commit('setReactionFilm', [
        {
          id: 1,
          score: 1
        },
        {
          id: 2,
          score: 2
        },
        {
          id: 3,
          score: 3
        },
        {
          id: 4,
          score: 4
        },
        {
          id: 5,
          score: 5
        },
        {
          id: 6,
          score: 6
        },
        {
          id: 7,
          score: 7
        },
        {
          id: 8,
          score: 8
        },
        {
          id: 9,
          score: 9
        },
        {
          id: 10,
          score: 10
        }
      ])
    }
  }
})
