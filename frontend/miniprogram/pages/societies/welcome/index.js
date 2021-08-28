"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), getFont = _a.getFont, ajax = _a.ajax;
Page({
    data: {
        list: []
    },
    back: function () {
        wx.navigateBack();
    },
    getWelcome: function () {
    },
    goInfo: function (e) {
        wx.navigateTo({
            url: "/pages/societies/welcomeInfo/index?id=" + e.currentTarget.dataset.id
        });
    },
    onLoad: function () {
        var _this_1 = this;
        var _this = this;
        getFont().then(function (res) {
            if (res) {
                _this.setData({
                    show: true
                });
            }
        });
        ajax('societies/newSocietiesList').then(function (res) {
            _this_1.setData({
                list: res.data.data
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBb0IsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQWhELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBbUMsQ0FBQTtBQUN4RCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtLQUNUO0lBRUQsSUFBSTtRQUNGLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsVUFBVTtJQUVWLENBQUM7SUFFRCxNQUFNLEVBQU4sVUFBTyxDQUFNO1FBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSx3Q0FBd0MsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1NBQzNFLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNLEVBQU47UUFBQSxtQkFjQztRQWJDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFZO1lBQzFCLElBQUksR0FBRyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDL0MsT0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5jb25zdCB7IGdldEZvbnQsIGFqYXggfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgbGlzdDogW11cclxuICB9LFxyXG5cclxuICBiYWNrKCkge1xyXG4gICAgd3gubmF2aWdhdGVCYWNrKClcclxuICB9LFxyXG5cclxuICBnZXRXZWxjb21lKCkge1xyXG5cclxuICB9LFxyXG5cclxuICBnb0luZm8oZTogYW55KSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBcIi9wYWdlcy9zb2NpZXRpZXMvd2VsY29tZUluZm8vaW5kZXg/aWQ9XCIgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGdldEZvbnQoKS50aGVuKChyZXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBhamF4KCdzb2NpZXRpZXMvbmV3U29jaWV0aWVzTGlzdCcpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbGlzdDogcmVzLmRhdGEuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcblxyXG4gIH1cclxufSkiXX0=