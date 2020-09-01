<template>
    <div class="about">
        <div class="el-container">
            <div class="el-main">
                <h4 class="title">关于本站</h4>
                <p class="desc">
                    本站是作为菜鸟的我的处女作，功能项目十分的简单，但是我依然开发过程断断续续，不知不觉花费了大量的时间，也认识到了技术的提示往往靠学理论是不够的。本站是在我学完VUE和NODE之后开发的，可
                    有很多不足，但我之后应该会完善的，以后也是可能会退出新板块。 当我写到最后这个页面时，我想起一句话，这里送给大家“纸上得来终觉浅,绝知此事要躬行”。
                    今后我会在这里分享我学习的心得体会，和学习笔记。That's all.
                </p>
                <h5>本站使用的技术栈</h5>
                <div>
                    <ul>
                        <li>VUE</li>
                        <li>NODE</li>
                        <li>MYSQL</li>
                        <li>NGINX</li>
                        <li>mavon-editor</li>
                        <li>其他小插件</li>
                    </ul>
                </div>
                 <h5>开发理论</h5>
                <p>采用前后端分离式的编程模式，node提供api数据接口，vue进行前端渲染和交互，服务器端由Nginx提供反向代理</p>
                <h5>已实现的功能</h5>
                <ul>
                    <li>后台管理系统</li>
                    <li>发布文章</li>
                    <li>文章管理(增删改查)</li>
                    <li>文章权限管理</li>
                    <li>分类检索文章</li>
                    <li>文章展示与交互(点赞，点击)</li>
                    <li><del>评论(政策相关已废弃)</del></li>
                </ul>
                <h5>
                    联系方式
                </h5>
                <p> <span>邮箱：1453117401@qq.com</span> 或者扫描主页的二维码联系我。</p>
                <p> ps：如果想要项目源码</p>
            </div>
        </div>




    </div>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped lang="less">
.title{
    text-align: left;
    padding-left:20px;
}
    .desc,p{
        font-size: 16px;
        background-color: #eeeeee;
        padding: 10px 20px;
        text-align: left;
    }
    h5{
        text-align: left;
         padding-left:20px;
    }
    ul {
        text-align: left;
        background-color: #eeeeee;
        padding: 5px 50px
    ;
    }
</style>