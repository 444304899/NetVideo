<template>
  <div class="container">
    <div class="content-wrap">
      <div class="content">
        <div class="film-content">
          <TagContent :params='this.$route.params.name' />
        </div>
      </div>
    </div>

    <aside class="sidebar" @click="conso">
      <Aside></Aside>
    </aside>
  </div>
</template>

<script>
import TagContent from "./TagContent";
import Aside from "./IndexAside";
export default {
  data() {
    return {
      // params: $route.params.name
    };
  },
  methods: {
    conso() {
      console.log('this',this)
    },
  },
  components: {
    TagContent,
    Aside
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

.test {
  width: 300px;
  height: 300px;
  background-color: #ccc;
}
</style>
