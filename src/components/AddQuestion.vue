<template>
  <div id="add_question">
    <div id="form_container">
    <form>
      <h2 class="add_question_title">質問フォーム</h2>
        <div class="item_container">
          <h2 class="form_title">項目</h2>
          <input type="text" class="input1" placeholder="大学・生活・先輩のいづれか" v-model="category"> 
          <h2 class="form_title">内容</h2>
          <textarea class="input2" placeholder="例 : 履修登録はいつから始まりますか？" v-model="question"></textarea>
        </div> 
        <input class="send" value="送信する" @click="send()">
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
      question: ''
    }
  },
  methods: {
    send: function(){
      if (this.question == '') {
        window.alert('質問内容を入力してください💦');
        return;
      } else if (this.category != '大学' && this.category != '生活' && this.category != '先輩') {
        window.alert('項目は大学・生活・先輩のいづれかです！');
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
  width: 200px;
  margin-bottom: 10px;
}
form {
  margin-top: 100px;
}
.add_question_title {
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 30px;
}
.item_container {
  margin-left: 5%;
  margin-right: 5%;
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
