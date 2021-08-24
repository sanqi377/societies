export { }
const path = require('path')

module.exports = {
  getFont(req: any, res: any) {
    res.setHeader("Content-Type", "font/ttf");
    res.sendFile('pingfang.ttf', { root: './public/font/' })
  }
}