var model = require(__filename.replace(/controller/, 'model'))

module.exports = {
    /**
     * 获取用户角色权限
     */

    getRoleSign(req: any, res: any) {
        model.getRoleSign().then((resp: any) => {
            res.send({ ret: 200, data: resp })
        })
    },

    /**
     * 添加角色
     * @param req 
     * @param res 
     */
    addRole(req: any, res: any) {
        let data = req.body
        data.sign = data.sign.join(':')
        if (data.id) {
            model.updateRole(data).then((resp: any) => {
                if (resp) {
                    res.send({ ret: 200, data: { msg: "更新成功" } })
                } else {
                    res.send({ ret: 200, data: { msg: "更新失败" } })
                }
            })
        } else {
            data.create_time = new Date().getTime()
            model.addRole(data).then((resp: any) => {
                if (resp) {
                    res.send({ ret: 200, data: { msg: "添加成功" } })
                } else {
                    res.send({ ret: 200, data: { msg: "添加失败" } })
                }
            })
        }
    },
    delectRole(req: any, res: any) {
        let { id } = req.body;
        model.delectRole(id).then((resp: any) => {
            if (resp) {
                res.send({ ret: 200, data: { type:"success",msg: "删除成功" } })
            } else {
                res.send({ ret: 200, data: { type:"error",msg: "删除失败" } })
            }
        }).catch((e:any)=>{
            res.send({ ret: 200, data: { type:"error",msg: "删除失败，请先移除角色下用户" } })
        })
    }

}