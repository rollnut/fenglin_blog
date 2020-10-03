<template>
    <editArticle :form="form" @resetForm="resetForm" :on-submit="onSubmit"></editArticle>
</template>

<script>
    import {insertArticle} from "../../api/bg/all"
    import  editArticle from "../../components/editArticle"
    export default {
        name: "issueArticle",
        data:function () {
            return{
                form: {
                    title: '',
                    openview: '0',
                    alock: '0',
                    description:"",
                    password: "",
                    content: "",
                    tag:[],
                    type:"",
                    power:true,
                }
            }
        },
      components: {
        editArticle
      },
      methods:{
          resetForm(){
            this.form={
                    title: '',
                    openview: '0',
                    alock: '0',
                    description:"",
                    password: "",
                    content: "",
                    tag:[],
                    type:"",

                }
          },
          onSubmit(){
              let data=new FormData();
                data.append("title",this.form.title);
                data.append("openview",this.form.openview);
                data.append("alock",this.form.alock);
                data.append("description",this.form.description);
                if ( this.form.alock=='1'){data.append("password",this.form.password);}
                data.append("tag",this.form.tag);
                data.append("type",this.form.type);
                data.append("content",this.form.content);

             insertArticle(data).then(res=>{
                 if (res.code===200){
                      this.$message('上传成功');
                      this.resetForm()
                 }else {
                     this.$message.error('发生错误，上传失败');
                 }
             });
          }
        }
    }
</script>

<style scoped lang="less">


</style>