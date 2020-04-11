<template>
  <div id="form">
    <Header1 class="header"></Header1>
    <div id="container">
      <div id="form_container">
        <form>
          <div class="item_container">
            <h2 class="form_title">トピック</h2>
            <input type="text" class="input1" id="topic" placeholder="例 : 履修はいつから？" v-model="title">
          </div>
          <div class="item_container">
            <h2 class="form_title">項目</h2>
            <input type="text" class="input1" id="category" placeholder="大学・生活・先輩・editのいづれか" v-model="category"> 
          </div>
          <div class="item_container">
            <h2 class="form_title">内容</h2>
            <textarea class="input2" placeholder="例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！

※トピックを削除したい場合は項目にedit, 内容にdeleteを入力してください。
※すでにあるトピックの内容を編集したい場合は項目にeditを入力してください。" v-model="main"></textarea>
          </div> 
          <div class="item_container">
            <h2 class="form_title">YouTubeの時間指定付きリンク</h2>
            <input type="text" class="input1" v-model="youtube_link"> 
          </div>
          <div class="item_container">
            <h2 class="form_title">執筆者</h2>
            <input type="text" class="input1" v-model="author">
          </div> 
          <input class="send" value="送信する" @click="send()" type="submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header1 from '@/components/Header1.vue'

export default {
  name: 'Form',
  components: {
    Header1
  },
  data () {
    return {
      title: '',
      category: '',
      main: '',
      youtube_link: '',
      author: '',
      eCategory: '',
      pass: this.$router.pass,
      trueTitle: '',
      trueAuther: ''
    }
  },
  mounted: function(){
    this.eCategory = document.getElementById('category');
    this.eCategory.addEventListener('blur', this.searchTitle);
    this.eTopic = document.getElementById('topic');
    this.eTopic.addEventListener('blur', this.judge);
  },
  methods: {
    judge: function(){
      if (this.category == 'edit') {
        this.searchTitle();
      } 
    },
    searchTitle: function(){
      if (this.category == 'edit') {
        let params = new URLSearchParams();
        params.append('title', this.title);
        this.axios.post('https://kzkymur.com/api/topic/', params)
        .then(response => {
          this.main = response.data.topic.main;
          this.trueAuther = response.data.topic.author;
        })
        .catch(() => {
          window.alert('このトピックは存在しません😓');
        });
      } else if (this.category != '大学' && this.category != '生活' && this.category != '先輩' && this.category != 'edit') {
        window.alert('項目は大学・生活・先輩・editのいづれかです！');
        this.category = '';
        return;
      }
    },
    send: function(){
      if (this.category == 'edit') {
        if (this.author != this.trueAuther) {
          window.alert('執筆者が違います😓');
          this.author = '';
          return;
        }
      }
      if (this.title == '' || this.category == '' || this.main == '' || this.author == '') {
        window.alert('トピック・項目・内容・執筆者は必須項目です！');
        return;
      } else if (this.category != '大学' && this.category != '生活' && this.category != '先輩' && this.category != 'edit') {
        window.alert('項目は大学・生活・先輩のいづれかです！');
        return;
      } else {
        let generator = confirm('この内容で投稿しますか？');
        if (generator == true) {
          let params = new URLSearchParams();
          params.append('serial_num', 0);
          params.append('title', this.title);
          params.append('category', this.category);
          params.append('main', this.main);
          params.append('youtube_link', this.youtube_link);
          params.append('author', this.author);
          params.append('key', this.pass);
          this.axios.post('https://kzkymur.com/api/manage_topic/', params)
          .then(() => {
            window.alert('正しく投稿できました！🎉');
            this.title = '';
            this.category = '';
            this.main = '';
            this.youtube_link = '';
            this.author = '';
            this.getPost();
          })
          .catch(error => {
            window.alert(error);
          });
        } else {
          return;
        }
      }
    }
  }
}
</script>

<style scoped>
.header >>> #form_on{
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
  width: 31%;
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
