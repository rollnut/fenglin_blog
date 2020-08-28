<template>
    <div>
        <el-container>
            <el-main>
                   <articleBox_font :articles="articles" :search="this.$store.getters.getSearch"  :current-type="'全部'"></articleBox_font>
            </el-main>
            <el-aside>
                    <userInfoWall></userInfoWall>
                    <tag-wall :tag="tag" :title="'标签墙'"></tag-wall>
            </el-aside>
        </el-container>

    </div>
</template>

<script>
    import store from "../../store/index"
    import articleBox_font from "../../components/articleBox_font"
    import userInfoWall from "../../components/UserInfo"
    import tagWall from "../../components/tagWall"
    import {getArticles} from  '../../api/font/all'
    export default {
        name: "Home",
        store,
        data: function () {
            return {
                tag:[],
                articles:[]
            }
        },
        components:{
            articleBox_font,
            userInfoWall,
            tagWall
        },
        methods: {
        },mounted() {
            getArticles({}).then((res)=>{
                if (res.code===200){
                    //console.log(res);
                     this.articles=res.data;
                    for( let x in res.data){
                        this.tag=[...this.tag,...res.data[x].tag.split(",")];
                    }
                    this.tag=[...new Set(this.tag)];
                }else {
                    console.log(res.msg);
                }
            })
        }
    }
</script>

<style scoped lang="less">

</style>