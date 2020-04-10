<template>
  <div id="question">
    <Header1 class="header"></Header1>
    <div id="container">
      <div id="questions_container">
        <div id="study_container" class="question">
          <div class="title_container">
            <h1 class="question_title1">大学</h1>
            <h2 class="question_title2">について</h2>
          </div>
          <div class="topic_container" v-for="item in studyList" :key="item.id">
            <p class="topic_content" @click="selectQuestion(item)">{{ item.main }}</p>
          </div>
        </div>
        <div id="life_container" class="question">
          <div class="title_container">
            <h1 class="question_title1">生活</h1>
            <h2 class="question_title2">について</h2>
          </div>
          <div class="topic_container" v-for="item in lifeList" :key="item.id">
            <p class="topic_content" @click="selectQuestion(item)">{{ item.main }}</p>
          </div>
        </div>
        <div id="senior_container" class="question">
          <div class="title_container">
            <h1 class="question_title1">先輩</h1>
            <h2 class="question_title2">について</h2>
          </div>
          <div class="topic_container" v-for="item in seniorList" :key="item.id">
            <p class="topic_content" @click="selectQuestion(item)">{{ item.main }}</p>
          </div>
        </div>
      </div>
      <div id="form_container">
        <form>
          <div class="item_container">
            <h2 class="form_title">トピック</h2>
            <input type="text" class="input1" placeholder="例 : 履修はいつから？" v-model="title">
          </div>
          <div class="item_container">
            <h2 class="form_title">項目</h2>
            <input type="text" class="input1" placeholder="大学・生活・先輩のいづれか" v-model="category"> 
          </div>
          <div class="item_container">
            <h2 class="form_title">回答</h2>
            <textarea class="input2" placeholder="例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！" v-model="main"></textarea>
          </div> 
          <div class="item_container">
            <h2 class="form_title">YouTubeの時間指定付きリンク</h2>
            <input type="text" class="input1" v-model="youtube_link"> 
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
      studyList: [],
      lifeList: [],
      seniorList: [],
      title: '',
      category: '',
      main: '',
      youtube_link: '',
      author: '',
      pass: this.$router.pass
    }
  },
  created: function(){
    this.getPost();
  },
  methods: {
    getPost: function(){
      this.axios.get('https://kzkymur.com/api/question/')
      .then(response => {
        for (let i = 0; i < response.data.question.length; i++) {
          
          if (response.data.question[i].category == '大学') {
            
            this.studyList.push(response.data.question[i]);
          } else if (response.data.question[i].category == '生活') {

            this.lifeList.push(response.data.question[i]);
          } else if (response.data.question[i].category == '先輩'){

            this.seniorList.push(response.data.question[i]);
          }
        }
      })
      .catch(error => {
        window.alert(error);
      });
    },
    selectQuestion: function(question){
      this.title = question.main;
      this.category = question.category;
    },
    send: function(){
      if (this.topic == '' || this.category == '' || this.main == '' || this.author == '') {
        window.alert('トピック・項目・内容・執筆者は必須項目です！');
        return;
      } else if (this.category != '大学' && this.category != '生活' && this.category != '先輩') {
        window.alert('項目は大学・生活・先輩のいづれかです！');
        return;
      } else {
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
        })
        .catch(error => {
          window.alert(error);
        });
      }
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
  }
}

@media screen and (min-width: 821px){
  #container {
    color: rgb(75, 75, 75);
    margin-left: 15%;
    margin-right: 15%;
  }
}

@media screen and (min-width: 1451px){
  .question {
    margin-right: 50px;
  }
  #questions_container {
    display: flex;
    justify-content: space-between;
  }
}

.question {
  margin-top: 70px;
}
#senior_container {
  margin-right: 0;
}
.title_container {
  border-bottom: solid 10px orange;
  display: inline-block;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
}
.question_title1 {
  display: inline;
  font-size: 40px;
}
.question_title2 {
  display: inline;
  font-size: 30px;
}
.topic_container {
  font-size: 20px;
  font-weight: 1000;
}
.topic_continer {
  position: relative;
}
.topic_content {
  text-align: left;
}
p {
  cursor: pointer;
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
