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
        ajax('http://localhost:3000/index/dynamic/getList', { page: page }).then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBbUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQS9ELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDdkUsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFBO0FBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtBQUNiLElBQUksQ0FBQztJQUNILElBQUksRUFBRSxFQUFFO0lBRVIsTUFBTSxFQUFFO1FBQ04sSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN2QixRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBRUQsU0FBUztRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLEVBQVYsVUFBVyxJQUFZO1FBQXZCLG1CQVVDO1FBVEMsSUFBSSxDQUFDLDZDQUE2QyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDMUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUE7Z0JBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTthQUM5QjtZQUNELE9BQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxNQUFBO2FBQ0wsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVk7WUFDMUIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtRQUNYLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XHJcbmNvbnN0IHsgZ2V0Rm9udCwgYWpheCwgZm9ybWF0TXNnVGltZSB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXHJcbmxldCBsaXN0OiBhbnkgPSBbXVxyXG5sZXQgY291bnQgPSAxXHJcblBhZ2Uoe1xyXG4gIGxpc3Q6IFtdLFxyXG5cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5nZXRUYWJCYXIoKSkge1xyXG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgIHNlbGVjdGVkOiAxXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldER5bmFtaWMoMSlcclxuICB9LFxyXG5cclxuICBnb1B1Ymxpc2goKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBcIi9wYWdlcy9zb2NpZXRpZXMvcHVibGlzaC9pbmRleFwiXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGdldER5bmFtaWMocGFnZTogbnVtYmVyKSB7XHJcbiAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvZHluYW1pYy9nZXRMaXN0JywgeyBwYWdlIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGtleSBpbiByZXMuZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgcmVzLmRhdGEuZGF0YVtrZXldLmNyZWF0ZV90aW1lID0gZm9ybWF0TXNnVGltZShyZXMuZGF0YS5kYXRhW2tleV0uY3JlYXRlX3RpbWUgKiAxMDAwKVxyXG4gICAgICAgIGxpc3QucHVzaChyZXMuZGF0YS5kYXRhW2tleV0pXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsaXN0XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgZ2V0Rm9udCgpLnRoZW4oKHJlczogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgY291bnQrK1xyXG4gICAgdGhpcy5nZXREeW5hbWljKGNvdW50KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG5cclxuICB9XHJcbn0pIl19