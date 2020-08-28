<template>
    <div class="tags">
        <el-card class="box-card" shadow="never">
                  <h5>{{title}}</h5>
                   <div class="tags">
                       <el-tag v-for=" (x,index) in tag" :type="randcss()" v-bind:key="index"  style="margin: 5px 4px">
                           {{x}}
                       </el-tag>
                   </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "tagWall",
        props:["tag","title"],
        data:function () {
            return{
                tagCss:["success","info","warning",""]
            }
        },
        methods:{
            randcss(){
                return this.tagCss[Math.floor(Math.random() * (3))]
            }
        }
    }
</script>

<style scoped lang="less">
    .tags {
        span{
           margin-right: 5px;
        }
    }
</style>