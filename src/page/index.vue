<template>
    <div class="index">
        <el-container class="head_underLine" >
                    <h1 class="logo">枫林的个人博客</h1>
                    <font_navHead >
                    </font_navHead>
        </el-container>
        <div class="ct-main">
                <el-container>
                    <el-main>
                        主题
                    </el-main>
                    <el-aside>
                        侧边
                    </el-aside>
                </el-container>
        </div>
        <el-container>
                <el-footer >
                    这是脚注信息
                </el-footer>
        </el-container>
    </div>



</template>

<script>
    import {getArticles} from  '../api/font/all'
    import font_navHead from "../components/font_index_navhead"
    export default {
        name: "index",
        data:function () {
            return {

            }
        },
        components:{
            font_navHead
        },mounted() {
            getArticles().then((res)=>{
                console.log(res);
            })
        }

    }
</script>

<style scoped lang="less">
.logo{
    display: block;
    float: left;
    margin-left: 250px;
    color: #409EFF;
}.head_underLine{
    border-bottom: #EBEEF5 1px solid;
    justify-content: space-between;
    height: 60px;
 }
.ct-main {
    min-height: 100%;
}
    .index{
        height: 100%;
    }
</style>