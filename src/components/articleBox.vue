<template>
    <div>
        <div class="article_content"  v-for="(value,index) in eventType(currentType)" v-bind:key="index">
            <h4 class="title"><el-link :underline="false" @click="handlelip(value.articleid)">{{value.title}} </el-link></h4>
                    <div class="tags">
                        <el-tag v-for=" (x,index) in value.tag.split(',')" :type="randcss()" v-bind:key="index"
                                style="margin: 5px 4px">{{x}}
                        </el-tag>
                    </div>
            <p class="desc">{{value.description}} <span>... <el-link type="primary" @click="handlelip(value.articleid)">查看更多</el-link></span></p>
            <p class="op"> <el-link :underline="false"> <span>时间:</span>{{new Date(value.date).toLocaleDateString()}}</el-link></p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "articleBox",
        data:function () {
            return{
                 tagCss:["success","info","warning",""]
            }
        }
        ,props:{
            articles:Array,
            currentType:String
        },
        methods:{
            eventType(name){
                return this.articles.filter(function (obj) {
                    if (name==="全部")
                        return  obj;
                    else {
                         return obj.type===name
                    }
                })
            },
            randcss(){
                return this.tagCss[Math.floor(Math.random() * (3))]
            },
            handlelip(val){
                this.$router.push({path:"/bg/articleDetail",query:{articleid:val}})
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