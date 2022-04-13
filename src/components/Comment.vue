<template>
  <div class="c">
<h1>Отзывы</h1>
  <hr class="line" />
  <div class="comment-box">
    <div>
      <input type="text" class="input-text" name="username" v-model="username">
    </div>
      <textarea name="message"  rows="4" v-model="message" class="input-text input-text-mes"  />
    <button @click="sendComment" class="btnc">Отправить</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      username: '',
      message: ''
    }
  },
  props: {
    film: Number
  },
  methods: {
    sendComment () {
      console.log(this.film, this.username, this.message)
    }
  }
}
</script>

<style lang="scss">
.comment-box{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.input-text{
  font-size: 20px;
  padding: 5px;
  border: solid 1px;
  margin: 5px;
  background-color:white;

}
.input-text-mes{
  resize: none;
  width: -webkit-fill-available;
}
.btnc {
  border: 1px solid #EB5804;
  padding: 5px 30px;
  margin: 20px 30px;
  color: #EB5804;
}
.btnc:hover {
  background: #EB5804;
  color: black; }

</style>
