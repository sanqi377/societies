var model = require(__filename.replace(/controller/, 'model'))

module.exports = {
    getClass(req: any, res: any) {
        model.getClass().then((resp: any) => {
            res.send({ ret: 200, data: resp })
        })
    }
}