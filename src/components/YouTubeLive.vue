<template>
  <div id="youtube_live_container">
    <div id="youtube_live_title_container">
      <h1 id="youtube_live_title">これまでのライブ配信</h1>
    </div>
    <ul>
      <li><pre class="pre1">・Vol.0   <pre class="pre2">テスト配信</pre></pre><div class="iframe_container"><iframe src="https://www.youtube.com/embed/crFJLJUGdq0" frameborder="0" autoplay="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></li>
      <li><pre class="pre1">・Vol.1   <pre class="pre2">klis履修とパソコン</pre></pre><div class="iframe_container"><iframe src="https://www.youtube.com/embed/GOsmQ8zsMCY" frameborder="0" autoplay="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped>
@media screen and (max-width: 570px){
  #youtube_live_container {
    text-align: center;
  }
}
@media screen and (min-width: 481px){
  #youtube_live_container {
    margin-left: 10%;
    margin-right: 10%;
  }
}
#youtube_live_container {
  margin-top: 100px;
}
#youtube_live_title_container {
  width: 320px;
  height: 45px;
  border-bottom: solid 10px orange;
  margin: 0 auto;
}
ul {
  padding: 0;
  list-style: none;
}
li {
  margin-top: 40px;
}
.pre1 {
  font-size: 28px;
  font-weight: 1000;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  display: inline;
}
.pre2 {
  font-size: 25px;
  font-weight: 1000;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  display: inline;
}
.iframe_container {
  margin-top: 30px;
  text-align: center;
  width: 100%;
}
iframe {
  width: calc(30vw + 150px); 
  height: calc((30vw + 150px) * 0.5625);
}
</style>
