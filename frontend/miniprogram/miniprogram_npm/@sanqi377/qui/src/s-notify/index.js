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
var default_data = {
    visible: false,
    content: '',
    duration: 2,
    type: 'default', // default || success || warning || error
};
var timmer = 0;
Component({
    data: __assign({}, default_data),
    methods: {
        handleShow: function (options) {
            var _this = this;
            var _a = options.type, type = _a === void 0 ? 'default' : _a, _b = options.duration, duration = _b === void 0 ? 2 : _b;
            this.setData(__assign(__assign({}, options), { type: type, duration: duration, visible: true }));
            var d = this.data.duration * 1000;
            if (timmer)
                clearTimeout(timmer);
            if (d !== 0) {
                timmer = setTimeout(function () {
                    _this.handleHide();
                    timmer = 0;
                }, d);
            }
        },
        handleHide: function () {
            this.setData(__assign({}, default_data));
        }
    },
});
