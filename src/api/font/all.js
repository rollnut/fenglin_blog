import http from '../public'
const BaseUrl="http://localhost:8009/font";
export const getArticles=function (params) {return http.fetchGet(`${BaseUrl}/getarticles`,params);};
export const getArticleById=function (params) {return http.fetchGet(`${BaseUrl}/getarticles`,params);};
export const getArticleByIdAndPWD=function (params) {return http.fetchGet(`${BaseUrl}/getarticles`,params);};
export const star=function (params) {return http.fetchGet(`${BaseUrl}/updatestar`,params);};
export const unstar=function (params) {return http.fetchGet(`${BaseUrl}/updateunstar`,params);};
