<template>
    <div>
        <el-container>
            <el-main>
                   <articleBox_font :articles="articles" :search="this.$store.getters.getSearch" ></articleBox_font>
            </el-main>
            <el-aside>
                    <userInfoWall></userInfoWall>
                    <tag-wall :tag="tags" :title="'标签墙'"></tag-wall>
            </el-aside>
        </el-container>

    </div>
</template>

<script>
    import store from "../../store/index"
    import articleBox_font from "../../components/articleBox_font"
    import userInfoWall from "../../components/UserInfo"
    import tagWall from "../../components/tagWall"
    export default {
        name: "Home",
        store,
        data: function () {
            return {
            }
        },
        components:{
            articleBox_font,
            userInfoWall,
            tagWall
        },
        props:["articles",'tags'],
        methods: {

        }
    }
</script>

<style scoped lang="less">

</style>