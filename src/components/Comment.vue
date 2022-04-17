<template>
  <div class="c">
<h1>Отзывы</h1>
  <hr class="line" />
  <div class="comment-box">
    <div class="h-block">
      <h3>Имя пользователя: </h3>
      <input type="text" class="input-text" name="username" v-model="username">
    </div>
    <h3>Сообщение: </h3>
      <textarea name="message"  rows="4" v-model="message" class="input-text input-text-mes"  />
    <button @click="sendComment" class="btnc">Отправить</button>
  </div>
  <div>
    <div v-for="item in commentArray" :key="item.username" class="comment">
      <h4 class="name">{{ item.username }}:</h4>
      <p>{{item.comment}}</p>
    </div>
  </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {

  name: 'Comment',
  data () {
    return {
      username: '',
      message: '',
      commentArray: []
    }
  },
  props: {
    film: Number
  },
  methods: {
    /* async sendComment () {
      console.log(this.film, this.username, this.message)
      const result = await axios.post('http://localhost:8080/', {
        filmId: this.film,
        username: this.username,
        comment: this.message
      })
      console.log(result)
    }, */
    sendComment () {
      const comment = { filmId: this.film, username: this.username, comment: this.message }
      this.fetchAddComment(comment)
      this.username = ''
      this.message = ''
      this.commentOutput()
    },

    commentOutput () {
      this.commentArray = this.commentList.filter(item => item.filmId === this.film)
    },

    ...mapActions(['fetchComments', 'fetchAddComment'])
  },
  computed: {
    ...mapGetters(['getCommentList']),
    commentList () {
      return this.getCommentList
    }
  },
  created () {
    this.fetchComments()
    this.commentOutput()
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
.h-block{
  margin-bottom: 10px;
}
.comment {
  margin: 10px;
  padding: 5px;
}
.name {
  color:#EB5804;
}
</style>
