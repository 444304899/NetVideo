<template>
  <div class="list-content">
    <h3 class="title">
      <strong>标签：{{params}}</strong>
    </h3>
    <div class="m-movies clearfix">
      <article class="u-movie" v-for="item in 16" :key="item">
        <a title="《山海之机巧蒜泥》完整版在线观看&amp;下载" href="http://www.dililitv.com/gresource/7349">
          <div class="list-poster">
            <img
              data-original="https://pic.dlili.tv/upload/poster/463be0e80d8b7093.jpg"
              class="thumb"
              src="https://pic.dlili.tv/upload/poster/463be0e80d8b7093.jpg"
              style
            />
            <div class="pingfen">
              <span></span>
            </div>
            <div class="zhuangtai">
              <span></span>
            </div>
          </div>
          <h2>山海之机巧蒜泥</h2>
        </a>
        <div class="meta">
          <span class="tags">
            <router-link :to="{path:`/tag/${'xijv'}`,query:{}}">喜剧</router-link>
            <router-link :to="{path:`/tag/${'kehuan'}`,query:{}}">科幻</router-link>
          </span>
        </div>
      </article>
      <div class="pagination pagination-multi">
        <!-- <ul>
          <li class="prev-page"></li>
          <li class="active">
            <span>1</span>
          </li>
          <li>
            <a href="http://www.dililitv.com/tag/qihuan/page/2">2</a>
          </li>
          <li>
            <a href="http://www.dililitv.com/tag/qihuan/page/3">3</a>
          </li>
          <li>
            <a href="http://www.dililitv.com/tag/qihuan/page/4">4</a>
          </li>
          <li>
            <span>...</span>
          </li>
          <li class="next-page">
            <a href="http://www.dililitv.com/tag/qihuan/page/2">下一页</a>
          </li>
          <li>
            <a href="http://www.dililitv.com/tag/qihuan/page/12">尾页</a>
          </li>
          <li>
            <span>共 12 页</span>
          </li>
        </ul>-->
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import FilmContent from "./FilmContent";
import Aside from "./IndexAside";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      // msg:'奇幻'
    };
  },
  props: {
    params:''
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    FilmContent,
    Aside
  }
};
</script>

<style>
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
  font-family: "Glyphicons Halflings";
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
  opacity: 0.95;
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
.pagination {
  padding: 20px 10px 1px 10px;
  background-color: #fff;
  text-align: center;
  clear: both;
}
</style>
