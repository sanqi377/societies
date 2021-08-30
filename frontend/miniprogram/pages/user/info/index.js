"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), ajax = _a.ajax, formatMsgTime = _a.formatMsgTime;
var app = getApp();
var uid;
Page({
    data: {
        info: {},
        dynamic: []
    },
    onLoad: function (e) {
        uid = e.uid;
    },
    onReady: function () {
    },
    getInfo: function () {
        var _this = this;
        ajax('user/getInfo', { uid: uid }).then(function (res) {
            _this.setData({
                info: res.data.data
            });
        });
    },
    goChat: function () {
        ajax('user/getSession', { uid: app.globalData.uid, accept: uid }).then(function (res) {
            wx.navigateTo({
                url: "/pages/message/chat/index?fid=" + res.data.data + "&send=" + app.globalData.uid + "&accept=" + uid
            });
        });
    },
    getDynamic: function () {
        var _this = this;
        ajax('dynamic/getUserList', { uid: uid }).then(function (res) {
            res.data.data.forEach(function (item) {
                item.create_time = formatMsgTime(item.create_time * 1000);
            });
            _this.setData({
                dynamic: res.data.data
            });
        });
    },
    onShow: function () {
        this.getInfo();
        this.getDynamic();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBMEIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQXRELElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDOUQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUE7QUFDcEIsSUFBSSxHQUFXLENBQUE7QUFDZixJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFLRCxNQUFNLEVBQU4sVUFBTyxDQUFNO1FBQ1gsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUE7SUFDYixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFFRCxPQUFPLEVBQVA7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUMxQyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDcEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxFQUFOO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDOUUsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsbUNBQWlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFTLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxnQkFBVyxHQUFLO2FBQy9GLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsRUFBVjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBUztnQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQTtZQUMzRCxDQUFDLENBQUMsQ0FBQTtZQUNGLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTthQUN2QixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5jb25zdCB7IGFqYXgsIGZvcm1hdE1zZ1RpbWUgfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxyXG5jb25zdCBhcHAgPSBnZXRBcHAoKVxyXG5sZXQgdWlkOiBudW1iZXJcclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGluZm86IHt9LFxyXG4gICAgZHluYW1pYzogW11cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZChlOiBhbnkpIHtcclxuICAgIHVpZCA9IGUudWlkXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG5cclxuICB9LFxyXG5cclxuICBnZXRJbmZvKCkge1xyXG4gICAgYWpheCgndXNlci9nZXRJbmZvJywgeyB1aWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbmZvOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGdvQ2hhdCgpIHtcclxuICAgIGFqYXgoJ3VzZXIvZ2V0U2Vzc2lvbicsIHsgdWlkOiBhcHAuZ2xvYmFsRGF0YS51aWQsIGFjY2VwdDogdWlkIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYC9wYWdlcy9tZXNzYWdlL2NoYXQvaW5kZXg/ZmlkPSR7cmVzLmRhdGEuZGF0YX0mc2VuZD0ke2FwcC5nbG9iYWxEYXRhLnVpZH0mYWNjZXB0PSR7dWlkfWBcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgZ2V0RHluYW1pYygpIHtcclxuICAgIGFqYXgoJ2R5bmFtaWMvZ2V0VXNlckxpc3QnLCB7IHVpZCB9KS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICByZXMuZGF0YS5kYXRhLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY3JlYXRlX3RpbWUgPSBmb3JtYXRNc2dUaW1lKGl0ZW0uY3JlYXRlX3RpbWUgKiAxMDAwKVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGR5bmFtaWM6IHJlcy5kYXRhLmRhdGFcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLmdldEluZm8oKVxyXG4gICAgdGhpcy5nZXREeW5hbWljKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcblxyXG4gIH1cclxufSkiXX0=