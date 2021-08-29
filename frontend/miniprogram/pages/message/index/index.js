"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), ajax = _a.ajax, formatMsgTime = _a.formatMsgTime;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBeUIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQXRELElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDdkQsSUFBQSxLQUEyQixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQTVDLE9BQU8sYUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLEVBQUUsUUFBd0IsQ0FBQTtBQUNwRCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUtELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDdkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBQzNDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9DQUFrQyxJQUFJLGdCQUFXLE1BQU0sYUFBUSxHQUFLO1NBQzFFLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxhQUFhLEVBQWI7UUFBQSxtQkFhQztRQVpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUMvRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxP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QUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cbmNvbnN0IHthamF4LCBmb3JtYXRNc2dUaW1lIH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcbmNvbnN0IHsgd2xlY29tZSwgbW9uaXRvciwgaW8gfSA9IGdldEFwcCgpLmdsb2JhbERhdGFcblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBsaXN0OiBbXSxcbiAgICB1aWQ6IDAsXG4gICAgb25saW5lOiBbXVxuICB9LFxuXG4gIC8qKlxuICAgKiDot7Povaznp4HogYrpobXpnaJcbiAgICovXG4gIGdvQ2hhdChlOiBhbnkpIHtcbiAgICBsZXQgc2VuZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNlbmRcbiAgICBsZXQgYWNjZXB0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWNjZXB0XG4gICAgbGV0IGZpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpZFxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgL3BhZ2VzL21lc3NhZ2UvY2hhdC9pbmRleD9zZW5kPSR7c2VuZH0mYWNjZXB0PSR7YWNjZXB0fSZmaWQ9JHtmaWR9YFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmmluasoei/m+WFpeivt+axguabtOaWsOa2iOaBr+WIl+ihqFxuICAgKi9cbiAgdXBkYXRlTWVzc2FnZSgpIHtcbiAgICBjb25zb2xlLmxvZygn5pu05paw5raI5oGv5YiX6KGoJylcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgYWpheCgnbWVzc2FnZS9nZXRTZXNzaW9uJywgeyB1aWQ6IHRoaXMuZGF0YS51aWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIHJlcy5kYXRhLmRhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGl0ZW0ubGFzdF9kYXRldGltZSA9IGZvcm1hdE1zZ1RpbWUoaXRlbS5sYXN0X2RhdGV0aW1lICogMTAwMClcbiAgICAgIH0pXG4gICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdDogcmVzLmRhdGEuZGF0YVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmdldE9ubGluZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluS8muivneWIl+ihqOWvueixoeWcqOe6v+eKtuaAgVxuICAgKi9cbiAgZ2V0T25saW5lKCkge1xuICAgIGxldCB1c2Vyczogc3RyaW5nW10gPSBbXVxuICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0YS51aWQgPT0gaXRlbS51aWQpIHtcbiAgICAgICAgdXNlcnMucHVzaChpdGVtLmFjY2VwdClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0uYWNjZXB0KSB7XG4gICAgICAgIHVzZXJzLnB1c2goaXRlbS51aWQpXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgZGF0YSA9IHsgdHlwZTogJ2dldE9ubGluZScsIGRhdGE6IHVzZXJzIH1cbiAgICBpby5zZW5kKHtcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5Zyo57q/54q25oCB5oiQ5YqfJylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIGxldCB1aWQgPSB3eC5nZXRTdG9yYWdlU3luYygndWlkJylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdWlkXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIOebkeWQrOacjeWKoeerr+a2iOaBr+i/lOWbnlxuICAgICAqL1xuICAgIG1vbml0b3IoKHJlczogYW55KSA9PiB7XG4gICAgICBsZXQgbXNnID0gSlNPTi5wYXJzZShyZXMpXG4gICAgICBjb25zb2xlLmxvZyhtc2cpXG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2dldE9ubGluZSc6XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9ubGluZTogbXNnLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZMaW5lJzpcbiAgICAgICAgICB0aGlzLmRhdGEub25saW5lLmZvckVhY2goKGVsOiBhbnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwgPT0gbXNnLmRhdGEpIHRoaXMuZGF0YS5vbmxpbmUuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9ubGluZTogdGhpcy5kYXRhLm9ubGluZVxuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpdGVtLm9ubGluZSA9IGZhbHNlXG4gICAgICAgICAgICAgIHRoaXMuZGF0YS5vbmxpbmUuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0udWlkKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmFjY2VwdCwgZWwpXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hY2NlcHQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnVpZCwgZWwpXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS51aWQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICBsaXN0OiB0aGlzLmRhdGEubGlzdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGEubGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG1zZy5maWQgPT0gaXRlbS5pZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0sIG1zZylcbiAgICAgICAgICBpdGVtLmxhc3RfbWVzc2FnZSA9IG1zZy5tZXNzYWdlXG4gICAgICAgICAgaXRlbS5sYXN0X2RhdGV0aW1lID0gZm9ybWF0TXNnVGltZShtc2cuY3JlYXRlX3RpbWUgKiAxMDAwKVxuICAgICAgICAgIGlmIChpdGVtLmFjY2VwdCA9PSBtc2cuYWNjZXB0ICYmIGl0ZW0udWlkID09IG1zZy5zZW5kKSB7XG4gICAgICAgICAgICBpdGVtLmFfdW5yZWFkICs9IDFcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS51X3VucmVhZCArPSAxXG4gICAgICAgICAgfVxuICAgICAgICAgIGFqYXgoJ21lc3NhZ2UvdXBkYXRlVW5yZWFkJywgeyBmaWQ6IGl0ZW0uaWQsIHVfdW5yZWFkOiBpdGVtLnVfdW5yZWFkLCBhX3VucmVhZDogaXRlbS5hX3VucmVhZCB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdDogdGhpcy5kYXRhLmxpc3RcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhLmxpc3QuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhLm9ubGluZS5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnVpZCA9PSBpdGVtLnVpZCkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5hY2NlcHQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0udWlkID09IGVsKSBpdGVtLm9ubGluZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGxpc3Q6IHRoaXMuZGF0YS5saXN0XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuICAgIHdsZWNvbWUoeyBzZW5kOiB0aGlzLmRhdGEudWlkLCB0eXBlOiAnd2VsY29tZScgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmIHRoaXMuZ2V0VGFiQmFyKCkpIHtcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XG4gICAgICAgIHNlbGVjdGVkOiAyXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgfVxufSkiXX0=