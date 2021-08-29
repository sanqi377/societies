var { db } = require("../../util/mysqlInit");

/**
 * 数组去重
 * @param arr 数组
 * @returns 
 */
var unique = (arr: number[]) => {
  return Array.from(new Set(arr))
}

/**
 * 获取一级菜单
 * @param arr
 */
var parentMenu = (arr: number[]) => {
  return new Promise((resolve) => {
    let newArr: any = [] // 一级菜单
    let newPid: number[] = []
    arr.forEach((item, index) => {
      db('s_menu').where({ id: Number(item), status: 1 }).find().then((res: any) => {
        // 为0时说明本身就是一级菜单 直接push id
        if (res.pid === 0) {
          newPid.push(res.id)
        } else {
          // 如果不为0就push进newpid 后续查
          newPid.push(res.pid)
        }
        // 循环结束,将不为0的push 进newarr
        if (index === arr.length - 1) {
          if (unique(newPid).length === 0) {
            resolve(newArr)
          } else {
            unique(newPid).forEach((item, idx) => {
              db('s_menu').where({ id: item, status: 1 }).find().then((res: any) => {
                newArr.push(res)
                if (idx === unique(newPid).length - 1) resolve(newArr)
              })
            })
          }
        }
      })
    })
  })
}

/**
 * 获取二级菜单
 * @param arr
 * @returns 
 */
var childMenu = (arr: number[]) => {
  let newArr: any = [] // 二级菜单
  return new Promise((resolve) => {
    arr.forEach((item, index) => {
      db('s_menu').where({ id: Number(item), status: 1 }).find().then((res: any) => {
        if (res.pid != 0) newArr.push(res)
        if (index === arr.length - 1) resolve(newArr)
      })
    })
  })
}

/**
 * 合并 一二 级菜单
 * @param {number[]} arr
 * @return {*} 
 */
var mergeMenu = (arr: number[]) => {
  let newArr: any = []
  return new Promise((resolve) => {
    parentMenu(arr).then((res: any) => {
      childMenu(arr).then((resp: any) => {
        if (resp.length === 0) {
          resolve(res)
        } else {
          for (let i = 0; i < res.length; i++) {
            newArr.push(res[i])
            newArr[i].children = []
          }
          for (let i = 0; i < newArr.length; i++) {
            for (let x = 0; x < resp.length; x++) {
              if (newArr[i].id === resp[x].pid) {
                newArr[i].children.push(resp[x])
              }
            }
          }
          resolve(newArr)
        }
      })
    })
  })
}

module.exports = {
  /**
   * 后台获取菜单
   * @param role 角色id
   */
  getMenu(role: number) {
    return new Promise((resolve) => {
      db('s_role').where({ id: role }).find().then((res: any) => {
        let sign = res.sign.split(":")
        mergeMenu(sign).then((res: any) => {
          resolve(res)
        })
      })
    })
  },
  /**
   * 获取所有子类菜单
   */
  async getAllMenu(status: number) {
    let menu, children: any
    if (status) {
      menu = await db('s_menu').where({ pid: 0, status: status }).select()
      children = await db("s_menu").where({status:status}).select()
    } else {
      menu = await db('s_menu').where({ pid: 0 }).select()
      children = await db("s_menu").whereNo({ pid: 0 }).select()
    }
    menu.forEach((ele: any) => {
      let childrens: any = []
      children.forEach((el: any) => {
        if (ele.id == el.pid) {
          childrens.push(el)
        }
      });
      ele.children = childrens
    });
    return menu
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
    return db("s_menu").where({ id: data.id }).update(data);
  },
  /**
   * 新增修改菜单
   * @param data 修改内容
   */
  addMenu(data: any) {
    return db("s_menu").insert(data);
  },
};
