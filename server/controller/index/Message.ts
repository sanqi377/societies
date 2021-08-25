export { }

const model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  /**
   * 发送消息
   * @param req 
   * @param res 
   */
  sendMessage(req: any, res: any) {
    let data = req.body
    res.send({ ret: 200 })
    // wss.on('connection', (ws: any) => {
    //   console.log(ws)
    //   // ws.on('message', function incoming(message) {
    //   //   console.log('received: %s', message);
    //   // });

    //   ws.send('something');
    // });
    // model.sendMessage(data).then((resp: any) => {
    //   if (resp) {
    //     res.send({ ret: 200, data: { msg: '发送成功' } })
    //   } else {
    //     res.send({ ret: 200, data: { msg: '发送失败' } })
    //   }
    // })
  },
  /**
   * 获取消息列表
   * @param req 
   * @param res 
   */
  getSession(req: any, res: any) {
    let { uid } = req.body
    model.getSession({ uid }).then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  },
  getId(req: any, res: any) {
    let { open_id } = req.body
    model.getId({ open_id }).then((resp: any) => {
      res.send({ ret: 200, data: resp.id })
    })
  }
}