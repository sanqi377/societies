"use strict";
var _a = require('../../../utils/util'), ajax = _a.ajax, checkLogin = _a.checkLogin;
Page({
    data: {
        data: {},
        animationData: {},
        title: [
            {
                title: "全部",
                active: true
            },
            {
                title: "入职",
                active: false
            }
        ],
        sidebar: [],
        show: false
    },
    getSocieties: function () {
        var _this = this;
        ajax('http://localhost:3000/index/class/getClass').then(function (res) {
            console.log(res.data.data);
            if (res.data.ret === 200) {
                _this.setData({
                    sidebar: res.data.data
                });
            }
        });
    },
    changeTabs: function (e) {
        var index = e.detail;
        var _this = this;
        console.log(checkLogin());
        if (!checkLogin()) {
            _this.setData({
                show: true
            });
            return;
        }
        _this.data.title.forEach(function (el, idx) {
            el.active = false;
            if (idx === index)
                el.active = true;
        });
        _this.setData({
            title: _this.data.title
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
    changeShow: function (e) {
        this.setData({
            show: e.detail
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUksSUFBQSxLQUF1QixPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBbkQsSUFBSSxVQUFBLEVBQUUsVUFBVSxnQkFBbUMsQ0FBQTtBQUN6RCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLEtBQUssRUFBRTtZQUNMO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLE1BQU0sRUFBRSxJQUFJO2FBQ2I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsS0FBSzthQUNkO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksRUFBRSxLQUFLO0tBQ1o7SUFLRCxZQUFZLEVBQVo7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDdkIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxVQUFVLEVBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFBO1lBQ0YsT0FBTTtTQUNQO1FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBTyxFQUFFLEdBQVc7WUFDNUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDakIsSUFBSSxHQUFHLEtBQUssS0FBSztnQkFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNGLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQ3hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxhQUFhLEVBQWIsVUFBYyxDQUFNO1FBQ2xCLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQU8sRUFBRSxHQUFXO1lBQzlDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ2pCLElBQUksR0FBRyxLQUFLLEtBQUs7Z0JBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVSxFQUFWLFVBQVcsQ0FBTTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU07U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07UUFDSixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgeyBhamF4LCBjaGVja0xvZ2luIH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgZGF0YToge30sXHJcbiAgICBhbmltYXRpb25EYXRhOiB7fSxcclxuICAgIHRpdGxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCLlhajpg6hcIixcclxuICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIuWFpeiBjFwiLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IFtdLFxyXG4gICAgc2hvdzogZmFsc2VcclxuICB9LFxyXG5cclxuICAvKipcclxuICAqIOiOt+WPluekvuWbouWIl+ihqFxyXG4gICovXHJcbiAgZ2V0U29jaWV0aWVzKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L2NsYXNzL2dldENsYXNzJykudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YSlcclxuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzaWRlYmFyOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBUYWJzIOWIh+aNolxyXG4gICAqIEBwYXJhbSBlLmRldGFpbCDojrflj5bngrnlh7sgaW5kZXhcclxuICAgKi9cclxuICBjaGFuZ2VUYWJzKGU6IGFueSkge1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmRldGFpbFxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgY29uc29sZS5sb2coY2hlY2tMb2dpbigpKVxyXG4gICAgaWYgKCFjaGVja0xvZ2luKCkpIHtcclxuICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIF90aGlzLmRhdGEudGl0bGUuZm9yRWFjaCgoZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgZWwuYWN0aXZlID0gZmFsc2VcclxuICAgICAgaWYgKGlkeCA9PT0gaW5kZXgpIGVsLmFjdGl2ZSA9IHRydWVcclxuICAgIH0pXHJcbiAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgdGl0bGU6IF90aGlzLmRhdGEudGl0bGVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5L6n6L655qCP5YiH5o2iXHJcbiAgICogQHBhcmFtIGUuZGV0YWlsXHJcbiAgICovXHJcbiAgY2hhbmdlU2lkZWJhcihlOiBhbnkpIHtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gZS5kZXRhaWxcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIF90aGlzLmRhdGEuc2lkZWJhci5mb3JFYWNoKChlbDogYW55LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICBlbC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICBpZiAoaWR4ID09PSBpbmRleCkgZWwuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICBzaWRlYmFyOiBfdGhpcy5kYXRhLnNpZGViYXJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2hhbmdlU2hvdyhlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNob3c6IGUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5nZXRTb2NpZXRpZXMoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHJcbiAgfVxyXG59KSJdfQ==