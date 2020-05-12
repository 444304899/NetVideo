<template>
  <div class="video-content">
    <header class="article-header">
      <div class="breadcrumbs">
        <span class="text-muted">当前位置：</span>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="display: inline-block;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <span class="title-meta">更新：2019-08-29</span>
      </div>
    </header>
    <article class="article-content">
      <div class="video_box">
        <div class="video_img">
          <img src="https://pic.dlili.tv/upload/poster/33c72ef43a9ebec6.jpg" alt="进击的巨人的海报" />
        </div>
        <div class="video_info">
          <strong>导演:</strong> 荒木哲郎
          <br />
          <strong>编剧:</strong> 小林靖子 / 濑古浩司 / 高木登
          <br />
          <strong>主演:</strong> 梶裕贵 / 石川由依 / 井上麻里奈 / 小野大辅 / 神谷浩史 / 朴璐美 / 细谷佳正 / 橋詰知久 / 谷山纪章 / 下野纮 / 小林优 / 三上枝织 / 藤田咲 / 三宅健太 / 岛村侑 / 逢坂良太 / 藤原启治
          <br />
          <strong>类型:</strong> 动作 / 科幻 / 动画 / 灾难
          <br />
          <strong>官方网站:</strong> shingeki.tv/season1/
          <br />
          <strong>国家/地区:</strong> 日本
          <br />
          <strong>语言:</strong> 日语
          <br />
          <strong>首播:</strong> 2013-04-06(日本)
          <br />
          <strong>集数:</strong> 25
          <br />
          <strong>单集时长:</strong> 24分钟
          <br />
          <strong>又名:</strong> Shingeki no Kyojin / Attack on Titan
          <br />
          <strong>IMDb编码:</strong> tt2560140
          <br />
          <strong>评分:</strong> 9.0
        </div>
        <div class="video_tga" id="video_tga"></div>
        <div style="clear:both;"></div>
      </div>
      <div class="tbad_760_90">
        <div class style="text-align:  left;">
          <div
            class
            style="padding: 5px;font-size: 1em;color: #8A8585;background-color: #fff;"
          >【公告】QQ、Sogou浏览器无法访问本站，请选择其他浏览器观看视频！</div>
        </div>
      </div>
      <h4 class="ctitle">
        <strong>在线播放:</strong>
      </h4>
      <div id="video_list_li" class="video_list_li">
        <div class="vlink" style="margin-left: 10px;">
          <a
            href="javascript:void(0);"
            onclick="play(this)"
            id="MjE5OS0xLTA="
            v-for="item in 24"
            :key="item"
          >第01集</a>
        </div>
      </div>
      <h4 class="ctitle">
        <strong>剧情简介:</strong>
      </h4>
      <p class="jianjie">
        <span>
          曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场，摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。在此事件中，不愿蜷缩在墙内的少年艾伦·耶格尔（梶裕贵配音）亲眼目睹母亲遇害，由此更坚定了他加入调查兵团的决心。在此之后，艾伦和青梅竹马三笠·阿克曼（石川由依配音）、好友阿尔敏·亚鲁雷特（井上麻里奈配音）加入第104期训练兵团，发誓成为足以消灭所有巨人的英勇战士。百年的和平结束，人类和巨人的战争再度拉开序幕……
          <br />本片根据谏山创的同名原作改编。
        </span>
      </p>
      <h4 class="ctitle">
        <strong>影片截图:</strong>
      </h4>
      <p class="jietu">
        <img
          alt="进击的巨人的剧照"
          data-original="https://pic.dlili.tv/large/87c01ec7gy1fq6b1723t7j20zk0k0whv.jpg"
          class="thumb"
          src="https://pic.dlili.tv/large/87c01ec7gy1fq6b1723t7j20zk0k0whv.jpg"
          style
        />
        <img
          alt="进击的巨人的剧照"
          data-original="https://pic.dlili.tv/large/87c01ec7gy1fq6b171vqxj20zk0k0whc.jpg"
          class="thumb"
          src="https://pic.dlili.tv/large/87c01ec7gy1fq6b171vqxj20zk0k0whc.jpg"
          style
        />
        <img
          alt="进击的巨人的剧照"
          data-original="https://pic.dlili.tv/large/87c01ec7gy1fq6b171bwoj20zk0k0gnz.jpg"
          class="thumb"
          src="https://pic.dlili.tv/large/87c01ec7gy1fq6b171bwoj20zk0k0gnz.jpg"
          style
        />
        <img
          alt="进击的巨人的剧照"
          data-original="https://pic.dlili.tv/large/87c01ec7gy1fq6b1725qkj20zk0k0tbf.jpg"
          class="thumb"
          src="https://pic.dlili.tv/large/87c01ec7gy1fq6b1725qkj20zk0k0tbf.jpg"
          style
        />
      </p>
    </article>
    <div class="article-tags">
      标签：
      <a href="http://www.dililitv.com/tag/dongzuo" rel="tag" data-original-title title>动作</a>
      <a href="http://www.dililitv.com/tag/donghua" rel="tag" data-original-title title>动画</a>
      <a href="http://www.dililitv.com/tag/zainan" rel="tag" data-original-title title>灾难</a>
      <a href="http://www.dililitv.com/tag/kehuan" rel="tag" data-original-title title>科幻</a>
    </div>
    <div class="relate">
      <h3 class="title">
        <strong>相關視頻</strong>
      </h3>
      <article class="u-movie" v-for="item in 8" :key="item">
        <a title="《威洛比家的孩子们》完整版在线观看&amp;下载" href="http://www.dililitv.com/gresource/7446">
          <div class="list-poster">
            <img
              data-original="https://pic.dlili.tv/upload/poster/755361acf9151835.jpg"
              class="thumb"
              src="https://pic.dlili.tv/upload/poster/755361acf9151835.jpg"
              style
            />
            <div class="pingfen">
              <span>6.4分</span>
            </div>
          </div>
          <h2>威洛比家的孩子们</h2>
        </a>
      </article>
    </div>
    <div style="clear:both;"></div>
    <h3 class="title" id="comments">
      <div class="text-muted pull-right"></div>
      <strong>
        歡迎留言/評論
        <b>10</b>
      </strong>
    </h3>
  </div>
