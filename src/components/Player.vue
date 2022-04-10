<template>
  <div class="video">
    <video
      ref="videoPlayer"
      class="video-js vjs-big-play-centered"
      controls
      width="537"
      height="240">
      <source src="https://youtu.be/CxlRJsQ7p2k" type="video/youtube">
    </video>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'videojs-youtube/dist/Youtube.min.js'

export default {
  name: 'Player',
  props: {
    options: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
      player: null
    }
  },
  mounted () {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady () {
      console.log('onPlayerReady', this)
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style scoped>
  @import "video.js/dist/video-js.css";
  .video {
    margin-left: 50px;
    padding: 5px;
    width: 549px;
    border: 3px solid #EB5804;
  }
</style>
