var { db } = require('../../util/mysqlInit')

module.exports = {

    /**
     * 获取动态列表
     * @param data 
     * @returns 
     */
    async getList(data: any) {
        let page = data.page || 1
        let limit = data.limit || 10
        let order = data.order ? data.order : "hot"
        let type = data.type ? data.type : "societies"
        let dynamic
        let getInfo = (uid: number) => {
            return db("s_users").where({ id: uid }).find()
        }
        let fans = await db('s_subscribe').where({ subscribe: data.uid }).select()
        let datas: any = []
        if (type === "societies") {
            dynamic = await db("s_dynamic").limit(page > 1 ? page * limit - limit : 0, limit).order({ 'id': 'desc' }).select()
            for (let key in dynamic) {
                dynamic[key].fans = false
                for (let keys in fans) {
                    if (fans[keys].be_subscribe === dynamic[key].uid) dynamic[key].fans = true
                }
                let info = await getInfo(dynamic[key].uid)
                dynamic[key].name = info.name
                dynamic[key].avatar = info.avatar
                datas.push(dynamic[key])
            }
        } else {

        }
        return datas
    },
    addDynamic(data: object) {
        return db('s_dynamic').insert(data)
    }
}