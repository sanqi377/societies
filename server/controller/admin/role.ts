var model = require(__filename.replace(/controller/, 'model'))

module.exports = {
    /**
     * 获取用户角色权限
     */

    getRoleSign(req: any, res: any) {
        model.getRoleSign().then((resp: any) => {
            res.send({ ret: 200, data: resp })
        })
    }

}