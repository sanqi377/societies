var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
    /**
     * 获取所有动态
     */
    getDynamic(req: any, res: any) {
        model.getDynamic().then((resp: any) => {
            res.send({ ret: 200, data: resp })
        })
    }
}