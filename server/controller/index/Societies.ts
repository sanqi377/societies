var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  /**
   * 获取社团
   */
  getSocieties(req: any, res: any) {
    model.getSocieties().then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: resp })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '获取失败' } })
      }
    })
  },
  /**
   * 获取社团信息
   */
  getSocietiesInfo(req: any, res: any) {
    let { id, uid } = req.body
    model.getSocietiesInfo(id, uid).then((resp: any) => {
      res.send({ ret: 200, data: resp })
    })
  },
  /**
   * 获取公告
   */
  getNotice(req: any, res: any) {
    let { id } = req.body
    model.getNotice(id).then((resp: any) => {
      if (resp) {
        res.send({ ret: 200, data: resp })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '获取失败' } })
      }
    })
  },
  /**
   * 增加社团热度
   */
  addHots(req: any, res: any) {
    let { id } = req.body
    model.addHots(id).then((resp: any) => {
      res.send({ ret: 200, data: { msg: "浏览成功" } })
    }).catch((e: any) => {
      res.send({ ret: 201, data: { msg: e.message } })
    })
  },

  /**
   * 正在纳新的社团
   */
  newSocietiesList(req: any, res: any) {
    model.newSocietiesList().then((resp: any) => {
      if (resp.length != 0) {
        res.send({ ret: 200, data: resp })
      } else {
        res.send({ ret: 200, data: { type: 'error', msg: '当前无正在纳新的社团' } })
      }
    })
  },
  /**
   * 关注社团
   */
   interestSocieties(req:any,res:any){
     let data={user_id:req.body.uid,societies_id:req.body.id}
     model.interestSocieties(data).then((resp:any)=>{
       if(resp){
         res.send({ret:200,data:{msg:"关注成功"}})
       }else{
        res.send({ret:201,data:{msg:"服务器错误"}})
       }
     })
   },

   /**
    * 获取热门社团
    */

    getHotsSocieties(req:any,res:any){
      let limit=req.body.limit
      model.getHotsSocieties(limit).then((resp:any)=>{
        res.send({ret:200,data:resp})
      })
    }
}