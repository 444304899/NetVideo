<template>
  <div class="container">
    <div class="content-wrap">
      <div class="content">
        <div class="lun">
          <Carousel></Carousel>
        </div>
        <div class="item clearfix">
          <IndexList />
        </div>
        <div class="item clearfix">
          <IndexItem2 />
        </div>
      </div>
    </div>

    <aside class="sidebar">
      <Aside></Aside>
    </aside>
  </div>
</template>
<script>
import Carousel from "./Carousel";
import IndexList from "./IndexList";
import Aside from "./IndexAside";
import IndexItem2 from "./IndexItem2";

export default {
  name: "Index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Carousel,
    IndexList,
    Aside,
    IndexItem2
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
