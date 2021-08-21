var { db } = require('../../util/mysqlInit')
/**
 * 
 * @param menu_id 菜单id
 */
var getsign = (sign: any) => {
    let menu: any = [];
    return new Promise((resolve) => {
        db('s_menu').select().then((res: any) => {
            res.forEach((element: any) => {
                sign.forEach((el: string) => {
                    if (el == element.id) {
                        menu.push(element)
                    }
                });
            });
            resolve(menu)
        })
    })
}

module.exports = {
    /**
     * 
     * 获取所有角色
     */
    getRoleSign() {
        return new Promise((resolve) => {
            let sign: any = []
            db('s_role').select().then((res: any) => {
                for (let i = 0; i < res.length; i++) {
                    let sign = res[i].sign.split(':')
                    getsign(sign).then((resp: any) => {
                        res[i].sign = []
                        res[i].sign = resp
                        if(i==res.length-1){
                            resolve(res)
                        }
                    })
                }
            })
        })
    },
    /**
     * 插入角色信息
     */
    addRole(data:any){
        return db("s_role").insert(data).then((res:any)=>{
            console.log(res)
        });
    }
}