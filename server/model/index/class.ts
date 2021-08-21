var { db } = require('../../util/mysqlInit')

module.exports = {
    getClass() {
        let cls: any = []
        return new Promise((resolve, reject) => {
            db('s_classification').where({ status: 1 }).select().then((res: any) => {
                db("s_societies").select().then((respe: any) => {
                    cls.push({ name: "all", class_societies: respe })
                    for (let i = 0; i < res.length; i++) {
                        db("s_societies").where({ class_id: res[i].id }).select().then((resp: any) => {
                            cls.push({ name: res[i].name, class_societies: resp })
                            if (i == res.length - 1) {
                                resolve(cls)
                            }
                        })
                    }
                })
            })
        })
    }
}