"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajax = require('../../../utils/util').ajax;
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
        ajax('societies/applySocieties', data).then(function (res) {
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
        ajax('societies/getSocietiesInfo', { id: id, uid: app.globalData.uid }).then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNTLElBQUEsSUFBSSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFuQyxDQUFtQztBQUNoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNwQixJQUFJLEVBQVUsQ0FBQTtBQUNOLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUM1RCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsRUFBRTtRQUNiLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUVELElBQUk7UUFDRixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELFFBQVEsRUFBUixVQUFTLENBQU07UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsS0FBSyxFQUFMO1FBQUEsbUJBZ0NDO1FBL0JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFNO1FBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzdCLE9BQU8sQ0FBQztnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsU0FBUzthQUNuQixDQUFDLENBQUE7WUFDRixPQUFNO1NBQ1A7UUFDRCxJQUFJLElBQUksR0FBRztZQUNULEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUc7WUFDdkIsU0FBUyxFQUFFLEVBQUU7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQzlCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxJQUFJLEVBQVUsQ0FBQyxHQUFHLElBQUk7U0FDbkQsQ0FBQTtRQUNELElBQUksQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFROztZQUNuRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsT0FBTyxDQUFDO29CQUNOLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2lCQUMzQixDQUFDLENBQUE7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLENBQUM7b0JBQ04sSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7aUJBQzNCLENBQUMsQ0FBQTthQUNIO1lBQ0QsT0FBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxZQUFZLElBQUcsQ0FBQztvQkFDakIsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFFLElBQUEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDaEYsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5jb25zdCB7ICBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuY29uc3QgYXBwID0gZ2V0QXBwKClcclxubGV0IGlkOiBudW1iZXJcclxuY29uc3QgeyAkTm90aWZ5IH0gPSByZXF1aXJlKCdAc2FucWkzNzcvcXVpL3Mtbm90aWZ5L25vdGlmeScpXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBpbnRlcmR1Y2U6ICcnLFxyXG4gICAgaW5mbzoge1xyXG4gICAgICBhcHBseTogMlxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJhY2soKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZUJhY2soKVxyXG4gIH0sXHJcblxyXG4gIGdldFZhbHVlKGU6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaW50ZXJkdWNlOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBhcHBseSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaW5mby5hcHBseSAhPSAyKSByZXR1cm5cclxuICAgIGlmICh0aGlzLmRhdGEuaW50ZXJkdWNlID09ICcnKSB7XHJcbiAgICAgICROb3RpZnkoe1xyXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeiHquaIkeS7i+e7jSdcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgdWlkOiBhcHAuZ2xvYmFsRGF0YS51aWQsXHJcbiAgICAgIHNvY2lldGllczogaWQsXHJcbiAgICAgIGludHJvZHVjZTogdGhpcy5kYXRhLmludGVyZHVjZSxcclxuICAgICAgc3RhdHVzOiAwLFxyXG4gICAgICBhcHBseV90aW1lOiBEYXRlLnBhcnNlKChuZXcgRGF0ZSgpIGFzIGFueSkpIC8gMTAwMFxyXG4gICAgfVxyXG4gICAgYWpheCgnc29jaWV0aWVzL2FwcGx5U29jaWV0aWVzJywgZGF0YSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5kYXRhLm1zZ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5kYXRhLm1zZ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbJ2luZm8uYXBwbHknXTogMFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZChlOiBhbnkpIHtcclxuICAgIGlkID0gZS5pZFxyXG4gICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgYWpheCgnc29jaWV0aWVzL2dldFNvY2lldGllc0luZm8nLCB7IGlkLCB1aWQ6IGFwcC5nbG9iYWxEYXRhLnVpZCB9KS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbmZvOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHJcbiAgfVxyXG59KSJdfQ==