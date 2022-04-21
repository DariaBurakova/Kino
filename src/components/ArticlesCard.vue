<template>
    <div>
       <router-link class="routerLink" to='/'>
      <div class="articles-card">
      <img  class="img-articles" :src="item.img"/>
      <p class="type-title">{{item.typetitle}}</p>
      <h2 class="articles-title">{{item.title}}</h2>
      <p class="articles-date">{{item.datetime}}</p>
      </div>
       </router-link>
    </div>
</template>
<script>

export default {
  name: 'ArticlesCard',
  props: {
    item: {
      type: Object
    }
  }
}
</script>
<style scoped>
.articles-card{
   transform: scale(0.90);
    width: 600px;
    height: 400px;
    background-color:#DCDCDC;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img-articles{
  width: 100%;
  object-fit: fill;
  height: 300px;
  margin: 0px auto;
}
.articles-title{
  position: relative;
  color: black;
  font-size: 14pt;
  padding-bottom: 6pt;
  text-align: center;
}
.type-title{
  color: #EB5804;
  font-size: 16pt;
  padding-bottom: 6pt;
}
.articles-date{
  color: black;
  position: absolute;
  right: 15px;
  bottom: 4px;
}
.articles-card:hover{
    transform: scale(0.95);
    cursor: pointer;
}
</style>
