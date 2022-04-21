<template>
  <div class="serial-watch-line">
    <div class="seasons">
      Сезоны:
      <ul class="inline-ul">
        <li v-for="item in serialData.seasons" :key="item.seasonNumber" class="inline-ul-li">
          {{ item.seasonNumber }}
        </li>
      </ul>
    </div>
    <div class="series-list">
      <v-sheet>
        <v-slide-group show-arrows dark class="slider-style">
            <v-card>
              <v-row
                class="slider-style"
                align="center"
                justify="center"
              >
              </v-row>
            </v-card>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SerialWatchLine',
  props: {
    serial_id: {}
  }
}
</script>
