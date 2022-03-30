<template>
  <div class="film-page">
    <div class="film-page-content">
      <div class="poster">
        <img src="../assets/matrica.jpeg">
      </div>
      <div class="film-data">
        <h1>Матрица</h1>
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
          <strong>Режиссёр:</strong> {{ filmData.director }}
        </p>
        <p v-if="filmData.actors">
          <strong>В главных ролях:</strong> {{ filmData.actors }}
        </p>
        <p v-if="filmData.description" class="film-page-description">
          {{ filmData.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListFilms',
  data () {
    return {
      filmData: {
        country: 'США',
        year: '1999',
        director: 'братья Вачовски',
        actors: 'Киану Ривз, Лоуренс Фишборн, Керри-Энн Мосс, Хьюго Уивинг, Джо Пантолиано',
        description: 'Фильм изображает будущее, в котором реальность, существующая для большинства людей, в действительности является симуляцией, созданной разумными машинами, чтобы подчинить и усмирить человечество, в то время как тепло и электрическая активность их тел используются машинами в качестве источника энергии. Немногие люди, высвободившиеся из «мира снов» и выбравшиеся в реальность, вступают в партизанскую войну против машин…'
      }
    }
  }
}
</script>

<style>
.film-data {
  margin: 15px 0;
}

.film-data h1 {
  font-size: 25pt;
  padding-bottom: 6pt;
}
.film-data strong { font-size: 14pt; }
.film-data p { font-size: 13pt; }
.film-page-description {
  margin-top: 12pt;
  text-align: justify;
}

.data-block {
  display: flex;
  align-items: flex-end;
}

.data-block p { margin-left: 5px; }

.poster {
  margin-right: 20px;
}

.film-page-content {
  margin: 0 auto;
  padding: 10px 15px;
  width: 1140px;
  display: flex;
}
</style>
