"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Component({
    properties: {
        info: {
            type: Array
        }
    },
    data: {},
    methods: {
        goInfo: function (e) {
            wx.navigateTo({
                url: "/pages/societies/info/index?id=" + e.currentTarget.dataset.id
            });
        },
        subscribe: function (e) {
            var _this = this;
            var index = e.currentTarget.dataset.index;
            var data = {
                subscribe: app.globalData.uid,
                be_subscribe: e.currentTarget.dataset.be_subscribe,
                update_time: Date.parse(new Date()) / 1000
            };
            app.globalData.subscribe(data).then(function () {
                _this.data.info[index].fans = true;
                _this.setData({
                    info: _this.data.info
                });
            });
        },
        cancelSubscribe: function (e) {
            var _this = this;
            var index = e.currentTarget.dataset.index;
            var data = {
                subscribe: app.globalData.uid,
                be_subscribe: e.currentTarget.dataset.be_subscribe,
            };
            app.globalData.unSubscribe({
                data: data,
                success: function () {
                    _this.data.info[index].fans = false;
                    _this.setData({
                        info: _this.data.info
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFBO0FBQ3BCLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxLQUFLO1NBQ1o7S0FDRjtJQUtELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFOLFVBQU8sQ0FBTTtZQUNYLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLGlDQUFpQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDcEUsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUtELFNBQVMsRUFBVCxVQUFVLENBQU07WUFBaEIsaUJBYUM7WUFaQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7WUFDekMsSUFBSSxJQUFJLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRztnQkFDN0IsWUFBWSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVk7Z0JBQ2xELFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksSUFBSSxFQUFVLENBQUMsR0FBRyxJQUFJO2FBQ3BELENBQUE7WUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7Z0JBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDckIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBS0QsZUFBZSxFQUFmLFVBQWdCLENBQU07WUFBdEIsaUJBY0M7WUFiQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7WUFDekMsSUFBSSxJQUFJLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRztnQkFDN0IsWUFBWSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVk7YUFDbkQsQ0FBQTtZQUNELEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2dCQUN6QixJQUFJLE1BQUE7Z0JBQUUsT0FBTyxFQUFFO29CQUNiLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7b0JBQ2xDLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtxQkFDckIsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9XG5jb25zdCBhcHAgPSBnZXRBcHAoKVxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGluZm86IHtcbiAgICAgIHR5cGU6IEFycmF5XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBnb0luZm8oZTogYW55KSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBcIi9wYWdlcy9zb2NpZXRpZXMvaW5mby9pbmRleD9pZD1cIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5YWz5rOoXG4gICAgICogQHBhcmFtIGUgXG4gICAgICovXG4gICAgc3Vic2NyaWJlKGU6IGFueSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICBzdWJzY3JpYmU6IGFwcC5nbG9iYWxEYXRhLnVpZCxcbiAgICAgICAgYmVfc3Vic2NyaWJlOiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5iZV9zdWJzY3JpYmUsXG4gICAgICAgIHVwZGF0ZV90aW1lOiBEYXRlLnBhcnNlKChuZXcgRGF0ZSgpIGFzIGFueSkpIC8gMTAwMFxuICAgICAgfVxuICAgICAgYXBwLmdsb2JhbERhdGEuc3Vic2NyaWJlKGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEuaW5mb1tpbmRleF0uZmFucyA9IHRydWVcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBpbmZvOiB0aGlzLmRhdGEuaW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWPlua2iOWFs+azqFxuICAgICAqIEBwYXJhbSBlIFxuICAgICAqL1xuICAgIGNhbmNlbFN1YnNjcmliZShlOiBhbnkpIHtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgc3Vic2NyaWJlOiBhcHAuZ2xvYmFsRGF0YS51aWQsXG4gICAgICAgIGJlX3N1YnNjcmliZTogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYmVfc3Vic2NyaWJlLFxuICAgICAgfVxuICAgICAgYXBwLmdsb2JhbERhdGEudW5TdWJzY3JpYmUoe1xuICAgICAgICBkYXRhLCBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhLmluZm9baW5kZXhdLmZhbnMgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbmZvOiB0aGlzLmRhdGEuaW5mb1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19