var { db } = require('../../util/mysqlInit')

module.exports = {
    async getClass(uid: any) {
        let cls: any = []
        let classification = await db('s_classification').where({ status: 1 }).select()
        let societies = await db("s_societies").select()
        cls.push({ name: "全部", active: true, class_societies: societies })
        let fans = async (uid: any, buid: any) => {
            let status = await db('s_subscribe').where({ subscribe: uid, be_subscribe: buid }).find()
            if (status) {
                return true
            } else {
                return false
            }
        }
        for (let keys in classification) {
            classification[keys].class_societies = []
            cls.push(classification[keys])
            for (let key in societies) {
                if (classification[keys].id === societies[key].class_id) {
                    let fan = await fans(uid.uid, societies[key].admin)
                    let number = await db('s_societies_member').where({ societies: societies[key].id }).select()
                    societies[key].fans = fan
                    societies[key].number = number.length
                    classification[keys].class_societies.push(societies[key])
                }
            }
        }
        return cls
    }
}