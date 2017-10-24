<template>
  <div id="app">
    <router-view class="left_add" name="left"></router-view>
    <router-view class="main_center" name="main"></router-view>
    <router-view class="right_view" name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height:100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 1200px;
}
  .left_add{
    background: #000;
    float: left;
    width:10%;
    height: 100%;
  }
  .main_center{
    background: transparent;
    float: left;
    width:79%;
    height: 100%;
  }
  .right_view{
    background: #000;
    float: left;
    width: 11%;
    height: 100%;
  }
</style>
