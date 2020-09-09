<template>
    <div class="login">

        <el-container>
            <el-main>
                <div class="main">
                  <form id="logInForm">
                    <i  class="el-icon-user"></i>
                    <el-row :gutter="30">
                        <el-col :span="4" :offset="3">
                           <span>账号: </span>
                        </el-col>
                        <el-col :span="14">
                            <el-input
                              placeholder="请输入内容"
                              v-model.trim="account"
                              clearable>
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30">
                        <el-col :span="4" :offset="3">
                            <span> 密码:</span>
                        </el-col>
                        <el-col :span="14">
                            <el-input  placeholder="请输入密码" v-model.trim="password" show-password ></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="8" :span="4">
                              <el-button type="primary" round @click="dologin" v-prevent-click >登陆</el-button>
                        </el-col>
                        <el-col :span="4">
                            <el-button  round @click="reset" v-prevent-click>重置</el-button>
                        </el-col>

                    </el-row>
                  </form>
                </div>
            </el-main>
        </el-container>


    </div>
</template>

<script>
    import {doLogIn} from "../../api/bg/log.js"
    export default {
        name: "login",
        data:function () {
            return {
                account:"",
                password:""
            }
        },methods:{
            validata(){
                let flag;
                if (this.account===""){
                    flag=false;
                    this.openaccountmsg()
                }else if(this.password==="") {
                    flag=false;
                     this.openpasswordmsg()
                }else {
                    flag=true;
                }
                return flag

            },
            dologin(){
                let data=new FormData();
                data.append("account",this.account);
                data.append("password",this.password);
                let _this=this;
                if (this.validata()){
                    doLogIn(data).then(res=>{
                       if (res.code===200){
                        //跳转
                        this.opensuccessmsg();
                        setTimeout(function () {
                           _this.$router.push("/bg/index")
                        } ,1000)
                       }
                       else{
                          this.opendefualtmsg();
                       }
                    })
                }

            },
            reset(){
                this.account="";
                this.password="";
            },
            openaccountmsg(){
                this.$message.error('用户名不能为空');
            },
            openpasswordmsg(){
                this.$message.error('密码不能为空');
            },
            opensuccessmsg(){
                this.$message.success("登陆成功")
            },opendefualtmsg(){
                this.$message.error('账号或者密码不正确');
            }

        },beforeRouteEnter(to,from,next){
            doLogIn().then(function (res) {
                 if (res.code===302){
                     alert("你已经登陆过了");
                     next("/bg/index")

                 }else {
                     next();
                 }
            })
        }
    }
</script>

<style scoped lang="less">

    .login{
        background-color: rgba(250,200,50,0.7);
        width: 100%;
       min-height: 700px;
        background-color: #7347d7;
        display: flex;
        background-image: linear-gradient(-90deg,#7347d7,#435ad3);
       // filter: brightness(1.2);
        justify-items: center;
        //filter: alpha(0.6);
    }
    .main{
        position: absolute;
        margin: auto;
        width: 45%;
        top: 25%;
        left: 28%;
        border: antiquewhite 1px solid;
        padding: 60px 20px;
        background-color: #fff;
        border-radius: 5px;
        z-index: 2;
    }
    span{
        font-weight: 600;
        font-size: 24px;
    }
    .el-icon-user{
        font-size: 80px;
        margin-bottom: 50px;
    }
    .el-row{
        margin-bottom: 20px;
    }

</style>