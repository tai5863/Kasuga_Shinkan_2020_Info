<template>
  <div id="app">
    <transition name="trans">
      <router-view :study_list="this.studyList" :life_list="this.lifeList" :senior_list="this.seniorList"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      studyList: [],
      lifeList: [],
      seniorList: []
    }
  },
  created: function(){
    this.getPost();
  },
  methods: {
    getPost: function(){
      this.axios.get('https://kzkymur.com/api/topic/')
      .then(response => {
        for (let i = 0; i < response.data.topic.length; i++) {

          response.data.topic[i].isYouTube = false;

          if (response.data.topic[i].youtube_link == '') {
            response.data.topic[i].isYouTube = false;
          } else {
            response.data.topic[i].isYouTube = true;
            let youtube_link = response.data.topic[i].youtube_link.replace('youtu.be', 'www.youtube.com/embed');
            youtube_link = youtube_link.replace('t=', 'start=');
            response.data.topic[i].youtube_link = youtube_link;
          }
          
          if (response.data.topic[i].category == '大学') {
            
            this.studyList.push(response.data.topic[i]);
          } else if (response.data.topic[i].category == '生活') {

            this.lifeList.push(response.data.topic[i]);
          } else if (response.data.topic[i].category == '先輩'){

            this.seniorList.push(response.data.topic[i]);
          }
        }
      })
      .catch(error => {
        window.alert(error);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(50, 50, 50);
}
.trans-enter {
  opacity: 0;
}
.trans-enter-to {
  opacity: 1;
}
.trans-enter-active {
  transition: all 1s 0s;
}
</style>
