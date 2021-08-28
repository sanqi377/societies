"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var ajax = require('../../utils/util').ajax;
var $Notify = require('@sanqi377/qui/s-notify/notify').$Notify;
var $Dialog = require('@sanqi377/qui/s-dialog/dialog').$Dialog;
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
            $Dialog({
                title: '温馨提示',
                message: '你确定要取消关注吗？',
                showCancelButton: true
            }).then(function () {
                ajax('http://localhost:3000/index/user/cancelSubscribe', data).then(function (res) {
                    if (res.data.ret === 200) {
                        $Notify({
                            type: 'warning',
                            content: res.data.msg
                        });
                    }
                    else {
                        $Notify({
                            type: 'error',
                            content: res.data.msg
                        });
                    }
                    _this.data.info[index].fans = false;
                    _this.setData({
                        info: _this.data.info
                    });
                });
            }).catch(function () {
                console.log("点击取消按钮回调");
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFBO0FBQ1osSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQWhDLENBQWdDO0FBQ3BDLElBQUEsT0FBTyxHQUFLLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxRQUE3QyxDQUE2QztBQUNwRCxJQUFBLE9BQU8sR0FBSyxPQUFPLENBQUMsK0JBQStCLENBQUMsUUFBN0MsQ0FBNkM7QUFDNUQsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEtBQUs7U0FDWjtLQUNGO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFLRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQU4sVUFBTyxDQUFNO1lBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsaUNBQWlDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTthQUNwRSxDQUFDLENBQUE7UUFDSixDQUFDO1FBS0QsU0FBUyxFQUFULFVBQVUsQ0FBTTtZQUFoQixpQkFhQztZQVpDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQTtZQUN6QyxJQUFJLElBQUksR0FBRztnQkFDVCxTQUFTLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHO2dCQUM3QixZQUFZLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWTtnQkFDbEQsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxJQUFJLEVBQVUsQ0FBQyxHQUFHLElBQUk7YUFDcEQsQ0FBQTtZQUNELEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbEMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtnQkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2lCQUNyQixDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFLRCxlQUFlLEVBQWYsVUFBZ0IsQ0FBTTtZQUF0QixpQkErQkM7WUE5QkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO1lBQ3pDLElBQUksSUFBSSxHQUFHO2dCQUNULFNBQVMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUc7Z0JBQzdCLFlBQVksRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZO2FBQ25ELENBQUE7WUFDRCxPQUFPLENBQUM7Z0JBQ04sS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLGdCQUFnQixFQUFFLElBQUk7YUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixJQUFJLENBQUMsa0RBQWtELEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtvQkFDM0UsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7d0JBQ3hCLE9BQU8sQ0FBQzs0QkFDTixJQUFJLEVBQUUsU0FBUzs0QkFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3lCQUN0QixDQUFDLENBQUE7cUJBQ0g7eUJBQU07d0JBQ0wsT0FBTyxDQUFDOzRCQUNOLElBQUksRUFBRSxPQUFPOzRCQUNiLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7eUJBQ3RCLENBQUMsQ0FBQTtxQkFDSDtvQkFDRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO29CQUNsQyxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7cUJBQ3JCLENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxuY29uc3QgYXBwID0gZ2V0QXBwKClcbmNvbnN0IHsgYWpheCB9ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbCcpXG5jb25zdCB7ICROb3RpZnkgfSA9IHJlcXVpcmUoJ0BzYW5xaTM3Ny9xdWkvcy1ub3RpZnkvbm90aWZ5JylcbmNvbnN0IHsgJERpYWxvZyB9ID0gcmVxdWlyZSgnQHNhbnFpMzc3L3F1aS9zLWRpYWxvZy9kaWFsb2cnKVxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGluZm86IHtcbiAgICAgIHR5cGU6IEFycmF5XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBnb0luZm8oZTogYW55KSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBcIi9wYWdlcy9zb2NpZXRpZXMvaW5mby9pbmRleD9pZD1cIiArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5YWz5rOoXG4gICAgICogQHBhcmFtIGUgXG4gICAgICovXG4gICAgc3Vic2NyaWJlKGU6IGFueSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICBzdWJzY3JpYmU6IGFwcC5nbG9iYWxEYXRhLnVpZCxcbiAgICAgICAgYmVfc3Vic2NyaWJlOiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5iZV9zdWJzY3JpYmUsXG4gICAgICAgIHVwZGF0ZV90aW1lOiBEYXRlLnBhcnNlKChuZXcgRGF0ZSgpIGFzIGFueSkpIC8gMTAwMFxuICAgICAgfVxuICAgICAgYXBwLmdsb2JhbERhdGEuc3Vic2NyaWJlKGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEuaW5mb1tpbmRleF0uZmFucyA9IHRydWVcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBpbmZvOiB0aGlzLmRhdGEuaW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWPlua2iOWFs+azqFxuICAgICAqIEBwYXJhbSBlIFxuICAgICAqL1xuICAgIGNhbmNlbFN1YnNjcmliZShlOiBhbnkpIHtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgc3Vic2NyaWJlOiBhcHAuZ2xvYmFsRGF0YS51aWQsXG4gICAgICAgIGJlX3N1YnNjcmliZTogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYmVfc3Vic2NyaWJlLFxuICAgICAgfVxuICAgICAgJERpYWxvZyh7XG4gICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S6JyxcbiAgICAgICAgbWVzc2FnZTogJ+S9oOehruWumuimgeWPlua2iOWFs+azqOWQl++8nycsXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWVcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBhamF4KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW5kZXgvdXNlci9jYW5jZWxTdWJzY3JpYmUnLCBkYXRhKS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXMuZGF0YS5yZXQgPT09IDIwMCkge1xuICAgICAgICAgICAgJE5vdGlmeSh7XG4gICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgY29udGVudDogcmVzLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkTm90aWZ5KHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgY29udGVudDogcmVzLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGEuaW5mb1tpbmRleF0uZmFucyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGluZm86IHRoaXMuZGF0YS5pbmZvXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vlj5bmtojmjInpkq7lm57osINcIilcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19