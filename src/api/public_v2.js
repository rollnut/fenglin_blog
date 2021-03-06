import axios from "axios";
axios.defaults.timeout = 5000;
axios.defaults.withCredentials =true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded';

const Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this,...args,callback)
        }
    }
};
const fetchget=Thunk(axios.get);
fetchget(url,params)(callback);
export default {
    fetchGet(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params}).then(res=>{
            // eslint-disable-next-line no-console
            resolve(res.data)
        }).catch(err=>{
             reject(err)
        });
    })
    },
    fetchPost(url,params){
        return new Promise((resolve,reject)=>{
        axios.post(url,params).then(res=>{
            resolve(res.data)
        }).catch(err=>{
             reject(err)
        });
    })
    }
}