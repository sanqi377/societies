/**
 * wx.request 封装
 * @param url 请求 url
 * @param data 请求数据
 */
var ajaxHttp = (url: string, data: object) => {
  let token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://localhost:3000/index/' + url,
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


let formatMsgTime = (timespan: any) => {

  var dateTime = new Date(timespan)

  var year = dateTime.getFullYear()
  var month = dateTime.getMonth() + 1
  var day = dateTime.getDate()
  var hour = dateTime.getHours()
  var minute = dateTime.getMinutes()
  var now_new = Date.parse((new Date()) as any)

  var milliseconds = 0
  var timeSpanStr

  milliseconds = now_new - timespan;

  if (milliseconds <= 1000 * 60 * 1) {
    timeSpanStr = '刚刚'
  }
  else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
    timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前'
  }
  else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前'
  }
  else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
  }
  else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == new Date().getFullYear()) {
    timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute
  } else {
    timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
  }
  return timeSpanStr
}

module.exports = {
  ajax: ajaxHttp,
  checkLogin,
  formatMsgTime
}