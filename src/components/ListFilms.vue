<template>
<div class="carusel">
  <img class="caruselImg" src="../assets/fillm.jpeg">
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
import CardFilm from "./CardFilm.vue";
export default {
  name: "ListFilms",
  components: { CardFilm },
  data() {
    return {
      films: [
        {
          id: 1,
          img: require("../assets/avatar.jpeg"),
          title: "Аватар",
          score: "7.9",
        },
        {
          id: 2,
          img: require("../assets/garri.jpeg"),
          title: "Гарри Поттер и узник азкабана",
          score: "8.6",
        },
        {
          id: 3,
          img: require("../assets/everest.jpeg"),
          title: "Еверест",
          score: "7.2",
        },
        {
          id: 4,
          img: require("../assets/belo.jpeg"),
          title: "Белоснежка и охотник",
          score: "8.0",
        },
        {
          id: 5,
          img: require("../assets/matrica.jpeg"),
          title: "Матрица",
          score: "8.9",
        },
        {
          id: 6,
          img: require("../assets/chel.jpeg"),
          title: "Человек паук",
          score: "8.5",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.caruselImg{
  object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: 600px;
    margin-bottom: 10vh;

}
.carusel{
  margin: 0 auto;
}
.film-list {
  width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 270px);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 15%;
  grid-row-gap: 40px;
}
</style>



