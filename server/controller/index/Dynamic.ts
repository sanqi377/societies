var model = require(__filename.replace(/controller/, 'model'))

module.exports={
    /**
     * 获取动态列表
     */
    getList(req:any,res:any){
        let data=req.body
        model.getList(data).then((resp:any)=>{
            res.send({ret:200,data:resp})
        })
    }
}