"use strict";
var id;
var ajax = require('../../../utils/util').ajax;
Page({
    data: {
        info: {},
        notic: {}
    },
    back: function () {
        wx.navigateBack({
            delta: 1
        });
    },
    getSocietiesInfo: function () {
        var _this = this;
        ajax('http://localhost:3000/index/societies/getSocietiesInfo', { id: id }).then(function (res) {
            if (res.data.ret === 200) {
                _this.setData({
                    info: res.data.data
                });
            }
        });
    },
    getNotic: function () {
        var _this = this;
        ajax('http://localhost:3000/index/societies/getNotice', { id: id }).then(function (res) {
            if (res.data.ret === 200) {
                _this.setData({
                    notic: res.data.data
                });
            }
        });
    },
    onLoad: function (e) {
        id = Number(e.id);
    },
    onReady: function () {
        this.getSocietiesInfo();
        this.getNotic();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxFQUFVLENBQUE7QUFDUixJQUFBLElBQUksR0FBSyxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBbkMsQ0FBbUM7QUFDN0MsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBSUQsSUFBSTtRQUNGLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxnQkFBZ0IsRUFBaEI7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLHdEQUF3RCxFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDbkYsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDcEIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxRQUFRLEVBQVI7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLGlEQUFpRCxFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDNUUsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDckIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxNQUFNLFlBQUMsQ0FBQztRQUNOLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ25CLENBQUM7SUFLRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaWQ6IG51bWJlclxyXG52YXIgeyBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGluZm86IHt9LFxyXG4gICAgbm90aWM6IHt9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDov5Tlm57kuIrkuIDpobVcclxuICAgKi9cclxuICBiYWNrKCkge1xyXG4gICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgZGVsdGE6IDFcclxuICAgIH0pXHJcbiAgfSxcclxuICAvKipcclxuICAgKiDojrflj5bnpL7lm6Lln7rmnKzkv6Hmga9cclxuICAgKi9cclxuICBnZXRTb2NpZXRpZXNJbmZvKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L3NvY2lldGllcy9nZXRTb2NpZXRpZXNJbmZvJywgeyBpZCB9KS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEucmV0ID09PSAyMDApIHtcclxuICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGluZm86IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog6I635Y+W56S+5Zui5YWs5ZGKXHJcbiAgICovXHJcbiAgZ2V0Tm90aWMoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvc29jaWV0aWVzL2dldE5vdGljZScsIHsgaWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBub3RpYzogcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZChlKSB7XHJcbiAgICBpZCA9IE51bWJlcihlLmlkKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHRoaXMuZ2V0U29jaWV0aWVzSW5mbygpXHJcbiAgICB0aGlzLmdldE5vdGljKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG5cclxuICB9XHJcbn0pIl19