"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajax = require('../../../utils/util').ajax;
var app = getApp();
Page({
    data: {
        sidebar: [],
    },
    getSocieties: function () {
        var _this = this;
        ajax('http://localhost:3000/index/class/getClass', { uid: app.globalData.uid }).then(function (res) {
            if (res.data.ret === 200) {
                _this.setData({
                    sidebar: res.data.data
                });
            }
        });
    },
    changeSidebar: function (e) {
        var index = e.detail;
        var _this = this;
        _this.data.sidebar.forEach(function (el, idx) {
            el.active = false;
            if (idx === index)
                el.active = true;
        });
        _this.setData({
            sidebar: _this.data.sidebar
        });
    },
    onLoad: function () {
    },
    onReady: function () {
    },
    onShow: function () {
        this.getSocieties();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNRLElBQUEsSUFBSSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFuQyxDQUFtQztBQUMvQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNwQixJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBS0QsWUFBWSxFQUFaO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUM1RixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2lCQUN2QixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELGFBQWEsRUFBYixVQUFjLENBQU07UUFDbEIsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBTyxFQUFFLEdBQVc7WUFDOUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDakIsSUFBSSxHQUFHLEtBQUssS0FBSztnQkFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNGLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1NBQzVCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cclxuY29uc3QgeyBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuY29uc3QgYXBwID0gZ2V0QXBwKClcclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgc2lkZWJhcjogW10sXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgKiDojrflj5bnpL7lm6LliJfooahcclxuICAqL1xyXG4gIGdldFNvY2lldGllcygpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9jbGFzcy9nZXRDbGFzcycsIHsgdWlkOiBhcHAuZ2xvYmFsRGF0YS51aWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzaWRlYmFyOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDkvqfovrnmoI/liIfmjaJcclxuICAgKiBAcGFyYW0gZS5kZXRhaWxcclxuICAgKi9cclxuICBjaGFuZ2VTaWRlYmFyKGU6IGFueSkge1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmRldGFpbFxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgX3RoaXMuZGF0YS5zaWRlYmFyLmZvckVhY2goKGVsOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGVsLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgIGlmIChpZHggPT09IGluZGV4KSBlbC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9KVxyXG4gICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNpZGViYXI6IF90aGlzLmRhdGEuc2lkZWJhclxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMuZ2V0U29jaWV0aWVzKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcblxyXG4gIH1cclxufSkiXX0=