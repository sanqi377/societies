"use strict";
var ajax = require('../../../utils/util').ajax;
Page({
    data: {
        data: {},
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
                title: "技术社团",
                active: true
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
        ],
        allValue: false,
        joinValue: true
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
        this.data.title.forEach(function (el, idx) {
            el.active = false;
            if (idx === index)
                el.active = true;
        });
        if (index === 1) {
            _this.setData({
                allValue: true,
                joinValue: false
            });
        }
        else {
            _this.setData({
                allValue: false,
                joinValue: true
            });
        }
        _this.setData({
            title: _this.data.title
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxJQUFJO2FBQ2I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsS0FBSztnQkFDWixNQUFNLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLEtBQUs7YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRjtRQUNELFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLElBQUk7S0FDaEI7SUFLRCxZQUFZLEVBQVo7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUN2RSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2lCQUNwQixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELFVBQVUsRUFBVixVQUFXLENBQU07UUFDZixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFPLEVBQUUsR0FBVztZQUMzQyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUNqQixJQUFJLEdBQUcsS0FBSyxLQUFLO2dCQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixRQUFRLEVBQUUsS0FBSztnQkFDZixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUE7U0FDSDtRQUNELEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQ3hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInZhciB7IGFqYXggfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxyXG5QYWdlKHtcclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBkYXRhOiB7fSxcclxuICAgIHRpdGxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCLlhajpg6hcIixcclxuICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIuWFpeiBjFwiLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIuaKgOacr+ekvuWbolwiLFxyXG4gICAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwi5a2m55Sf5LyaXCIsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwi6Im65pyv56S+5ZuiXCIsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwi6L+Q5Yqo56S+5ZuiXCIsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgYWxsVmFsdWU6IGZhbHNlLFxyXG4gICAgam9pblZhbHVlOiB0cnVlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgKiDojrflj5bnpL7lm6LliJfooahcclxuICAqL1xyXG4gIGdldFNvY2lldGllcygpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbmRleC9zb2NpZXRpZXMvZ2V0U29jaWV0aWVzJykudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBUYWJzIOWIh+aNolxyXG4gICAqIEBwYXJhbSBlLmRldGFpbCDojrflj5bngrnlh7sgaW5kZXhcclxuICAgKi9cclxuICBjaGFuZ2VUYWJzKGU6IGFueSkge1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBlLmRldGFpbFxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgdGhpcy5kYXRhLnRpdGxlLmZvckVhY2goKGVsOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGVsLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgIGlmIChpZHggPT09IGluZGV4KSBlbC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9KVxyXG4gICAgaWYgKGluZGV4ID09PSAxKSB7XHJcbiAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFsbFZhbHVlOiB0cnVlLFxyXG4gICAgICAgIGpvaW5WYWx1ZTogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFsbFZhbHVlOiBmYWxzZSxcclxuICAgICAgICBqb2luVmFsdWU6IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICB0aXRsZTogX3RoaXMuZGF0YS50aXRsZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMuZ2V0U29jaWV0aWVzKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcblxyXG4gIH1cclxufSkiXX0=