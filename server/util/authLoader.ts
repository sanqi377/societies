const glob = require('glob');

/**
 * 自动加载 Controller
 */
const autoLoader = (app: any, root: any) => {
  glob.sync(`${root}/**/*.js`).forEach((file: any) => {
    let filePath = file.replace(/\.[^.]*$/, '');
    let controller = require(file)
    let urlPath = '/' + filePath.split('/').splice(-2).join("/");
    let methods = Object.keys(controller)
    let applyMethod = (name: string, methodBody: any) => {
      let body = methodBody;
      let routeURL = urlPath + '/' + name;
      app.all(routeURL, body)
    }

    methods.forEach(item => {
      let methodName = item
      let methodBody = controller[item]
      applyMethod(methodName, methodBody)
    });
  })
}

module.exports = { autoLoadRouter: autoLoader };