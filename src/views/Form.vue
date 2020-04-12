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
          <div class="item_container" id="category_container">
            <h2 class="form_title">項目</h2>
            <form id="checkbox_container">
              <div v-for="category in categoryList" :key="category.key">
                <input class="check" type="radio" name="category" :id="category" :value="category" @click="judge()">
                <p class="category" @click="checkControl(category), judge()">{{ category }}</p>
              </div>
            </form>
          </div>
          <div class="item_container">
            <h2 class="form_title">内容</h2>
            <textarea class="input2" placeholder="例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！

※トピック・項目・内容・執筆者は必須項目です。
※すでにあるトピックを編集または削除したい場合は該当するトピックを入力しeditを選択してください。
※削除したい場合はもとの内容を削除しdeleteを入力してください。
※編集・削除いずれの場合も執筆者が一致している必要があります。" v-model="main"></textarea>
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
      trueAuther: '',
      categoryList: ['大学', '生活', '先輩', 'edit']
    }
  },
  mounted: function(){
    let eTopic = document.getElementById('topic');
    eTopic.addEventListener('blur', this.judge);
  },
  methods: {
    checkControl: function(id){
      let checkbox = document.getElementById(id);
      checkbox.checked = !checkbox.checked;
    },
    setCategory: function(){
      let container = document.getElementById('checkbox_container');
      let radioNodeList = container.category;
      let value = radioNodeList.value;
      this.category = value;
    },
    judge: function(){
      this.setCategory();
      if (this.category == 'edit') {
        if (this.title != '') {
          this.searchTitle();
        } else {
          window.alert('トピックを入力してください💦');
        }
      } 
    },
    searchTitle: function(){
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

@media screen and (min-width: 480px){
  #category_container {
    width: calc(85% + 12px);
    max-width: 1012px;
  }
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
#checkbox_container {
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
