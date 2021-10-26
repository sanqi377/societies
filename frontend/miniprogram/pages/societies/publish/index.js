"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajax = require('../../../utils/util').ajax;
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
        ajax('dynamic/addDynamic', data).then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNRLElBQUEsSUFBSSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFuQyxDQUFtQztBQUMvQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNaLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUM1RCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBTUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQVA7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxJQUFJLEdBQUc7WUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUc7WUFDdkIsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxJQUFJLEVBQVUsQ0FBQyxHQUFHLElBQUk7U0FDcEQsQ0FBQTtRQUNELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQzdDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUN4QixPQUFPLENBQUM7b0JBQ04sSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7aUJBQzNCLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQztvQkFDTixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztpQkFDM0IsQ0FBQyxDQUFBO2FBQ0g7WUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxFQUFFO2FBQ1YsQ0FBQyxDQUFBO1lBQ0YsVUFBVSxDQUFDO2dCQUNULEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO0lBQ04sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5jb25zdCB7IGFqYXggfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxyXG5jb25zdCBhcHAgPSBnZXRBcHAoKVxyXG5jb25zdCB7ICROb3RpZnkgfSA9IHJlcXVpcmUoJ0BzYW5xaTM3Ny9xdWkvcy1ub3RpZnkvbm90aWZ5JylcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgdmFsdWU6ICcnXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5Yqo5oCB5YaF5a65XHJcbiAgICogQHBhcmFtIGUgXHJcbiAgICovXHJcbiAgZ2V0VmFsdWUoZTogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB2YWx1ZTogZS5kZXRhaWwudmFsdWVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5Y+R5biD5Yqo5oCBXHJcbiAgICovXHJcbiAgcHVibGlzaCgpIHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICB2YWx1ZTogdGhpcy5kYXRhLnZhbHVlLFxyXG4gICAgICB1aWQ6IGFwcC5nbG9iYWxEYXRhLnVpZCxcclxuICAgICAgY3JlYXRlX3RpbWU6IERhdGUucGFyc2UoKG5ldyBEYXRlKCkgYXMgYW55KSkgLyAxMDAwXHJcbiAgICB9XHJcbiAgICBhamF4KCdkeW5hbWljL2FkZER5bmFtaWMnLCBkYXRhKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEucmV0ID09PSAyMDApIHtcclxuICAgICAgICAkTm90aWZ5KHtcclxuICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLmRhdGEubXNnXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkTm90aWZ5KHtcclxuICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLmRhdGEubXNnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICB9LCAxNTAwKTtcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG5cclxuICB9XHJcbn0pIl19