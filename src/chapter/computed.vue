<template>
  <div>
    <h1>基础例子</h1>
    <div>
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <hr/>
    <h1>计算属性缓存VS方法</h1>
    <p>Reversed message: "{{ reversedMessage1() }}"</p>
    <hr/>
    <h1>计算属性缓存VS侦听属性</h1>
    {{ fullName }}
    {{ fullName1 }}
    <hr/>
    <h1>计算属性的setter</h1>
    <el-input v-model="fullName111"></el-input>
    <span>{{firstName}}</span>
    <span>{{lastName}}</span>
  </div>
</template>

<script>
  export default {
    name: 'computed',
    data() {
      return {
        message: 'Hello',
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      }
    },
    /*watch: {
      firstName2: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    },*/
    // 在组件中
    methods: {
      reversedMessage1: function () {
        return this.message.split('').reverse().join('')
      }
    },
    computed: {// 依赖的属性不变，调用该方法将不会执行，返回之前计算的结果
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      },
      fullName1: function () {
        return this.firstName + ' ' + this.lastName
      },
      fullName111: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }
  }
</script>
