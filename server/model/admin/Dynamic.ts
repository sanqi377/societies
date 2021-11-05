var { db } = require('../../util/mysqlInit')
module.exports = {
    /**
     * 获取所有动态
     */
    async getDynamic() {
        let dynamic = await db().native('select value,create_time,name,avatar from s_dynamic left OUTER JOIN s_users on s_users.id=s_dynamic.uid')
        return dynamic
    },
}


