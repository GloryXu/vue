<template>
  <div class="parent">
    <div class="child">
      <span class="list" v-for="(n, index) in imageList" :data-index="index">
        <img @click="open($event)" :src="n.url">
      </span>
    </div>
  </div>
</template>

<script>
import fancyBox from 'vue-fancybox';

export default {
  name: 'thumbnail',
  data () {
    return {
      imageList: [
        { width: 1200, height: 900, url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2097124721,3074829049&fm=26&gp=0.jpg' },
        { width: 1200, height: 900, url: 'http://t2.hddhhn.com/uploads/tu/201811/9999/84695947e4.jpg' },
        { width: 1200, height: 900, url: 'http://t2.hddhhn.com/uploads/tu/201811/9999/96e7a3db27.jpg' },
        { width: 1200, height: 900, url: 'http://t2.hddhhn.com/uploads/tu/201811/9999/df03387616.jpg' }
      ]
    }
  },
  methods: {
    open (e) {
      fancyBox(e.target, this.imageList);
    }
  }
}
</script>
<style>
  .parent {
    width:1300px;
    height:500px;
    border:0px solid #ddd;
    position:relative;
  }
  .child {
    width:1200px;
    height:500px;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: #c7edcc;
  }
  .list {
    width: 100px;
  }
  .list img {
    width: 100px;
  }
</style>
