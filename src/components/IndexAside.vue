<template>
  <div>
    <div class="widget">
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1">
          <span>寻你所想</span>
        </el-menu-item>
      </el-menu>
      <div style="margin-top:15px">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import IndexItem from "./IndexItem";
export default {
  data() {
    return {
      activeName: "first",
      input: ""
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
.widget {
  clear: both;
  margin-bottom: 10px;
  position: relative;
  background-color: #fff;
  padding: 10px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
