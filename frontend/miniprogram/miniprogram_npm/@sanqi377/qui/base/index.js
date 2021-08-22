var getCtx = function (selector) {
    var pages = getCurrentPages();
    var ctx = pages[pages.length - 1];
    var componentCtx = ctx.selectComponent(selector);
    if (!componentCtx) {
        console.error('无法找到对应的组件，请按文档说明使用组件');
        return null;
    }
    return componentCtx;
};
var Notify = function (options) {
    console.log(options);
    var _a = options.selector, selector = _a === void 0 ? '#notify' : _a;
    var ctx = getCtx(selector);
    ctx.handleShow(options);
};
module.exports = {
    $Notify: Notify
};
