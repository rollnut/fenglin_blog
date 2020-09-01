import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import {doLogIn} from "../api/bg/log"
const whiteList=["/login","/Home","/about","/articles","/","/articleDetail","/index",'/timeline'];
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const routes = [
    {
        path:"/login",name:"login", component:() => import( '../page/login.vue')
      },
/*  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  },*/
  {
    path: '/bg',
    name: 'bg',
    alias:"/bg/index",
    children:[
      {
        path:"websiteInfo", name:"websiteInfo", component:() => import( '../page/bg/websiteInfo.vue')
      },
      {
        path:"myArticles",name:"myArticles",component:() => import( '../page/bg/myArticles.vue')
      },
      {
        path:"issueArticle",name:"issueArticle",component:() => import( '../page/bg/issueArticle.vue')
      },
      {
        path:"updateArticle",name:"updateArticle",component:() => import( '../page/bg/updateArticle.vue')
       // children: [{path:"modifyArticle",name:"modifyArticle",component:()=>import("../page/bg/modifyArticle.vue")}]
      },

      {
        path:"modifyLimits",name:"modifyLimits",prop:true,component:() => import( '../page/bg/modifyLimits.vue')
      },
      {
        path:"resolveComment",name:"resolveComment",component:() => import( '../page/bg/resolveComment.vue')
      },
      {
        path:"modifyArticle",name:"modifyArticle",component:()=>import("../page/bg/modifyArticle.vue")
      },
      {
        path:"articleDetail",name:"articleDetail",component:()=>import("../page/bg/articleDetail.vue")
      }
    ],component:() => import( '../page/bg/index.vue'),
    redirect:"/bg/websiteInfo"
  },{
    path: '/',
    alias:"/index",
    name: 'font',
    component:() => import( '../page/index.vue'),
    children: [
      {
        path:"Home",name:"Home",component:()=>import("../page/font/Home"),
      },
      {
        path:"articles",name:"articles",component:()=>import("../page/font/articles"),
      },
      {
        path:"about",name:"about",component:()=>import("../page/font/about"),
      },
      {
         path:"articleDetail",name:"articleDetail",component:()=>import("../page/font/articleDetail"),
      },
      {
         path:"timeline",name:"timeline",component:()=>import("../page/font/timeline"),
      }
    ],
    redirect: "/Home"
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,from,next)=>{
  if (whiteList.includes(to.path)===true){//过滤不需要登陆的页面需要
    next();
  }else {
    doLogIn().then(res=>{
    if (res.code===302){//已登陆过
      next();
    }else{
      next("/login");
        }
  })
  }
  });
export default router
