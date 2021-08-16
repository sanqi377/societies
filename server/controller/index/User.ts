var model = require(__filename.replace(/controller/, 'model'))
var request = require('request')
module.exports = {
  /**
   * 用户登录接口
   */
  login(req: any, res: any) {
    let { code } = req.body
    request(`https://api.weixin.qq.com/sns/jscode2session?appid=wxe9cf93cfd4b2619f&secret=63e8a1a6781b85ee9cf0bec03b5fb8f1&js_code=${code}&grant_type=authorization_code`, (req: any, response: any, body: any) => {
      let openid = JSON.parse(body).openid
      let status = model.isReg(openid)
      if (!status) {
        res.send({ code: 201, msg: '用户未注册' })
        return
      }
      res.send({ msg: '用户已注册' })
    })
  },
  /**
   * 用户注册接口
   */
  reg(req: any, res: any) {
    let data = req.body
    request(`https://api.weixin.qq.com/sns/jscode2session?appid=wxe9cf93cfd4b2619f&secret=63e8a1a6781b85ee9cf0bec03b5fb8f1&js_code=${data.code}&grant_type=authorization_code`, (req: any, response: any, body: any) => {
      let openid = JSON.parse(body).openid
      data.openid = openid
      model.reg(data).then((resp: any) => {
        if (resp) res.send({ code: 200, msg: '注册成功' })
      })
    })
  }
}