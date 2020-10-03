<template>
    <div>
        <el-row>
            <el-col :span="24" >
                <el-form ref="form"  :rules="rules" :model="form" label-width="80px" >
                  <el-form-item label="文章标题" prop="title">
                    <el-input v-model="form.title" type="text"></el-input>
                  </el-form-item>
                  <el-form-item label="描述" prop="description" >
                    <el-input type="textarea" v-model="form.description"    maxlength="80" show-word-limit :autosize="{ minRows: 2}"></el-input>
                  </el-form-item>
                  <mavon-editor class="me" ref="md" @imgAdd="$imgAdd" @imgDel="$imgDel" v-model="form.content"></mavon-editor>
                  <el-divider></el-divider>

                  <el-form-item label="开启评论" v-if="form.power" prop="openview">
                 <!-- <el-switch v-model="form.openview" active-value="1" inactive-value="0"></el-switch>-->
                      <el-switch v-model="form.openview" active-value="1" inactive-value="0">
                      </el-switch>
                  </el-form-item>
                  <el-form-item label="设为私密" v-if="form.power" prop="lock" >
                    <el-switch v-model="form.alock"  active-value='1'  inactive-value='0'></el-switch>
                  </el-form-item>
                  <el-form-item label="访问密码" v-show="form.alock==1" prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
                  </el-form-item>

                  <el-form-item label="类型"  prop="type" >
                    <el-input v-model="form.type"></el-input>
                  </el-form-item>
                  <el-form-item label="标签" prop="tag" >
                    <el-tag
                      :key="t"
                      v-for="t in form.tag"
                      closable
                      :disable-transitions="false"
                      @close="handleClose(t)">
                      {{t}}
                    </el-tag>
                    <el-input
                      class="input-new-tag"
                      v-if="inputVisible"
                      v-model="inputValue"
                      ref="saveTagInput"
                      size="small"
                      @keyup.enter.native="handleInputConfirm"
                      @blur="handleInputConfirm">
                    </el-input >
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                  </el-form-item>
                  <div class="line"></div>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit" v-prevent-click>立即上传</el-button>
                    <el-button @click="reset()" v-prevent-click>取消</el-button>
                  </el-form-item>

                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {uploadImg,deleteImg} from "../api/bg/all"
    export default {
        name: "issueArticle",
        data:function () {
            return{
                inputVisible: false,
                inputValue: '',//tag
                tmpForm: {
                    title: '',
                    openview: '0',
                    alock: '0',
                    description:"",
                    password: "",
                    content: "",
                    tag:[],
                    type:""
                },rules:{
                    title:[
                        {required:true, message:'请输入文章标题',trigger:'blur'}
                    ],
                    description:[
                        {required:true, message:'内容描述不能为空',trigger:'blur'},
                        {min:5,max:80, message:'输入的字符在5-80之间',trigger:'blur'}
                    ],type:[
                        {
                           required:true, message:'请输入文章类型',trigger:'blur'
                        }
                    ]
                }
            }
        },props:['form','onSubmit'],
      methods:{
            $imgAdd(pos,$file){
              var formdata=new FormData();
              formdata.append("file",$file);
              uploadImg(formdata).then((res)=>{
                this.$refs.md.$img2Url(pos,res.data.url);
              })
            },
            $imgDel(pos){
              let aim=pos[0].substr(pos[0].lastIndexOf("/"));
             // console.log(aim);
              deleteImg({path:aim}).then((res)=>{
                if (res.code===200){
                    this.$message.success("删除成功")
                }
              })
            },
             reset(){
                 this.$emit("resetForm")

             },
             handleClose(tag) {
                this.form.tag.splice(this.form.tag.indexOf(tag), 1);
              },

             showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {// eslint-disable-line no-unused-vars
                  this.$refs.saveTagInput.$refs.input.focus();
                });
              },
             handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                  this.form.tag.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
             }

        }
    }
</script>

<style scoped lang="less">
    .el-switch{
        position: absolute;
        left: 10px;
        top: 10px;
    }
    .el-form-item__content{
        display: flex;
    }
    .line{
        content: "";
        height: 20px;
    }
    .mavonEditor {
          width: 100%;
          height: 100%;
}
    .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .me{
    height: 500px;
  }
</style>