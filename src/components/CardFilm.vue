<template>
  <div class="card" @click="$router.push({name: 'filmPage' , params: { route: film.route }})">
    <div class="img"><img :src="film.img" alt="film" /></div>
    <div class="text">
    <p class="score">{{ film.score }}</p>
    <p class="title">{{ film.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFilm',
  props: {
    film: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  width: 350px;
}
.card:hover {
  transform: scale(0.88);
  cursor: pointer;
}
.img {
  margin: 0px auto;
  border-radius: 10px 0 10px 0;;
  width: 250px;
  height: 370px;
}
.title {
  margin-bottom: 0;
  color: #ffffff;
  font-weight: 700;
  font-size: 14pt;
  word-break:break-all;
  text-align: center;
}
.score {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #d66c08;
  width: 80px;
  height: 50px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px 0 10px 0;
  opacity: 0.7;
}
</style>
