<template>
    <div class="block">
          <el-timeline v-for="(value,index) in eventData" :key="index">
            <el-timeline-item :timestamp="handleTime(value.date,'yyyy-MM-dd')" placement="top">
              <el-card>
                <h4><i  :class="classJustfy(value.type)" style="font-size:24px"></i><div class="eventName"> {{value.type}}</div>  <div class="eventItem"> {{value.title}}</div> </h4>
                <p> 提交于  {{handleTime(value.date,"yyyy-MM-dd hh:mm:ss")}}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
    </div>
</template>

<script>
    import time from "../../utils/time"
    import {getEventFlow} from "../../api/font/all";

    export default {
        name: "timeline",
        data:function (){
            return{
                eventData:{}
            }
        },mounted() {
            getEventFlow().then(res=>{
                console.log(res);
                if (res.code===200){
                    this.eventData=res.data;
                   // console.log(this.eventData);
                }else {
                     console.log(res);
                }
            })
        },
        methods:{
            handleTime:function (val,fmt) {
                return time({time:val,fmt:fmt})
            },
            classJustfy(value){
                return{
                      'el-icon-upload':value === '发布',
                      'el-icon-edit':value === '修改'
                }

            }
        }
    }
</script>

<style scoped lang="less">
.block{
    text-align: left;
}
    h4{

    }
    .eventName{
        font-weight: 900;
        display: inline-block;
        margin: 0 20px 0 5px;
    }
    .eventItem{
        color: #409EFF;
         display: inline-block;
    }
</style>