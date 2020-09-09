<template>
  <!--公共模板-->
  <div id="app">
    <el-scrollbar style="height: 100%">
          <router-view/>
    </el-scrollbar>
    <template>
            <el-backtop target=".el-scrollbar__wrap " :bottom="50"  :right="100"></el-backtop>
    </template>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
    overflow-y: hidden;
}
  .el-scrollbar__thumb {
  display: none;
  }
  .el-scrollbar__wrap {
  overflow-x: hidden;
  overflow-y: auto;
  }
</style>