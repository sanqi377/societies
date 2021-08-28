"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), getFont = _a.getFont, ajax = _a.ajax, formatMsgTime = _a.formatMsgTime;
var list = [];
var count = 1;
Page({
    list: [],
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            });
        }
        this.getDynamic(1);
    },
    goPublish: function () {
        wx.navigateTo({
            url: "/pages/societies/publish/index"
        });
    },
    getDynamic: function (page) {
        var _this_1 = this;
        ajax('dynamic/getList', { page: page }).then(function (res) {
            for (var key in res.data.data) {
                res.data.data[key].create_time = formatMsgTime(res.data.data[key].create_time * 1000);
                list.push(res.data.data[key]);
            }
            _this_1.setData({
                list: list
            });
        });
    },
    onLoad: function () {
        var _this = this;
        getFont().then(function (res) {
            if (res) {
                _this.setData({
                    show: true
                });
            }
        });
    },
    onReady: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
        count++;
        this.getDynamic(count);
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBbUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQS9ELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDdkUsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFBO0FBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtBQUNiLElBQUksQ0FBQztJQUNILElBQUksRUFBRSxFQUFFO0lBRVIsTUFBTSxFQUFFO1FBQ04sSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN2QixRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBRUQsU0FBUztRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLEVBQVYsVUFBVyxJQUFZO1FBQXZCLG1CQVVDO1FBVEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDOUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUE7Z0JBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTthQUM5QjtZQUNELE9BQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxNQUFBO2FBQ0wsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVk7WUFDMUIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtRQUNYLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XHJcbmNvbnN0IHsgZ2V0Rm9udCwgYWpheCwgZm9ybWF0TXNnVGltZSB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXHJcbmxldCBsaXN0OiBhbnkgPSBbXVxyXG5sZXQgY291bnQgPSAxXHJcblBhZ2Uoe1xyXG4gIGxpc3Q6IFtdLFxyXG5cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5nZXRUYWJCYXIoKSkge1xyXG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgIHNlbGVjdGVkOiAxXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldER5bmFtaWMoMSlcclxuICB9LFxyXG5cclxuICBnb1B1Ymxpc2goKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBcIi9wYWdlcy9zb2NpZXRpZXMvcHVibGlzaC9pbmRleFwiXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGdldER5bmFtaWMocGFnZTogbnVtYmVyKSB7XHJcbiAgICBhamF4KCdkeW5hbWljL2dldExpc3QnLCB7IHBhZ2UgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgZm9yIChsZXQga2V5IGluIHJlcy5kYXRhLmRhdGEpIHtcclxuICAgICAgICByZXMuZGF0YS5kYXRhW2tleV0uY3JlYXRlX3RpbWUgPSBmb3JtYXRNc2dUaW1lKHJlcy5kYXRhLmRhdGFba2V5XS5jcmVhdGVfdGltZSAqIDEwMDApXHJcbiAgICAgICAgbGlzdC5wdXNoKHJlcy5kYXRhLmRhdGFba2V5XSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxpc3RcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICBnZXRGb250KCkudGhlbigocmVzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICBjb3VudCsrXHJcbiAgICB0aGlzLmdldER5bmFtaWMoY291bnQpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcblxyXG4gIH1cclxufSkiXX0=