<template>
  <div id="footer_comp">
    <img src="@/assets/UTLogo_150.png" id="tsukuba" @click="openTsukubaUniv()">
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    openTsukubaUniv: function(){
      window.open('http://www.tsukuba.ac.jp/');
    }
  }
}
</script>

<style>
#footer_comp {
  width: 100%;
}
#tsukuba {
  width: 55px;
  float: right;
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>