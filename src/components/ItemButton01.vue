<template>
  <div id="item_button">
    <img src="@/assets/えんぴつ付きのノートアイコン.png" id="icon">
    <div id="title_container">
      <h1 class="title">{{ title }}</h1><br>
      <h2 class="title">について</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemButton01',
  data () {
    return {
      title: '履修'
    }
  }
}
</script>

<style scoped>
#item_button {
  width: 180px;
  height: 270px;
  border: 10px solid rgb(75, 75, 75);
  text-align: center;
  cursor: pointer;
}
#item_button:hover {
	transform: scale(1.05);	
	transition-duration: 0.3s;	
}
#item_button:hover > img{
	transform: scale(1.1);	
	transition-duration: 0.3s;	
}
.title {
  border-bottom: solid 7px orange;
  display: inline-block;
  line-height: 1;
}
#icon {
  width: 80px;
  margin-top: 30px;
}
#title_container {
  margin-top: 10px;
  color: rgb(75, 75, 75);
}
h1 {
  font-size: 35px;
  margin: 0;
}
h2 {
  font-size: 25px;
  margin: 10px;
}
</style>
