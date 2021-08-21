var { db } = require('../../util/mysqlInit')

module.exports = {
    getClass() {
        let cls: any = []
        return new Promise((resolve) => {
            db('s_classification').where({ status: 1 }).select().then((res: any) => {
                db("s_societies").select().then((respe: any) => {
                    cls.push({ name: "全部", active: true, class_societies: respe })
                    for (let i = 0; i < res.length; i++) {
                        db("s_societies").where({ class_id: res[i].id }).select().then((resp: any) => {
                            cls.push({ name: res[i].name, active: false, class_societies: resp })
                            if (i === res.length - 1) resolve(cls)
                        })
                    }
                })
            })
        })
    }
}