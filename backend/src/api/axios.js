import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import setting from '@/config/setting'
import store from '@/store'

axios.defaults.baseURL = setting.baseURL + '/admin/'
axios.defaults.timeout = 50000
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = store.state.token;

// 添加请求拦截器
axios.interceptors.request.use(config => {
    if (config.method == 'post') {
        if (config.url != "common/upload") {
            if (!config.data) {
                config.data = {}
            }
        }
    }
    return config
}, function(error) {
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(res => {
    console.log(res.data)
    switch (res.data.ret) {
        case 200:
            
            return res.data.data
        case 401:
            Message({
                type: 'warning',
                message: res.data.msg,
                center: true,
                onClose: () => {
                    localStorage.removeItem("access_token");
                    location.reload();
                },
            })
            return false
        default:
            Message({
                type: 'error',
                message: res.data.msg,
                center: true
            })
            return false
    }
}, function(error) {
    return Promise.reject(error)
})

export default axios