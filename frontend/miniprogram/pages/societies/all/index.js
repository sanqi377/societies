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
        ajax('class/getClass', { uid: app.globalData.uid }).then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNRLElBQUEsSUFBSSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFuQyxDQUFtQztBQUMvQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNwQixJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBS0QsWUFBWSxFQUFaO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUNoRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2lCQUN2QixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELGFBQWEsRUFBYixVQUFjLENBQU07UUFDbEIsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBTyxFQUFFLEdBQVc7WUFDOUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDakIsSUFBSSxHQUFHLEtBQUssS0FBSztnQkFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNGLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1NBQzVCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cclxuY29uc3QgeyBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuY29uc3QgYXBwID0gZ2V0QXBwKClcclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgc2lkZWJhcjogW10sXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgKiDojrflj5bnpL7lm6LliJfooahcclxuICAqL1xyXG4gIGdldFNvY2lldGllcygpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGFqYXgoJ2NsYXNzL2dldENsYXNzJywgeyB1aWQ6IGFwcC5nbG9iYWxEYXRhLnVpZCB9KS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEucmV0ID09PSAyMDApIHtcclxuICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNpZGViYXI6IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOS+p+i+ueagj+WIh+aNolxyXG4gICAqIEBwYXJhbSBlLmRldGFpbFxyXG4gICAqL1xyXG4gIGNoYW5nZVNpZGViYXIoZTogYW55KSB7XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IGUuZGV0YWlsXHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICBfdGhpcy5kYXRhLnNpZGViYXIuZm9yRWFjaCgoZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgZWwuYWN0aXZlID0gZmFsc2VcclxuICAgICAgaWYgKGlkeCA9PT0gaW5kZXgpIGVsLmFjdGl2ZSA9IHRydWVcclxuICAgIH0pXHJcbiAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2lkZWJhcjogX3RoaXMuZGF0YS5zaWRlYmFyXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5nZXRTb2NpZXRpZXMoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHJcbiAgfVxyXG59KSJdfQ==