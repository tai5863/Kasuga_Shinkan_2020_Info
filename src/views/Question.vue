<template>
  <div id="question">
    <Header1 class="header"></Header1>
    <div id="container">
      <div id="form_container">
        <form>
          <div class="item_container">
            <h2 class="form_title">トピック</h2>
            <input type="text" class="input1" placeholder="例 : 履修はいつから？" v-model="title">
          </div>
          <div class="item_container">
            <h2 class="form_title">項目</h2>
            <input type="text" class="input1" placeholder="履修・生活・先輩のいづれか" v-model="type"> 
          </div>
          <div class="item_container">
            <h2 class="form_title">回答</h2>
            <textarea class="input2" placeholder="例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！" v-model="main"></textarea>
          </div> 
          <div class="item_container">
            <h2 class="form_title">YouTubeの時間指定付きリンク</h2>
            <input type="text" class="input1" v-model="youtube"> 
          </div>
          <div class="item_container">
            <h2 class="form_title">執筆者</h2>
            <input type="text" class="input1" v-model="author">
          </div> 
          <input class="send" value="送信する" @click="send()">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header1 from '@/components/Header1.vue'

export default {
  name: 'Question',
  components: {
    Header1
  },
  data () {
    return {
      title: '',
      type: '',
      main: '',
      youtube: '',
      author: ''
    }
  },
  methods: {
    send: function(){
      let params = new URLSearchParams();
      params.append('title', this.title);
      params.append('type', this.type);
      params.append('main', this.main);
      params.append('YouTube', this.YouTube);
      params.append('author', this.author);
      this.axios.post('https://kzkymur.com/api/topic/', params)
      .then(() => {
      })
      .catch(error => {
        window.alert(error);
      });
    }
  }
}
</script>

<style scoped>
.header >>> #question_on{
  color: rgba(255, 255, 255, 1.0);
}

@media screen and (max-width: 820px){
  #container {
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;
  }
}

@media screen and (min-width: 821px){
  #container {
    color: rgb(75, 75, 75);
    margin-left: 15%;
    margin-right: 15%;
  }
}

.form_title_container {
  border-bottom: solid 10px orange;
  display: inline-block;
  line-height: 1;
  margin-top: 50px;
  width: 200px;
  margin-bottom: 10px;
}
form {
  margin-top: 100px;
}
.form_title {
  margin-top: 30px;
  margin-bottom: 15px;
}
.input1 {
  width: calc(80% + 12px);
  height: 60px;
  max-width: 500px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  font-size: 17px;
  font-weight: 500;
  padding-left: 15px;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.input2 {
  width: calc(80% + 12px);
  height: 200px;
  max-width: 1012px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  font-size: 17px;
  font-weight: 500;
  padding: 15px;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  resize: none;
}
.send {
  width: 40%;
  min-width: 150px;
  color: white;
  font-size: 20px;
  font-weight: 1000;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(30, 30, 30);
  border: none;
  padding: 20px 0;
  margin-top: 80px;
  margin-bottom: 150px;
  cursor: pointer;
  transition: 500ms;
  text-align: center;
}
.send:hover {
  background-color: orange;
  color: rgb(30, 30, 30);
}
</style>
