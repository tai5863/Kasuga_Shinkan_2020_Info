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
  name: 'senior',
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
  },
  mounted: function(){
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
#container {
  text-align: left;
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
  max-width: 600px;
  margin: auto;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1000px){
  #container {
    margin-left: 20%;
    margin-right: 20%;
  }
}

@media screen and (max-width: 780px){
  #container {
    text-align: center;
    margin-left: 15%;
    margin-right: 15%;
  }
  #item_button_container {
    display: block;
  }
  .item_button {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
  }
}

.senior_title_container {
  border-bottom: solid 10px orange;
  padding-bottom: 5px;
  display: inline-block;
  line-height: 1;
  margin-top: 50px;
  width: 200px;
  margin-bottom: 10px;
}
</style>
