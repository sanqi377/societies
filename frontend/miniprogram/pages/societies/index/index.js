"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), ajax = _a.ajax, formatMsgTime = _a.formatMsgTime;
var app = getApp();
var list = [];
var count = 0;
var isBottom = false;
Page({
    list: [],
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            });
        }
        this.getDynamic();
    },
    goPublish: function () {
        wx.navigateTo({
            url: "/pages/societies/publish/index"
        });
    },
    subscribe: function (e) {
        var _this = this;
        var index = e.currentTarget.dataset.index;
        var data = {
            subscribe: app.globalData.uid,
            be_subscribe: e.currentTarget.dataset.be_subscribe,
            update_time: Date.parse(new Date()) / 1000
        };
        app.globalData.subscribe(data).then(function () {
            _this.data.list[index].fans = true;
            _this.setData({
                list: _this.data.list
            });
        });
    },
    cancelSubscribe: function (e) {
        var _this = this;
        var index = e.currentTarget.dataset.index;
        var data = {
            subscribe: app.globalData.uid,
            be_subscribe: e.currentTarget.dataset.be_subscribe,
        };
        app.globalData.unSubscribe({
            data: data,
            success: function () {
                _this.data.list[index].fans = false;
                _this.setData({
                    list: _this.data.list
                });
            }
        });
    },
    getDynamic: function () {
        var _this = this;
        count++;
        if (!isBottom) {
            ajax('Dynamic/getList', { uid: app.globalData.uid, page: count }).then(function (res) {
                wx.stopPullDownRefresh();
                if (res.data.data.length > 0) {
                    for (var key in res.data.data) {
                        res.data.data[key].create_time = formatMsgTime(res.data.data[key].create_time * 1000);
                        list.push(res.data.data[key]);
                    }
                    _this.setData({
                        list: list
                    });
                }
                else {
                    isBottom = true;
                }
            });
        }
    },
    onLoad: function () {
    },
    onReady: function () {
    },
    onHide: function () {
        list = [];
        count = 0;
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
        list = [];
        count = 0;
        this.getDynamic();
    },
    onReachBottom: function () {
        this.getDynamic();
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBMEIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQXRELElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDOUQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUE7QUFDcEIsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFBO0FBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtBQUNiLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQTtBQUNwQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFBRTtJQUVSLE1BQU0sRUFBRTtRQUNOLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxTQUFTLEVBQVQsVUFBVSxDQUFNO1FBQWhCLGlCQWFDO1FBWkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQ3pDLElBQUksSUFBSSxHQUFHO1lBQ1QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRztZQUM3QixZQUFZLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWTtZQUNsRCxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLElBQUksRUFBVSxDQUFDLEdBQUcsSUFB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clxuY29uc3QgeyBhamF4LCBmb3JtYXRNc2dUaW1lIH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuY29uc3QgYXBwID0gZ2V0QXBwKClcclxubGV0IGxpc3Q6IGFueSA9IFtdXHJcbmxldCBjb3VudCA9IDBcclxubGV0IGlzQm90dG9tID0gZmFsc2VcclxuUGFnZSh7XHJcbiAgbGlzdDogW10sXHJcblxyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmdldFRhYkJhcigpKSB7XHJcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IDFcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0RHluYW1pYygpXHJcbiAgfSxcclxuXHJcbiAgZ29QdWJsaXNoKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogXCIvcGFnZXMvc29jaWV0aWVzL3B1Ymxpc2gvaW5kZXhcIlxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgICAqIOWFs+azqFxyXG4gICAgICogQHBhcmFtIGUgXHJcbiAgICAgKi9cclxuICBzdWJzY3JpYmUoZTogYW55KSB7XHJcbiAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHN1YnNjcmliZTogYXBwLmdsb2JhbERhdGEudWlkLFxyXG4gICAgICBiZV9zdWJzY3JpYmU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJlX3N1YnNjcmliZSxcclxuICAgICAgdXBkYXRlX3RpbWU6IERhdGUucGFyc2UoKG5ldyBEYXRlKCkgYXMgYW55KSkgLyAxMDAwXHJcbiAgICB9XHJcbiAgICBhcHAuZ2xvYmFsRGF0YS5zdWJzY3JpYmUoZGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YS5saXN0W2luZGV4XS5mYW5zID0gdHJ1ZVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxpc3Q6IHRoaXMuZGF0YS5saXN0XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAgICog5Y+W5raI5YWz5rOoXHJcbiAgICAgKiBAcGFyYW0gZSBcclxuICAgICAqL1xyXG4gIGNhbmNlbFN1YnNjcmliZShlOiBhbnkpIHtcclxuICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgc3Vic2NyaWJlOiBhcHAuZ2xvYmFsRGF0YS51aWQsXHJcbiAgICAgIGJlX3N1YnNjcmliZTogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYmVfc3Vic2NyaWJlLFxyXG4gICAgfVxyXG4gICAgYXBwLmdsb2JhbERhdGEudW5TdWJzY3JpYmUoe1xyXG4gICAgICBkYXRhLCBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmxpc3RbaW5kZXhdLmZhbnMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBsaXN0OiB0aGlzLmRhdGEubGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgZ2V0RHluYW1pYygpIHtcclxuICAgIGNvdW50KytcclxuICAgIGlmICghaXNCb3R0b20pIHtcclxuICAgICAgYWpheCgnRHluYW1pYy9nZXRMaXN0JywgeyB1aWQ6IGFwcC5nbG9iYWxEYXRhLnVpZCwgcGFnZTogY291bnQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzLmRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICByZXMuZGF0YS5kYXRhW2tleV0uY3JlYXRlX3RpbWUgPSBmb3JtYXRNc2dUaW1lKHJlcy5kYXRhLmRhdGFba2V5XS5jcmVhdGVfdGltZSAqIDEwMDApXHJcbiAgICAgICAgICAgIGxpc3QucHVzaChyZXMuZGF0YS5kYXRhW2tleV0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBsaXN0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpc0JvdHRvbSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuICAgIGxpc3QgPSBbXVxyXG4gICAgY291bnQgPSAwXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIGxpc3QgPSBbXVxyXG4gICAgY291bnQgPSAwXHJcbiAgICB0aGlzLmdldER5bmFtaWMoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcblxyXG4gICAgdGhpcy5nZXREeW5hbWljKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHJcbiAgfVxyXG59KSJdfQ==