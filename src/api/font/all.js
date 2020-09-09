import http from '../public'
const BaseUrl="http://www.fenglingg.cn/apis/font";
//const BaseUrl="http://www.fenglingg.cn:8888/font";
export const getArticles=function (params) {return http.fetchGet(`${BaseUrl}/getarticles`,params);};
export const star=function (params) {return http.fetchGet(`${BaseUrl}/updatestar`,params);};
export const unstar=function (params) {return http.fetchGet(`${BaseUrl}/updateunstar`,params);};
export const getEventFlow=function (params) {return http.fetchGet(`${BaseUrl}/getEventFlow`,params);};
