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
        let datas: any = []
        if (type === "societies") {
            dynamic = await db("s_dynamic").limit(page > 1 ? page * limit - limit : 0, limit).order({ 'id': 'desc' }).select()
            console.log(dynamic.length)
            for (let key in dynamic) {
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