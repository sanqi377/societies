var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  getInfo(req: any, res: any) {
    model.getInfo().then((resp: any) => {
      res.send({ data: resp })
    })
  },
  getMenu(req: any, res: any) {
    res.send({ data: 777 })
  }
}