import axios from 'axios'

const http = axios.create()

// 请求头
http.defaults.baseURL = 'http://10.10.17.100:8080'

// 处理发送ajax请求前操作
http.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return err
  }
)

// 处理接口返回时操作
http.interceptors.response.use(
  data => {
    return data
  },
  err => {
    return err
  }
)

const xhr = {

/**
 * get请求
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
  getRequest: (url, params) => {
    return http({
      method: 'get',
      url: url,
      params
    })
  },

  /**
 * post请求
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
  postRequest: (url, params) => {
    return http({
      method: 'post',
      url: url,
      data: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
  },

  /**
 * delete请求
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
  deleteRequest: (url, params) => {
    return http({
      method: 'delete',
      url: url,
      data: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
  }
}
export default xhr
