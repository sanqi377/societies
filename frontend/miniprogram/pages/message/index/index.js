"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), ajax = _a.ajax, formatMsgTime = _a.formatMsgTime;
var _b = getApp().globalData, monitor = _b.monitor, io = _b.io;
Page({
    data: {
        list: [],
        uid: 0,
        online: []
    },
    goChat: function (e) {
        console.log(e);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBMEIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQXRELElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDeEQsSUFBQSxLQUFrQixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLEVBQUUsUUFBd0IsQ0FBQTtBQUMzQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUtELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1FBQ3ZDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUMzQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUE7UUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQ0FBa0MsSUFBSSxnQkFBVyxNQUFNLGFBQVEsR0FBSztTQUMxRSxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsYUFBYSxFQUFiO1FBQUEsbUJBYUM7UUFaQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDL0QsR0FBRyxD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QVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cbmNvbnN0IHsgYWpheCwgZm9ybWF0TXNnVGltZSB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXG5jb25zdCB7IG1vbml0b3IsIGlvIH0gPSBnZXRBcHAoKS5nbG9iYWxEYXRhXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgbGlzdDogW10sXG4gICAgdWlkOiAwLFxuICAgIG9ubGluZTogW11cbiAgfSxcblxuICAvKipcbiAgICog6Lez6L2s56eB6IGK6aG16Z2iXG4gICAqL1xuICBnb0NoYXQoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBsZXQgc2VuZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNlbmRcbiAgICBsZXQgYWNjZXB0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWNjZXB0XG4gICAgbGV0IGZpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpZFxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgL3BhZ2VzL21lc3NhZ2UvY2hhdC9pbmRleD9zZW5kPSR7c2VuZH0mYWNjZXB0PSR7YWNjZXB0fSZmaWQ9JHtmaWR9YFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmmluasoei/m+WFpeivt+axguabtOaWsOa2iOaBr+WIl+ihqFxuICAgKi9cbiAgdXBkYXRlTWVzc2FnZSgpIHtcbiAgICBjb25zb2xlLmxvZygn5pu05paw5raI5oGv5YiX6KGoJylcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgYWpheCgnbWVzc2FnZS9nZXRTZXNzaW9uJywgeyB1aWQ6IHRoaXMuZGF0YS51aWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIHJlcy5kYXRhLmRhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGl0ZW0ubGFzdF9kYXRldGltZSA9IGZvcm1hdE1zZ1RpbWUoaXRlbS5sYXN0X2RhdGV0aW1lICogMTAwMClcbiAgICAgIH0pXG4gICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdDogcmVzLmRhdGEuZGF0YVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmdldE9ubGluZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluS8muivneWIl+ihqOWvueixoeWcqOe6v+eKtuaAgVxuICAgKi9cbiAgZ2V0T25saW5lKCkge1xuICAgIGxldCB1c2Vyczogc3RyaW5nW10gPSBbXVxuICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0YS51aWQgPT0gaXRlbS51aWQpIHtcbiAgICAgICAgdXNlcnMucHVzaChpdGVtLmFjY2VwdClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0uYWNjZXB0KSB7XG4gICAgICAgIHVzZXJzLnB1c2goaXRlbS51aWQpXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgZGF0YSA9IHsgdHlwZTogJ2dldE9ubGluZScsIGRhdGE6IHVzZXJzIH1cbiAgICBpby5zZW5kKHtcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5Zyo57q/54q25oCB5oiQ5YqfJylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIGxldCB1aWQgPSB3eC5nZXRTdG9yYWdlU3luYygndWlkJylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdWlkXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIOebkeWQrOacjeWKoeerr+a2iOaBr+i/lOWbnlxuICAgICAqL1xuICAgIG1vbml0b3IoKHJlczogYW55KSA9PiB7XG4gICAgICBsZXQgbXNnID0gSlNPTi5wYXJzZShyZXMpXG4gICAgICBjb25zb2xlLmxvZyhtc2cpXG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2dldE9ubGluZSc6XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9ubGluZTogbXNnLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZMaW5lJzpcbiAgICAgICAgICB0aGlzLmRhdGEub25saW5lLmZvckVhY2goKGVsOiBhbnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwgPT0gbXNnLmRhdGEpIHRoaXMuZGF0YS5vbmxpbmUuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9ubGluZTogdGhpcy5kYXRhLm9ubGluZVxuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpdGVtLm9ubGluZSA9IGZhbHNlXG4gICAgICAgICAgICAgIHRoaXMuZGF0YS5vbmxpbmUuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0udWlkKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmFjY2VwdCwgZWwpXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hY2NlcHQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnVpZCwgZWwpXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS51aWQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICBsaXN0OiB0aGlzLmRhdGEubGlzdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGEubGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG1zZy5maWQgPT0gaXRlbS5pZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0sIG1zZylcbiAgICAgICAgICBpdGVtLmxhc3RfbWVzc2FnZSA9IG1zZy5tZXNzYWdlXG4gICAgICAgICAgaXRlbS5sYXN0X2RhdGV0aW1lID0gZm9ybWF0TXNnVGltZShtc2cuY3JlYXRlX3RpbWUgKiAxMDAwKVxuICAgICAgICAgIGlmIChpdGVtLmFjY2VwdCA9PSBtc2cuYWNjZXB0ICYmIGl0ZW0udWlkID09IG1zZy5zZW5kKSB7XG4gICAgICAgICAgICBpdGVtLmFfdW5yZWFkICs9IDFcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS51X3VucmVhZCArPSAxXG4gICAgICAgICAgfVxuICAgICAgICAgIGFqYXgoJ21lc3NhZ2UvdXBkYXRlVW5yZWFkJywgeyBmaWQ6IGl0ZW0uaWQsIHVfdW5yZWFkOiBpdGVtLnVfdW5yZWFkLCBhX3VucmVhZDogaXRlbS5hX3VucmVhZCB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdDogdGhpcy5kYXRhLmxpc3RcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhLmxpc3QuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhLm9ubGluZS5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnVpZCA9PSBpdGVtLnVpZCkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5hY2NlcHQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0udWlkID09IGVsKSBpdGVtLm9ubGluZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGxpc3Q6IHRoaXMuZGF0YS5saXN0XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmdldFRhYkJhcigpKSB7XG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RlZDogMlxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKClcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIH1cbn0pIl19