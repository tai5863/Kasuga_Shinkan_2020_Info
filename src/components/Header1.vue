<template>
  <div id="header1_comp">
    <router-link to="/">
      <img src="@/assets/logo_klismust_white.png" id="c_logo">
      <div id="c_page_title_container">
        <h2 id="c_page_title">{{ title }}</h2>
        <h2 id="c_page_title1">{{ title1 }}</h2>
      </div>
    </router-link>
    <nav class="nav_for_sections">
      <ul class="header_ul">
        <li v-for="section in sections" :key="section.id"><router-link :to="'/authentication_for_committee_member/' + section.class_name" :id="section.class_name + '_on'">{{ section.title }}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: '春日新歓2020情報Web',
      title1: '委員会用サイト',
      sections: [{title: '投稿', class_name: 'form'}, {title: '質問', class_name: 'question'}]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#header1_comp {
  background-color: rgb(20, 20, 20);
  overflow: hidden;
  text-align: center;
}
#c_logo {
  padding-top: 25px;
  width: 75px;
  height: 75px;
  cursor: pointer;
}
a:-webkit-any-link {
  color: rgba(0.0, 0.0, 0.0, 0.0);
}
#c_page_title {
  color: white;
  font-size: 25px;
  line-height: 45px;
  cursor: pointer;
}
#c_page_title1 {
  color: white;
  font-size: 25px;
  line-height: 45px;
  padding-bottom: 30px;
  cursor: pointer;
}
.header_ul {
  list-style: none;
  display: flex;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
}
.header_ul li {
  cursor: pointer;
}
.header_ul a:-webkit-any-link {
  color: rgba(255, 255, 255, 0.3);
  font-weight: 1000;
  text-decoration: none;
}

@media screen and (max-width: 650px){
  .header_ul {
    max-width: 200px;
  }
}

@media screen and (min-width: 651px) and (max-width: 1200px){
  .header_ul {
    max-width: 300px;
  }
}
@media screen and (min-width: 1201px){
  .header_ul {
    max-width: 500px;
  }
}
</style>