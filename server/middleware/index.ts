var init = (app: any) => {
  // app.app.get('/uploads/*', (req: any, res: any) => {
  //   console.log(1)
  //   res.sendFile(app.path + '/' + req.url)
  // })
  app.app.get('/dist/uploads/*', (req: any, res: any) => {
    res.sendFile(app.path.replace('\dist', '') + '/' + req.url)
  })
}

module.exports = {
  init
}