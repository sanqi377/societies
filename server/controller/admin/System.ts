var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  getMenu(req: any, res: any) {
    model.getMenu().then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  }
}