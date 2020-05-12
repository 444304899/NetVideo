<template>
  <div class="posts_new_list">
      <IndexItem2></IndexItem2>
  </div>
</template>

<script>
import IndexItem2 from "./IndexItem2";
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
    IndexItem2
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
