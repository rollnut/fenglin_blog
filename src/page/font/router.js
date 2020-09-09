import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
};
const routes = [
    {
    path: '/',
    alias:"/index",
    name: 'font',
    component:() => import( '../../page/font/index.vue'),
    children: [
      {
        path:"Home",name:"Home",component:()=>import("../../page/font/Home"),
      },
      {
        path:"articles",name:"articles",component:()=>import("../../page/font/articles"),
      },
      {
        path:"about",name:"about",component:()=>import("../../page/font/about"),
      },
      {
         path:"articleDetail",name:"articleDetail",component:()=>import("../../page/font/articleDetail"),
      },
      {
         path:"timeline",name:"timeline",component:()=>import("../../page/font/timeline"),
      }
    ],
    redirect: "Home"
  }
];
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});
export default router