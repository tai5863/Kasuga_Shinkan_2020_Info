<template>
  <div id="add_question">
    <div id="form_container">
    <form>
      <div class="form_title_container">
        <h2 class="add_question_title">質問フォーム</h2>
      </div>
      <div class="item_container">
        <h2 class="form_title">項目</h2>
        <form id="category_container">
          <div v-for="category in categoryList" :key="category.key">
            <input class="check" type="radio" name="category" :id="category" :value="category">
            <p class="category" @click="checkControl(category)">{{ category }}</p>
          </div>
        </form>
        <h2 class="form_title">内容</h2>
        <textarea class="input2" placeholder="例 : 履修登録はいつから始まりますか？" v-model="question"></textarea>
      </div> 
      <input class="send" value="送信する" @click="send()" type="submit">
    </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddQuestion',
  data () {
    return {
      category: '',
      question: '',
      categoryList: ['大学', '生活', '先輩']
    }
  },
  methods: {
    checkControl: function(id){
      let checkbox = document.getElementById(id);
      let container = document.getElementById('category_container');
      let radioNodeList = container.category;
      let value = radioNodeList.value;
      if (value == '' || value != checkbox.value) {
        checkbox.checked = !checkbox.checked;
      }
    },
    setCategory: function(){
      let container = document.getElementById('category_container');
      let radioNodeList = container.category;
      let value = radioNodeList.value;
      this.category = value;
    },
    send: function(){
      this.setCategory();
      if (this.category == '') {
        window.alert('項目を選択してください💦');
      } else if (this.question == '') {
        window.alert('質問内容を入力してください💦');
        return;
      } else {
        let params = new URLSearchParams();
        params.append('mode', 0);
        params.append('category', this.category);
        params.append('main', this.question);
        this.axios.post('https://kzkymur.com/api/manage_question/', params)
        .then(() => {
          window.alert('正しく投稿できました！🎉');
          this.category = '';
          this.question = '';
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
#form_container {
  color: rgb(75, 75, 75);
  text-align: center;
}
.form_title_container {
  border-bottom: solid 10px orange;
  display: inline-block;
  line-height: 1;
  margin-top: 50px;
  width: 180px;
  margin-bottom: 10px;
}
form {
  margin-top: 100px;
}
.add_question_title {  
  margin-bottom: 0px;
  font-size: 30px;
}
.item_container {
  margin-left: 5%;
  margin-right: 5%;
}
.form_title {
  font-size: 25px;
  margin-top: 30px;
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
  width: 80%;
  height: 250px;
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
#category_container {
  display: flex;
  justify-content: space-between;
  margin: 0;
  max-width: 500px;
  margin: 0 auto;
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
	-webkit-transform: rotate(-45deg) scale(0.75, 0.75);
	transform: rotate(-45deg) scale(0.75, 0.75);
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
p {
  cursor: pointer;
  display: inline;
  padding: 0;
  font-size: 20px;
  font-weight: 1000;
  margin: 0;
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
