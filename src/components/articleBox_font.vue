<template>
    <div>
        <div class="article_content"  v-for="(value,index) in eventType(currentType)" v-bind:key="index">
            <h4 class="title"> <el-link  :underline="false" class="route-link" @click="handeArticle(value)"> {{value.title}}</el-link></h4>
                    <div class="tags">
                        <el-tag v-for=" (x,index) in value.tag.split(',')" :type="randcss()" v-bind:key="index"
                                style="margin: 5px 4px">{{x}}
                        </el-tag>
                    </div>
            <p class="desc">{{value.description}} <span>...<el-link @click="handeArticle(value)" type="primary"> 查看更多</el-link></span></p>
            <p class="op">
                <el-link :underline="false"  class="view"><i class="el-icon-view"> </i><span>{{value.clicks}}</span></el-link>
                <!--<el-link :underline="false" class="star"  @click="handleStar(value.articleid)"><img src="../assets/star.png"/></el-link>
                <el-link :underline="false" class="unstar" @click="handleUnStar(value.articleid)"><img src="../assets/unstar.png"/></el-link>-->
                <el-link :underline="false" class="actime"><span>时间:</span>{{new Date(value.date).toLocaleDateString()}}</el-link>

            </p>

        </div>

    </div>
</template>

<script>
    import store from "../store/index"
    import {star,unstar} from "../api/font/all"
    export default {
        name: "articleBox",
        store,
        data:function () {
            return{
                 tagCss:["success","info","warning",""]
            }
        }
        ,props:{
            articles:Array,
            search:String,
            currentType:String
        },
        methods:{
            randcss(){
                return this.tagCss[Math.floor(Math.random() * (3))]
            },
            handeArticle(val){
                //console.log(val.alock);
                if (parseInt(val.alock)===1){//文章上锁
                                        this.$prompt('请输入文章密码', {
                                      confirmButtonText: '确定',
                                      cancelButtonText: '取消',
                                      inputPattern: /^.{4,}$/,
                                      inputErrorMessage: '密码不少于4位',
                                      inputType:'password'
                                    }).then(({ value }) => {
                                            this.$router.push({path:'/articleDetail',query:{articleid:val.articleid,password:value}});

                                    }).catch(() => {
                                            this.$message({
                                                type: 'info',
                                                message: '取消输入'
                                            });
                                        });
                }else{
                    this.$router.push({path:'/articleDetail',query:{articleid:val.articleid}})
                }

            },
            eventType(name){
                return this.articles.filter(function (obj) {
                    if (name==="全部"||name===null)
                        return  obj;
                    else {
                         return obj.type===name
                    }
                }).filter(data => !this.search || data.title.toLowerCase().includes(this.search.toLowerCase()))
            }
            ,
            handleStar(val){
                let flag=1;
                if (this.$cookies.isKey(val)){
                    flag=this.$cookies.get(val);
                }
                star({articleid:val,flag:flag}).then(res=>{
                       // console.log(res);
                        if (res.code===200){
                            this.$message("点赞成功");
                            this.$cookies.set(val,0)
                        }
                        if (res.code===201){
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
                            this.$message("踩成功");
                            this.$cookies.set(`u`+val,0)
                        }
                        if (res.code===201){
                            this.$message("踩取消");
                            this.$cookies.set(`u`+val,1)
                        }
                    })
                }
            }

    }
</script>

<style scoped lang="less">

    .tags {
        margin: 8px 0;
        span{
           margin-right: 5px;
        }
    }
     .article_content{
        background-color: #fff;
        min-height: 180px;
        border: #eee solid 1px;
        padding: 20px 20px 0;
        text-align: left;
         margin: 4px 0px;
         p{
             white-space: pre;
         }

    }
    .desc{
        margin: 5px 2px;
        border-bottom: #eee solid 1px;
        border-top: #eee solid 1px;
        padding: 5px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 200;
        color: #444;
    }
    .op{
        margin: 15px 2px;
        color: #888;
        padding-left: 5px;
        img{
            width: 22px;
            height: 22px;

        }
        .view{
            margin:  0px 3%;
        }
        .star,.unstar{
            margin:  0px 10%;
        }
        .actime{
            position: relative;
            float: right;
            margin-right: 5%;
        }
    }
    .title {
        margin: 0;
        line-height: 36px;
        word-wrap: break-word;
        a{
            color: #333;
            font-size: 20px;
            font-weight: 100;
        }
    }


</style>