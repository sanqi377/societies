"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), getFont = _a.getFont, ajax = _a.ajax;
var app = getApp();
var id;
var $Notify = require('@sanqi377/qui/s-notify/notify').$Notify;
Page({
    data: {
        interduce: '',
        info: {
            apply: 2
        }
    },
    back: function () {
        wx.navigateBack();
    },
    getValue: function (e) {
        this.setData({
            interduce: e.detail.value
        });
    },
    apply: function () {
        var _this_1 = this;
        if (this.data.info.apply != 2)
            return;
        console.log(1);
        if (this.data.interduce == '') {
            $Notify({
                type: 'error',
                content: '请填写自我介绍'
            });
            return;
        }
        var data = {
            uid: app.globalData.uid,
            societies: id,
            introduce: this.data.interduce,
            status: 0,
            apply_time: Date.parse(new Date()) / 1000
        };
        ajax('http://localhost:3000/index/societies/applySocieties', data).then(function (res) {
            var _a;
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
            _this_1.setData((_a = {},
                _a['info.apply'] = 0,
                _a));
        });
    },
    onLoad: function (e) {
        id = e.id;
        var _this = this;
        getFont().then(function (res) {
            if (res) {
                _this.setData({
                    show: true
                });
            }
        });
        ajax('http://localhost:3000/index/societies/getSocietiesInfo', { id: id, uid: app.globalData.uid }).then(function (res) {
            _this.setData({
                info: res.data.data
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBb0IsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQWhELE9BQU8sYUFBQSxFQUFFLElBQUksVUFBbUMsQ0FBQTtBQUN4RCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNwQixJQUFJLEVBQVUsQ0FBQTtBQUNOLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUM1RCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsRUFBRTtRQUNiLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUVELElBQUk7UUFDRixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELFFBQVEsRUFBUixVQUFTLENBQU07UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsS0FBSyxFQUFMO1FBQUEsbUJBaUNDO1FBaENDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFNO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBRTtZQUM3QixPQUFPLENBQUM7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLFNBQVM7YUFDbkIsQ0FBQyxDQUFBO1lBQ0YsT0FBTTtTQUNQO1FBQ0QsSUFBSSxJQUFJLEdBQUc7WUFDVCxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHO1lBQ3ZCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUM5QixNQUFNLEVBQUUsQ0FBQztZQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksSUFBSSxFQUFVLENBQUMsR0FBRyxJQUFJO1NBQ25ELENBQUE7UUFDRCxJQUFJLENBQUMsc0RBQXNELEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTs7WUFDL0UsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hCLE9BQU8sQ0FBQztvQkFDTixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztpQkFDM0IsQ0FBQyxDQUFBO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDO29CQUNOLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2lCQUMzQixDQUFDLENBQUE7YUFDSDtZQUNELE9BQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsWUFBWSxJQUFHLENBQUM7b0JBQ2pCLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNLEVBQU4sVUFBTyxDQUFNO1FBQ1gsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBWTtZQUMxQixJQUFJLEdBQUcsRUFBRTtnQkFDUCxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsd0RBQXdELEVBQUUsRUFBRSxFQUFFLElBQUEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDNUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxuY29uc3QgeyBnZXRGb250LCBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcbmNvbnN0IGFwcCA9IGdldEFwcCgpXG5sZXQgaWQ6IG51bWJlclxuY29uc3QgeyAkTm90aWZ5IH0gPSByZXF1aXJlKCdAc2FucWkzNzcvcXVpL3Mtbm90aWZ5L25vdGlmeScpXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgaW50ZXJkdWNlOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBhcHBseTogMlxuICAgIH1cbiAgfSxcblxuICBiYWNrKCkge1xuICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gIH0sXG5cbiAgZ2V0VmFsdWUoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGludGVyZHVjZTogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9LFxuXG4gIGFwcGx5KCkge1xuICAgIGlmICh0aGlzLmRhdGEuaW5mby5hcHBseSAhPSAyKSByZXR1cm5cbiAgICBjb25zb2xlLmxvZygxKVxuICAgIGlmICh0aGlzLmRhdGEuaW50ZXJkdWNlID09ICcnKSB7XG4gICAgICAkTm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeiHquaIkeS7i+e7jSdcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICB1aWQ6IGFwcC5nbG9iYWxEYXRhLnVpZCxcbiAgICAgIHNvY2lldGllczogaWQsXG4gICAgICBpbnRyb2R1Y2U6IHRoaXMuZGF0YS5pbnRlcmR1Y2UsXG4gICAgICBzdGF0dXM6IDAsXG4gICAgICBhcHBseV90aW1lOiBEYXRlLnBhcnNlKChuZXcgRGF0ZSgpIGFzIGFueSkpIC8gMTAwMFxuICAgIH1cbiAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvc29jaWV0aWVzL2FwcGx5U29jaWV0aWVzJywgZGF0YSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5yZXQgPT09IDIwMCkge1xuICAgICAgICAkTm90aWZ5KHtcbiAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgY29udGVudDogcmVzLmRhdGEuZGF0YS5tc2dcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICROb3RpZnkoe1xuICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5kYXRhLm1zZ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgWydpbmZvLmFwcGx5J106IDBcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZChlOiBhbnkpIHtcbiAgICBpZCA9IGUuaWRcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgZ2V0Rm9udCgpLnRoZW4oKHJlczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvc29jaWV0aWVzL2dldFNvY2lldGllc0luZm8nLCB7IGlkLCB1aWQ6IGFwcC5nbG9iYWxEYXRhLnVpZCB9KS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgIGluZm86IHJlcy5kYXRhLmRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgfVxufSkiXX0=