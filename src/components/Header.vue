<template>
  <div class="header">
    <div class="container header">
      <div style="min-width: 800px">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#155B88"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2" @click="submenu('2')">
            <template slot="title">电影</template>
            <el-menu-item index="2-1">欧美片</el-menu-item>
            <el-menu-item index="2-2">华语片</el-menu-item>
            <el-menu-item index="2-3">日韩片</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title" @click="submenu('3')">剧集</template>
            <el-menu-item index="3-1">欧美剧</el-menu-item>
            <el-menu-item index="3-2">华语剧</el-menu-item>
            <el-menu-item index="3-3">日韩剧</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">动漫</el-menu-item>
          <el-menu-item index="5">综艺</el-menu-item>
          <el-menu-item index="6">纪录片</el-menu-item>
          <el-menu-item index="7" disabled>消息中心</el-menu-item>
          <el-menu-item index="8">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    // submenu(key) {
    //   console.log("key",key)
    //   switch (key) {
    //     case "2":
    //       this.$router.push({ path: "/film?url=" + this.$route.path });
    //       break;
    //     case "3":
    //       this.$router.push({ path: "/film?url=" + this.$route.path });
    //       break;
    //     default:
    //       console.log("默认");
    //   }
    // },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (keyPath[0]) {
        case "1":
          this.$router.push({ path: "/" });
          break;
        case "2":
          this.$router.push({ path: "/film?list=" + keyPath[1] });
          break;
        case "3":
          this.$router.push({ path: "/teleplay?list=" + keyPath[1] });
          break;
        default:
          console.log("默认");
      }
      if (key == 2) {
      }
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 190px;
  background-color: #f6f6f6;
  margin: 0;
  padding: 0;
  z-index: 99;
}
.header {
  bottom: auto;
  width: 100%;
  background-color: #155b88;
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.08); */
}
.container {
  max-width: 1280px;
  /* background-color: #fff; */
  margin: 0 auto;
  text-align: left;
  position: relative;
  *zoom: 1;
}
</style>
