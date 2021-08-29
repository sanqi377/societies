import ajax from "./axios";

const api = {
  user: {
    login: (param) => {
      return ajax.post("users/login", param);
    },
    getUsers: (param) => {
      return ajax.post("users/getUsers", param);
    },
    save: (param) => {
      return ajax.post("users/save", param);
    },
    delect: (param) => {
      return ajax.post("users/delect", param);
    },
  },
  system: {
    getMenu: (param) => {
      return ajax.post("system/getMenu", param);
    },
    deleteMenu: (param) => {
      return ajax.post("system/deleteMenu", param);
    },
    saveMenu: (param) => {
      return ajax.post("system/saveMenu", param);
    },
    loginlog: (param) => {
      return ajax.post("system/loginlog", param);
    },
    site: (param) => {
      return ajax.post("system/siteSave", param);
    },
    getSystem: () => {
      return ajax.post("system/getSystem");
    },
    getDefaultEditor: () => {
      return ajax.post("system/getDefaultEditor");
    },
    getAllMenu: (param) => {
      return ajax.post("system/getallmenu",param);
    },
  },
  menu: {
    delect: (param) => {
      return ajax.post("menu/delect", param);
    },
    menuSave: (param) => {
      return ajax.post("menu/menuSave", param);
    },
    addMenu:(param)=>{
      return ajax.post("menu/addMenu", param);
    }
  },
  article: {
    getClassification: () => {
      return ajax.post("article/getClassification");
    },
    deleteClassification: (param) => {
      return ajax.post("article/deleteClassification", param);
    },
    cats: (param) => {
      return ajax.post("article/cats", param);
    },
    save: (param) => {
      return ajax.post("article/save", param);
    },
    getCats: () => {
      return ajax.post("article/getCats");
    },
    new: (param) => {
      return ajax.post("article/addArticle", param);
    },
    getArticle: (param) => {
      return ajax.post("article/getArticle", param);
    },
    deleteArticle: (param) => {
      return ajax.post("article/deleteArticle", param);
    },
    getArticleDetails: (param) => {
      return ajax.post("article/getArticleDetails", param);
    },
    deleteCat: (param) => {
      return ajax.post("article/deleteCat", param);
    },
  },
  common: {
    upload: (param) => {
      return ajax.post("common/upload", param, {
        headers: { "Content-Type": "multipart/form-data;" },
      });
    },
  },
  comment: {
    getCommentList: (param) => {
      return ajax.post("comment/getCommentList", param);
    },
    deleteComment: (param) => {
      return ajax.post("comment/deleteComment", param);
    },
    editComment: (param) => {
      return ajax.post("comment/editComment", param);
    },
  },
  pages: {
    addPage: (param) => {
      return ajax.post("pages/addPage", param);
    },
    getPages: () => {
      return ajax.post("pages/getPages");
    },
    deletePages: (param) => {
      return ajax.post("pages/deletePages", param);
    },
  },
  personal: {
    getInfo: () => {
      return ajax.post("personal/getInfo");
    },
    saveInfo: (param) => {
      return ajax.post("personal/saveInfo", param);
    },
  },

  /**
   * 社团管理相关 api
   */
  societies: {
    /**
     * 社团级别
     */
    getType: () => {
      return ajax.post("societies/getType");
    },
    /**
     * 所属院系
     */
    getDepartment: () => {
      return ajax.post("societies/getDepartment");
    },
    /**
     * 添加社团
     */
    addSocieties: (param) => {
      return ajax.post("societies/addSocieties", param);
    },
    /**
     * 获取社团
     */
    getSocieties: () => {
      return ajax.post("societies/getSocieties");
    },
    /**
     * 获取社团信息
     */
    getSocietiesInfo: (param) => {
      return ajax.post("societies/getSocietiesInfo", param);
    },
    /**
     * 添加 / 修改公告
     */
    addNotice: (param) => {
      return ajax.post("societies/addNotice", param);
    },
    /**
     * 获取公告消息
     */
    getNotice: (param) => {
      return ajax.post("societies/getNotice", param);
    },
    /**
     * 删除公告消息
     */
    deleteNotice: (param) => {
      return ajax.post("societies/deleteNotice", param);
    },
    /**
     * 获取社团分类
     * @returns 
     */
    getClassification: () => {
      return ajax.post("societies/getClassification");
    },

    /**
     * 添加社团分类
     * @returns 
     */
    addClassification: (param) => {
      return ajax.post("societies/addClassification",param);
    },
    /**
     * 删除社团分类
     * @returns 
     */
    deleteClassification: (param) => {
      return ajax.post("societies/deleteclassification",param);
    },
  },
  dashboard: {
    trafficRank: () => {
      return ajax.post("dashboard/trafficRank");
    },
    articleRank: () => {
      return ajax.post("dashboard/articleRank");
    },
    getInfo: () => {
      return ajax.post("dashboard/getInfo");
    },
  },
  role: {
    // 获取角色信息
    getRoleSign: (param) => {
      return ajax.post("role/getrolesign", param);
    },
    // 添加角色
    addRole: (param) => {
      return ajax.post("role/addrole", param);
    },
    delectRole: (param) => {
      return ajax.post("role/delectRole", param);
    },
  },
};

export default api;
