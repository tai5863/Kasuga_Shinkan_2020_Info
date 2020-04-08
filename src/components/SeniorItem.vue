<template>
  <div id="senior_item">
    <div id="item_container">
      <div class="topic_container" v-for="item in itemList" :key="item.id">
        <label :for="item.topic">
          <h2 class="topic">{{ item.topic }}</h2>
        </label>
        <input type="checkbox" :id="item.topic"/>
        <div class="hidden_show">
          <p class="topic_content">{{ item.content }}</p>
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
      itemList: this.item_list
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
</style>
