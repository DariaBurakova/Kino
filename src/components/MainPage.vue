<template>
  <div class="main-page">
    <FilmCarousel />
    <ListFilms header="По рейтингу" :filmsList="filmsList" />
    <ListFilms header="Новые" :filmsList="newFilmsList" />
  </div>
</template>

<script>
import FilmCarousel from './FilmCarousel.vue'
import ListFilms from './ListFilms.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MainPage',
  components: {
    FilmCarousel,
    ListFilms
  },
  computed: {
    ...mapGetters(['getFilmsList']),
    filmsList () {
      return this.getFilmsList
    },
    newFilmsList () {
      return this.getFilmsList
    }
  }
}
</script>
