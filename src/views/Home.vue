<template>
  <div id="home">
    <Header></Header>
    <div id="container">
      <div id="about_live_container">
        <div class="about_title_container">
          <h1 class="about_title1">ライブ配信</h1>
          <h2 class="about_title2">について</h2>
        </div>
        <p class="about_content">コロナウイルスの感染拡大に伴って当初予定していたイベントなどが実施不可能な状況になってしまいました。そこで春日新歓委員会は春学期が始まるまでの間、YouTubeライブ配信を行うことを決定致しました。この配信では、あそこのスーパーが安い！といった実生活のことから先輩が大学で何をしているのかといったことまで様々なトピックを取り上げていこうと考えています。新入生からの質問もどんどん受け付けていこうと思いますのでぜひ参加してください！</p>
      </div>
      <div id="about_site_container">
        <div class="about_title_container">
          <h1 class="about_title1">このサイト</h1>
          <h2 class="about_title2">について</h2>
        </div>
        <p class="about_content">この春日新歓2020情報Webは春日新歓委員が行う<a @click="openYouTube" id="youtube">YouTubeライブ配信</a>の内容をベースに新入生向けのお役立ち情報をまとめたサイトです。各トピックごとに該当する生配信のリンクを張り付けているのでそちらの方も参考にしていただけるとより分かりやすいと思います。また、<a @click="openTwitter" id="twitter">春日新歓2020公式Twitterアカウント</a>でも質問を受け付けておりますのでぜひご活用ください。履修を見てもらいたい場合は、<span class="emph">#mast履修確認</span> もしくは、<span class="emph">#klis履修確認 </span>のタグをつけてツイートしていただけると新歓委員が飛んでいきます！</p>
        <p class="about_content">※出来る限り質問にはお答えしますが、内容によってはお答えできない場合があります。ご理解の程よろしくお願いします。</p>
      </div>
      <div id="item_button_container">
        <router-link to="/study"><ItemButton01 class="item_button"></ItemButton01></router-link>
        <router-link to="/life"><ItemButton02 class="item_button"></ItemButton02></router-link>
        <router-link to="/senior"><ItemButton03 class="item_button"></ItemButton03></router-link>
      </div>
      <AddQuestion></AddQuestion>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ItemButton01 from '@/components/ItemButton01.vue'
import ItemButton02 from '@/components/ItemButton02.vue'
import ItemButton03 from '@/components/ItemButton03.vue'
import AddQuestion from '@/components/AddQuestion.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ItemButton01,
    ItemButton02,
    ItemButton03,
    AddQuestion
  },
  mounted: function(){
    window.scrollTo(0, 0);
  },
  methods: {
    openTwitter: function(){
      const url = "https://twitter.com/kasuga2020?s=20";
      window.open(url);
    },
    openYouTube: function(){
      const url = "https://www.youtube.com/channel/UCh-syzx6S1Zten1TqKwKqvw/featured";
      window.open(url);
    }
  }
}
</script>

<style>
#home {
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#twitter {
  color: rgba(0.0, 0.0, 0.0, 1.0);
  text-decoration: underline;
  cursor: pointer;
}
#youtube {
  color: rgba(0.0, 0.0, 0.0, 1.0);
  text-decoration: underline;
  cursor: pointer;
}
#container {
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
}
.about_title_container {
  border-bottom: solid 10px orange;
  padding-bottom: 5px;
  display: inline-block;
  line-height: 1;
  margin-top: 90px;
  width: 320px;
}
.about_title1 {
  font-size: 40px;
  display: inline;
}
.about_title2 { 
  font-size: 30px;
  display: inline;
}
.about_content {
  font-weight: 1000;
  position: relative;
  padding-top: 10px;
  text-align: left;
  line-height: 2.5rem;
}
#item_button_container {
  margin: auto;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1000px){
  #container {
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
  }
  .about_title_container {
    border-bottom: solid 10px orange;
    padding-bottom: 5px;
    display: inline-block;
    line-height: 1;
    margin-top: 50px;
    width: 320px;
  }
  .about_title1 {
    font-size: 40px;
    display: inline;
  }
  .about_title2 { 
    font-size: 30px;
    display: inline;
  }
  .about_content {
    font-weight: 1000;
    position: relative;
    margin-left: 50px;
    margin-right: 50px;
  }
  #item_button_container {
    max-width: 1000px;
    margin-top: 80px;
    display: block;
  }
  .item_button {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
  }
}

@media screen and (max-width: 480px){
  #container {
    margin-left: 5%;
    margin-right: 5%;
  }
}

.emph {
  color: black;
}
</style>
