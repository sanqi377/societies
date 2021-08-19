"use strict";
var ajax = require('../../../utils/util').ajax;
Page({
    data: {
        list: {}
    },
    getSocieties: function () {
        var _this = this;
        ajax('http://localhost:3000/index/societies/getSocieties').then(function (res) {
            if (res.data.ret === 200) {
                _this.setData({
                    list: res.data.data
                });
            }
        });
    },
    jumpDetails: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '/pages/societies/info/index?id=' + id
        });
        console.log(id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQU0sSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQW5DLENBQW1DO0FBQzdDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFLRCxZQUFZLEVBQVo7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUN2RSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2lCQUNwQixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVcsRUFBWCxVQUFZLENBQU07UUFDaEIsSUFBSSxFQUFFLEdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1FBQzNDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsaUNBQWlDLEdBQUcsRUFBRTtTQUM1QyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInZhciB7IGFqYXggfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBsaXN0OiB7fVxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5bnpL7lm6LliJfooahcbiAgICovXG4gIGdldFNvY2lldGllcygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzXG4gICAgYWpheCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2luZGV4L3NvY2lldGllcy9nZXRTb2NpZXRpZXMnKS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLnJldCA9PT0gMjAwKSB7XG4gICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgIGxpc3Q6IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGp1bXBEZXRhaWxzKGU6IGFueSkge1xuICAgIHZhciBpZDogbnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy9wYWdlcy9zb2NpZXRpZXMvaW5mby9pbmRleD9pZD0nICsgaWRcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGlkKVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG4gICAgdGhpcy5nZXRTb2NpZXRpZXMoKVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgfVxufSkiXX0=