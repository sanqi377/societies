/**
 * wx.request 封装
 * @param url 请求 url
 * @param data 请求数据
 */
var ajaxHttp = (url: string, data: object) => {
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'POST',
      data: data,
      header: {
        token
      },
      success(res) {
        resolve(res)
      },
      fail: (err: any) => {
        reject(err)
      }
    })
  })
}

/**
 * 检测是否登录
 * @returns 
 */
var checkLogin: any = () => {
  var token: string = wx.getStorageSync('token')
  if (!token) return false
  return true
}

/**
 * 加载网络字体
 * @returns 
 */
var getFont = () => {
  return new Promise((resolve) => {
    wx.loadFontFace({
      family: 'PingFang',
      source: 'url("http://localhost:3000/index/index/getFont")',
      success: () => {
        resolve(true)
      }
    })
  })
}

module.exports = {
  ajax: ajaxHttp,
  checkLogin,
  getFont
}