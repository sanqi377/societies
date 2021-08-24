"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_data = {
    visible: false,
    message: '',
    title: '内容',
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: '确认',
    cancelButtonText: '取消',
};
Component({
    data: __assign(__assign({}, default_data), { callback: function (action, instance) {
            console.log(action, instance);
        } }),
    methods: {
        onConfirm: function () {
            this.handleAction('confirm');
        },
        onCancel: function () {
            this.handleAction('cancel');
        },
        handleAction: function (action) {
            this.setData({ visible: false });
            var callback = this.data.callback;
            if (callback) {
                callback(action, this);
            }
        }
    }
});
