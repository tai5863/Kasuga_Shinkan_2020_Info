<template>
  <div id="study_item">
    <div id="item_container">
      <div class="topic_container" v-for="item in itemList" :key="item.title">
        <label :for="item.title">
          <h2 class="topic">{{ item.title }}</h2>
        </label>
        <input type="checkbox" :id="item.title"/>
        <div class="hidden_show">
          <Main :main="item.main" class="topic_content"></Main>
          <div class="iframe_container" v-if="item.isYouTube">
            <iframe v-if="item.isYouTube" :src="item.youtube_link" frameborder="0" autoplay="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Main from '@/components/Main.vue'

export default {
  name: 'StudyItem',
  components: {
    Main
  },
  props: {
    item_list: Array
  },
  data () {
    return {
      itemList: this.item_list
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .topic {
    font-size: 20px;
    margin: 0;
    text-align: left;
  }
}

@media screen and (min-width: 481px) and (max-width: 780px){
  .topic { 
    font-size: 20px;
    display: inline;
    cursor: pointer;
  }
  .topic_content {
    margin: 0 30px;
  }
}

@media screen and (min-width: 780px){
  .topic { 
    font-size: 25px;
    display: inline;
    cursor: pointer;
  }
  .topic_content {
    margin: 0 50px;
  }
}

@media screen and (max-width: 1200px) {
  .iframe_container {
    text-align: center;
  }
  .iframe_container iframe {
     margin-top: 5vw;
  }
  .topic_container input:checked ~ .hidden_show iframe{
    width: calc(30vw + 150px); 
    height: calc((30vw + 150px) * 0.5625);
  }
}

@media screen and (min-width: 1201px){
  .topic_container input:checked ~ .hidden_show {
    display: flex;
    justify-content: space-between;
  }
  p {
    display: inline;
  }
  .iframe_container {
    display: inline;
    margin-left: 5%;
  }
  .iframe_container {
    display: inline;
    margin-left: 10%;
    margin-right: 10%;
  }
  .topic_container input:checked ~ .hidden_show iframe{
    width: calc(25vw + 150px); 
    height: calc((25vw + 150px) * 0.5625);
  }
}

.topic_container {
  margin-top: 30px;
}
.topic_content {
  margin-top: 15px;
  font-weight: 1000;
}
.topic_container input {
  display: none;
}
.topic_container .hidden_show {
  height: 0;
  padding: 0;
  overflow: hidden;
  opacity: 0;
  transition: 500ms;
}
.hidden_show iframe {
  width: 0;
  height: 0;
}
.topic_container input:checked ~ .hidden_show {
  padding: 5px 0;
  height: auto;
  opacity: 1;
}
.topic_container input:checked ~ .hidden_show iframe{
  width: calc(25vw + 150px); 
  height: calc((25vw + 150px) * 0.5625);
}
</style>
