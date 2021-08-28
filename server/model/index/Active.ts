var { db } = require('../../util/mysqlInit')

module.exports = {

    /**
     * 获取活动
     * @returns 
     */
    getList(){
        return db("s_active").select()
    }
}