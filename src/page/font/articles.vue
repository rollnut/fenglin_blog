<template>
    <div class="articles">
        <el-container>
            <el-main>
                <div class="classBar">
                    <p  >
                        <span class="title">分类:</span>
                        <el-button type="info" plain v-for=" (value,index) in type" v-bind:key="index"
                                   v-bind:class="{ active:index===current}" @click="addClass(index,$event)">
                             <span>{{value}}</span>
                        </el-button>
                    </p>
               </div>
                <div class="articleList">
                    <h4><i class="el-icon-s-flag"></i>文章列表</h4>
                </div>
                <articleBox_font :articles="articles" :search="this.$store.getters.getSearch" :current-type="currentType"></articleBox_font>
            </el-main>

            <el-aside>

                <userInfoWall></userInfoWall>
                <tagWall :title="title" :tag="tag"></tagWall>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
    import {getArticles} from "../../api/font/all";
    import articleBox_font from "../../components/articleBox_font"
    import  tagWall from  "../../components/tagWall"
    import userInfoWall from "../../components/UserInfo"
    export default {
        name: "articles",
        data:function () {
            return{
                tag:[],
                current:0,
                currentType:"全部",
                title:"标签墙",
                type:["全部"],
                articles:[],
            }
        },
        components:{
            tagWall,
            articleBox_font,
            userInfoWall
        },
        methods:{
            addClass(index,$event){
                this.current=index;
                let el = $event.currentTarget;
                //console.log(el.innerText);
                this.currentType=el.innerText
            },
            eventType(name){
                return this.articles.filter(function (obj) {
                    if (name==="全部")
                        return  obj;
                    else {
                         return obj.type===name
                    }
                })
            },
        },
        mounted() {
            this.currentType=this.$route.query.type||"全部";
            getArticles({}).then(res=>{
           // console.log(res.data);
            for (let x in res.data){
                this.tag=[...this.tag,...res.data[x].tag.split(",")];
                this.tag=[...new Set(this.tag)];
                this.type.push(res.data[x].type);
            }
             this.type=[...new Set(this.type)];
             this.current=this.type.indexOf(this.currentType)
             this.articles=res.data
        });
        }
    }
</script>

<style scoped lang="less">
.articles{
    margin: 10px 0;
}
.classBar {
    margin: 0;
    display: flex;
    padding: 0;
    border-bottom: 1px solid #eee;
    p {
        display: inline-flex;
        padding: 10px 0;
        font-size: 15px;
        line-height: 22px;
        width: 100%;
    }

    .title {
        display: inline-block;
        flex: 0 0 60px;
        width: 60px;
        font-size: 17px;
        line-height: 22px;
        padding: 4px 0;
        font-weight: 700;
        color: #333;
        margin-right: 5px;
    }

    .active {
        background: #909399;
        color: #fff;
    }
}
.articleList{
        text-align: left;
        font-size: 28px;
        margin: 10px 5px;
    }
</style>