<template>
    <div>
        <el-row :gutter="40">
            <el-col :span="18">
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
                    <i class="el-icon-s-flag"></i>
                    文章列表
                </div>
                <articleBox v-bind:articles="articles" v-bind:current-type="currentType"></articleBox>
            </el-col>
            <el-col :span="5">
                <tagWall v-bind:tag="tag" v-bind:title="title"></tagWall>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import articleBox from "../../components/articleBox"
    import  tagWall from  "../../components/tagWall"
    import {getArticleMin} from "../../api/bg/all"
    export default {
        name: "myArticles",
        data:function () {
            return{
                tag:[],
                current:0,
                currentType:"全部",
                title:"标签墙",
                type:["全部"],
                articles:[],
            }
        }
        ,
        components:{
            articleBox,
            tagWall
        }
        ,
        methods:{
            addClass(index,$event){
                this.current=index;
                let el = $event.currentTarget;
                //console.log(el.innerText);
                this.currentType=el.innerText
            }

        },
        mounted() {
        getArticleMin().then(res=>{
            //console.log(res.data);
            if (res.code===200){
                for (let x in res.data){
                this.tag=[...this.tag,...res.data[x].tag.split(",")];
                this.tag=[...new Set(this.tag)];
                this.type.push(res.data[x].type);
                }
                 this.type=[...new Set(this.type)];
                 this.articles=res.data

            }


        });

        }
    }
</script>

<style scoped lang="less">
.classBar {
    margin: 0;
    display: flex;
    padding: 0;

    p {
        display: inline-flex;
        padding: 10px 0;
        font-size: 15px;
        line-height: 22px;
        border-bottom: 1px solid #eee;
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