<template>
  <div class="carusel">
    <v-carousel cycle :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
    <div class="film-list">
      <CardFilm
        class="films"
        v-for="film in films"
        :key="film.id"
        :film="film"
        :img="film.img"
      />
    </div>
  </div>
</template>

<script>
import CardFilm from './CardFilm.vue'

export default {
  name: 'ListFilms',
  components: { CardFilm },
  data () {
    return {
      films: [
        {
          id: 1,
          img: require('../assets/avatar.jpeg'),
          title: 'Аватар',
          score: '7.9'
        },
        {
          id: 2,
          img: require('../assets/garri.jpeg'),
          title: 'Гарри Поттер и узник азкабана',
          score: '8.6'
        },
        {
          id: 3,
          img: require('../assets/everest.jpeg'),
          title: 'Эверест',
          score: '7.2'
        },
        {
          id: 4,
          img: require('../assets/belo.jpeg'),
          title: 'Белоснежка и охотник',
          score: '8.0'
        },
        {
          id: 5,
          img: require('../assets/matrica.jpeg'),
          title: 'Матрица',
          score: '8.9'
        },
        {
          id: 6,
          img: require('../assets/chel.jpeg'),
          title: 'Человек паук',
          score: '8.5'
        }
      ],
      items: [
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.caruselImg {
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 600px;
  margin-bottom: 10vh;
}

.carusel {
  margin: 0 auto;
}

.film-list {
  width: 1140px;
  margin: 200px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 270px);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 15%;
  grid-row-gap: 40px;
}
</style>
