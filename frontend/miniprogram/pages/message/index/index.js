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
        ajax('http://localhost:3000/index/message/getSession', { uid: this.data.uid }).then(function (res) {
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
    onLoad: function (e) {
        var _this_1 = this;
        this.setData({
            uid: 2
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
                    ajax('http://localhost:3000/index/message/updateUnread', { fid: item.id, u_unread: item.u_unread, a_unread: item.a_unread });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBbUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQS9ELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDakUsSUFBQSxLQUEyQixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQTVDLE9BQU8sYUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLEVBQUUsUUFBd0IsQ0FBQTtBQUNwRCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUtELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDdkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBQzNDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9DQUFrQyxJQUFJLGdCQUFXLE1BQU0sYUFBUSxHQUFLO1NBQzFFLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxhQUFhLEVBQWI7UUFBQSxtQkFhQztRQVpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxnREFBZ0QsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUMzRixHQUFHLENBQUMsSUFBSSxD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UyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cbmNvbnN0IHsgZ2V0Rm9udCwgYWpheCwgZm9ybWF0TXNnVGltZSB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXG5jb25zdCB7IHdsZWNvbWUsIG1vbml0b3IsIGlvIH0gPSBnZXRBcHAoKS5nbG9iYWxEYXRhXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgbGlzdDogW10sXG4gICAgdWlkOiAwLFxuICAgIG9ubGluZTogW11cbiAgfSxcblxuICAvKipcbiAgICog6Lez6L2s56eB6IGK6aG16Z2iXG4gICAqL1xuICBnb0NoYXQoZTogYW55KSB7XG4gICAgbGV0IHNlbmQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zZW5kXG4gICAgbGV0IGFjY2VwdCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmFjY2VwdFxuICAgIGxldCBmaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5maWRcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC9wYWdlcy9tZXNzYWdlL2NoYXQvaW5kZXg/c2VuZD0ke3NlbmR9JmFjY2VwdD0ke2FjY2VwdH0mZmlkPSR7ZmlkfWBcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDpppbmrKHov5vlhaXor7fmsYLmm7TmlrDmtojmga/liJfooahcbiAgICovXG4gIHVwZGF0ZU1lc3NhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coJ+abtOaWsOa2iOaBr+WIl+ihqCcpXG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9tZXNzYWdlL2dldFNlc3Npb24nLCB7IHVpZDogdGhpcy5kYXRhLnVpZCB9KS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgcmVzLmRhdGEuZGF0YS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgaXRlbS5sYXN0X2RhdGV0aW1lID0gZm9ybWF0TXNnVGltZShpdGVtLmxhc3RfZGF0ZXRpbWUgKiAxMDAwKVxuICAgICAgfSlcbiAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICBsaXN0OiByZXMuZGF0YS5kYXRhXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0T25saW5lKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W5Lya6K+d5YiX6KGo5a+56LGh5Zyo57q/54q25oCBXG4gICAqL1xuICBnZXRPbmxpbmUoKSB7XG4gICAgbGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdXG4gICAgdGhpcy5kYXRhLmxpc3QuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBpZiAodGhpcy5kYXRhLnVpZCA9PSBpdGVtLnVpZCkge1xuICAgICAgICB1c2Vycy5wdXNoKGl0ZW0uYWNjZXB0KVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGF0YS51aWQgPT0gaXRlbS5hY2NlcHQpIHtcbiAgICAgICAgdXNlcnMucHVzaChpdGVtLnVpZClcbiAgICAgIH1cbiAgICB9KVxuICAgIGxldCBkYXRhID0geyB0eXBlOiAnZ2V0T25saW5lJywgZGF0YTogdXNlcnMgfVxuICAgIGlvLnNlbmQoe1xuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLlnKjnur/nirbmgIHmiJDlip8nKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoZSkge1xuICAgIC8vIHRoaXMuc2V0RGF0YSh7XG4gICAgLy8gICB1aWQ6IGUudWlkIGFzIGFueSxcbiAgICAvLyB9KVxuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVpZDogMlxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiDliqDovb3nvZHnu5zlrZfkvZNcbiAgICAgKi9cbiAgICBnZXRGb250KClcblxuICAgIC8qKlxuICAgICAqIOebkeWQrOacjeWKoeerr+a2iOaBr+i/lOWbnlxuICAgICAqL1xuICAgIG1vbml0b3IoKHJlczogYW55KSA9PiB7XG4gICAgICBsZXQgbXNnID0gSlNPTi5wYXJzZShyZXMpXG4gICAgICBjb25zb2xlLmxvZyhtc2cpXG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2dldE9ubGluZSc6XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9ubGluZTogbXNnLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZMaW5lJzpcbiAgICAgICAgICB0aGlzLmRhdGEub25saW5lLmZvckVhY2goKGVsOiBhbnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwgPT0gbXNnLmRhdGEpIHRoaXMuZGF0YS5vbmxpbmUuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9ubGluZTogdGhpcy5kYXRhLm9ubGluZVxuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpdGVtLm9ubGluZSA9IGZhbHNlXG4gICAgICAgICAgICAgIHRoaXMuZGF0YS5vbmxpbmUuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0udWlkKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmFjY2VwdCwgZWwpXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hY2NlcHQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnVpZCwgZWwpXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS51aWQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICBsaXN0OiB0aGlzLmRhdGEubGlzdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGEubGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG1zZy5maWQgPT0gaXRlbS5pZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0sIG1zZylcbiAgICAgICAgICBpdGVtLmxhc3RfbWVzc2FnZSA9IG1zZy5tZXNzYWdlXG4gICAgICAgICAgaXRlbS5sYXN0X2RhdGV0aW1lID0gZm9ybWF0TXNnVGltZShtc2cuY3JlYXRlX3RpbWUgKiAxMDAwKVxuICAgICAgICAgIGlmIChpdGVtLmFjY2VwdCA9PSBtc2cuYWNjZXB0ICYmIGl0ZW0udWlkID09IG1zZy5zZW5kKSB7XG4gICAgICAgICAgICBpdGVtLmFfdW5yZWFkICs9IDFcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS51X3VucmVhZCArPSAxXG4gICAgICAgICAgfVxuICAgICAgICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9tZXNzYWdlL3VwZGF0ZVVucmVhZCcsIHsgZmlkOiBpdGVtLmlkLCB1X3VucmVhZDogaXRlbS51X3VucmVhZCwgYV91bnJlYWQ6IGl0ZW0uYV91bnJlYWQgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpc3Q6IHRoaXMuZGF0YS5saXN0XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YS5vbmxpbmUuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS51aWQgPT0gaXRlbS51aWQpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uYWNjZXB0ID09IGVsKSBpdGVtLm9ubGluZSA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLnVpZCA9PSBlbCkgaXRlbS5vbmxpbmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBsaXN0OiB0aGlzLmRhdGEubGlzdFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICB3bGVjb21lKHsgc2VuZDogdGhpcy5kYXRhLnVpZCwgdHlwZTogJ3dlbGNvbWUnIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmdldFRhYkJhcigpKSB7XG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RlZDogMlxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKClcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIH1cbn0pIl19