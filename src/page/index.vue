<template>
    <div class="index">
        <el-container class="head_underLine" >
                    <h1 class="logo">枫林的个人博客</h1>
                    <font_navHead></font_navHead>
        </el-container>
        <div class="ct-main">
                <Home :articles="articles" :tags="tag"></Home>
                <router-view></router-view>
        </div>
        <el-container>
                <el-footer >
                    这是脚注信息
                </el-footer>
        </el-container>
    </div>



</template>

<script>
    import store from '../store/index'
    import {getArticles} from  '../api/font/all'
    import font_navHead from "../components/font_index_navhead"
    import Home from "./font/Home"
    export default {
        name: "index",
        store,
        data:function () {
            return {
                articles:[],
                tag:[]
            }
        },
        components:{
            font_navHead,
            Home
        },mounted() {
            getArticles({}).then((res)=>{
                if (res.code===200){
                    console.log(res);
                     this.articles=res.data;
                    for( let x in res.data){
                        this.tag=[...this.tag,...res.data[x].tag.split(",")];
                        this.tag=[...new Set(this.tag)];
                    }
                }else {
                    console.log(res.msg);
                }
            })
        },methods:{
/*            handlesearch(vals){
                //filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))
                console.log(vals);
                let articles= this.articles;
                 this.articles=articles.filter(articles=>!vals||articles.title.toLowerCase().includes(vals.toLowerCase()));
            }*/
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