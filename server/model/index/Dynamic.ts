var { db } = require('../../util/mysqlInit')

module.exports={
    
    /**
     * 获取动态列表
     * @param data 
     * @returns 
     */
    getList(data:any){
        return db("s_dynamic").select()
    }
}