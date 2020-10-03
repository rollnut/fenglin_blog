<template>
    <div>
        <editArticle :form="form" @resetForm="resetForm" :on-submit="onSubmit"> </editArticle>
    </div>
</template>

<script>
    import  editArticle from "../../components/editArticle"
    import {getArticle,updateArticle} from "../../api/bg/all"
    export default {
        name: "modifyArticle",
        components:{
            editArticle
        },data:function () {
            return {
                articleid:"",
                form: {
                    title: '',
                    openview: '0',
                    alock: '0',
                    description:"",
                    password: "",
                    content: "",
                    tag:[],
                    type:"",
                    power:false,//关闭修改权限
                }
            }
        },mounted(){
            let articleid=this.$route.query.articleid.replace(/"/g, "");
            this.articleid=articleid;
           // console.log(this.articleid);
            getArticle({articleid}).then((res)=>{
                //console.log(res);
                this.form=res.data;
                this.form.alock=this.form.alock.toString();
                this.form.openview=this.form.openview.toString();
                this.form.tag=this.form.tag[0].split(",")
            });

        },methods:{
            resetForm(){
                //console.log("reset");
                this.form={
                        title: '',
                        openview: '0',
                        alock: '0',
                        description:"",
                        password: "",
                        content: "",
                        tag:[],
                        type:""
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
                data.append("articleid",this.articleid);
                updateArticle(data).then(res=>{
                 //console.log(res);
                 if (res.code===200){
                      this.$message('上传成功');
                      this.$emit("resetForm")
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