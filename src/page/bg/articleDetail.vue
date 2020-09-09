<template>
    <div class="el-container">
       <div class="outer">
           <div class="inner">
               <h2 class="title">{{articleData.title}}</h2>
                    <div class="subInfo">
                         <span><i class="el-icon-view"></i> {{articleData.clicks}}</span>
                         <span >{{new Date(articleData.date).toLocaleString()}}</span>
                        <span>标签:</span>
                        <el-tag v-for=" (x,index) in articleData.tag" :type="randcss()" v-bind:key="index"  style="margin: 0px 4px">
                           {{x}}
                        </el-tag>
                    </div>
                    <div class="content-text">
                        <mavon-editor
                                class="md"
                                :value="articleData.content"
                                :subfield="mdprop.subfield"
                                :defaultOpen="mdprop.defaultOpen"
                                :editable="mdprop.editable"
                                :toolbarsFlag="mdprop.toolbarsFlag"
                                :scrollStyle="mdprop.scrollStyle"></mavon-editor>
                    </div>
                    <div class="btns">
                        <el-button size="mini"><img src="../../assets/star.png"/><span class="btn-text"> 点赞 {{articleData.star}}</span></el-button>
                        <el-button size="mini" ><span><img src="../../assets/unstar.png"/></span>  <span class="btn-text"> 踩 {{articleData.unstar}}</span></el-button>
                    </div>
                    <div class="comment">
                        <p>暂无评论</p>
                    </div>
           </div>
       </div>


        </div>
</template>

<script>
    import {getArticle} from "../../api/bg/all";

    export default {
        name: "articleDetail",
        data:function () {
            return {
                articleData:"",
                tagCss:["success","info","warning",""],
                mdprop:{//md配置
                    subfield: false,// 单双栏模式
                    defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
                    editable: false,	// 是否允许编辑
                    toolbarsFlag: false,
                    scrollStyle: false
                }
            }
        },
        methods:{
              randcss(){
                return this.tagCss[Math.floor(Math.random() * (3))]
            }
        },
        mounted() {
              let articleid=this.$route.query.articleid;
              getArticle({articleid}).then(res=>{
                    if(res.code===200||res.code===201){
                        this.articleData=res.data;
                        this.articleData.tag=this.articleData.tag[0].split(",")
                    }else{
                        console.log(res);
                    }
                })
        }
    }
</script>

<style scoped lang="less">

.subInfo{
    min-height: 40px;
    background: #EBEEF5;
    border: 1px solid transparent;
    border-radius: 4px;
}
    .title{
        display: flex;

    }
    .content-main{
        padding: 5px 20px;
    }
    .subInfo{
        display: flex;
        justify-content: left;
        padding: 10px 5px;
        span{
            margin: 2px 10px;
        }
    }
    .content-text{
        padding: 20px 5px;
         height: 100%;
    }
    .main{
        height: 500px;
    }
    .view{
       font-size: 14px;
    }
    .btns{
        display: flex;
        img{
            width: 14px;
            height: 14px;
        }
    }
    .btn-text{
        display: inline-block;
        text-align: center;
        line-height: 14px;
    }
    .comment{
        margin: 10px 0;
        padding:10px 5px;
        background-color: #EBEEF5;
        min-height: 100px;
        p{
            color: #909399;
        }
    }
    .outer{
        overflow: hidden;
        width: 105%;

    }
    .inner{
        overflow-y: scroll;
        overflow-x: hidden;
        width: 102%;
    }
</style>