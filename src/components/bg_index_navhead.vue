<template>
    <div class="navhead">
        <el-row :gutter="20">
            <el-col :span="6">
                <p>枫林的个人博客管理中心</p>
            </el-col>
            <el-col :span="2" :offset="16">
                <el-menu
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#409EFF"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                  <el-menu-item index="1"> 退出</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "bg_index_navhead",
        data() {
          return {
          };
        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped lang="less">
    .el-row{
       background-color:#409EFF;
    }
    p{
        color: white;
    }
</style>