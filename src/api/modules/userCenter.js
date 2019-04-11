/**
 * 用户中心
*/
import $http from '../config.js'

const userCenter = {
  getMerchantsData: (url, data) => {
    $http.getRequest(url, data).then(res => {
      return res
    })
  }
}
export default userCenter
