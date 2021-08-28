"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), getFont = _a.getFont, ajax = _a.ajax, formatMsgTime = _a.formatMsgTime;
var _b = getApp().globalData, wlecome = _b.wlecome, monitor = _b.monitor, io = _b.io;
Page({
    data: {
        list: [],
        uid: 0,
        online: []
    },
    goChat: function (e) {
        var send = e.currentTarget.dataset.send;
        var accept = e.currentTarget.dataset.accept;
        var fid = e.currentTarget.dataset.fid;
        wx.navigateTo({
            url: "/pages/message/chat/index?send=" + send + "&accept=" + accept + "&fid=" + fid
        });
    },
    updateMessage: function () {
        var _this_1 = this;
        console.log('更新消息列表');
        var _this = this;
        ajax('message/getSession', { uid: this.data.uid }).then(function (res) {
            res.data.data.forEach(function (item) {
                item.last_datetime = formatMsgTime(item.last_datetime * 1000);
            });
            _this.setData({
                list: res.data.data
            }, function () {
                _this_1.getOnline();
            });
        });
    },
    getOnline: function () {
        var _this_1 = this;
        var users = [];
        this.data.list.forEach(function (item) {
            if (_this_1.data.uid == item.uid) {
                users.push(item.accept);
            }
            if (_this_1.data.uid == item.accept) {
                users.push(item.uid);
            }
        });
        var data = { type: 'getOnline', data: users };
        io.send({
            data: JSON.stringify(data),
            success: function () {
                console.log('请求在线状态成功');
            }
        });
    },
    onLoad: function () {
        var _this_1 = this;
        var uid = wx.getStorageSync('uid');
        this.setData({
            uid: uid
        });
        getFont();
        monitor(function (res) {
            var msg = JSON.parse(res);
            console.log(msg);
            switch (msg.type) {
                case 'getOnline':
                    _this_1.setData({
                        online: msg.data
                    });
                    break;
                case 'offLine':
                    _this_1.data.online.forEach(function (el, index) {
                        if (el == msg.data)
                            _this_1.data.online.splice(index, 1);
                    });
                    _this_1.setData({
                        online: _this_1.data.online
                    }, function () {
                        _this_1.data.list.forEach(function (item) {
                            item.online = false;
                            _this_1.data.online.forEach(function (el) {
                                if (_this_1.data.uid == item.uid) {
                                    console.log(item.accept, el);
                                    if (item.accept == el)
                                        item.online = true;
                                }
                                else {
                                    console.log(item.uid, el);
                                    if (item.uid == el)
                                        item.online = true;
                                }
                            });
                        });
                        _this_1.setData({
                            list: _this_1.data.list
                        });
                    });
                    break;
                default:
                    break;
            }
            _this_1.data.list.forEach(function (item) {
                if (msg.fid == item.id) {
                    console.log(item, msg);
                    item.last_message = msg.message;
                    item.last_datetime = formatMsgTime(msg.create_time * 1000);
                    if (item.accept == msg.accept && item.uid == msg.send) {
                        item.a_unread += 1;
                    }
                    else {
                        item.u_unread += 1;
                    }
                    ajax('message/updateUnread', { fid: item.id, u_unread: item.u_unread, a_unread: item.a_unread });
                }
            });
            _this_1.setData({
                list: _this_1.data.list
            }, function () {
                _this_1.data.list.forEach(function (item) {
                    _this_1.data.online.forEach(function (el) {
                        if (_this_1.data.uid == item.uid) {
                            if (item.accept == el)
                                item.online = true;
                        }
                        else {
                            if (item.uid == el)
                                item.online = true;
                        }
                    });
                });
                _this_1.setData({
                    list: _this_1.data.list
                });
            });
        });
    },
    onReady: function () {
        wlecome({ send: this.data.uid, type: 'welcome' });
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 2
            });
        }
        this.updateMessage();
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBbUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQS9ELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDakUsSUFBQSxLQUEyQixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQTVDLE9BQU8sYUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLEVBQUUsUUFBd0IsQ0FBQTtBQUNwRCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUtELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDdkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBQzNDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9DQUFrQyxJQUFJLGdCQUFXLE1BQU0sYUFBUSxHQUFLO1NBQzFFLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxhQUFhLEVBQWI7UUFBQSxtQkFhQztRQVpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUMvRCxHQUFHLENBQUMsSUFBSSxD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QUM7SUFLRCxNQUFNO1FBQ0osSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN2QixRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxuY29uc3QgeyBnZXRGb250LCBhamF4LCBmb3JtYXRNc2dUaW1lIH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcbmNvbnN0IHsgd2xlY29tZSwgbW9uaXRvciwgaW8gfSA9IGdldEFwcCgpLmdsb2JhbERhdGFcblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBsaXN0OiBbXSxcbiAgICB1aWQ6IDAsXG4gICAgb25saW5lOiBbXVxuICB9LFxuXG4gIC8qKlxuICAgKiDot7Povaznp4HogYrpobXpnaJcbiAgICovXG4gIGdvQ2hhdChlOiBhbnkpIHtcbiAgICBsZXQgc2VuZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNlbmRcbiAgICBsZXQgYWNjZXB0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWNjZXB0XG4gICAgbGV0IGZpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpZFxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgL3BhZ2VzL21lc3NhZ2UvY2hhdC9pbmRleD9zZW5kPSR7c2VuZH0mYWNjZXB0PSR7YWNjZXB0fSZmaWQ9JHtmaWR9YFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmmluasoei/m+WFpeivt+axguabtOaWsOa2iOaBr+WIl+ihqFxuICAgKi9cbiAgdXBkYXRlTWVzc2FnZSgpIHtcbiAgICBjb25zb2xlLmxvZygn5pu05paw5raI5oGv5YiX6KGoJylcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgYWpheCgnbWVzc2FnZS9nZXRTZXNzaW9uJywgeyB1aWQ6IHRoaXMuZGF0YS51aWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIHJlcy5kYXRhLmRhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGl0ZW0ubGFzdF9kYXRldGltZSA9IGZvcm1hdE1zZ1RpbWUoaXRlbS5sYXN0X2RhdGV0aW1lICogMTAwMClcbiAgICAgIH0pXG4gICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdDogcmVzLmRhdGEuZGF0YVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmdldE9ubGluZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluS8muivneWIl+ihqOWvueixoeWcqOe6v+eKtuaAgVxuICAgKi9cbiAgZ2V0T25saW5lKCkge1xuICAgIGxldCB1c2Vyczogc3RyaW5nW10gPSBbXVxuICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0YS51aWQgPT0gaXRlbS51aWQpIHtcbiAgICAgICAgdXNlcnMucHVzaChpdGVtLmFjY2VwdClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0uYWNjZXB0KSB7XG4gICAgICAgIHVzZXJzLnB1c2goaXRlbS51aWQpXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgZGF0YSA9IHsgdHlwZTogJ2dldE9ubGluZScsIGRhdGE6IHVzZXJzIH1cbiAgICBpby5zZW5kKHtcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5Zyo57q/54q25oCB5oiQ5YqfJylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIGxldCB1aWQgPSB3eC5nZXRTdG9yYWdlU3luYygndWlkJylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdWlkXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIOWKoOi9vee9kee7nOWtl+S9k1xuICAgICAqL1xuICAgIGdldEZvbnQoKVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs5pyN5Yqh56uv5raI5oGv6L+U5ZueXG4gICAgICovXG4gICAgbW9uaXRvcigocmVzOiBhbnkpID0+IHtcbiAgICAgIGxldCBtc2cgPSBKU09OLnBhcnNlKHJlcylcbiAgICAgIGNvbnNvbGUubG9nKG1zZylcbiAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnZ2V0T25saW5lJzpcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgb25saW5lOiBtc2cuZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29mZkxpbmUnOlxuICAgICAgICAgIHRoaXMuZGF0YS5vbmxpbmUuZm9yRWFjaCgoZWw6IGFueSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbCA9PSBtc2cuZGF0YSkgdGhpcy5kYXRhLm9ubGluZS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgb25saW5lOiB0aGlzLmRhdGEub25saW5lXG4gICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmxpc3QuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGl0ZW0ub25saW5lID0gZmFsc2VcbiAgICAgICAgICAgICAgdGhpcy5kYXRhLm9ubGluZS5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS51aWQgPT0gaXRlbS51aWQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uYWNjZXB0LCBlbClcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFjY2VwdCA9PSBlbCkgaXRlbS5vbmxpbmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0udWlkLCBlbClcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnVpZCA9PSBlbCkgaXRlbS5vbmxpbmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIGxpc3Q6IHRoaXMuZGF0YS5saXN0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBpZiAobXNnLmZpZCA9PSBpdGVtLmlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSwgbXNnKVxuICAgICAgICAgIGl0ZW0ubGFzdF9tZXNzYWdlID0gbXNnLm1lc3NhZ2VcbiAgICAgICAgICBpdGVtLmxhc3RfZGF0ZXRpbWUgPSBmb3JtYXRNc2dUaW1lKG1zZy5jcmVhdGVfdGltZSAqIDEwMDApXG4gICAgICAgICAgaWYgKGl0ZW0uYWNjZXB0ID09IG1zZy5hY2NlcHQgJiYgaXRlbS51aWQgPT0gbXNnLnNlbmQpIHtcbiAgICAgICAgICAgIGl0ZW0uYV91bnJlYWQgKz0gMVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLnVfdW5yZWFkICs9IDFcbiAgICAgICAgICB9XG4gICAgICAgICAgYWpheCgnbWVzc2FnZS91cGRhdGVVbnJlYWQnLCB7IGZpZDogaXRlbS5pZCwgdV91bnJlYWQ6IGl0ZW0udV91bnJlYWQsIGFfdW5yZWFkOiBpdGVtLmFfdW5yZWFkIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsaXN0OiB0aGlzLmRhdGEubGlzdFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEubGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEub25saW5lLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0udWlkKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLmFjY2VwdCA9PSBlbCkgaXRlbS5vbmxpbmUgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoaXRlbS51aWQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgbGlzdDogdGhpcy5kYXRhLmxpc3RcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG4gICAgd2xlY29tZSh7IHNlbmQ6IHRoaXMuZGF0YS51aWQsIHR5cGU6ICd3ZWxjb21lJyB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5nZXRUYWJCYXIoKSkge1xuICAgICAgdGhpcy5nZXRUYWJCYXIoKS5zZXREYXRhKHtcbiAgICAgICAgc2VsZWN0ZWQ6IDJcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcblxuICB9XG59KSJdfQ==