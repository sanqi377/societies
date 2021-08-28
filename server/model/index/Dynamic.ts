var { db } = require('../../util/mysqlInit')

module.exports = {

    /**
     * 获取动态列表
     * @param data 
     * @returns 
     */
    getList(data: any) {
        let page = data.page || 0
        let limit = data.limit || 10
        let order = data.order ? data.order : "hot"
        let type = data.type ? data.type : "societies"
        if (type === "societies") {
            return db("s_dynamic").limit(page, limit).order({ [order]: "desc" }).select()
        } else {

        }
    }
}