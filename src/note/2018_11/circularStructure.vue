<template>
  <div style="text-align: left">
    <div class="showResultClass">
      执行代码：<br/>
      var o = {hahah:'dddd'};<br/>
      o.o = o;
    </div>

    <div class="showResultClass">
      异常信息：{{exceptionInfo}}
    </div>
    <div class="showResultClass">
      运行结果：{{result}}
    </div>
    <br/>
    <el-button type="primary"
               @click="exception">异常啦</el-button>

    <el-button type="primary"
               @click="normal">正常</el-button>
  </div>
</template>

<script>
  const CircularJSON = require('circular-json');

  export default {
    name: 'circularStructure',
    data() {
      return {
        exceptionInfo: '',
        result: ''
      }
    },
    // 在组件中
    methods: {
      exception() {
        this.exceptionInfo = '';
        this.result = '';
        var o = {hahah:'dddd'};
        o.o = o;

        try {
          this.result = JSON.stringify(o)
        }catch (e) {
          console.error(e);
          this.exceptionInfo = e.message;
        }
      },
      normal() {// 正常执行的代码
        this.exceptionInfo = '';
        this.result = '';

        var o = {hahah:'dddd'};
        o.o = o;

        try {
          this.result = CircularJSON.stringify(o);
        }catch (e) {
          console.error(e);
          this.exceptionInfo = e.message;
        }
      }
    }
  }
</script>
<style>
  .showResultClass {
    width: 50%;
    border-radius: 5px;
    padding-bottom:10px;
    padding-left: 10px;
    padding-top: 10px;
    border: 1px solid #dddddd;
    overflow: auto;
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
  }
</style>
