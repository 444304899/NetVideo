<template>
  <div id="app ui-navtop">
    <Header></Header>
    <router-view  v-if="isRouterAlive" />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isRouterAlive: true
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#ui-navtop {
  margin-top: 68px;
}
body {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: #444;
  overflow-x: hidden;
  background-color: #eee;
  margin-top: 68px;
}
</style>
