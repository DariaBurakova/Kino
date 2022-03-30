<template>
  <div>
    <Registration @VisbileCheng="VisbileCheng" :isVisbile="isVisbile" />
    <ListFilms />
  </div>
</template>

<script>
import ListFilms from '@/components/ListFilms'
import Registration from '../components/Registrations.vue'

export default {
  name: 'HomeView',

  components: {
    ListFilms,
    Registration
  },
  data: () => ({
    isVisbile: true
  }),
  methods: {
    VisbileCheng (check) {
      this.isVisbile = check
    }
  }
}
</script>
