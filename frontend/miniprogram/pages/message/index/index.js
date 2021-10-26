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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBMEIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQXRELElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDeEQsSUFBQSxLQUFrQixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLEVBQUUsUUFBd0IsQ0FBQTtBQUMzQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUtELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1FBQ3ZDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUMzQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUE7UUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQ0FBa0MsSUFBSSxnQkFBVyxNQUFNLGFBQVEsR0FBSztTQUMxRSxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsYUFBYSxFQUFiO1FBQUEsbUJBYUM7UUFaQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDL0QsR0FBRyxD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QVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cclxuY29uc3QgeyBhamF4LCBmb3JtYXRNc2dUaW1lIH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuY29uc3QgeyBtb25pdG9yLCBpbyB9ID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YVxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgbGlzdDogW10sXHJcbiAgICB1aWQ6IDAsXHJcbiAgICBvbmxpbmU6IFtdXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2s56eB6IGK6aG16Z2iXHJcbiAgICovXHJcbiAgZ29DaGF0KGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGxldCBzZW5kID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2VuZFxyXG4gICAgbGV0IGFjY2VwdCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmFjY2VwdFxyXG4gICAgbGV0IGZpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpZFxyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogYC9wYWdlcy9tZXNzYWdlL2NoYXQvaW5kZXg/c2VuZD0ke3NlbmR9JmFjY2VwdD0ke2FjY2VwdH0mZmlkPSR7ZmlkfWBcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aaW5qyh6L+b5YWl6K+35rGC5pu05paw5raI5oGv5YiX6KGoXHJcbiAgICovXHJcbiAgdXBkYXRlTWVzc2FnZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCfmm7TmlrDmtojmga/liJfooagnKVxyXG4gICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgYWpheCgnbWVzc2FnZS9nZXRTZXNzaW9uJywgeyB1aWQ6IHRoaXMuZGF0YS51aWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgcmVzLmRhdGEuZGF0YS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBpdGVtLmxhc3RfZGF0ZXRpbWUgPSBmb3JtYXRNc2dUaW1lKGl0ZW0ubGFzdF9kYXRldGltZSAqIDEwMDApXHJcbiAgICAgIH0pXHJcbiAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxpc3Q6IHJlcy5kYXRhLmRhdGFcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0T25saW5lKClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5Lya6K+d5YiX6KGo5a+56LGh5Zyo57q/54q25oCBXHJcbiAgICovXHJcbiAgZ2V0T25saW5lKCkge1xyXG4gICAgbGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdXHJcbiAgICB0aGlzLmRhdGEubGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS51aWQgPT0gaXRlbS51aWQpIHtcclxuICAgICAgICB1c2Vycy5wdXNoKGl0ZW0uYWNjZXB0KVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0uYWNjZXB0KSB7XHJcbiAgICAgICAgdXNlcnMucHVzaChpdGVtLnVpZClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGxldCBkYXRhID0geyB0eXBlOiAnZ2V0T25saW5lJywgZGF0YTogdXNlcnMgfVxyXG4gICAgaW8uc2VuZCh7XHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguWcqOe6v+eKtuaAgeaIkOWKnycpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgdWlkID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VpZCcpXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB1aWRcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm5HlkKzmnI3liqHnq6/mtojmga/ov5Tlm55cclxuICAgICAqL1xyXG4gICAgbW9uaXRvcigocmVzOiBhbnkpID0+IHtcclxuICAgICAgbGV0IG1zZyA9IEpTT04ucGFyc2UocmVzKVxyXG4gICAgICBjb25zb2xlLmxvZyhtc2cpXHJcbiAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdnZXRPbmxpbmUnOlxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgb25saW5lOiBtc2cuZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ29mZkxpbmUnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhLm9ubGluZS5mb3JFYWNoKChlbDogYW55LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwgPT0gbXNnLmRhdGEpIHRoaXMuZGF0YS5vbmxpbmUuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG9ubGluZTogdGhpcy5kYXRhLm9ubGluZVxyXG4gICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBpdGVtLm9ubGluZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhLm9ubGluZS5mb3JFYWNoKChlbDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnVpZCA9PSBpdGVtLnVpZCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmFjY2VwdCwgZWwpXHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFjY2VwdCA9PSBlbCkgaXRlbS5vbmxpbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnVpZCwgZWwpXHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnVpZCA9PSBlbCkgaXRlbS5vbmxpbmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBsaXN0OiB0aGlzLmRhdGEubGlzdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChtc2cuZmlkID09IGl0ZW0uaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0sIG1zZylcclxuICAgICAgICAgIGl0ZW0ubGFzdF9tZXNzYWdlID0gbXNnLm1lc3NhZ2VcclxuICAgICAgICAgIGl0ZW0ubGFzdF9kYXRldGltZSA9IGZvcm1hdE1zZ1RpbWUobXNnLmNyZWF0ZV90aW1lICogMTAwMClcclxuICAgICAgICAgIGlmIChpdGVtLmFjY2VwdCA9PSBtc2cuYWNjZXB0ICYmIGl0ZW0udWlkID09IG1zZy5zZW5kKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uYV91bnJlYWQgKz0gMVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS51X3VucmVhZCArPSAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhamF4KCdtZXNzYWdlL3VwZGF0ZVVucmVhZCcsIHsgZmlkOiBpdGVtLmlkLCB1X3VucmVhZDogaXRlbS51X3VucmVhZCwgYV91bnJlYWQ6IGl0ZW0uYV91bnJlYWQgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbGlzdDogdGhpcy5kYXRhLmxpc3RcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kYXRhLm9ubGluZS5mb3JFYWNoKChlbDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0udWlkKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uYWNjZXB0ID09IGVsKSBpdGVtLm9ubGluZSA9IHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbS51aWQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGxpc3Q6IHRoaXMuZGF0YS5saXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5nZXRUYWJCYXIoKSkge1xyXG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgIHNlbGVjdGVkOiAyXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHJcbiAgfVxyXG59KSJdfQ==