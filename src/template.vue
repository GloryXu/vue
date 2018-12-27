<template>
  <div class="parent">
    <div class="child">

    </div>
  </div>
</template>

<script>

  export default {
    name: 'template',
    data () {
      return {

      }
    },
    methods: {

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
</style>
