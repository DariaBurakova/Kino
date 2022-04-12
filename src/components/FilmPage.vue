<template>
  <div class="film-page">
    <div class="film-page-content" >
      <div class="film-data-block">
        <div class="left-column" v-if="filmData">
          <img :src="filmData.img" alt="film data"/>
          <button class="btn">В избранное</button>
        </div>
        <div class="film-data">
          <h1>{{ filmData.title }} ({{ filmData.year }})</h1>
          <div class="score-block">Рейтинг: <strong>{{ filmData.score }}</strong></div>
          <hr class="line" />
          <p v-if="filmData.age" class="age-boundary">{{ filmData.age }}+</p>
          <p v-if="filmData.description" class="film-page-description">
            {{ filmData.description }}
          </p>
          <h1>О фильме</h1>
          <hr class="line" />
          <p v-if="filmData.country">
            <em class="parameter">Страна:</em> {{ filmData.country }}
          </p>
          <p v-if="filmData.year">
            <em class="parameter">Год выпуска:</em> {{ filmData.year }}
          </p>
          <p v-if="filmData.genre">
            <em class="parameter">Жанр:</em> {{ filmData.genre }}
          </p>
          <div v-if="filmData.director">
            <em class="parameter">Режиссёр:</em>
            <ul class="inline-ul">
                <li v-for="item in filmData.director" :key="item.name" class="liName">
                 <router-link class="routerLink" :to="'/person/'+ item.name">{{ item.name }}</router-link>
                </li>
            </ul>
          </div>
          <div v-if="filmData.actors">
            <em class="parameter">В главных ролях:</em>
            <ul class="inline-ul">
                <li v-for="item in filmData.actors" :key="item.name" class="liName">
                  <router-link class="routerLink" :to="'/person/' + item.name">{{ item.name }}</router-link>
                  </li>
            </ul>
          </div>
          <hr class="line" />
        </div>
      </div>
      <div
        v-if="filmData.trailer"
        class="player-text"
        @click="isTrailerVisible = ! isTrailerVisible"
      >
        Трейлер
      </div>
      <div v-if="filmData.trailer" v-show="isTrailerVisible" class="player trailer-show">
        <iframe
          :width= "filmData.trailer.width"
          :height="filmData.trailer.height"
          :src="filmData.trailer.href"
          allow="autoplay"
          allowfullscreen
        ></iframe>
      </div>
      <div v-if="filmData.video" class="player">
        <iframe
          :width= "filmData.video.width"
          :height="filmData.video.height"
          :src="filmData.video.href"
          allow="autoplay"
          allowfullscreen
        ></iframe>
      </div>
      <!--
      <div class="player-text">Тест локального плеера</div>
      <div class="player"><player /></div>
      -->

      <h1>Оцените фильм</h1>
      <hr class="line" />
      <div class="btn-toggle">
        <v-btn-toggle group dark>
          <v-btn
            v-for="item in score"
            :key="item"
            color="#EB5804"
            variant="outlined"
            class="v-btn-style"
          >
            {{ item }}
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
  </div>
</template>

<script>
// import Player from './Player.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'FilmPage',
  // components: { Player },
  data () {
    return {
      filmData: null,
      isTrailerVisible: false
    }
  },
  computed: {
    ...mapGetters(['getFilmsList', 'getPersonsList']),
    filmsList () {
      return this.getFilmsList
    },
    personsList () {
      return this.getPersonsList
    },
    score: () => {
      const array = []
      for (let i = 1; i < 11; i++) array.push(i)
      return array
    }

  },
  created () {
    const filmData = this.filmsList.find(filmData => filmData.route === this.$route.params.route)
    if (filmData) {
      this.filmData = filmData
      document.title = 'VIDEOTEK - ' + filmData.title
    }
  }
}
</script>

<style>
.liName{
  list-style-type: none;
  display: inline;
  margin-top: 10px;
  margin-bottom: 10px;
}
.liName:not(:last-of-type)::after {
  content: ', ';
}

.inline-ul {
  display: inline;
}
.inline-ul::before {
  content: ' ';
}

.line{
  width: 100%;
  height: 3px;
  color: #EB5804;
  background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
  margin-bottom: 35px;
  border:none;
}

.listButton {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.film-data {
  margin: 15px 0;
  position: relative;
}

.film-data h1 {
  max-width:60%;
  font-size: 25pt;
  padding-bottom: 6pt;
}
.film-data .parameter {
  font-size: 15pt;
  font-style: normal;
  font-weight: bold;
}
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

.left-column {
  margin-top:30px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
}

.btn {
  border: 1px solid #EB5804;
  padding: 5px 30px;
  margin: 20px 30px;
  color: #EB5804;
}

.btn:hover {
  border: none;
  background: #EB5804;
  color: black;
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
  background-color: #EB5804;
  padding: 8px 8px;
  font-size: 10pt;
  border-radius: 2px;
  margin-bottom: 10px;
}

.player-text {
  display: flex;
  justify-content: center;
  margin: 15px 5px;
  font-size: 18pt;
  cursor: pointer;
}

.player {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}

.routerLink {
  text-decoration: none;
  color: white;
}
.routerLink:hover {
   color: #EB5804;
}

.score-block {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 18pt;
}

.trailer-show {
  animation-duration: 2s;
  animation-name: show;
  margin-bottom: 50px;
}
.btn-toggle {
  display: flex;
  justify-content: center;
}

@keyframes show {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
