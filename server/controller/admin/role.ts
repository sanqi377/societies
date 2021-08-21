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

    addRole(req:any,res:any){
        let data=req.body
        data.sign=data.sign.join(':')
        data.create_time=new Date().getTime()
        model.addRole(data).then((resp:any)=>{
            console.log(resp)
            if(resp){
                res.send({ret:200,message:"添加成功"})
            }else{
                res.send({ret:200,message:"添加失败"})
            }
        })
    }

}