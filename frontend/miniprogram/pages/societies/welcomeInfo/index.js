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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNTLElBQUEsSUFBSSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFuQyxDQUFtQztBQUNoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNwQixJQUFJLEVBQVUsQ0FBQTtBQUNOLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUM1RCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsRUFBRTtRQUNiLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUVELElBQUk7UUFDRixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELFFBQVEsRUFBUixVQUFTLENBQU07UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsS0FBSyxFQUFMO1FBQUEsbUJBZ0NDO1FBL0JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFNO1FBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzdCLE9BQU8sQ0FBQztnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsU0FBUzthQUNuQixDQUFDLENBQUE7WUFDRixPQUFNO1NBQ1A7UUFDRCxJQUFJLElBQUksR0FBRztZQUNULEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUc7WUFDdkIsU0FBUyxFQUFFLEVBQUU7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQzlCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxJQUFJLEVBQVUsQ0FBQyxHQUFHLElBQUk7U0FDbkQsQ0FBQTtRQUNELElBQUksQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFROztZQUNuRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsT0FBTyxDQUFDO29CQUNOLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2lCQUMzQixDQUFDLENBQUE7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLENBQUM7b0JBQ04sSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7aUJBQzNCLENBQUMsQ0FBQTthQUNIO1lBQ0QsT0FBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxZQUFZLElBQUcsQ0FBQztvQkFDakIsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU0sRUFBTixVQUFPLENBQU07UUFDWCxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxFQUFFLElBQUEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDaEYsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxuY29uc3QgeyAgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXG5jb25zdCBhcHAgPSBnZXRBcHAoKVxubGV0IGlkOiBudW1iZXJcbmNvbnN0IHsgJE5vdGlmeSB9ID0gcmVxdWlyZSgnQHNhbnFpMzc3L3F1aS9zLW5vdGlmeS9ub3RpZnknKVxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGludGVyZHVjZTogJycsXG4gICAgaW5mbzoge1xuICAgICAgYXBwbHk6IDJcbiAgICB9XG4gIH0sXG5cbiAgYmFjaygpIHtcbiAgICB3eC5uYXZpZ2F0ZUJhY2soKVxuICB9LFxuXG4gIGdldFZhbHVlKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpbnRlcmR1Y2U6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcblxuICBhcHBseSgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmluZm8uYXBwbHkgIT0gMikgcmV0dXJuXG4gICAgaWYgKHRoaXMuZGF0YS5pbnRlcmR1Y2UgPT0gJycpIHtcbiAgICAgICROb3RpZnkoe1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICBjb250ZW50OiAn6K+35aGr5YaZ6Ieq5oiR5LuL57uNJ1xuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIHVpZDogYXBwLmdsb2JhbERhdGEudWlkLFxuICAgICAgc29jaWV0aWVzOiBpZCxcbiAgICAgIGludHJvZHVjZTogdGhpcy5kYXRhLmludGVyZHVjZSxcbiAgICAgIHN0YXR1czogMCxcbiAgICAgIGFwcGx5X3RpbWU6IERhdGUucGFyc2UoKG5ldyBEYXRlKCkgYXMgYW55KSkgLyAxMDAwXG4gICAgfVxuICAgIGFqYXgoJ3NvY2lldGllcy9hcHBseVNvY2lldGllcycsIGRhdGEpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICBpZiAocmVzLmRhdGEucmV0ID09PSAyMDApIHtcbiAgICAgICAgJE5vdGlmeSh7XG4gICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGNvbnRlbnQ6IHJlcy5kYXRhLmRhdGEubXNnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkTm90aWZ5KHtcbiAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgY29udGVudDogcmVzLmRhdGEuZGF0YS5tc2dcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFsnaW5mby5hcHBseSddOiAwXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoZTogYW55KSB7XG4gICAgaWQgPSBlLmlkXG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIGFqYXgoJ3NvY2lldGllcy9nZXRTb2NpZXRpZXNJbmZvJywgeyBpZCwgdWlkOiBhcHAuZ2xvYmFsRGF0YS51aWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICBpbmZvOiByZXMuZGF0YS5kYXRhXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIH1cbn0pIl19