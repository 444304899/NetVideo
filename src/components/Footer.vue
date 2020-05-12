<template>
  <div id="footer">
    <footer class="footer">
      <a href="/about-disclaimer-contact" target="_blank" title="关于我们">关于我们</a> -
      <a href="/about-disclaimer-contact" target="_blank" title="免责声明">免责声明</a> -
      <a href="/about-disclaimer-contact" target="_blank" title="联系我们">联系我们</a> -
      <a href="/guestbook" target="_blank" title="留言求片">留言求片</a> -
      <a href="/sitemap.xml" target="_blank" title="网站地图">网站地图</a>
      <br />
      <br />本站不提供任何视听上传服务，所有内容均来自视频分享站点所提供的公开引用资源。
      <br />Copyright © 2018
      <a href="/" title="嘀哩哩TV" target="_blank">dlili.</a> All Rights Reserved
      <br />联系E-mail：djgumtapo#gmail.com
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
/* .footer { */
    /* background-color: rgb(52, 99, 135);
    margin: 0;
    text-align: center;
    padding: 10px;
} */
.footer {
    clear: both;
    color: rgb(141, 207, 241);
    position: relative;
    z-index: 1;
    margin-left: 215px;
    margin-right: 20px;
    padding: 20px 0 30px;
    border-top: 2px solid #eee;
    font-size: 12px;
    background-color: rgb(52, 99, 135);
    margin: 0;
    text-align: center;
    padding: 10px;
}
.footer a {
    color: #8DCFF1;
}
</style>
