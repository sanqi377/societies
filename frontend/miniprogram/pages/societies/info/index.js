"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id;
var ajax = require('../../../utils/util').ajax;
var app = getApp();
Page({
    data: {
        info: {
            fans: false
        }
    },
    back: function () {
        wx.navigateBack({
            delta: 1
        });
    },
    subscribe: function (e) {
        var _this_1 = this;
        var data = {
            subscribe: app.globalData.uid,
            be_subscribe: e.currentTarget.dataset.be_subscribe,
            update_time: Date.parse(new Date()) / 1000
        };
        app.globalData.subscribe(data).then(function () {
            _this_1.data.info.fans = true;
            _this_1.setData({
                info: _this_1.data.info
            });
        });
    },
    cancelSubscribe: function (e) {
        var _this_1 = this;
        var data = {
            subscribe: app.globalData.uid,
            be_subscribe: e.currentTarget.dataset.be_subscribe,
        };
        app.globalData.unSubscribe({
            data: data,
            success: function () {
                _this_1.data.info.fans = false;
                _this_1.setData({
                    info: _this_1.data.info
                });
            }
        });
    },
    getSocietiesInfo: function () {
        var _this = this;
        ajax('societies/getSocietiesInfo', { id: id, uid: app.globalData.uid }).then(function (res) {
            if (res.data.ret === 200) {
                _this.setData({
                    info: res.data.data
                });
            }
        });
    },
    onLoad: function (e) {
        id = Number(e.id);
    },
    onReady: function () {
        this.getSocietiesInfo();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksRUFBVSxDQUFBO0FBQ04sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQy9DLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFBO0FBQ3BCLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxLQUFLO1NBQ1o7S0FDRjtJQUlELElBQUk7UUFDRixFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsU0FBUyxFQUFULFVBQVUsQ0FBTTtRQUFoQixtQkFZQztRQVhDLElBQUksSUFBSSxHQUFHO1lBQ1QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRztZQUM3QixZQUFZLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWTtZQUNsRCxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLElBQUksRUFBVSxDQUFDLEdBQUcsSUFBSTtTQUNwRCxDQUFBO1FBQ0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xDLE9BQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7WUFDMUIsT0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsT0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3JCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELGVBQWUsRUFBZixVQUFnQixDQUFNO1FBQXRCLG1CQWFDO1FBWkMsSUFBSSxJQUFJLEdBQUc7WUFDVCxTQUFTLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHO1lBQzdCLFlBQVksRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZO1NBQ25ELENBQUE7UUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUN6QixJQUFJLE1BQUE7WUFBRSxPQUFPLEVBQUU7Z0JBQ2IsT0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQTtnQkFDM0IsT0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxJQUFJLEVBQUUsT0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2lCQUNyQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELGdCQUFnQixFQUFoQjtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFFLElBQUEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDaEYsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDcEIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNLFlBQUMsQ0FBQztRQUNOLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ25CLENBQUM7SUFLRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7SUFDekIsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cclxudmFyIGlkOiBudW1iZXJcclxuY29uc3QgeyBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuY29uc3QgYXBwID0gZ2V0QXBwKClcclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGluZm86IHtcclxuICAgICAgZmFuczogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOi/lOWbnuS4iuS4gOmhtVxyXG4gICAqL1xyXG4gIGJhY2soKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICBkZWx0YTogMVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlhbPms6jnpL7lm6JcclxuICAgKi9cclxuICBzdWJzY3JpYmUoZTogYW55KSB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgc3Vic2NyaWJlOiBhcHAuZ2xvYmFsRGF0YS51aWQsXHJcbiAgICAgIGJlX3N1YnNjcmliZTogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYmVfc3Vic2NyaWJlLFxyXG4gICAgICB1cGRhdGVfdGltZTogRGF0ZS5wYXJzZSgobmV3IERhdGUoKSBhcyBhbnkpKSAvIDEwMDBcclxuICAgIH1cclxuICAgIGFwcC5nbG9iYWxEYXRhLnN1YnNjcmliZShkYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5kYXRhLmluZm8uZmFucyA9IHRydWVcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbmZvOiB0aGlzLmRhdGEuaW5mb1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlj5bmtojlhbPms6hcclxuICAgKi9cclxuXHJcbiAgY2FuY2VsU3Vic2NyaWJlKGU6IGFueSkge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHN1YnNjcmliZTogYXBwLmdsb2JhbERhdGEudWlkLFxyXG4gICAgICBiZV9zdWJzY3JpYmU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJlX3N1YnNjcmliZSxcclxuICAgIH1cclxuICAgIGFwcC5nbG9iYWxEYXRhLnVuU3Vic2NyaWJlKHtcclxuICAgICAgZGF0YSwgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YS5pbmZvLmZhbnMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpbmZvOiB0aGlzLmRhdGEuaW5mb1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W56S+5Zui5Z+65pys5L+h5oGvXHJcbiAgICovXHJcbiAgZ2V0U29jaWV0aWVzSW5mbygpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGFqYXgoJ3NvY2lldGllcy9nZXRTb2NpZXRpZXNJbmZvJywgeyBpZCwgdWlkOiBhcHAuZ2xvYmFsRGF0YS51aWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpbmZvOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZChlKSB7XHJcbiAgICBpZCA9IE51bWJlcihlLmlkKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHRoaXMuZ2V0U29jaWV0aWVzSW5mbygpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHJcbiAgfVxyXG59KSJdfQ==