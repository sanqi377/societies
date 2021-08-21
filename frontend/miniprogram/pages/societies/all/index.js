"use strict";
var ajax = require('../../../utils/util').ajax;
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
        sidebar: []
    },
    getSocieties: function () {
        var _this = this;
        ajax('http://localhost:3000/index/class/getclass').then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsYUFBYSxFQUFFLEVBQUU7UUFDakIsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRjtRQUNELE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFLRCxZQUFZLEVBQVo7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDdkIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxVQUFVLEVBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBTyxFQUFFLEdBQVc7WUFDNUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDakIsSUFBSSxHQUFHLEtBQUssS0FBSztnQkFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNGLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQ3hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxhQUFhLEVBQWIsVUFBYyxDQUFNO1FBQ2xCLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQU8sRUFBRSxHQUFXO1lBQzlDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ2pCLElBQUksR0FBRyxLQUFLLEtBQUs7Z0JBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07UUFDSixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgeyBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgZGF0YToge30sXHJcbiAgICBhbmltYXRpb25EYXRhOiB7fSxcclxuICAgIHRpdGxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCLlhajpg6hcIixcclxuICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIuWFpeiBjFwiLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IFtdXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgKiDojrflj5bnpL7lm6LliJfooahcclxuICAqL1xyXG4gIGdldFNvY2lldGllcygpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9jbGFzcy9nZXRjbGFzcycpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgIGlmIChyZXMuZGF0YS5yZXQgPT09IDIwMCkge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc2lkZWJhcjogcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogVGFicyDliIfmjaJcclxuICAgKiBAcGFyYW0gZS5kZXRhaWwg6I635Y+W54K55Ye7IGluZGV4XHJcbiAgICovXHJcbiAgY2hhbmdlVGFicyhlOiBhbnkpIHtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gZS5kZXRhaWxcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIF90aGlzLmRhdGEudGl0bGUuZm9yRWFjaCgoZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgZWwuYWN0aXZlID0gZmFsc2VcclxuICAgICAgaWYgKGlkeCA9PT0gaW5kZXgpIGVsLmFjdGl2ZSA9IHRydWVcclxuICAgIH0pXHJcbiAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgdGl0bGU6IF90aGlzLmRhdGEudGl0bGVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5L6n6L655qCP5YiH5o2iXHJcbiAgICogQHBhcmFtIGUuZGV0YWlsXHJcbiAgICovXHJcbiAgY2hhbmdlU2lkZWJhcihlOiBhbnkpIHtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gZS5kZXRhaWxcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIF90aGlzLmRhdGEuc2lkZWJhci5mb3JFYWNoKChlbDogYW55LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICBlbC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICBpZiAoaWR4ID09PSBpbmRleCkgZWwuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICBzaWRlYmFyOiBfdGhpcy5kYXRhLnNpZGViYXJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLmdldFNvY2lldGllcygpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG5cclxuICB9XHJcbn0pIl19