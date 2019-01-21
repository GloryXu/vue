<template>
  <div class="parent">
    <div class="child">
      <el-input id="msg" v-model="msg" type="textarea" :autosize="{ minRows: 2, maxRows: 3}"/>

      <br/><br/>
      <div id="msgDiv">{{msg}}</div>
      <br/>
      <el-button class="btn" @click="copy" data-clipboard-target="#msg">复制Input</el-button>
      <el-button class="btnDiv" @click="copy2" data-clipboard-target="#msgDiv">复制Div</el-button>

      <br/>
      <br/>
      <br/>
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 3}" placeholder="Ctrl + V"/>
    </div>
  </div>
</template>

<script>
  import Clipboard from 'clipboard'

  export default {
    name: 'copy',
    data () {
      return {
        msg:''
      }
    },
    methods: {
      copy(){
        var clipboard = new Clipboard('.btn');
        clipboard.on('success', e => {
          this.$message.success("复制成功");//这里你如果引入了elementui的提示就可以用，没有就注释即可
          // 释放内存
          clipboard.destroy()
        });
        clipboard.on('error', e => {
          // 不支持复制
          console.log('该浏览器不支持自动复制')
          // 释放内存
          clipboard.destroy()
        });
      },
      copy2(){
        var clipboard = new Clipboard('.btnDiv');
        clipboard.on('success', e => {
          this.$message.success("DIV复制成功");//这里你如果引入了elementui的提示就可以用，没有就注释即可
          // 释放内存
          clipboard.destroy()
        });
        clipboard.on('error', e => {
          // 不支持复制
          console.log('该浏览器不支持自动复制')
          // 释放内存
          clipboard.destroy()
        });
      },
    }
  }
</script>
<style>
  .btn {

  }
  .btnDiv {

  }

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
</style>
