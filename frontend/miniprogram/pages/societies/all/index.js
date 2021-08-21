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
        sidebar: [
            {
                title: "全部",
                active: true
            },
            {
                title: "技术社团",
                active: false
            },
            {
                title: "学生会",
                active: false
            },
            {
                title: "艺术社团",
                active: false
            },
            {
                title: "运动社团",
                active: false
            }
        ]
    },
    getSocieties: function () {
        var _this = this;
        ajax('http://localhost:3000/index/societies/getSocieties').then(function (res) {
            if (res.data.ret === 200) {
                _this.setData({
                    data: res.data.data
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsYUFBYSxFQUFFLEVBQUU7UUFDakIsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLE1BQU0sRUFBRSxJQUFJO2FBQ2I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLEtBQUs7YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsS0FBSzthQUNkO1NBQ0Y7S0FDRjtJQUtELFlBQVksRUFBWjtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ3ZFLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7aUJBQ3BCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsVUFBVSxFQUFWLFVBQVcsQ0FBTTtRQUNmLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQU8sRUFBRSxHQUFXO1lBQzVDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ2pCLElBQUksR0FBRyxLQUFLLEtBQUs7Z0JBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsYUFBYSxFQUFiLFVBQWMsQ0FBTTtRQUNsQixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFPLEVBQUUsR0FBVztZQUM5QyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUNqQixJQUFJLEdBQUcsS0FBSyxLQUFLO2dCQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgeyBhamF4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy91dGlsJylcclxuUGFnZSh7XHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgZGF0YToge30sXHJcbiAgICBhbmltYXRpb25EYXRhOiB7fSxcclxuICAgIHRpdGxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCLlhajpg6hcIixcclxuICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIuWFpeiBjFwiLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIuWFqOmDqFwiLFxyXG4gICAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwi5oqA5pyv56S+5ZuiXCIsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwi5a2m55Sf5LyaXCIsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwi6Im65pyv56S+5ZuiXCIsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwi6L+Q5Yqo56S+5ZuiXCIsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgKiDojrflj5bnpL7lm6LliJfooahcclxuICAqL1xyXG4gIGdldFNvY2lldGllcygpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9zb2NpZXRpZXMvZ2V0U29jaWV0aWVzJykudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBUYWJzIOWIh+aNolxyXG4gICAqIEBwYXJhbSBlLmRldGFpbCDojrflj5bngrnlh7sgaW5kZXhcclxuICAgKi9cclxuICBjaGFuZ2VUYWJzKGU6IGFueSkge1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmRldGFpbFxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgX3RoaXMuZGF0YS50aXRsZS5mb3JFYWNoKChlbDogYW55LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICBlbC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICBpZiAoaWR4ID09PSBpbmRleCkgZWwuYWN0aXZlID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICB0aXRsZTogX3RoaXMuZGF0YS50aXRsZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDkvqfovrnmoI/liIfmjaJcclxuICAgKiBAcGFyYW0gZS5kZXRhaWxcclxuICAgKi9cclxuICBjaGFuZ2VTaWRlYmFyKGU6IGFueSkge1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmRldGFpbFxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgX3RoaXMuZGF0YS5zaWRlYmFyLmZvckVhY2goKGVsOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGVsLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgIGlmIChpZHggPT09IGluZGV4KSBlbC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9KVxyXG4gICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNpZGViYXI6IF90aGlzLmRhdGEuc2lkZWJhclxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIC8vIHRoaXMuZ2V0U29jaWV0aWVzKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcblxyXG4gIH1cclxufSkiXX0=