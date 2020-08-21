import http from '../public'
const BaseUrl="http://localhost:8009/bg";
export const doLogIn=function (params) {
    return http.fetchPost(`${BaseUrl}/login`,params);
};