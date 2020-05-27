<template>
  <div class="container">
    <div class="content-wrap">
      <div class="content">
        <div class="film-content">
          <div v-for="item in 4" :key="item">
            <FilmContent></FilmContent>
          </div>
        </div>
      </div>
    </div>
    <!-- <div :hidden='isList'>
    <router-view></router-view>
    </div> -->
    <aside class="sidebar">
      <Aside></Aside>
    </aside>
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
      isList:this.$route.path=='/film'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    FilmContent,
    Aside
  },
  created(){
    console.log('this.$route.path',this.$route.path)
  }
};
</script>

<style>
.container {
  max-width: 1280px;
  /* background-color: #fff; */
  margin: 0 auto;
  text-align: left;
  position: relative;
  *zoom: 1;
  margin-bottom: 15px;
}
.content-wrap {
  width: 100%;
  float: left;
}
.content {
  /* width: 100%;
  float: left; */
  margin-left: 0;
  padding: 20px;
  margin-right: 380px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.sidebar {
  float: left;
  margin-left: -320px;
  width: 300px;
  position: relative;
  padding-top: 20px;
  margin-left: -380px;
  width: 360px;
}
</style>
