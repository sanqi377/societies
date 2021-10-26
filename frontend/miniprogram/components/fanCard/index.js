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
                data: data, success: function () {
                    _this.data.info[index].fans = false;
                    _this.setData({
                        info: _this.data.info
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFBO0FBQ3BCLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxLQUFLO1NBQ1o7S0FDRjtJQUtELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFOLFVBQU8sQ0FBTTtZQUNYLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLGlDQUFpQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDcEUsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUtELFNBQVMsRUFBVCxVQUFVLENBQU07WUFBaEIsaUJBYUM7WUFaQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7WUFDekMsSUFBSSxJQUFJLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRztnQkFDN0IsWUFBWSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVk7Z0JBQ2xELFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksSUFBSSxFQUFVLENBQUMsR0FBRyxJQUFJO2FBQ3BELENBQUE7WUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7Z0JBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDckIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBS0QsZUFBZSxFQUFmLFVBQWdCLENBQU07WUFBdEIsaUJBY0M7WUFiQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7WUFDekMsSUFBSSxJQUFJLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRztnQkFDN0IsWUFBWSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVk7YUFDbkQsQ0FBQTtZQUNELEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2dCQUN6QixJQUFJLE1BQUEsRUFBRSxPQUFPLEVBQUU7b0JBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQTtvQkFDbEMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJO3FCQUNyQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IH1cclxuY29uc3QgYXBwID0gZ2V0QXBwKClcclxuQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgKi9cclxuICBtZXRob2RzOiB7XHJcbiAgICBnb0luZm8oZTogYW55KSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogXCIvcGFnZXMvc29jaWV0aWVzL2luZm8vaW5kZXg/aWQ9XCIgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5YWz5rOoXHJcbiAgICAgKiBAcGFyYW0gZSBcclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKGU6IGFueSkge1xyXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxyXG4gICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICBzdWJzY3JpYmU6IGFwcC5nbG9iYWxEYXRhLnVpZCxcclxuICAgICAgICBiZV9zdWJzY3JpYmU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmJlX3N1YnNjcmliZSxcclxuICAgICAgICB1cGRhdGVfdGltZTogRGF0ZS5wYXJzZSgobmV3IERhdGUoKSBhcyBhbnkpKSAvIDEwMDBcclxuICAgICAgfVxyXG4gICAgICBhcHAuZ2xvYmFsRGF0YS5zdWJzY3JpYmUoZGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmluZm9baW5kZXhdLmZhbnMgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGluZm86IHRoaXMuZGF0YS5pbmZvXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWPlua2iOWFs+azqFxyXG4gICAgICogQHBhcmFtIGUgXHJcbiAgICAgKi9cclxuICAgIGNhbmNlbFN1YnNjcmliZShlOiBhbnkpIHtcclxuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgc3Vic2NyaWJlOiBhcHAuZ2xvYmFsRGF0YS51aWQsXHJcbiAgICAgICAgYmVfc3Vic2NyaWJlOiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5iZV9zdWJzY3JpYmUsXHJcbiAgICAgIH1cclxuICAgICAgYXBwLmdsb2JhbERhdGEudW5TdWJzY3JpYmUoe1xyXG4gICAgICAgIGRhdGEsIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGF0YS5pbmZvW2luZGV4XS5mYW5zID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGluZm86IHRoaXMuZGF0YS5pbmZvXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdfQ==