import http from '../public'
const BaseUrl="http://www.fenglingg.cn/apis/bg";
//const BaseUrl="http://www.fenglingg.cn:8888/bg";
export const doLogIn=function (params) {return http.fetchPost(`${BaseUrl}/login`,params);};
export const doLogout=function (params) {return http.fetchGet(`${BaseUrl}/logout`,params);};