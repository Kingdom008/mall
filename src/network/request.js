import axios from 'axios'

//第一种封装方式
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })
  // 2. axios的拦截器
  //   2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config);
    //01.config中的信息不符合服务器的要求

    //02.比如每次发送网络请求时，都希望在界面中显示一个请求图标

    //03.某些网络请求(比如登录(token)), 必须携带一些特殊的信息

    return config;//处理完之后要返回被拦截的config
  }, err => {
    console.log(err);
  })


  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data; //处理完之后记得返回data
  }, err => {
    console.log(err);
  })


  //3.发送真正的网络请求
  return instance(config) //instance本身就是一个Promise对象
}

