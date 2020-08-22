<template>
    <div class="webcontent">
        <h1>网站信息统计</h1>
        <el-row>
            <el-col :span="18" class="web_main">
                <el-row>
                    <el-col :span="11">
                        <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <span>访问量</span>
                          </div>
                          <careddiv>{{visitorsnum}}</careddiv>
                        </el-card>
                    </el-col>
                    <el-col :offset="1" :span="11">
                        <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <span>已发布文章</span>
                          </div>
                            <careddiv>{{articlenum}}</careddiv>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="11">
                        <el-card class="box-card">
                          <div slot="header" class="clearfix">
                              <span>评论</span>
                          </div>
                            <careddiv>{{commentnum}}</careddiv>
                        </el-card>
                    </el-col>
                    <el-col :offset="1" :span="11">
                        <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <span>点赞</span>
                          </div>
                            <careddiv>{{starnum}}</careddiv>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="11">
                        <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <span>踩</span>
                          </div>
                            <careddiv>{{unstarnum}}</careddiv>
                        </el-card>
                    </el-col>
                    <el-col :offset="1" :span="11">
                        <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <span>上次更新时间</span>
                          </div>
                            <careddiv>{{time}}</careddiv>
                        </el-card>
                    </el-col>
                </el-row>

            </el-col>

            <el-col  class="web_right" :span="5">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>系统信息</span>
                  </div>
                   <div>
                       <ul class="os_menu">
                           <li v-for="(value,key) in os" v-bind:key="key">
                               {{key}}:{{value}}
                           </li>
                       </ul>
                   </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getWebsiteInfo} from "../../api/bg/all"
    import careddiv from "../../components/bg_websitediv"
    export default {
        name: "websiteinfo",
        data:function(){
            return{
                articlenum:"",
                commentnum:"",
                starnum:"",
                time:"",
                unstarnum:"",
                visitorsnum:"",
                os:{}
            }
        },
        mounted() {
            getWebsiteInfo().then(res => {
                //console.log(res.data);
                ///console.log(this.articlenum);
                this.articlenum=res.data.articlenum;
                this.commentnum=res.data.commentnum;
                this.starnum=res.data.starnum;
                this.time=new Date(res.data.time).toLocaleString();
                this.unstarnum=res.data.unstarnum;
                this.visitorsnum=res.data.visitorsnum;
                this.os=res.data.os;
            })
        },
        components:{careddiv}
    }
</script>

<style scoped lang="less">
    .el-row{
        margin-bottom: 40px;
    }
    .os_menu{
        text-decoration: none;
        list-style: none;
        margin: 0 5px;
        padding: 0;
        li{
            margin: 20px 4px;
        }
    }
</style>