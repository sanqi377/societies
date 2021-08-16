module.exports = {
  getInfo(req: any, res: any) {
    res.send({ data: 666 })
  },
  getMenu(req: any, res: any) {
    console.log(req.query,req.method)
    res.send({ data: 777 })
  }
}