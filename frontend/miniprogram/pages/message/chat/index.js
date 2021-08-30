"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajax = require('../../../utils/util').ajax;
var _a = getApp().globalData, io = _a.io, monitor = _a.monitor;
Page({
    data: {
        data: {
            message: '',
            send: '',
            accept: '',
            type: 'private',
            create_time: 0,
            fid: 0
        },
        info: {
            s_avatar: '',
            a_avatar: '',
            a_name: ''
        },
        uid: 0,
        message: []
    },
    getInput: function (e) {
        var _a;
        this.setData((_a = {},
            _a['data.message'] = e.detail.value,
            _a));
    },
    send: function () {
        var _a;
        var _this = this;
        this.setData((_a = {},
            _a['data.create_time'] = Date.parse((new Date())) / 1000,
            _a));
        io.send({
            data: JSON.stringify(this.data.data),
            success: function () {
                var _a;
                _this.setData((_a = {},
                    _a['data.message'] = '',
                    _a));
            }
        });
    },
    onLoad: function (e) {
        var _a;
        var _this = this;
        var uid = wx.getStorageSync('uid');
        this.setData((_a = {},
            _a['data.accept'] = e.accept,
            _a['data.send'] = e.send,
            _a['data.fid'] = e.fid,
            _a), function () {
            var send = uid == _this.data.data.send ? _this.data.data.send : _this.data.data.accept;
            var accept = uid == _this.data.data.send ? _this.data.data.accept : _this.data.data.send;
            ajax('message/getAvatar', { uid: send, accept: accept }).then(function (res) {
                var _a;
                _this.setData((_a = {},
                    _a['info.s_avatar'] = res.data.data.s_avatar,
                    _a['info.a_avatar'] = res.data.data.a_avatar,
                    _a['info.a_name'] = res.data.data.a_name,
                    _a));
            });
            ajax('message/updateUnread', { fid: _this.data.data.fid, send: _this.data.data.send });
        });
        monitor(function (res) {
            var msg = JSON.parse(res);
            console.log(msg);
            if (msg.send === _this.data.data.send && msg.accept === _this.data.data.accept) {
                _this.data.message.push(msg);
                _this.setData({
                    message: _this.data.message,
                }, function () {
                    var toView = "msg-" + (_this.data.message.length - 1);
                    _this.setData({
                        toView: toView
                    });
                });
            }
            if (msg.send === _this.data.data.accept && msg.accept === _this.data.data.send) {
                _this.data.message.push(msg);
                _this.setData({
                    message: _this.data.message,
                }, function () {
                    var toView = "msg-" + (_this.data.message.length - 1);
                    _this.setData({
                        toView: toView
                    });
                });
            }
            ajax('message/updateUnread', { fid: _this.data.data.fid, send: _this.data.data.send });
        });
    },
    getHistoryMsg: function () {
        var _this = this;
        ajax('message/getHistoryMsg', { fid: this.data.data.fid }).then(function (res) {
            _this.setData({
                message: res.data.data
            }, function () {
                var toView = "msg-" + (res.data.data.length - 1);
                _this.setData({
                    toView: toView
                });
            });
        });
    },
    onReady: function () {
    },
    onShow: function () {
        this.getHistoryMsg();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNRLElBQUEsSUFBSSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFuQyxDQUFtQztBQUN6QyxJQUFBLEtBQWtCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBbkMsRUFBRSxRQUFBLEVBQUUsT0FBTyxhQUF3QixDQUFBO0FBQzNDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTO1lBQ2YsV0FBVyxFQUFFLENBQUM7WUFDZCxHQUFHLEVBQUUsQ0FBQztTQUNQO1FBQ0QsSUFBSSxFQUFFO1lBQ0osUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLE1BQU0sRUFBRSxFQUFFO1NBQ1g7UUFDRCxHQUFHLEVBQUUsQ0FBQztRQUNOLE9BQU8sRUFBRSxFQUFjO0tBQ3hCO0lBTUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTs7UUFDYixJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsY0FBYyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDaEMsQ0FBQTtJQUNKLENBQUM7SUFLRCxJQUFJLEVBQUo7O1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsa0JBQWtCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQVEsQ0FBQyxHQUFHLElBQUk7Z0JBQzVELENBQUE7UUFDRixFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxFQUFFOztnQkFDUCxLQUFJLENBQUMsT0FB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Q0osQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cbmNvbnN0IHsgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXG5jb25zdCB7IGlvLCBtb25pdG9yIH0gPSBnZXRBcHAoKS5nbG9iYWxEYXRhXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGRhdGE6IHtcbiAgICAgIG1lc3NhZ2U6ICcnLCAvLyDmtojmga8sXG4gICAgICBzZW5kOiAnJywgLy8g5Y+R6YCB5Lq6XG4gICAgICBhY2NlcHQ6ICcnLCAvLyDmjqXmlLbkurpcbiAgICAgIHR5cGU6ICdwcml2YXRlJywgLy8g5raI5oGv57G75Z6LXG4gICAgICBjcmVhdGVfdGltZTogMCxcbiAgICAgIGZpZDogMFxuICAgIH0sXG4gICAgaW5mbzoge1xuICAgICAgc19hdmF0YXI6ICcnLFxuICAgICAgYV9hdmF0YXI6ICcnLFxuICAgICAgYV9uYW1lOiAnJ1xuICAgIH0sXG4gICAgdWlkOiAwLFxuICAgIG1lc3NhZ2U6IFtdIGFzIHN0cmluZ1tdXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPlui+k+WFpeahhuWGheWuuVxuICAgKiBAcGFyYW0gZSBcbiAgICovXG4gIGdldElucHV0KGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2RhdGEubWVzc2FnZSddOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOWPkemAgea2iOaBr1xuICAgKi9cbiAgc2VuZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydkYXRhLmNyZWF0ZV90aW1lJ106IERhdGUucGFyc2UoKG5ldyBEYXRlKCkpIGFzIGFueSkgLyAxMDAwXG4gICAgfSlcbiAgICBpby5zZW5kKHtcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5kYXRhKSxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBbJ2RhdGEubWVzc2FnZSddOiAnJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgb25Mb2FkKGUpIHtcbiAgICBsZXQgdWlkID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VpZCcpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFsnZGF0YS5hY2NlcHQnXTogZS5hY2NlcHQsXG4gICAgICBbJ2RhdGEuc2VuZCddOiBlLnNlbmQsXG4gICAgICBbJ2RhdGEuZmlkJ106IGUuZmlkLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGxldCBzZW5kID0gdWlkID09IHRoaXMuZGF0YS5kYXRhLnNlbmQgPyB0aGlzLmRhdGEuZGF0YS5zZW5kIDogdGhpcy5kYXRhLmRhdGEuYWNjZXB0XG4gICAgICBsZXQgYWNjZXB0ID0gdWlkID09IHRoaXMuZGF0YS5kYXRhLnNlbmQgPyB0aGlzLmRhdGEuZGF0YS5hY2NlcHQgOiB0aGlzLmRhdGEuZGF0YS5zZW5kXG4gICAgICBhamF4KCdtZXNzYWdlL2dldEF2YXRhcicsIHsgdWlkOiBzZW5kLCBhY2NlcHQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBbJ2luZm8uc19hdmF0YXInXTogcmVzLmRhdGEuZGF0YS5zX2F2YXRhcixcbiAgICAgICAgICBbJ2luZm8uYV9hdmF0YXInXTogcmVzLmRhdGEuZGF0YS5hX2F2YXRhcixcbiAgICAgICAgICBbJ2luZm8uYV9uYW1lJ106IHJlcy5kYXRhLmRhdGEuYV9uYW1lXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgYWpheCgnbWVzc2FnZS91cGRhdGVVbnJlYWQnLCB7IGZpZDogdGhpcy5kYXRhLmRhdGEuZmlkLCBzZW5kOiB0aGlzLmRhdGEuZGF0YS5zZW5kIH0pXG4gICAgfSlcbiAgICAvKipcbiAgICAgKiDnm5HlkKzmnI3liqHnq6/mtojmga/ov5Tlm55cbiAgICAgKi9cbiAgICBtb25pdG9yKChyZXM6IGFueSkgPT4ge1xuICAgICAgbGV0IG1zZyA9IEpTT04ucGFyc2UocmVzKVxuICAgICAgY29uc29sZS5sb2cobXNnKVxuICAgICAgaWYgKG1zZy5zZW5kID09PSB0aGlzLmRhdGEuZGF0YS5zZW5kICYmIG1zZy5hY2NlcHQgPT09IHRoaXMuZGF0YS5kYXRhLmFjY2VwdCkge1xuICAgICAgICB0aGlzLmRhdGEubWVzc2FnZS5wdXNoKG1zZylcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIGxldCB0b1ZpZXcgPSBgbXNnLSR7dGhpcy5kYXRhLm1lc3NhZ2UubGVuZ3RoIC0gMX1gXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHRvVmlld1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAobXNnLnNlbmQgPT09IHRoaXMuZGF0YS5kYXRhLmFjY2VwdCAmJiBtc2cuYWNjZXB0ID09PSB0aGlzLmRhdGEuZGF0YS5zZW5kKSB7XG4gICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlLnB1c2gobXNnKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRvVmlldyA9IGBtc2ctJHt0aGlzLmRhdGEubWVzc2FnZS5sZW5ndGggLSAxfWBcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdG9WaWV3XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGFqYXgoJ21lc3NhZ2UvdXBkYXRlVW5yZWFkJywgeyBmaWQ6IHRoaXMuZGF0YS5kYXRhLmZpZCwgc2VuZDogdGhpcy5kYXRhLmRhdGEuc2VuZCB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPluWOhuWPsua2iOaBr1xuICAgKi9cbiAgZ2V0SGlzdG9yeU1zZygpIHtcbiAgICBhamF4KCdtZXNzYWdlL2dldEhpc3RvcnlNc2cnLCB7IGZpZDogdGhpcy5kYXRhLmRhdGEuZmlkIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBtZXNzYWdlOiByZXMuZGF0YS5kYXRhXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIGxldCB0b1ZpZXcgPSBgbXNnLSR7cmVzLmRhdGEuZGF0YS5sZW5ndGggLSAxfWBcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICB0b1ZpZXdcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG4gICAgLy8gd2xlY29tZSh7IHNlbmQ6IHRoaXMuZGF0YS5kYXRhLnNlbmQsIHR5cGU6ICd3ZWxjb21lJyB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuICAgIHRoaXMuZ2V0SGlzdG9yeU1zZygpXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcblxuICB9XG59KSJdfQ==