<template>
    <div class="index">
            <el-container class="head_underLine" >
                    <h1 class="logo">枫林的个人博客</h1>
                    <font_navHead :type="type"></font_navHead>
            </el-container>
            <div class="ct-main">
                    <router-view></router-view>
            </div>
            <el-container>
                    <el-footer>
                        <myfooter></myfooter>
                    </el-footer>
            </el-container>
            <template>
                <el-backtop target=".index " :bottom="50"  :right="100"></el-backtop>
            </template>
    </div>
</template>

<script>
    import store from '../../store'
    import {getArticles} from '../../api/font/all'
    import font_navHead from "../../components/font_index_navhead"
    import myfooter from "../../components/myfooter"
    export default {
        name: "index",
        store,
        data:function () {
            return {
                articles:[],
                tag:[],
                type:[]
            }
        },
        components:{
            font_navHead:font_navHead,
            myfooter:myfooter
        },mounted() {
            getArticles({}).then((res)=>{
                if (res.code===200){
                    //console.log(res);
                     this.articles=res.data;
                    for( let x in res.data){
                        this.tag=[...this.tag,...res.data[x].tag.split(",")];
                        this.type.push(res.data[x].type);
                    }
                    this.tag=[...new Set(this.tag)];
                    this.type=[...new Set(this.type)];

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
    margin-left: 15%;
    color: #409EFF;
}.head_underLine{
    border-bottom: #EBEEF5 1px solid;
    justify-content: space-between;
    height: 60px;
 }
.ct-main {
    min-height: 90%;
    padding-top: 20px;
}
.index{
    height: 100%;

}
</style>