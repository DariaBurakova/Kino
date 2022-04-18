<template>
  <div class="c">
    <h1>Отзывы</h1>
    <hr class="line"/>
    <div class="comment-box">
      <div class="h-block">
        <!--      <h3>Имя пользователя: </h3>-->
        <!--      <input type="text" class="input-text" name="username" v-model="username">-->
        <v-col cols="12" md="12">
          <v-text-field
            dark
            v-model="username"
            name="username"
            autocomplete="off"
            label="Имя пользователя"
          ></v-text-field>
        </v-col>

      </div>
      <!--    <h3>Сообщение: </h3>-->
      <!--      <textarea name="message"  rows="4" v-model="message" class="input-text input-text-mes"  />-->
      <v-col cols="12" md="6">
        <v-textarea
          name="message"
          filled
          dark
          no-resize
          label="Сообщение"
          v-model="message"
        ></v-textarea>
      </v-col>
      <button @click="sendComment" class="btnc">Отправить</button>
    </div>
    <div>
      <div v-for="item in commentArray" :key="item.id" class="comment">
        <h4 class="name">
          {{ item.username }}:
          <span class="comment-datetime">{{ item.datetime }}</span>
        </h4>
        <p class="comment-text">{{ item.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import { v4 as uuid } from 'uuid'

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
      const dtStr = new Intl
        .DateTimeFormat('ru', { dateStyle: 'short', timeStyle: 'short' })
        .format(new Date())
      const comment = {
        filmId: this.film,
        username: this.username,
        comment: this.message,
        datetime: dtStr,
        id: uuid()
      }
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

<style>
.comment-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-text {
  font-size: 20px;
  padding: 5px;
  border: solid 1px;
  margin: 5px;
  background-color: white;

}

.input-text-mes {
  resize: none;
  width: -webkit-fill-available;
}

.btnc {
  border: 1px solid #EB5804;
  padding: 5px 30px;
  margin: 10px 10px;
  color: #EB5804;
}

.btnc:hover {
  background: #EB5804;
  color: black;
}

.h-block {
  margin-bottom: 10px;
}

.comment {
  margin: 10px 0;
}

.name {
  color: #EB5804;
  position: relative;
  margin: 5px 0;
}

.comment-datetime {
  color: gray;
  position: absolute;
  right: 0;
  top: 0;
}

.comment-text {
  text-align: justify;
  color: lightgray;
}
</style>
