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
          <el-menu-item index="1" @click="to('Home')">主页</el-menu-item>
          <el-submenu index="2" >
            <template slot="title">全部文章</template>
              <div v-for="x in type" :key="x" >
                  <el-menu-item :index="x" @click="handleType(x)">{{x}}</el-menu-item>
              </div>
          </el-submenu>
            <el-menu-item index="3" @click="to('timeline')">时光轴</el-menu-item>
          <el-menu-item index="4" @click="to('about')">关于本站</el-menu-item>
          <el-menu-item index="5" disabled>更多板块</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import store from '../store/index'
    export default {
        name: "font_index_navhead",
        store,
        props:["type"],
        data:function () {
            return {
                activeIndex:"",
                search:"",
            }
        },methods:{
            handleSelect(val){
                //console.log(val);
            },emitListener(val){
                this.$store.commit("setSearch",val);
                //this.$store.state.search=val;//保存搜索框的值
            },
            handleType(x){
                this.$router.push({name:"articles",query:{type:x}})
            },
            to(val){
                this.$router.push({name:val});
            }
        },
    }
</script>

<style scoped lang="less">
.el-menu-demo{
     float: right;
}
</style>