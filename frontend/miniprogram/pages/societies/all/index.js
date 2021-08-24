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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNJLElBQUEsS0FBdUIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQW5ELElBQUksVUFBQSxFQUFFLFVBQVUsZ0JBQW1DLENBQUE7QUFDekQsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixhQUFhLEVBQUUsRUFBRTtRQUNqQixLQUFLLEVBQUU7WUFDTDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsSUFBSTthQUNiO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLEtBQUs7YUFDZDtTQUNGO1FBQ0QsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUtELFlBQVksRUFBWjtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsNENBQTRDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQy9ELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7aUJBQ3ZCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsVUFBVSxFQUFWLFVBQVcsQ0FBTTtRQUNmLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBUWhCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQU8sRUFBRSxHQUFXO1lBQzVDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ2pCLElBQUksR0FBRyxLQUFLLEtBQUs7Z0JBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsYUFBYSxFQUFiLFVBQWMsQ0FBTTtRQUNsQixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFPLEVBQUUsR0FBVztZQUM5QyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUNqQixJQUFJLEdBQUcsS0FBSyxLQUFLO2dCQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsRUFBVixVQUFXLENBQU07UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG52YXIgeyBhamF4LCBjaGVja0xvZ2luIH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgZGF0YToge30sXHJcbiAgICBhbmltYXRpb25EYXRhOiB7fSxcclxuICAgIHRpdGxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCLlhajpg6hcIixcclxuICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIuWFpeiBjFwiLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IFtdLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICog6I635Y+W56S+5Zui5YiX6KGoXHJcbiAgKi9cclxuICBnZXRTb2NpZXRpZXMoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvY2xhc3MvZ2V0Q2xhc3MnKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEucmV0ID09PSAyMDApIHtcclxuICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNpZGViYXI6IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFRhYnMg5YiH5o2iXHJcbiAgICogQHBhcmFtIGUuZGV0YWlsIOiOt+WPlueCueWHuyBpbmRleFxyXG4gICAqL1xyXG4gIGNoYW5nZVRhYnMoZTogYW55KSB7XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IGUuZGV0YWlsXHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICAvLyBpZiAoIWNoZWNrTG9naW4oKSkge1xyXG4gICAgLy8gICAkTm90aWZ5KHtcclxuICAgIC8vICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgLy8gICAgIGNvbnRlbnQ6ICfmirHmrYnvvIzmgqjmnKrnmbvlvZUnXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIHJldHVyblxyXG4gICAgLy8gfVxyXG4gICAgX3RoaXMuZGF0YS50aXRsZS5mb3JFYWNoKChlbDogYW55LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICBlbC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICBpZiAoaWR4ID09PSBpbmRleCkgZWwuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICB0aXRsZTogX3RoaXMuZGF0YS50aXRsZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDkvqfovrnmoI/liIfmjaJcclxuICAgKiBAcGFyYW0gZS5kZXRhaWxcclxuICAgKi9cclxuICBjaGFuZ2VTaWRlYmFyKGU6IGFueSkge1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmRldGFpbFxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgX3RoaXMuZGF0YS5zaWRlYmFyLmZvckVhY2goKGVsOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGVsLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgIGlmIChpZHggPT09IGluZGV4KSBlbC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9KVxyXG4gICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNpZGViYXI6IF90aGlzLmRhdGEuc2lkZWJhclxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBjaGFuZ2VTaG93KGU6IGFueSkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2hvdzogZS5kZXRhaWxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLmdldFNvY2lldGllcygpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG5cclxuICB9XHJcbn0pIl19