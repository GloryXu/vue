<template>
  <div>
    <p v-if="greeting">Hello greeting</p>
    <p v-if="greeting1">Hello greeting1</p>

    <el-input type="text" v-model="message" placeholder="edit me"/>
    <div id="example">
      <p v-show="greeting">Hello !</p>
    </div>
    <div>{{message}}</div>
    <hr/>
    <!--debounce功能在2.0已经移除-->
    <el-input v-model="msg" debounce="5000"></el-input>
    {{msg}}
    <hr/>
    <h1>文本</h1>
    <el-input v-model="msg1"></el-input>
    <span v-once>这个将不会改变{{msg1}}</span>
    <hr/>
    <h1>原始html</h1>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <hr/><h1>特性</h1>

  </div>
</template>

<script>
  export default {
    name: 'command',
    data() {
      return {
        greeting: false,
        greeting1: true,
        message:'',
        msg:'内容在5000ms后才改变!',
        msg1:'哈哈哈哈',
        rawHtml:'<span style="color:red">this should be red.</span>'
      }
    },
    methods: {

    }
  }
</script>
