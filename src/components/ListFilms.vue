<template>
  <div class="film-list-container">
    <h1 class="header">{{ header }}</h1>
    <div class="line-box">
      <hr class="line"/>
    </div>
    <div class="film-list">
      <CardFilm
          class="films"
          v-for="film in filmsList"
          :key="film.id"
          :film="film"
         :img="film.img"
      />
    </div>
    <div class="more-button-container">
      <button class="more-button" title="Ещё">
        <div class="my-v-arrow"></div>
      </button>
    </div>
  </div>
</template>

<script>
import CardFilm from './CardFilm.vue'

export default {
  name: 'ListFilms',
  props: ['header', 'filmsList'],
  components: { CardFilm }
}
</script>

<style>
:root {
  --color-D: #EB5804;
  --color-B: #d66c08;
}

.film-list-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.header {
  width: 1140px;
  margin: 40px auto 10px;
  padding-bottom: 6pt;
  font-size: 25pt;
}

.line {
  height: 3px;
  color: var(--color-B);
  background: linear-gradient(90deg, var(--color-D) 0%, black 90%);
  margin-bottom: 35px;
  border:none;
}

.line-box {
  width: 1140px;
  margin: 0 auto;
}

.film-list {
  width: 1140px;
  margin: 40px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 270px);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15%;
  grid-row-gap: 40px;
}

.more-button-container {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.more-button {
  border: 2px solid var(--color-D);
  border-radius: 10px 0 10px 0;
  padding: 5px 100px 5px;
  margin-bottom: 40px;
}

.my-v-arrow {
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  width: 10px;
  height: 10px;
  transform: scaleX(8) scaleY(2) translateY(-3px) rotate(45deg);
}

.more-button:hover {
  border-color: black;
  background-color: var(--color-B);
}
</style>
