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
        this.setData((_a = {},
            _a['data.accept'] = e.accept,
            _a['data.send'] = e.send,
            _a['data.fid'] = e.fid,
            _a), function () {
            ajax('message/updateUnread', { fid: _this.data.data.fid, send: _this.data.data.send });
        });
        monitor(function (res) {
            var msg = JSON.parse(res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNTLElBQUEsSUFBSSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFuQyxDQUFtQztBQUMxQyxJQUFBLEtBQWtCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBbkMsRUFBRSxRQUFBLEVBQUUsT0FBTyxhQUF3QixDQUFBO0FBQzNDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTO1lBQ2YsV0FBVyxFQUFFLENBQUM7WUFDZCxHQUFHLEVBQUUsQ0FBQztTQUNQO1FBQ0QsT0FBTyxFQUFFLEVBQWM7S0FDeEI7SUFNRCxRQUFRLEVBQVIsVUFBUyxDQUFNOztRQUNiLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxjQUFjLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNoQyxDQUFBO0lBQ0osQ0FBQztJQUtELElBQUksRUFBSjs7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxrQkFBa0IsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBUSxDQUFDLEdBQUcsSUFBSTtnQkFDNUQsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNwQyxPQUFPLEVBQUU7O2dCQUNQLEtBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsY0FBYyxJQUFHLEVBQUU7d0JBQ3BCLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBTixVQUFPLENBQUM7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SixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cbmNvbnN0IHsgIGFqYXggfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxuY29uc3QgeyBpbywgbW9uaXRvciB9ID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YVxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBkYXRhOiB7XG4gICAgICBtZXNzYWdlOiAnJywgLy8g5raI5oGvLFxuICAgICAgc2VuZDogJycsIC8vIOWPkemAgeS6ulxuICAgICAgYWNjZXB0OiAnJywgLy8g5o6l5pS25Lq6XG4gICAgICB0eXBlOiAncHJpdmF0ZScsIC8vIOa2iOaBr+exu+Wei1xuICAgICAgY3JlYXRlX3RpbWU6IDAsXG4gICAgICBmaWQ6IDBcbiAgICB9LFxuICAgIG1lc3NhZ2U6IFtdIGFzIHN0cmluZ1tdXG4gIH0sXG5cbiAgLyoqXG4gICAqIOiOt+WPlui+k+WFpeahhuWGheWuuVxuICAgKiBAcGFyYW0gZSBcbiAgICovXG4gIGdldElucHV0KGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbJ2RhdGEubWVzc2FnZSddOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOWPkemAgea2iOaBr1xuICAgKi9cbiAgc2VuZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydkYXRhLmNyZWF0ZV90aW1lJ106IERhdGUucGFyc2UoKG5ldyBEYXRlKCkpIGFzIGFueSkgLyAxMDAwXG4gICAgfSlcbiAgICBpby5zZW5kKHtcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5kYXRhKSxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBbJ2RhdGEubWVzc2FnZSddOiAnJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgb25Mb2FkKGUpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgWydkYXRhLmFjY2VwdCddOiBlLmFjY2VwdCxcbiAgICAgIFsnZGF0YS5zZW5kJ106IGUuc2VuZCxcbiAgICAgIFsnZGF0YS5maWQnXTogZS5maWRcbiAgICB9LCAoKSA9PiB7XG4gICAgICBhamF4KCdtZXNzYWdlL3VwZGF0ZVVucmVhZCcsIHsgZmlkOiB0aGlzLmRhdGEuZGF0YS5maWQsIHNlbmQ6IHRoaXMuZGF0YS5kYXRhLnNlbmQgfSlcbiAgICB9KVxuICAgIC8qKlxuICAgICAqIOebkeWQrOacjeWKoeerr+a2iOaBr+i/lOWbnlxuICAgICAqL1xuICAgIG1vbml0b3IoKHJlczogYW55KSA9PiB7XG4gICAgICBsZXQgbXNnID0gSlNPTi5wYXJzZShyZXMpXG4gICAgICBpZiAobXNnLnNlbmQgPT09IHRoaXMuZGF0YS5kYXRhLnNlbmQgJiYgbXNnLmFjY2VwdCA9PT0gdGhpcy5kYXRhLmRhdGEuYWNjZXB0KSB7XG4gICAgICAgIHRoaXMuZGF0YS5tZXNzYWdlLnB1c2gobXNnKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRvVmlldyA9IGBtc2ctJHt0aGlzLmRhdGEubWVzc2FnZS5sZW5ndGggLSAxfWBcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdG9WaWV3XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChtc2cuc2VuZCA9PT0gdGhpcy5kYXRhLmRhdGEuYWNjZXB0ICYmIG1zZy5hY2NlcHQgPT09IHRoaXMuZGF0YS5kYXRhLnNlbmQpIHtcbiAgICAgICAgdGhpcy5kYXRhLm1lc3NhZ2UucHVzaChtc2cpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgbWVzc2FnZTogdGhpcy5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICBsZXQgdG9WaWV3ID0gYG1zZy0ke3RoaXMuZGF0YS5tZXNzYWdlLmxlbmd0aCAtIDF9YFxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB0b1ZpZXdcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgYWpheCgnbWVzc2FnZS91cGRhdGVVbnJlYWQnLCB7IGZpZDogdGhpcy5kYXRhLmRhdGEuZmlkLCBzZW5kOiB0aGlzLmRhdGEuZGF0YS5zZW5kIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W5Y6G5Y+y5raI5oGvXG4gICAqL1xuICBnZXRIaXN0b3J5TXNnKCkge1xuICAgIGFqYXgoJ21lc3NhZ2UvZ2V0SGlzdG9yeU1zZycsIHsgZmlkOiB0aGlzLmRhdGEuZGF0YS5maWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIG1lc3NhZ2U6IHJlcy5kYXRhLmRhdGFcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgbGV0IHRvVmlldyA9IGBtc2ctJHtyZXMuZGF0YS5kYXRhLmxlbmd0aCAtIDF9YFxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHRvVmlld1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICAvLyB3bGVjb21lKHsgc2VuZDogdGhpcy5kYXRhLmRhdGEuc2VuZCwgdHlwZTogJ3dlbGNvbWUnIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG4gICAgdGhpcy5nZXRIaXN0b3J5TXNnKClcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIH1cbn0pIl19