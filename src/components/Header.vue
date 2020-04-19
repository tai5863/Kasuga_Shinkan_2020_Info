<template>
  <div id="header_comp">
    <router-link to="/">
      <img src="@/assets/logo_klismust_white.png" id="logo">
      <h2 id="page_title">{{ title }}</h2>
    </router-link>
    <img src="@/assets/twitterのアイコン素材 その2.png" id="twitter_icon" @click="openTwitter">
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: '春日新歓2020情報Web'
    }
  },
  methods: {
    openTwitter: function(){
      const url = "https://twitter.com/kasuga2020?s=20";
      window.open(url);
    }
  }
}
</script>

<style>
#header_comp {
  background-color: rgb(20, 20, 20);
  overflow: hidden;
  text-align: center;
}
#logo {
  padding-top: 25px;
  width: 75px;
  height: 75px;
  cursor: pointer;
}
#page_title {
  color: white;
  font-size: 25px;
  line-height: 45px;
  padding-bottom: 30px;
  cursor: pointer;
}
a:-webkit-any-link {
  color: rgba(0.0, 0.0, 0.0, 0.0);
}
#twitter_icon {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 180px;
  right: 10px;
  cursor: pointer;
}
</style>