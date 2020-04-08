<template>
  <div id="app">
    <Header></Header>
    <router-view :study_list="this.studyList" :life_list="this.lifeList" :senior_list="this.seniorList"></router-view>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      studyList: [],
      lifeList: [],
      seniorList: []
    }
  },
  created(){
    this.getPosts();
  },
  methods: {
    getPosts: function(){
      this.axios.get('http://ec2-18-188-53-245.us-east-2.compute.amazonaws.com/api/topic/')
      .then(response => {
        for (let i = 0; i < response.data.topic.length; i++) {
          
          if (response.data.topic[i].category == '履修') {
            
            this.studyList.push(response.data.topic[i]);
          } else if (response.data.topic[i].category == '生活') {

            this.lifeList.push(response.data.topic[i]);
          } else {

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
}
#footer {
  margin-top: 50px;
}
</style>
