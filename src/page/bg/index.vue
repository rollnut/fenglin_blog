<template>
    <div class="bg_index">
        <el-container>
          <el-header>
              <bg_index_navhead></bg_index_navhead>
          </el-header>
          <el-container>
            <el-aside >
               <bg_index_navleft></bg_index_navleft>
            </el-aside>
            <el-container id="index_contain">
              <el-main style="overflow: -moz-scrollbars-none">
                <router-view></router-view>
              </el-main>
            </el-container>
          </el-container>
            <el-footer>
                <bgFooter></bgFooter>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import bg_index_navhead from "../../components/bg_index_navhead"
    import bg_index_navleft  from "../../components/bg_index_navleft"
    import bgFooter from "../../components/myfooter"
    export default {
        name: "index",
        components:{
            bg_index_navhead,
            bg_index_navleft,
            bgFooter
        },
        data:function () {
            return{

            }
        }
    }
</script>

<style scoped lang="less">
    .el-aside{
        overflow: hidden;
    }
</style>