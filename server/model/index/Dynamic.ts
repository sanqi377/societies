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
        let type = data.type ? data.type : ""
        let dynamic

        // 获取基本信息
        let getInfo = (uid: number) => {
            return db("s_users").where({ id: uid }).find()
        }

        // 我关注的人
        let fans = await db('s_subscribe').where({ subscribe: data.uid }).select()
        let datas: any = []

        switch (type) {
            case 'societies':

                break;
            case 'focus':
                let wheres = []
                for (let key = 0; key < fans.length; key++) {
                    let where = JSON.parse(`{"uid":"${fans[key].be_subscribe}"}`)
                    wheres.push(where)
                }
                dynamic = await db("s_dynamic").sql(wheres).limit(page > 1 ? page * limit - limit : 0, limit).order({ 'create_time': 'desc' }).select()
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
                break
            default:
                dynamic = await db("s_dynamic").limit(page > 1 ? page * limit - limit : 0, limit).order({ 'create_time': 'desc' }).select()
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
                break;
        }
        return datas
    },
    /**
     * 获取动态列表
     * @param data 
     * @returns 
     */
    async getUserList(data: any) {
        let page = data.page || 1
        let limit = data.limit || 10
        let dynamic = await db("s_dynamic").where({ uid: data.uid }).limit(page > 1 ? page * limit - limit : 0, limit).order({ 'id': 'desc' }).select()
        return dynamic
    },
    addDynamic(data: object) {
        return db('s_dynamic').insert(data)
    }
}