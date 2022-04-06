<template>
  <div>
    <Registration/>
    <ListFilms />
    <FilmPage />
  </div>
</template>

<script>
import ListFilms from '@/components/ListFilms.vue'
import Registration from '@/components/Registrations.vue'
import FilmPage from '@/components/FilmPage.vue'

export default {
  name: 'HomeView',

  components: {
    ListFilms,
    Registration,
    FilmPage
  },
  data: () => ({
  })
}
</script>
