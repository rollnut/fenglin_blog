<template>
    <div class="userInfoWall">
        <p>author: 枫林</p>
        <p>博客: <span class="p-item">{{articleNum}}</span></p>
        <p><img src="../assets/star.png" alt="点赞"><span class="p-item">{{star}}</span></p>
        <p><img src="../assets/unstar.png" alt="点赞"><span class="p-item">{{unstar}}</span></p>
    </div>
</template>

<script>
    import {getWebsiteInfo} from "../api/bg/all"
    export default {
        name: "UserInfo",
        data:function () {
            return {
                articleNum:"",
                star:"0",
                unstar:"0"
            }
        },
        components:{
        },
        mounted() {
            getWebsiteInfo().then((res)=>{
               // console.log(res);
                if (res.code===200){
                    this.articleNum=res.data.articlenum;
                    this.star=res.data.starnum;
                    this.unstar=res.data.unstarnum;
                }else {
                    console.log(res.msg);
                }

            })
        }
    }
</script>

<style scoped lang="less">
.userInfoWall{
    min-height:200px;
    font-size:16px;
    line-height: 18px;
    margin: 15px 0;
    color: #606266;
    p{
        text-align: left;
        padding-left: 25px;
        display: flex;
        align-items: center;
    }
    .p-item{
        margin-left:20px;
        vertical-align: middle;
       // text-orientation: mixed;
    }
}

</style>