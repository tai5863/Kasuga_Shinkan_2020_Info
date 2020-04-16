<template>
  <div id="study">
    <Header></Header>
    <div id="container">
      <div id="study_container">
        <div class="study_title_container">
          <h1 class="study_title1">大学</h1>
          <h2 class="study_title2">について</h2>
        </div>
        <StudyItem :item_list="itemList"></StudyItem>
      </div>
      <div id="item_button_container">
        <router-link to="/life"><ItemButton02 class="item_button"></ItemButton02></router-link>
        <router-link to="/senior"><ItemButton03 class="item_button"></ItemButton03></router-link>
      </div>
      <AddQuestion></AddQuestion>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ItemButton02 from '@/components/ItemButton02.vue'
import ItemButton03 from '@/components/ItemButton03.vue'
import StudyItem from '@/components/StudyItem.vue'
import AddQuestion from '@/components/AddQuestion.vue'

export default {
  name: 'Study',
  components: {
    Header,
    ItemButton02,
    ItemButton03,
    StudyItem,
    AddQuestion
  },
  props: {
    study_list: Array
  },
  data () {
    return {
      itemList: this.study_list
    }
  },
  created: function(){
    localStorage.isPass = 'false';
    localStorage.pass = '';
  }
}
</script>

<style scoped>
@media screen and (max-width: 480px){
  #container {
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;
  }
  .study_title1 {
    font-size: 40px;
    display: inline;
  }
  .study_title2 { 
    font-size: 30px;
    display: inline;
  }
  #item_button_container {
    margin-top: 40px;
  }
}

@media screen and (min-width: 481px) and (max-width: 780px){
  #container {
    color: rgb(75, 75, 75);
    margin-left: 50px;
    margin-right: 50px;
  }
  .study_title1 {
    font-size: 40px;
    display: inline;
  }
  .study_title2 { 
    font-size: 30px;
    display: inline;
  }
  #item_button_container {
    max-width: 600px;
    margin: auto;
    margin-top: 80px;
  }
  .item_button {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
  }
}

@media screen and (min-width: 781px){
  #container {
    color: rgb(75, 75, 75);
    margin-left: 125px;
    margin-right: 125px;
  }
  .study_title1 {
    font-size: 40px;
    display: inline;
  }
  .study_title2 { 
    font-size: 30px;
    display: inline;
  }
  #item_button_container {
    max-width: 600px;
    margin: auto;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
  }
}

.study_title_container {
  border-bottom: solid 10px orange;
  padding-bottom: 5px;
  display: inline-block;
  line-height: 1;
  margin-top: 50px;
  width: 200px;
  margin-bottom: 10px;
}
</style>
