<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

          <el-menu-item>
              <el-input
                    v-model="search"
                     size="medium"
                    @input="emitListener(search)"
                     placeholder="输入关键字搜索"/>
          </el-menu-item>
          <el-menu-item index="1">主页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">文章</template>
            <el-menu-item index="2-1">文章1</el-menu-item>
            <el-menu-item index="2-2">文章12</el-menu-item>
            <el-menu-item index="2-3">文章13</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>更多板块</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">联系方式</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import store from '../store/index'
    export default {
        name: "font_index_navhead",
        store,
        data:function () {
            return {
                activeIndex:"",
                search:""
            }
        },methods:{
            handleSelect(val){
                console.log(val);
            },emitListener(val){
                this.$store.commit("setSearch",val);
                //this.$store.state.search=val;//保存搜索框的值
            }
        },
    }
</script>

<style scoped lang="less">
.el-menu-demo{
     float: right;
}
</style>