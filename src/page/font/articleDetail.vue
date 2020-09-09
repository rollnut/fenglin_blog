<template>
    <div>
        <el-container>
            <el-main>
                <div class="content-main">
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
                        <el-button size="mini" @click="handleStar(articleData.articleid)"> <img src="../../assets/star.png"/><span class="btn-text"> 点赞 {{articleData.star}}</span></el-button>
                        <el-button size="mini" @click="handleUnStar(articleData.articleid)"><span><img src="../../assets/unstar.png"/></span>  <span class="btn-text"> 踩 {{articleData.unstar}}</span></el-button>
                        <el-tooltip content="由于相关政策已关闭评论功能" placement="bottom" effect="light">
                          <el-button class="el-icon-chat-dot-square view"  disabled size="medium">评论</el-button>
                        </el-tooltip>

                    </div>
                    <div class="comment">
                        <p>暂无评论</p>
                    </div>
                </div>
            </el-main>
            <el-aside>
                <contactCode></contactCode>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
    import contactCode from "../../components/contactCode"
    import {getArticles, star, unstar} from '../../api/font/all'
    export default {
        name: "articleDetail"
        ,
        data:function () {
            return{
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
        components:{
            contactCode
        },
        methods:{
            randcss(){
                return this.tagCss[Math.floor(Math.random() * (3))]
            },
            handleStar(val){
                let flag=1;
                if (this.$cookies.isKey(val)){
                    flag=this.$cookies.get(val);
                }
                star({articleid:val,flag:flag}).then(res=>{
                       // console.log(res);
                        if (res.code===200){
                            ++this.articleData.star;
                            this.$message("点赞成功");
                            this.$cookies.set(val,0)
                        }
                        if (res.code===201){
                            --this.articleData.star;
                            this.$message("点赞取消");
                            this.$cookies.set(val,1)
                        }
                    })
            },
            handleUnStar(val){
                let flag=1;
                if(this.$cookies.isKey(`u`+val)){
                   flag=this.$cookies.get(`u`+val);
                    //console.log(flag);
                }
                unstar({articleid:val,flag:flag}).then(res=>{
                        //console.log(res);
                        if (res.code===200){
                            ++this.articleData.unstar;
                            this.$message("踩成功");
                            this.$cookies.set(`u`+val,0)
                        }
                        if (res.code===201){
                            --this.articleData.unstar;
                            this.$message("踩取消");
                            this.$cookies.set(`u`+val,1)
                        }
                    })
                }
        },
        mounted() {
            let articleid=this.$route.query.articleid;
            let password=this.$route.query.password;
            if (password){
                getArticles({articleid:articleid,password:password}).then(res=>{
                    //console.log(res);
                    if (res.data.flag===0){
                        this.$message({
                            type: 'error',
                            message: '密码错误,解密失败'
                        });
                        this.$router.go(-1)
                    }else if(res.code===200&&res.data.flag===1){
                        this.$message({
                            type: 'success',
                            message: '解密成功!'
                        });
                        this.articleData=res.data;
                        this.articleData.tag=this.articleData.tag[0].split(",")
                    }else{
                        console.log("未知错误");
                    }
                   // console.log(res);
                })
            }else {
                getArticles({articleid}).then(res=>{
                    if(res.code===200){
                        this.articleData=res.data;
                        this.articleData.tag=this.articleData.tag[0].split(",")
                    }else{
                        console.log("服务器异常");
                    }
                    //console.log(res);
                })
            }
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
</style>