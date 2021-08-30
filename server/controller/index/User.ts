var model = require(__filename.replace(/controller/, 'model'))
var request = require('request')
var { createJwtToken } = require('../../util/Jwt')
module.exports = {
  /**
   * 用户登录接口
   */
  login(req: any, res: any) {
    let { code } = req.body
    request(`https://api.weixin.qq.com/sns/jscode2session?appid=wxe9cf93cfd4b2619f&secret=63e8a1a6781b85ee9cf0bec03b5fb8f1&js_code=${code}&grant_type=authorization_code`, (req: any, response: any, body: any) => {
      let openid = JSON.parse(body).openid
      var token = createJwtToken(openid)
      model.isReg(openid).then((resp: any) => {
        if (!resp) {
          res.send({ code: 201, msg: '用户未注册' })
        } else {
          res.send({ code: 200, msg: '登录成功', token, uid: resp.id })
        }
      })
    })
  },
  /**
   * 用户注册接口
   */
  reg(req: any, res: any) {
    let data = req.body
    request(`https://api.weixin.qq.com/sns/jscode2session?appid=wxe9cf93cfd4b2619f&secret=63e8a1a6781b85ee9cf0bec03b5fb8f1&js_code=${data.code}&grant_type=authorization_code`, (req: any, response: any, body: any) => {
      let openid = JSON.parse(body).openid
      data.open_id = openid
      data.college_id = -1
      delete data.code
      var token = createJwtToken(openid)
      model.reg(data).then((resp: any) => {
        if (resp) res.send({ code: 200, msg: '注册成功', token, openid })
      })
    })
  },
  /**
   * 关注
   */
  subscribe(req: any, res: any) {
    let data = req.body
    model.subscribe(data).then((resp: any) => {
      res.send(resp)
    })
  },
  /**
   * 取消关注
   */
  cancelSubscribe(req: any, res: any) {
    let data = req.body
    model.cancelSubscribe(data).then((resp: any) => {
      res.send(resp)
    })
  },

  /**
   * 获取基本信息
   *
   * @param {*} req
   * @param {*} res
   */
  getInfo(req: any, res: any) {
    let { uid } = req.body
    model.getInfo(uid).then((resp: any) => {
      res.send(resp)
    })
  },
  getSession(req: any, res: any) {
    let data = req.body
    model.getSession(data).then((resp: any) => {
      console.log(1)
      if(resp) res.send({ ret: 200, data: resp.id })
    })
  }
}