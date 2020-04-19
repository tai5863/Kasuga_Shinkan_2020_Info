<template>
  <div id="life_item">
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
  name: 'LifeItem',
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
.topic_container {
  margin-top: 30px;
  text-align: left;
}
.topic_content {
  margin-top: 0;
  font-weight: 1000;
  padding-right: 5%;
  line-height: 2.5rem;
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
  width: calc(20vw + 150px); 
  height: calc((20vw + 150px) * 0.5625);
}
.topic_container input:checked ~ .hidden_show {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1300px){  
  .topic_content {
    padding-right: 0;
  }
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
  .topic_container input:checked ~ .hidden_show {
    display: block;
  }
}

@media screen and (max-width: 480px){
  .topic { 
    font-size: 22px;
  }
}
</style>
