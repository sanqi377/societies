var multer = require('multer')
var upload = multer({ dest: 'dist/uploads/' });
// var upload = multer({ dest: 'uploads/' });
var fs = require('fs')
var path = require('path')
var init = (app: any) => {
  app.use('/admin/system/upload', upload.single('file'), (req: any, res: any, next: any) => {
    let oldName = req.file.path
    let newName = req.file.path + path.parse(req.file.originalname).ext
    fs.renameSync(oldName, newName)
    res.send({ ret: 200, data: { mag: '上传成功', path: newName } })
  })
}

module.exports = {
  init
}