<template>
  <div class="m-movies clearfix">
    <h1 class="title">
      <strong>
        <span class="glyphicon glyphicon-stats" style="color: #2581BA;"></span>
        <a href="/film/list01">欧美电影</a>
      </strong>
      <a class="more" href="/film/list01">更多&gt;&gt;</a>
    </h1>
    <article class="u-movie" v-for="item in 6" :key="item"> 
      <a title="《沙漠骑兵》完整版在线观看&amp;下载" href="http://www.dililitv.com/gresource/7565">
        <div class="list-poster">
          <img
            data-original="https://pic.dlili.tv/upload/poster/278fc091b7f67e53.jpg"
            class="thumb"
            src="https://pic.dlili.tv/upload/poster/278fc091b7f67e53.jpg"
            style
          />
          <div class="pingfen">
            <span>7.4分</span>
          </div>
          <div class="zhuangtai">
            <span></span>
          </div>
        </div>
        <h2>沙漠骑兵</h2>
      </a>
      <div class="meta">
        <span class="tags">
          <a href="http://www.dililitv.com/tag/maoxian" rel="tag">冒险</a>
          <a href="http://www.dililitv.com/tag/juqing" rel="tag">剧情</a>
          <a href="http://www.dililitv.com/tag/dongzuo" rel="tag">动作</a>
        </span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #444;
  text-decoration: none;
}
.time {
  font-size: 12px;
  color: #666666;
}

.bottom {
  color: #666666;
  height: 20px;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.m-movies {
    margin: 5px 0;
    background-color: #fff;
    float: left;
    padding: 0 2px;
    width: 100%;
}
.title {
    /* position: relative; */
    margin: 0;
    line-height: 32px;
    font-size: 20px;
    border-bottom: 2px solid #eee;
}
.title strong {
    border-bottom: 2px solid #346387;
    display: inline-block;
    position: relative;
    bottom: -2px;
    font-weight: normal;
}
.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.u-movie {
    width: 15.35%;
    float: left;
    padding: 5px;
    margin-top: 5px;
    position: relative;
}
a.more {
    margin-right: 10px;
    font-size: 13px;
    text-align: center;
    color: #f06000;
    float: right;
}
.list-poster {
    height: 11.7rem;
    overflow: hidden;
    border-radius: 6px 0;
}
.list-poster img {
    min-height: 100%;
    width: 100%;
}
.pingfen {
    position: absolute;
    top: 5px;
    right: 5px;
}
.pingfen span {
    display: inline-block;
    background-color: #bb9b6a;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0 5px;
    opacity: .95;
    margin-right: 5px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    line-height: 23px;
}
.zhuangtai {
    position: absolute;
    bottom: 50px;
}
.u-movie h2 {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    margin: 5px 0 0 0;
    color: #323232;
    display: block;
    font-weight: bolder;
    text-align: center;
    font-size: 12px;
}
.u-movie .meta {
    color: #666666;
    height: 20px;
    overflow: hidden;
    font-size: 12px;
    text-align: center;
}
.u-movie .tags a {
    /* display: inline-block; */
    background-color: #d8d8d8;
    padding: 0px 3px;
    margin: 2px;
    color: #666666;
}
</style>
