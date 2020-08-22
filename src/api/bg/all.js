import http from '../public'
const BaseUrl="http://localhost:8009/bg";
export const getWebsiteInfo=function (params) {return http.fetchGet(`${BaseUrl}/getwebsiteinfo`,params);};
export const getArticleMin=function (params) {return http.fetchGet(`${BaseUrl}/getarticlemin`,params);};
export const getArticle=function (params) {return http.fetchGet(`${BaseUrl}/getarticle`,params);};
export const uploadImg=function (params) {return http.fetchPost(`${BaseUrl}/uploadImg`,params);};
export const insertArticle=function (params) {return http.fetchPost(`${BaseUrl}/insertarticle`,params);};
export const deleteImg=function (params) {return http.fetchGet(`${BaseUrl}/deleteImg`,params);};
export const deleteArticle=function (params) {return http.fetchGet(`${BaseUrl}/deletearticle`,params);};
export const updateArticle=function (params) {return http.fetchPost(`${BaseUrl}/updatearticle`,params);};
export const updateImit=function (params) {return http.fetchGet(`${BaseUrl}/limits`,params);};

