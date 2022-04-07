<template>
  <div class="carousel">
    <v-carousel cycle :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in carouselList"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
    <div class="container">
      <h1>Новинки</h1>
      <hr class="line" />
    <div class="film-list">
    <v-sheet max-width="1140px" dark >
    <v-slide-group show-arrows>
      <v-slide-item
      v-for="n in 1 "
      :key="n">
      <v-card height="400">
      <v-row
      class="fill-height"
      align="center"
      justify="center"
      >
      <CardFilm
        v-for="film in filmsList"
        :key="film.id"
        :film="film"
        :img="film.img"
      />
      </v-row>
      </v-card>
      </v-slide-item>
    </v-slide-group>
    </v-sheet>
    </div>
    <h1>Рейтинговые фильмы</h1>
      <hr class="line" />
    <div class="film-list">
    <v-sheet max-width="1140px" dark >
    <v-slide-group show-arrows >
      <v-slide-item
      v-for="n in 1 "
      :key="n"
      >
      <v-card height="400" >
      <v-row
      class="fill-height"
      align="center"
      justify="center"
      >
      <CardFilm
        v-for="film in filmsList"
        :key="film.id"
        :film="film"
        :img="film.img"
      />
      </v-row>
      </v-card>
      </v-slide-item>
    </v-slide-group>
    </v-sheet>
    </div>
  </div>
  </div>
</template>

<script>
import CardFilm from './CardFilm.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListFilms',
  components: { CardFilm },
  data () {
    return {
      model: this.filmsList
    }
  },
  methods: {
    ...mapActions(['fetchFilms', 'fetchCarousel'])
  },
  computed: {
    ...mapGetters(['getFilmsList', 'getCarouselList']),
    filmsList () {
      return this.getFilmsList
    },
    carouselList () {
      return this.getCarouselList
    }
  },
  created () {
    this.fetchFilms()
    this.fetchCarousel()
  }
}
</script>

<style lang="scss" scoped>
.carouselImg {
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 600px;
  margin-bottom: 10vh;
}
.container{
width: 1140px;
}
.carousel {
  margin: 0 auto;
}
.film-list {
  margin: 50px auto;
}
.line{
  width: 100%;
  height: 3px;
  color: #EB5804;
  background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
  margin-bottom: 35px;
  border:none;

}
h1{
  font-size: 25pt;
  padding-bottom: 6pt;
  padding-top: 6pt;
}
</style>
