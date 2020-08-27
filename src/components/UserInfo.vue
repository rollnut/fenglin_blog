<template>
    <div class="userInfoWall">
        <p>author: 枫林</p>
        <p>博客: <span class="p-item">{{articleNum}}</span></p>
        <p><img src="../assets/star.png" alt="点赞"><span class="p-item">{{star}}</span></p>
        <p><img src="../assets/unstar.png" alt="点赞"><span class="p-item">{{unstar}}</span></p>
        <div>
            <h5>联系方式</h5>
            <img src="../assets/logo.png" alt="二维码">
        </div>
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
        mounted() {
            getWebsiteInfo().then((res)=>{
                console.log(res);
                this.articleNum=res.data.articlenum;
                this.star=res.data.starnum;
                this.unstar=res.data.unstarnum;
            })
        }
    }
</script>

<style scoped lang="less">
.userInfoWall{
    min-height:300px;
    border-left:1px solid #888888;
    font-size:16px;
    line-height: 18px;
    margin: 15px 0;
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