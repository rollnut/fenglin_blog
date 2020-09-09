<template>
    <div>
        <el-table :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
            <el-table-column
                    label="标题"
                    prop="title">
            </el-table-column>
            <el-table-column
                      label="标签"
                      prop="tag">
            </el-table-column>
            <el-table-column
                      label="时间"
                      prop="date">
            </el-table-column>
            <el-table-column
                      label="评论"
                      prop="openview">
            </el-table-column>
            <el-table-column
                      label="私人"
                      prop="alock">

            </el-table-column>
            <el-table-column
              align="left">
                <!-- eslint-disable -->
              <template slot="header" slot-scope="scope"  >
                <el-input
                  v-model="search"
                  size="medium "
                  placeholder="输入关键字搜索"/>
              </template>
                <!-- eslint-disable -->
                <template slot-scope="scope">
                     <el-button
                      size="mini"
                      type="primary"
                      round
                      v-prevent-click
                      @click="handleView(scope.$index,scope.row)">评论开关</el-button>
                    <el-button
                      size="mini"
                      type="info"
                      round
                      v-prevent-click
                      @click="handleLock(scope.$index,scope.row)">私人开关</el-button>
                </template>


            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    import {getArticleMin,updateImit} from "../../api/bg/all"
    export default {
        name: "modifyLimits",
        data:function () {
            return {
                tableData:[],
                search:'',
            }
        },mounted() {
            getArticleMin().then(res=>{
            //console.log(res.data);
                if (res.code===200){
                     this.tableData=res.data
                }else {
                    console.log(res.msg);
                }


        });
        },methods:{
            handleView(index,row){
                //console.log(index);
                let val =row.openview.trim();
                row.openview=val==='1'? '0':'1';
                updateImit({articleid:row.articleid,openview:row.openview}).then((res)=>{
                    console.log(res);
                })
            },
            handleLock(index,row){
                 let val =row.alock.trim();
                  row.alock=val==='1'? '0':'1';
                  if (row.alock==='1'){
                    this.$prompt('请设置文章密码', {
                                      confirmButtonText: '确定',
                                      cancelButtonText: '取消',
                                      inputPattern: /^.{4,}$/,
                                      inputErrorMessage: '密码至少4位',
                                      inputType:'password'
                                    }).then(({ value }) => {
                                            updateImit({articleid:row.articleid,alock:row.alock,password:value}).then((res)=>{
                                            this.$message({
                                                type: 'success',
                                                message: '设置密码成功'
                                            });
                                            })
                                    }).catch(() => {
                                            row.alock=row.alock==='1'? '0':'1';
                                            this.$message({
                                                type: 'info',
                                                message: '取消输入'
                                            });
                                        });
                  }else{
                      updateImit({articleid:row.articleid,alock:row.alock}).then((res)=>{
                                        if (res.code===200) {
                                            this.$message({
                                                type: 'success',
                                                message: '密码删除成功'
                                            });
                                        }
                                    })
                }


            }
        }

    }
</script>

<style scoped lang="less">



</style>