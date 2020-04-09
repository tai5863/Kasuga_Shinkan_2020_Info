<template>
  <div id="senior">
    <Header></Header>
    <div id="container">
      <div id="senior_container">
        <div class="senior_title_container">
          <h1 class="senior_title1">先輩</h1>
          <h2 class="senior_title2">について</h2>
        </div>
        <SeniorItem :item_list="itemList"></SeniorItem>
      </div>
      <div id="item_button_container">
        <router-link to="/study"><ItemButton01 class="item_button"></ItemButton01></router-link>
        <router-link to="/life"><ItemButton02 class="item_button"></ItemButton02></router-link>
      </div>
      <AddQuestion></AddQuestion>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ItemButton01 from '@/components/ItemButton01.vue'
import ItemButton02 from '@/components/ItemButton02.vue'
import SeniorItem from '@/components/SeniorItem.vue'
import AddQuestion from '@/components/AddQuestion.vue'

export default {
  name: 'Study',
  components: {
    Header,
    ItemButton01,
    ItemButton02,
    SeniorItem,
    AddQuestion
  },
  props: {
    senior_list: Array
  },
  data () {
    return {
      itemList: this.senior_list
    }
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
  .senior_title1 {
    font-size: 40px;
    display: inline;
  }
  .senior_title2 { 
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
  #item_button_container {
    max-width: 600px;
    margin: auto;
    margin-top: 80px;
  }
  .senior_title1 {
    font-size: 40px;
    display: inline;
  }
  .senior_title2 { 
    font-size: 30px;
    display: inline;
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
  #item_button_container {
    max-width: 600px;
    margin: auto;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
  }
}

.senior_title_container {
  border-bottom: solid 10px orange;
  display: inline-block;
  line-height: 1;
  margin-top: 50px;
  width: 200px;
  margin-bottom: 10px;
}
.senior_title1 {
  font-size: 40px;
  display: inline;
}
.senior_title2 { 
  font-size: 30px;
  display: inline;
}
</style>
