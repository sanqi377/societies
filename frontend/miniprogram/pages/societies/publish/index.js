"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), getFont = _a.getFont, ajax = _a.ajax;
var app = getApp();
var $Notify = require('@sanqi377/qui/s-notify/notify').$Notify;
Page({
    data: {
        value: ''
    },
    getValue: function (e) {
        this.setData({
            value: e.detail.value
        });
    },
    publish: function () {
        var _this = this;
        var data = {
            value: this.data.value,
            uid: app.globalData.uid,
            create_time: Date.parse(new Date()) / 1000
        };
        ajax('http://localhost:3000/index/dynamic/addDynamic', data).then(function (res) {
            if (res.data.ret === 200) {
                $Notify({
                    type: 'success',
                    content: res.data.data.msg
                });
            }
            else {
                $Notify({
                    type: 'warning',
                    content: res.data.data.msg
                });
            }
            _this.setData({
                value: ''
            });
            setTimeout(function () {
                wx.navigateBack();
            }, 1500);
        });
    },
    onLoad: function () {
        getFont();
    },
    onReady: function () {
    },
    onShow: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBb0IsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQWhELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBbUMsQ0FBQTtBQUN4RCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNaLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUM1RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBTUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQVA7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxJQUFJLEdBQUc7WUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUc7WUFDdkIsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxJQUFJLEVBQVUsQ0FBQyxHQUFHLElBQUk7U0FDcEQsQ0FBQTtRQUNELElBQUksQ0FBQyxnREFBZ0QsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ3pFLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUN4QixPQUFPLENBQUM7b0JBQ04sSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7aUJBQzNCLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQztvQkFDTixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztpQkFDM0IsQ0FBQyxDQUFBO2FBQ0g7WUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxFQUFFO2FBQ1YsQ0FBQyxDQUFBO1lBQ0YsVUFBVSxDQUFDO2dCQUNULEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO1FBQ0osT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XG5jb25zdCB7IGdldEZvbnQsIGFqYXggfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxuY29uc3QgYXBwID0gZ2V0QXBwKClcbmNvbnN0IHsgJE5vdGlmeSB9ID0gcmVxdWlyZSgnQHNhbnFpMzc3L3F1aS9zLW5vdGlmeS9ub3RpZnknKVxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB2YWx1ZTogJydcbiAgfSxcblxuICAvKipcbiAgICog6I635Y+W5Yqo5oCB5YaF5a65XG4gICAqIEBwYXJhbSBlIFxuICAgKi9cbiAgZ2V0VmFsdWUoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHZhbHVlOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOWPkeW4g+WKqOaAgVxuICAgKi9cbiAgcHVibGlzaCgpIHtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIHZhbHVlOiB0aGlzLmRhdGEudmFsdWUsXG4gICAgICB1aWQ6IGFwcC5nbG9iYWxEYXRhLnVpZCxcbiAgICAgIGNyZWF0ZV90aW1lOiBEYXRlLnBhcnNlKChuZXcgRGF0ZSgpIGFzIGFueSkpIC8gMTAwMFxuICAgIH1cbiAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvZHluYW1pYy9hZGREeW5hbWljJywgZGF0YSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5yZXQgPT09IDIwMCkge1xuICAgICAgICAkTm90aWZ5KHtcbiAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgY29udGVudDogcmVzLmRhdGEuZGF0YS5tc2dcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICROb3RpZnkoe1xuICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5kYXRhLm1zZ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgICB9LCAxNTAwKTtcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIGdldEZvbnQoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgfVxufSkiXX0=