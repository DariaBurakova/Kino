<template>
    <div>
      <router-link class="routerLink" to='/'>
    <div class="news-card">
        <div>
            <img class="news-img" :src="item.img" alt="news">
        </div>
        <h2 class="title-news">{{item.title}}</h2>
        <p class="date-news">{{item.datetime}}</p>
    </div>
      </router-link>
    </div>
</template>
<script>
export default {
  name: 'NewsCard',
  props: {
    item: {
      type: Object
    }
  }
}
</script>
<style scoped>
.news-card{
    transform: scale(0.90);
    height: 320px;
    background-color:#DCDCDC;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px 0 10px 0;
    border:4px solid #EB5804;
}
.title-news{
    position: relative;
    color: black;
    font-size: 14pt;
    padding-bottom: 6pt;
    text-align: center;
}
.date-news{
    color: black;
    position: absolute;
    right: 15px;
    bottom: 4px;
}
.news-img{
    object-fit: contain;
    width: 350px;
    height: 200px;
    margin: 10px auto;
}
.news-card:hover{
    transform: scale(0.95);
    cursor: pointer;
}
</style>
