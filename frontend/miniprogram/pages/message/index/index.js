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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBbUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQS9ELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDakUsSUFBQSxLQUEyQixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQTVDLE9BQU8sYUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLEVBQUUsUUFBd0IsQ0FBQTtBQUNwRCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUtELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDdkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBQzNDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQTtRQUNyQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9DQUFrQyxJQUFJLGdCQUFXLE1BQU0sYUFBUSxHQUFLO1NBQzFFLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxhQUFhLEVBQWI7UUFBQSxtQkFhQztRQVpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxnREFBZ0QsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUMzRixHQUFHLENBQUMsSUFBSSxD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QUM7SUFLRCxNQUFNO1FBQ0osSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN2QixRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxuY29uc3QgeyBnZXRGb250LCBhamF4LCBmb3JtYXRNc2dUaW1lIH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcbmNvbnN0IHsgd2xlY29tZSwgbW9uaXRvciwgaW8gfSA9IGdldEFwcCgpLmdsb2JhbERhdGFcblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBsaXN0OiBbXSxcbiAgICB1aWQ6IDAsXG4gICAgb25saW5lOiBbXVxuICB9LFxuXG4gIC8qKlxuICAgKiDot7Povaznp4HogYrpobXpnaJcbiAgICovXG4gIGdvQ2hhdChlOiBhbnkpIHtcbiAgICBsZXQgc2VuZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNlbmRcbiAgICBsZXQgYWNjZXB0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWNjZXB0XG4gICAgbGV0IGZpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpZFxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgL3BhZ2VzL21lc3NhZ2UvY2hhdC9pbmRleD9zZW5kPSR7c2VuZH0mYWNjZXB0PSR7YWNjZXB0fSZmaWQ9JHtmaWR9YFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmmluasoei/m+WFpeivt+axguabtOaWsOa2iOaBr+WIl+ihqFxuICAgKi9cbiAgdXBkYXRlTWVzc2FnZSgpIHtcbiAgICBjb25zb2xlLmxvZygn5pu05paw5raI5oGv5YiX6KGoJylcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L21lc3NhZ2UvZ2V0U2Vzc2lvbicsIHsgdWlkOiB0aGlzLmRhdGEudWlkIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICByZXMuZGF0YS5kYXRhLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBpdGVtLmxhc3RfZGF0ZXRpbWUgPSBmb3JtYXRNc2dUaW1lKGl0ZW0ubGFzdF9kYXRldGltZSAqIDEwMDApXG4gICAgICB9KVxuICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpc3Q6IHJlcy5kYXRhLmRhdGFcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRPbmxpbmUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5bkvJror53liJfooajlr7nosaHlnKjnur/nirbmgIFcbiAgICovXG4gIGdldE9ubGluZSgpIHtcbiAgICBsZXQgdXNlcnM6IHN0cmluZ1tdID0gW11cbiAgICB0aGlzLmRhdGEubGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0udWlkKSB7XG4gICAgICAgIHVzZXJzLnB1c2goaXRlbS5hY2NlcHQpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kYXRhLnVpZCA9PSBpdGVtLmFjY2VwdCkge1xuICAgICAgICB1c2Vycy5wdXNoKGl0ZW0udWlkKVxuICAgICAgfVxuICAgIH0pXG4gICAgbGV0IGRhdGEgPSB7IHR5cGU6ICdnZXRPbmxpbmUnLCBkYXRhOiB1c2VycyB9XG4gICAgaW8uc2VuZCh7XG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguWcqOe6v+eKtuaAgeaIkOWKnycpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdWlkID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VpZCcpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVpZFxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiDliqDovb3nvZHnu5zlrZfkvZNcbiAgICAgKi9cbiAgICBnZXRGb250KClcblxuICAgIC8qKlxuICAgICAqIOebkeWQrOacjeWKoeerr+a2iOaBr+i/lOWbnlxuICAgICAqL1xuICAgIG1vbml0b3IoKHJlczogYW55KSA9PiB7XG4gICAgICBsZXQgbXNnID0gSlNPTi5wYXJzZShyZXMpXG4gICAgICBjb25zb2xlLmxvZyhtc2cpXG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2dldE9ubGluZSc6XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9ubGluZTogbXNnLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZMaW5lJzpcbiAgICAgICAgICB0aGlzLmRhdGEub25saW5lLmZvckVhY2goKGVsOiBhbnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwgPT0gbXNnLmRhdGEpIHRoaXMuZGF0YS5vbmxpbmUuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG9ubGluZTogdGhpcy5kYXRhLm9ubGluZVxuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpdGVtLm9ubGluZSA9IGZhbHNlXG4gICAgICAgICAgICAgIHRoaXMuZGF0YS5vbmxpbmUuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudWlkID09IGl0ZW0udWlkKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmFjY2VwdCwgZWwpXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hY2NlcHQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnVpZCwgZWwpXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS51aWQgPT0gZWwpIGl0ZW0ub25saW5lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICBsaXN0OiB0aGlzLmRhdGEubGlzdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGEubGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG1zZy5maWQgPT0gaXRlbS5pZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0sIG1zZylcbiAgICAgICAgICBpdGVtLmxhc3RfbWVzc2FnZSA9IG1zZy5tZXNzYWdlXG4gICAgICAgICAgaXRlbS5sYXN0X2RhdGV0aW1lID0gZm9ybWF0TXNnVGltZShtc2cuY3JlYXRlX3RpbWUgKiAxMDAwKVxuICAgICAgICAgIGlmIChpdGVtLmFjY2VwdCA9PSBtc2cuYWNjZXB0ICYmIGl0ZW0udWlkID09IG1zZy5zZW5kKSB7XG4gICAgICAgICAgICBpdGVtLmFfdW5yZWFkICs9IDFcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS51X3VucmVhZCArPSAxXG4gICAgICAgICAgfVxuICAgICAgICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9tZXNzYWdlL3VwZGF0ZVVucmVhZCcsIHsgZmlkOiBpdGVtLmlkLCB1X3VucmVhZDogaXRlbS51X3VucmVhZCwgYV91bnJlYWQ6IGl0ZW0uYV91bnJlYWQgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpc3Q6IHRoaXMuZGF0YS5saXN0XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YS5saXN0LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YS5vbmxpbmUuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS51aWQgPT0gaXRlbS51aWQpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uYWNjZXB0ID09IGVsKSBpdGVtLm9ubGluZSA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLnVpZCA9PSBlbCkgaXRlbS5vbmxpbmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBsaXN0OiB0aGlzLmRhdGEubGlzdFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICB3bGVjb21lKHsgc2VuZDogdGhpcy5kYXRhLnVpZCwgdHlwZTogJ3dlbGNvbWUnIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmdldFRhYkJhcigpKSB7XG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RlZDogMlxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKClcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIH1cbn0pIl19