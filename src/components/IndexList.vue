<template>
  <div class="posts_new_list">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="最新收录" name="first">
        <el-row :gutter="10">
          <el-col :span="4" v-for="item in 6" :key="item">
            <div class="grid-content bg-purple">
              <IndexItem></IndexItem>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="昨天热播" name="second">
        <el-row :gutter="10">
          <el-col :span="4" v-for="item in 6" :key="item">
            <div class="grid-content bg-purple">
              <IndexItem></IndexItem>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="电影周榜" name="third">
        <el-row :gutter="10">
          <el-col :span="4" v-for="item in 6" :key="item">
            <div class="grid-content bg-purple">
              <IndexItem></IndexItem>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="剧集周榜" name="fourth">
        <el-row :gutter="10">
          <el-col :span="4" v-for="item in 6" :key="item">
            <div class="grid-content bg-purple">
              <IndexItem></IndexItem>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import IndexItem from "./IndexItem";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    IndexItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posts_new_list {
  /* display: block; */
  /* padding: 1px; */
  overflow: hidden;
  overflow-y: auto;
  /* margin-top: 5px; */
  margin: 5px 0;
  background-color: #fff;
  float: left;
  padding: 0 2px;
  width: 100%;
}
</style>
