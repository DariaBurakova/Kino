<template>
  <div class="film-players">
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
  </div>
</template>

<script>
export default {
  name: 'FilmPlayers',
  props: {
    filmData: {
      type: Object
    }
  }
}
</script>
