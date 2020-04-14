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
          <div class="topic_container" v-for="i in studyList.length" :key="i">
            <input class="check" type="checkbox" v-if="isShow1" :id="studyList[i - 1].id">
            <p class="topic_content" @click="checkControl(studyList[i - 1].id)">{{ studyList[i - 1].main }}</p>
          </div>
        </div>
        <div id="life_container" class="question">
          <div class="title_container">
            <h1 class="question_title1">生活</h1>
            <h2 class="question_title2">について</h2>
          </div>
          <div class="topic_container" v-for="i in lifeList.length" :key="i">
            <input class="check" type="checkbox" v-if="isShow2" :id="lifeList[i - 1].id">
            <p class="topic_content" @click="checkControl(lifeList[i - 1].id)">{{ lifeList[i - 1].main }}</p>
          </div>
        </div>
        <div id="senior_container" class="question">
          <div class="title_container">
            <h1 class="question_title1">先輩</h1>
            <h2 class="question_title2">について</h2>
          </div>
          <div class="topic_container" v-for="i in seniorList.length" :key="i">
            <input class="check" type="checkbox" v-if="isShow3" :id="seniorList[i - 1].id">
            <p class="topic_content" @click="checkControl(seniorList[i - 1].id)">{{ seniorList[i - 1].main }}</p>
          </div>
        </div>
      </div>
      <input class="delete" value="削除する" @click="deleteQuestions()" type="submit">
      <div id="form_container">
        <form>
          <div class="item_container">
            <h2 class="form_title">見出し</h2>
            <input type="text" class="input1" placeholder="例 : 履修はいつから？" v-model="title">
          </div>
          <div class="item_container" id="category_container">
            <h2 class="form_title">分類</h2>
            <form id="checkbox_container">
              <div v-for="category in categoryList" :key="category.key">
                <input class="check" type="radio" name="category" :id="category" :value="category">
                <p class="category" @click="checkControl(category)">{{ category }}</p>
              </div>
            </form>
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
          <input class="send" value="送信する" @click="send()" type="submit">
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
      data: '',
      studyList: [],
      lifeList: [],
      seniorList: [],
      title: '',
      category: '',
      main: '',
      youtube_link: '',
      author: '',
      pass: this.$router.pass,
      isShow1: false,
      isShow2: false,
      isShow3: false,
      deleteArray: [],
      categoryList: ['大学', '生活', '先輩']
    }
  },
  created: function(){
    this.getPost();
  },
  methods: {
    checkControl: function(id){
      let checkbox = document.getElementById(id);
      let container = document.getElementById('checkbox_container');
      let radioNodeList = container.category;
      let value = radioNodeList.value;
      if (value == '' || value != checkbox.value) {
        checkbox.checked = !checkbox.checked;
      }
    },
    setCategory: function(){
      let container = document.getElementById('checkbox_container');
      let radioNodeList = container.category;
      let value = radioNodeList.value;
      this.category = value;
    },
    judgeChecked: function(data){

      this.deleteArray = [];

      for (let i = 0; i < data.length; i++) {
        let checkbox = document.getElementById(data[i].id);
        if (checkbox.checked) {
          this.deleteArray.push({main: data[i].main});
        }
      }
    },
    getPost: function(){
      this.axios.get('https://kzkymur.com/api/question/')
      .then(response => {
        let study_list = [];
        let life_list = [];
        let senior_list = [];
        let study_count = 0;
        let life_count = 0;
        let senior_count = 0;
        this.data = response.data.question;
        
        for (let i = 0; i < response.data.question.length; i++) {
  
          if (response.data.question[i].category == '大学') {
            study_count = study_count + 1;
            study_list.push(response.data.question[i]);
            this.studyList = study_list;
          } else if (response.data.question[i].category == '生活') {
            life_count = life_count + 1;
            life_list.push(response.data.question[i]);
            this.lifeList = life_list;
          } else if (response.data.question[i].category == '先輩'){
            senior_count = senior_count + 1;
            senior_list.push(response.data.question[i]);
            this.seniorList = senior_list;
          }
        }
      
        if (study_count == 0) {
          this.isShow1 = false;
          this.studyList = [{main: '質問はありません'}]
        } else {
          this.isShow1 = true;
        }
        if (life_count == 0) {
          this.isShow2 = false;
          this.lifeList = [{main: '質問はありません'}]
        } else {
          this.isShow2 = true;
        }
        if (senior_count == 0) {
          this.isShow3 = false;
          this.seniorList = [{main: '質問はありません'}]
        } else {
          this.isShow3 = true;
        }
      })
      .catch(error => {
        window.alert(error);
      });
    },
    selectQuestion: function(question, isShow){

      if (isShow) {
        this.title = question.main;
        this.category = question.category;
      } 
    },
    deleteQuestions: function(){
      let generator = confirm('本当に削除しますか？');
      if (generator == true) {
        this.judgeChecked(this.data);
        let params = new URLSearchParams();
        params.append('mode', 1);
        params.append('delete_questions', JSON.stringify(this.deleteArray));
        params.append('key', this.pass);
        this.axios.post('https://kzkymur.com/api/manage_question/', params)
          .then(() => {
            window.alert('正しく削除できました！😁');
            this.getPost();
          })
          .catch(error => {
            window.alert(error);
          });
      } else {
        return;
      }
    },
    send: function(){
      this.setCategory();
      if (this.title == '' || this.category == '' || this.main == '' || this.author == '') {
        window.alert('見出し・分類・本文・執筆者は必須項目です！');
        return;
      } else if (this.category != '大学' && this.category != '生活' && this.category != '先輩') {
        window.alert('分類は大学・生活・先輩のいづれかです！');
        return;
      } else {
        let generator = confirm('この内容で投稿しますか？');
        if (generator == true) {
          let params = new URLSearchParams();
          params.append('title', this.title);
          params.append('category', this.category);
          params.append('question_main', this.title);
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
.header >>> #question_on{
  color: rgba(255, 255, 255, 1.0);
}

@media screen and (min-width: 481px){
  #category_container {
    width: calc(85% + 12px);
    max-width: 1012px;
  }
  .item_container .check {
    position: relative;
    top: -1px;
    margin: 0 1rem 0 0;
    cursor: pointer;
  }
  .item_container .check:before {
    position: absolute;
    z-index: 1;
    top: 0.1rem;
    left: 0.1875rem;
    width: 0.75rem;
    height: 0.375rem;
    content: '';
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    -webkit-transform: rotate(-45deg) scale(0, 0);
    transform: rotate(-45deg) scale(0, 0);
    border: 2px solid orange;
    border-top-style: none;
    border-right-style: none;
  }
  .item_container .check:checked:before {
    -webkit-transform: rotate(-45deg) scale(1, 1);
    transform: rotate(-45deg) scale(1, 1);
  }
  .item_container .check:after {
    position: absolute;
    top: -0.125rem;
    left: 0;
    width: 1rem;
    height: 1rem;
    content: '';
    cursor: pointer;
    border: 2px solid rgb(75, 75, 75);
    background: #ffffff;
  }
  .topic_container .check {
    position: relative;
    top: -1px;
    left: -1px;
    margin: 0 1rem 0 0;
    cursor: pointer;
  }
  .topic_container .check:before {
    position: absolute;
    z-index: 1;
    top: 0.1rem;
    left: 0.1875rem;
    width: 0.75rem;
    height: 0.375rem;
    content: '';
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    -webkit-transform: rotate(-45deg) scale(0, 0);
    transform: rotate(-45deg) scale(0, 0);
    border: 2px solid orange;
    border-top-style: none;
    border-right-style: none;
  }
  .topic_container .check:checked:before {
    -webkit-transform: rotate(-45deg) scale(0.75, 0.75);
    transform: rotate(-45deg) scale(0.75, 0.75);
  }
  .topic_container .check:after {
    position: absolute;
    top: -0.125rem;
    left: 0;
    width: 1rem;
    height: 1rem;
    content: '';
    cursor: pointer;
    border: 2px solid rgb(75, 75, 75);
    background: #ffffff;
  }
}

@media screen and (max-width: 820px){
  #container {
    margin-left: 50px;
    margin-right: 50px;
  }
  form {
    margin-top: 100px;
  }
}

@media screen and (min-width: 821px){
  #container {
    color: rgb(75, 75, 75);
    margin-left: 15%;
    margin-right: 15%;
  }
  .delete {
    float: right;
  }
  form {
    margin-top: 150px;
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
  -webkit-appearance: none;
  font-size: 20px;
  font-weight: 1000;
  text-align: left;
  margin-top: 20px;
}
.topic_container p {
  cursor: pointer;
  display: inline;
  padding: 0;
  font-size: 20px;
}
.delete {
  -webkit-appearance: none;
  margin-top: 70px;
  margin-right: 10px;
  width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  color: rgb(255, 255, 255);
  background-color: rgb(30, 30, 30);
  font-size: 15px;
  font-weight: 1000;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px 0;
  cursor: pointer;
  transition: 500ms;
  text-align: center;
}
.delete:hover {
  transform: scale(1.05);	
	transition-duration: 0.3s;	
}
.form_title_container {
  border-bottom: solid 10px orange;
  display: inline-block;
  line-height: 1;
  margin-top: 50px;
  width: 200px;
  margin-bottom: 10px;
}
.form_title {
  margin-top: 40px;
  margin-bottom: 15px;
}
#checkbox_container {
  -webkit-appearance: none;
  width: calc(80% + 12px);
  max-width: 650px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
#checkbox_container p {
  cursor: pointer;
  display: inline;
  padding: 0;
  font-size: 20px;
  font-weight: 1000;
  margin: 0;
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
  -webkit-appearance: none;
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
