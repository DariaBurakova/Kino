<template>
  <div class="film-page">
    <div class="film-page-content" >
      <div class="film-data-block">
        <div class="poster" v-if="filmData">
          <img :src="filmData.img"/>
        </div>
        <div class="film-data">
          <h1>{{ filmData.title }}({{ filmData.year }})</h1>
          <hr class="line">
           <p v-if="filmData.age" class="age-boundary">{{ filmData.age }}+</p>
          <p v-if="filmData.description" class="film-page-description">
            {{ filmData.description }}
          </p>
          <h1>О фильме</h1>
          <hr class="line">
          <p v-if="filmData.country">
            <strong>Страна:</strong> {{ filmData.country }}
          </p>
          <p v-if="filmData.year">
            <strong>Год выпуска:</strong> {{ filmData.year }}
          </p>
          <p v-if="filmData.genre">
            <strong>Жанр:</strong> {{ filmData.genre }}
          </p>
          <p v-if="filmData.director">
            <strong>Режиссёр:</strong>
            <ul>
              <router-link class="routerLink" :to={}>
                <li v-for="item in filmData.director" :key="item.name" class="liName">{{ item.name }}</li>
                </router-link>
              </ul>
          </p>
          <p v-if="filmData.actors">
            <strong>В главных ролях:</strong>
            <ul>
              <router-link class="routerLink" :to={}>
                <li v-for="item in filmData.actors" :key="item.name" class="liName">{{ item.name }}</li>
                </router-link>
            </ul>
          </p>
          <hr class="line">
        </div>
      </div>
      <div v-if="filmData.route === 'matrix'" class="player-text">Трейлер</div>
      <div v-if="filmData.route === 'matrix'" class="player">
        <iframe
          width="560"
          height="315"
          src="https://ok.ru/videoembed/1978843204301"
          frameborder="0"
          allow="autoplay"
          allowfullscreen
        >
        </iframe>
      </div>
      <!--
      <div class="player-text">Тест локального плеера</div>
      <div class="player"><player /></div>
      -->
      <div class="film-data buttonContainer">
      <h1>Оцените фильм</h1>
      <hr class="line">
      <ul class="listButton">
        <li class="score" v-for="item in reactionFilm" :key="item.id">
          <v-btn color="#EB5804" elevation="11"  variant="outlined"><p style="color:white">{{item.score}}</p></v-btn>
          </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
// import Player from './Player.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilmPage',
  // components: { Player },
  data () {
    return {
      filmData: null
    }
  },
  methods: {
    ...mapActions(['fetchReactionFilm'])
  },
  computed: {
    ...mapGetters(['getFilmsList', 'getReactionFilm']),
    filmsList () {
      return this.getFilmsList
    },
    reactionFilm () {
      return this.getReactionFilm
    }
  },
  created () {
    /* eslint-disable */
    const filmData = this.filmsList.find(filmData => filmData.route == this.$route.params.route);
    if (filmData) {
      this.filmData = filmData;
      document.title = 'VIDEOTEK - ' + filmData.title;
    }
    this.fetchReactionFilm()
  }
}
</script>

<style>
.liName{
  list-style-type: none;
  margin-top:10px;
  margin-bottom:10px;
}
.liName:hover{
   color:#d66c08
}
.line{
  width: 100%;
  height: 3px;
  color:#d66c08;
  background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
  margin-bottom: 35px;
  border:none;

}
.listButton{
  list-style: none;
  display: flex;
  justify-content: space-between;

}
.film-data {
  margin: 15px 0;
}

.film-data h1 {
  font-size: 25pt;
  padding-bottom: 6pt;
}
.film-data strong { font-size: 15pt; }
.film-data p { 
  font-size: 12pt;
  line-height:1.5;
}
.film-page-description {
  margin-top: 12pt;
  margin-bottom: 12pt;
  text-align: justify;
  line-height:1.5;
}

.data-block {
  display: flex;
  align-items: flex-end;
}

.data-block p { margin-left: 5px; }

.poster {
  margin-top:30px;
  margin-right: 20px;
}

.film-page-content {
  margin: 20px auto;
  padding: 10px 15px;
  width: 1140px;
}

.film-data-block {
  display: flex;
}

.age-boundary {
  width: 50px;
  text-align: center;
  font-weight: 900;
  color: white;
  background-color: red;
  border-radius: 50%;
  padding: 8px 8px;
  font-size: 10pt;
  margin-bottom: 10px;
}

.player-text {
  display: flex;
  justify-content: center;
  margin: 15px 5px;
  font-size: 18pt;
}

.player {
  display: flex;
  justify-content: center;
}
.routerLink{
  text-decoration: none;
  color:white;
}
.scoreButton:hover{
  background-color: #d66c08;
}
.buttonContainer{
  margin: 50px auto;
  margin-left: 270px;
}
</style>
