<template>
    <div class="navleft">
        <el-row >
            <el-col :span="24">
                <el-menu
                  default-active="0"
                  @select="handleSelect"
                  class="el-menu-vertical-demo">
                  <el-menu-item index="0">
                    <i class="el-icon-menu"></i>
                    <span slot="title">网站统计</span>
                  </el-menu-item>
                    <el-menu-item index="1">
                    <i class="el-icon-collection"></i>
                    <span slot="title">我的文章</span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <i class="el-icon-document"></i>
                    <span slot="title">撰写文章</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">修改文章</span>
                  </el-menu-item>
                    <el-menu-item index="4">
                    <i class="el-icon-delete"></i>
                    <span slot="title">删除文章</span>
                  </el-menu-item>
                    <el-menu-item index="5">
                    <i class="el-icon-setting"></i>
                    <span slot="title">更改文章权限</span>
                  </el-menu-item>
                    <el-menu-item index="6">
                    <i class="el-icon-s-comment"></i>
                    <span slot="title">回复评论</span>
                  </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "bg_index_navleft",
        data:function () {
            return{
                flag:true,
                toRoutes:["/bg/websiteInfo","/bg/myArticles","/bg/issueArticle","/bg/updateArticle","/bg/deleteArticle","/bg/modifyLimits","/bg/resolveComment"]
            }
        },methods:{
            handleSelect(key) {
               this.$router.push(this.toRoutes[parseInt(key)]);
              }
        }
    }
</script>

<style scoped lang="less">

</style>