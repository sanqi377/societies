"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), ajax = _a.ajax, checkLogin = _a.checkLogin;
var $Notify = require('@sanqi377/qui/s-notify/notify').$Notify;
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
    },
    getSocieties: function () {
        var _this = this;
        ajax('http://localhost:3000/index/class/getClass').then(function (res) {
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
        if (!checkLogin()) {
            $Notify({
                type: 'error',
                content: '抱歉，您未登录'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNJLElBQUEsS0FBdUIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQW5ELElBQUksVUFBQSxFQUFFLFVBQVUsZ0JBQW1DLENBQUE7QUFDakQsSUFBQSxPQUFPLEdBQUssT0FBTyxDQUFDLCtCQUErQixDQUFDLFFBQTdDLENBQTZDO0FBQzVELElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsYUFBYSxFQUFFLEVBQUU7UUFDakIsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRjtRQUNELE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFLRCxZQUFZLEVBQVo7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUMvRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2lCQUN2QixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELFVBQVUsRUFBVixVQUFXLENBQU07UUFDZixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDakIsT0FBTyxDQUFDO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxTQUFTO2FBQ25CLENBQUMsQ0FBQTtZQUNGLE9BQU07U0FDUDtRQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQU8sRUFBRSxHQUFXO1lBQzVDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ2pCLElBQUksR0FBRyxLQUFLLEtBQUs7Z0JBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsYUFBYSxFQUFiLFVBQWMsQ0FBTTtRQUNsQixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFPLEVBQUUsR0FBVztZQUM5QyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUNqQixJQUFJLEdBQUcsS0FBSyxLQUFLO2dCQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsRUFBVixVQUFXLENBQU07UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG52YXIgeyBhamF4LCBjaGVja0xvZ2luIH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuY29uc3QgeyAkTm90aWZ5IH0gPSByZXF1aXJlKCdAc2FucWkzNzcvcXVpL3Mtbm90aWZ5L25vdGlmeScpXHJcblBhZ2Uoe1xyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgYW5pbWF0aW9uRGF0YToge30sXHJcbiAgICB0aXRsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwi5YWo6YOoXCIsXHJcbiAgICAgICAgYWN0aXZlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCLlhaXogYxcIixcclxuICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBzaWRlYmFyOiBbXSxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAqIOiOt+WPluekvuWbouWIl+ihqFxyXG4gICovXHJcbiAgZ2V0U29jaWV0aWVzKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L2NsYXNzL2dldENsYXNzJykudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzaWRlYmFyOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBUYWJzIOWIh+aNolxyXG4gICAqIEBwYXJhbSBlLmRldGFpbCDojrflj5bngrnlh7sgaW5kZXhcclxuICAgKi9cclxuICBjaGFuZ2VUYWJzKGU6IGFueSkge1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmRldGFpbFxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgaWYgKCFjaGVja0xvZ2luKCkpIHtcclxuICAgICAgJE5vdGlmeSh7XHJcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICBjb250ZW50OiAn5oqx5q2J77yM5oKo5pyq55m75b2VJ1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIF90aGlzLmRhdGEudGl0bGUuZm9yRWFjaCgoZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgZWwuYWN0aXZlID0gZmFsc2VcclxuICAgICAgaWYgKGlkeCA9PT0gaW5kZXgpIGVsLmFjdGl2ZSA9IHRydWVcclxuICAgIH0pXHJcbiAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgdGl0bGU6IF90aGlzLmRhdGEudGl0bGVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5L6n6L655qCP5YiH5o2iXHJcbiAgICogQHBhcmFtIGUuZGV0YWlsXHJcbiAgICovXHJcbiAgY2hhbmdlU2lkZWJhcihlOiBhbnkpIHtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gZS5kZXRhaWxcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIF90aGlzLmRhdGEuc2lkZWJhci5mb3JFYWNoKChlbDogYW55LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICBlbC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICBpZiAoaWR4ID09PSBpbmRleCkgZWwuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICBzaWRlYmFyOiBfdGhpcy5kYXRhLnNpZGViYXJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2hhbmdlU2hvdyhlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNob3c6IGUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5nZXRTb2NpZXRpZXMoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHJcbiAgfVxyXG59KSJdfQ==