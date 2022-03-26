<template>
  <div id="app">
    <button class="open" v-if="isVisbile" @click="isVisbile = !isVisbile">
      Войти
    </button>
    <ListFilms v-else />
  </div>
</template>

<script>
import ListFilms from "@/components/ListFilms";

export default {
  name: "HomeView",

  components: {
    ListFilms,
  },
  data: () => ({
    isVisbile: true,
  }),
};
</script>

<style lang="scss">
#app {
  //height: 60vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: black;
}

.open {
  background-color: #d66c08;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  border-radius: 0 10px 0 10px;
  width: 100px;
  height: 50px;
  margin: 45vh auto 0;
}

.open:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 28px rgba(235, 225, 225, 0.25),
    0 10px 10px rgba(248, 244, 244, 0.22);
}
</style>
