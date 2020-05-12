<template>
  <div class="posts_new_item">
    <article class="u-movie">
      <a title="《沼泽的沉默》完整版在线观看&amp;下载" href="http://www.dililitv.com/gresource/7492">
        <el-row>
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://pic.dlili.tv/upload/poster/32a5ee0594fbc898.jpg" class="image" />
              <div>
                <h2>沼泽的沉默</h2>
                <div class="bottom clearfix">
                  <time class="time">2020-05-08 收录</time>
                  <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </a>
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
.posts_new_item {
  /* display: block; */
  padding: 1px;
  overflow: hidden;
  overflow-y: auto;
  margin-top: 5px;
  width: 100%;
}
.u-movie {
  /* width: 16.666%; */
  float: left;
  padding: 5px;
  margin-top: 5px;
  position: relative;
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
</style>
