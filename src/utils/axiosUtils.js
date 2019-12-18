import axios from 'axios';

axios.interceptors.request.use((req) => {
    console.log("请求拦截器", req);
    const token = localStorage.getItem('token')
    if (token) {
        //    将token值保存请求头中
        req.headers['token'] = token
        console.log(1111);
        
    } 
        return req
})
axios.interceptors.response.use((res) => {
    console.log("响应拦截器", res);
    return res.data

})