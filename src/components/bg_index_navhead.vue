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
                  background-color="#409EFF"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                  <el-menu-item index="1"  @click="handleLogout()"> 退出</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {doLogout} from "../api/bg/log"
    export default {
        name: "bg_index_navhead",
        data() {
          return {
          };
        },
        methods: {
          handleLogout() {
            doLogout().then(res=>{
                if (res.code===200){
                       this.$message({
                        message: '您已退出登陆',
                        type: 'success'
                       });
                       this.$router.replace({path:"/login"});
                } else {
                    console.log(res);
                    console.log("退出失败")
                }
            })

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