var model = require(__filename.replace(/controller/, 'model'))

module.exports = {
    /**
     * 获取动态列表
     */
    getList(req: any, res: any) {
        let data = req.body
        model.getList(data).then((resp: any) => {
            res.send({ ret: 200, data: resp })
        })
    },
    getUserList(req: any, res: any) {
        let data = req.body
        model.getUserList(data).then((resp: any) => {
            res.send({ ret: 200, data: resp })
        })
    },
    addDynamic(req: any, res: any) {
        let data = req.body
        model.addDynamic(data).then((resp: any) => {
            if (resp) {
                res.send({ ret: 200, data: { msg: '发布动态成功' } })
            } else {
                res.send({ ret: 201, data: { msg: '发布动态失败' } })
            }
        })
    }
}