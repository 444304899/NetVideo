<template>
  <div class="bb-comment">
    <div class="comment-publish">
      <el-input type="textarea" :rows="3" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" v-model="textarea"></el-input>
      <el-button type="primary" @click="publish">发表评论</el-button>
    </div>

    <div class="comment-list" v-for="item in 6" :key="item">
      <div class="list-item reply-wrap">
        <div class="user-face">
          <a href target="_blank">
            <img src="https://pic.dlili.tv/large/87c01ec7gy1fq6b1723t7j20zk0k0whv.jpg" alt />
          </a>
        </div>
        <div class="con">
          <div class="user">
            <a data-usercard-mid="2497685" href target="_blank" class="name">战汉</a>
            <!-- <a
              class="level-link"
              href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3"
              target="_blank"
            >
              <i class="level l5"></i>
            </a>-->
          </div>
          <p class="text">{{text}}</p>
          <!-- <div class="info">
            <span class="plad">
              来自
              <a href="//app.bilibili.com/" target="_blank">安卓客户端</a>
            </span>
            <span class="time">2020-05-25 07:09</span>
            <span class="like">
              <i></i>
              <span></span>
            </span>
            <span class="hate">
              <i></i>
            </span>
            <div class="operation">
             
              <el-col :span="12">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="border: none;"> 
                    <i class="el-icon-more el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </div>
          </div>
          <div class="reply-box"></div>
          <div class="paging-box"></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import IndexItem from "./IndexItem";
export default {
  inject:['reload'],
  data() {
    return {
      textarea: "",
      text:'一键三联，检君加油'
    };
  },
  methods: {
    //发表评论
    publish(){
      if(!this.textarea){
        alert('请确认输入内容正确性')
        return
      }
      console.log(this.textarea)
      //成功发表评论后 重新请求评论列表并赋值 或刷新页面
      // this.text = this.textarea
      // this.reload()
    }
  },
  components: {
    // IndexItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment-list {
  padding-top: 20px;
}
.comment-publish{
  padding: 20px 0 0 0;
}
.comment-publish button{
  width: 100%;
  margin-top: 1rem;
}
.bb-comment .comment-list .list-item .user-face,
.comment-bilibili-fold .comment-list .list-item .user-face {
  float: left;
  margin: 24px 0 0 5px;
  position: relative;
}
.bb-comment a,
.comment-bilibili-fold a {
  outline: none;
  color: #00a1d6;
  text-decoration: none;
  cursor: pointer;
}
.bb-comment .comment-list .list-item .user-face img,
.comment-bilibili-fold .comment-list .list-item .user-face img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  vertical-align: middle;
}
.bb-comment .comment-list .list-item .con,
.comment-bilibili-fold .comment-list .list-item .con {
  position: relative;
  margin-left: 85px;
  padding: 22px 0 14px;
  border-top: 1px solid #e5e9ef;
  box-sizing: content-box;
}
.bb-comment .comment-list .list-item .user,
.comment-bilibili-fold .comment-list .list-item .user {
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  padding-bottom: 4px;
  display: block;
  word-wrap: break-word;
}
.bb-comment .comment-list .list-item .text,
.comment-bilibili-fold .comment-list .list-item .text {
  line-height: 20px;
  padding: 2px 0;
  font-size: 14px;
  text-shadow: none;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
}
.bb-comment .comment-list .list-item .info,
.comment-bilibili-fold .comment-list .list-item .info {
  color: #99a2aa;
  line-height: 26px;
  font-size: 12px;
}
.bb-comment .comment-list .list-item .info > span,
.comment-bilibili-fold .comment-list .list-item .info > span {
  margin-right: 20px;
}
.bb-comment .comment-list .list-item .info .plad a,
.comment-bilibili-fold .comment-list .list-item .info .plad a {
  color: #99a2aa;
}
.bb-comment .comment-list .list-item .info .operation,
.comment-bilibili-fold .comment-list .list-item .info .operation {
  position: relative;
  width: 18px;
  float: right;
  margin-top: 5px;
  margin-right: 0;
  cursor: pointer;
}
</style>
