import axios from 'axios'
import { Toast } from 'antd-mobile'
const service = axios.create({
    // baseURL: process.env.HOST ? `${domainApi.baby_domain}/api` : process.env.BASE_API, // api的base_url
    baseURL:"http://47.103.150.212:3000",
    timeout: 30000 // 请求超时时间
})
service.interceptors.request.use(function (config) {

    return config;

}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

service.interceptors.response.use((response) => {


    var data = JSON.parse(response.request.response);
    if(data.status == 0){
        Toast.info(data.msg);

    }
    return data

}, function (error) {
    // 对响应错误做点什么


    Toast.info(error.message);
    return Promise.reject(error);
});

export default service