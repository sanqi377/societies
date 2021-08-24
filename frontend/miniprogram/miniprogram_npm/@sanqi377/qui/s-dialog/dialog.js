"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currentOptions = {
    visible: false,
    title: '',
    message: '内容',
    selector: '#dialog',
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: '确认',
    cancelButtonText: '取消',
};
var Dialog = function (options) {
    options = Object.assign(Object.assign({}, currentOptions), options);
    return new Promise(function (resolve, reject) {
        var context = getCurrentPages()[getCurrentPages().length - 1];
        var dialog = context.selectComponent(options.selector);
        if (dialog) {
            dialog.setData(Object.assign({
                callback: function (action, instance) {
                    action === 'confirm' ? resolve(instance) : reject(instance);
                },
            }, options));
            wx.nextTick(function () {
                dialog.setData({ visible: true });
            });
        }
        else {
            console.warn('未找到 dialog 节点，请确认 selector 是否正确');
        }
    });
};
module.exports = {
    $Dialog: Dialog
};
