var model = require(__filename.replace(/controller/, 'model'))

module.exports={

    /**
     * 获取活动
     */
    getList(req:any,res:any){
        model.getList().then((resp:any) => {
            if(resp.length!=0){
                res.send({ret:200,data:resp})
            }else{
                res.send({ret:200,data:{msg:"暂无活动"}})
            }
        })
    }
}