<template>
    <div class="container-media">
<div class="header-media">
    <h1>Новости</h1>
    <h1>Статьи</h1>
    <h1>Видео</h1>
</div>
<hr class="line"/>
<div class="list-cardNews">
<NewsCard
v-for='item in news'
:key='item.id'
:img='item.img'
:item=item
 />
</div>
<div class="list-articles">
</div>
<hr class="line" />
    <div class="btn-bottom-media">
        <button class="btn">Показать ещё</button>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import NewsCard from '../components/NewsCard.vue'

export default {
  name: 'Media',
  components: { NewsCard },
  methods: {
    ...mapActions(['fetchNews'])
  },
  computed: {
    ...mapGetters(['getNews']),
    news () {
      return this.getNews
    }
  },
  created () {
    this.fetchNews()
  }
}
</script>

<style scoped>
.header-media{
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.header-media h1{
    font-size: 25pt;
    padding-bottom: 6pt;
}
.header-media h1:hover{
    color:#EB5804;
    cursor: pointer;
}
.container-media{
    width: 1140px;
    margin: 20px auto;
}
.list-cardNews{
    margin: 10px auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0.5rem;
}
.btn-bottom-media{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