</template>

<script>
// import IndexItem from "./IndexItem";
export default {
  data() {
    return {};
  },
  methods: {
    play(objInfo) {
      var id = $(objInfo).attr("id");
      window.location.href = "/vplay/" + id + ".html";
    }
  },
  components: {
    // IndexItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #444;
  text-decoration: none;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: #eeeeee;
}
::-webkit-scrollbar-thumb {
  background-color: #656f65;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #4444;
}
::-webkit-scrollbar-thumb:active {
  background-color: #4444;
}
.video-content {
  background-color: #fff;
  padding: 10px;
  min-height: 1480px;
}
.article-header {
  padding: 0 0 5px;
  border-bottom: 1px solid #eee;
  margin-bottom: 5px;
  text-align: center;
  border-bottom-width: 1px;
}
.breadcrumbs {
  padding: 5px 0 5px;
  font-size: 12px;
  text-align: left;
}
.article-header .text-muted {
  font-size: 12px;
  margin-bottom: 0;
}
.title-meta {
  color: #999;
  padding-left: 10px;
}
.article-content {
  font-size: 15px;
  line-height: 25px;
  word-wrap: break-word;
}
.video_box {
  height: 330px;
  overflow: hidden;
  margin-bottom: 10px;
}
.video_img {
  float: left;
  padding-right: 10px;
  height: 100%;
  width: 230px;
}
.article-content img {
  margin: 5px 0;
  display: block;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}
.video_info {
  padding: 3px;
  float: left;
  width: 45%;
  height: 100%;
  overflow: auto;
}
.ctitle {
  font-size: 18px;
  margin: 10px 0;
  padding-left: 8px;
  border-left: 3px solid #656e65;
  color: #00b0ec;
}
.video_list_li {
  line-height: 15px;
  font-size: 12px;
}
.video_list_li a {
  padding: 8px 5px;
  display: inline-block;
  border-radius: 4px;
  background-color: #346387;
  color: #fff;
  margin: 0.1rem;
  margin-top: 0.2rem;
  cursor: pointer;
  min-width: 1.3rem;
  text-align: center;
  border: 1px solid #346387;
}
.video_list_li a:visited,
.video_list_li a:hover {
  color: #444444;
  background-color: #ffffff;
}
.jianjie {
  text-align: left;
  display: inline-block;
}
.jianjie span {
  display: -webkit-box;
}
.jietu {
  display: inline-block;
}
.jianjie img,
.jietu img {
  width: 50%;
  float: left;
  /* height: 220px; */
  margin: 0;
}
.article-tags {
  margin: 30px 0;
  text-align: center;
}
.article-tags a {
  display: inline-block;
  padding: 3px 8px 2px;
  margin: 0 4px 4px 0;
  color: #fff;
  font-size: 12px;
  background-color: #346387;
  opacity: 0.85;
  filter: alpha(opacity=85);
  text-decoration: none;
}
.relate {
  display: inline-block;
  padding-bottom: 20px;
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
.relate article.u-movie {
  width: 12%;
  padding: 2px;
}
.u-movie {
  width: 16.666%;
  float: left;
  padding: 5px;
  margin-top: 5px;
  position: relative;
}
.relate .list-poster {
  height: 8rem;
}
.list-poster {
  height: 4rem;
  overflow: hidden;
  border-radius: 6px 0;
}
.list-poster img {
  min-height: 100%;
  width: 100%;
  vertical-align: middle;
  max-width: 100%;
  border: 0;
}
.relate .pingfen {
  position: absolute;
  top: 2px;
  right: 2px;
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
</style>
