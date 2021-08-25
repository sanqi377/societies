"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNJLElBQUEsS0FBdUIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQW5ELElBQUksVUFBQSxFQUFFLFVBQVUsZ0JBQW1DLENBQUE7QUFDekQsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixhQUFhLEVBQUUsRUFBRTtRQUNqQixLQUFLLEVBQUU7WUFDTDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsSUFBSTthQUNiO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLEtBQUs7YUFDZDtTQUNGO1FBQ0QsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUtELFlBQVksRUFBWjtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsNENBQTRDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQy9ELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7aUJBQ3ZCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsVUFBVSxFQUFWLFVBQVcsQ0FBTTtRQUNmLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUtqQixPQUFNO1NBQ1A7UUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFPLEVBQUUsR0FBVztZQUM1QyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUNqQixJQUFJLEdBQUcsS0FBSyxLQUFLO2dCQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELGFBQWEsRUFBYixVQUFjLENBQU07UUFDbEIsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBTyxFQUFFLEdBQVc7WUFDOUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDakIsSUFBSSxHQUFHLEtBQUssS0FBSztnQkFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNGLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1NBQzVCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLEVBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTTtTQUNmLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cclxudmFyIHsgYWpheCwgY2hlY2tMb2dpbiB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdXRpbCcpXHJcblBhZ2Uoe1xyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgYW5pbWF0aW9uRGF0YToge30sXHJcbiAgICB0aXRsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwi5YWo6YOoXCIsXHJcbiAgICAgICAgYWN0aXZlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCLlhaXogYxcIixcclxuICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBzaWRlYmFyOiBbXSxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAqIOiOt+WPluekvuWbouWIl+ihqFxyXG4gICovXHJcbiAgZ2V0U29jaWV0aWVzKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L2NsYXNzL2dldENsYXNzJykudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzaWRlYmFyOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBUYWJzIOWIh+aNolxyXG4gICAqIEBwYXJhbSBlLmRldGFpbCDojrflj5bngrnlh7sgaW5kZXhcclxuICAgKi9cclxuICBjaGFuZ2VUYWJzKGU6IGFueSkge1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmRldGFpbFxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgaWYgKCFjaGVja0xvZ2luKCkpIHtcclxuICAgICAgLy8gJE5vdGlmeSh7XHJcbiAgICAgIC8vICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgLy8gICBjb250ZW50OiAn5oqx5q2J77yM5oKo5pyq55m75b2VJ1xyXG4gICAgICAvLyB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIF90aGlzLmRhdGEudGl0bGUuZm9yRWFjaCgoZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgZWwuYWN0aXZlID0gZmFsc2VcclxuICAgICAgaWYgKGlkeCA9PT0gaW5kZXgpIGVsLmFjdGl2ZSA9IHRydWVcclxuICAgIH0pXHJcbiAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgdGl0bGU6IF90aGlzLmRhdGEudGl0bGVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5L6n6L655qCP5YiH5o2iXHJcbiAgICogQHBhcmFtIGUuZGV0YWlsXHJcbiAgICovXHJcbiAgY2hhbmdlU2lkZWJhcihlOiBhbnkpIHtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gZS5kZXRhaWxcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIF90aGlzLmRhdGEuc2lkZWJhci5mb3JFYWNoKChlbDogYW55LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICBlbC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICBpZiAoaWR4ID09PSBpbmRleCkgZWwuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICBzaWRlYmFyOiBfdGhpcy5kYXRhLnNpZGViYXJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2hhbmdlU2hvdyhlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNob3c6IGUuZGV0YWlsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5nZXRTb2NpZXRpZXMoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHJcbiAgfVxyXG59KSJdfQ==