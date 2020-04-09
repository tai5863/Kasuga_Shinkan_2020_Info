<template>
  <div id="senior_item">
    <div id="item_container">
      <div class="topic_container" v-for="item in itemList" :key="item.id">
        <label :for="item.id">
          <h2 class="topic" @click="back(item.id), uncheck(item.id)">{{ item.title }}</h2>
        </label>
        <input type="checkbox" :id="item.id"/>
        <div class="hidden_show">
          <p class="topic_content">{{ item.main }}</p>
          <div class="iframe_container">
            <iframe src="https://www.youtube.com/embed/crFJLJUGdq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SeniorItem',
  props: {
    item_list: Array
  },
  data () {
    return {
      itemList: this.item_list,
      show: false,
      inputList: [],
      inputList1: []
    }
  },
  mounted: function(){
    for (let i = 0; i < this.itemList.length; i++) {
      this.inputList.push(String(this.itemList[i].id));
    }
  },
  methods: {
    uncheck: function(id){
      let idx = this.inputList.indexOf(id);
      if (idx >= 0) {
        this.inputList.splice(idx, 1);
      }
      for (let i = 0; i < this.inputList.length; i++) {
        let input = document.getElementById(this.inputList[i]);
        input.checked = false;
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .topic {
    font-size: 22px;
    margin: 0;
    text-align: left;
  }
}

@media screen and (min-width: 481px) and (max-width: 780px){
  .topic { 
    font-size: 25px;
    display: inline;
    cursor: pointer;
  }
  .topic_content {
    margin: 0 30px;
  }
}

@media screen and (min-width: 780px){
  .topic { 
    font-size: 30px;
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
}

@media screen and (min-width: 1201px){
  .topic_container input:checked ~ .hidden_show {
    display: flex;
  }
  p {
    display: inline;
  }
  .iframe_container {
    display: inline;
    margin-left: 5%;
  }
}

.topic_container {
  margin-top: 20px;
}
.topic_content {
  margin-top: 15px;
  font-weight: 1000;
  position: relative;
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
.topic_container input:checked ~ .hidden_show {
  padding: 5px 0;
  height: auto;
  opacity: 1;
}
.iframe_container iframe {
  width: calc(25vw + 150px); 
  height: calc((25vw + 150px) * 0.5625);
}
</style>
