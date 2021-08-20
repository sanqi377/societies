var { db } = require("../../util/mysqlInit");
module.exports = {
  /**
   * 后台获取菜单
   * @param menus 菜单id
   */
  getMenu(menus: any) {
    let id=menus.sign.split(":")
    return new Promise((resolve) => {
        db("s_menu")
          .where({ pid: 0, status:1 })
          .order({ sort: "asc" })
          .select()
          .then((res: any) => {
            for (let i = 0; i < res.length; i++) {
              res[i].children = [];
              db("s_menu")
                .where({ pid: res[i].id, status: 1 })
                .order({ sort: "asc" })
                .select()
                .then((resp: any) => {
                  res[i].children = resp;
                  let menu:any=[]
                  res.forEach((el:any) => {
                    for(let i=0;i<id.length;i++){
                      if(el.id==id[i]){
                        menu.push(el)
                      }
                    }
                  });
                  if (i === res.length - 1) resolve(menu);
                });
            }
          });
    });
  },
  /**
   * 后台删除菜单
   * @param id 菜单id
   */
  deleteMenu(id: number) {
    return db("s_menu").where({ id }).delete();
  },
  /**
   * 后台修改菜单
   * @param data 修改内容
   */
  reviseMenu(data: any) {
    delete data.children;
    return db("s_menu").where({ id: data.id }).update(data);
  },
  /**
   * 新增修改菜单
   * @param data 修改内容
   */
  addMenu(data: any) {
    return db("s_menu").insert(data);
  },
  /**
   * 获取角色是否拥有当前菜单权限
   */
  getUserMenu(id: number) {
    return db("s_powers").where({ id }).find();
  },
};
