"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../../../utils/util'), ajax = _a.ajax, formatMsgTime = _a.formatMsgTime;
var list = [];
var count = 0;
var isBottom = false;
Page({
    list: [],
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            });
        }
        this.getDynamic();
    },
    goPublish: function () {
        wx.navigateTo({
            url: "/pages/societies/publish/index"
        });
    },
    getDynamic: function () {
        var _this = this;
        count++;
        if (!isBottom) {
            ajax('Dynamic/getList', { page: count }).then(function (res) {
                wx.stopPullDownRefresh();
                if (res.data.data.length > 0) {
                    for (var key in res.data.data) {
                        res.data.data[key].create_time = formatMsgTime(res.data.data[key].create_time * 1000);
                        list.push(res.data.data[key]);
                    }
                    _this.setData({
                        list: list
                    });
                }
                else {
                    isBottom = true;
                }
            });
        }
    },
    onLoad: function () {
    },
    onReady: function () {
    },
    onHide: function () {
        list = [];
        count = 0;
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
        list = [];
        count = 0;
        this.getDynamic();
    },
    onReachBottom: function () {
        this.getDynamic();
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNNLElBQUEsS0FBMEIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQXRELElBQUksVUFBQSxFQUFFLGFBQWEsbUJBQW1DLENBQUE7QUFDOUQsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFBO0FBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtBQUNiLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQTtBQUNwQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFBRTtJQUVSLE1BQU0sRUFBRTtRQUNOLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3RDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLEVBQVY7UUFBQSxpQkFrQkM7UUFqQkMsS0FBSyxFQUFFLENBQUE7UUFDUCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtnQkFDckQsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUE7Z0JBQ3hCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDNUIsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUE7d0JBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtxQkFDOUI7b0JBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxJQUFJLE1BQUE7cUJBQ0wsQ0FBQyxDQUFBO2lCQUNIO3FCQUFNO29CQUNMLFFBQVEsR0FBRyxJQUFJLENBQUE7aUJBQ2hCO1lBQ0gsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFLRCxNQUFNO0lBQ04sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtRQUNKLElBQUksR0FBRyxFQUFFLENBQUE7UUFDVCxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO1FBQ2YsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNULEtBQUssR0FBRyxDQUFDLENBQUE7UUFDVCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUtELGFBQWE7UUFFWCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfVxyXG5jb25zdCB7IGFqYXgsIGZvcm1hdE1zZ1RpbWUgfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL3V0aWwnKVxyXG5sZXQgbGlzdDogYW55ID0gW11cclxubGV0IGNvdW50ID0gMFxyXG5sZXQgaXNCb3R0b20gPSBmYWxzZVxyXG5QYWdlKHtcclxuICBsaXN0OiBbXSxcclxuXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmIHRoaXMuZ2V0VGFiQmFyKCkpIHtcclxuICAgICAgdGhpcy5nZXRUYWJCYXIoKS5zZXREYXRhKHtcclxuICAgICAgICBzZWxlY3RlZDogMVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXREeW5hbWljKClcclxuICB9LFxyXG5cclxuICBnb1B1Ymxpc2goKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiBcIi9wYWdlcy9zb2NpZXRpZXMvcHVibGlzaC9pbmRleFwiXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGdldER5bmFtaWMoKSB7XHJcbiAgICBjb3VudCsrXHJcbiAgICBpZiAoIWlzQm90dG9tKSB7XHJcbiAgICAgIGFqYXgoJ0R5bmFtaWMvZ2V0TGlzdCcsIHsgcGFnZTogY291bnQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzLmRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICByZXMuZGF0YS5kYXRhW2tleV0uY3JlYXRlX3RpbWUgPSBmb3JtYXRNc2dUaW1lKHJlcy5kYXRhLmRhdGFba2V5XS5jcmVhdGVfdGltZSAqIDEwMDApXHJcbiAgICAgICAgICAgIGxpc3QucHVzaChyZXMuZGF0YS5kYXRhW2tleV0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBsaXN0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpc0JvdHRvbSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuICAgIGxpc3QgPSBbXVxyXG4gICAgY291bnQgPSAwXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIGxpc3QgPSBbXVxyXG4gICAgY291bnQgPSAwXHJcbiAgICB0aGlzLmdldER5bmFtaWMoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcblxyXG4gICAgdGhpcy5nZXREeW5hbWljKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHJcbiAgfVxyXG59KSJdfQ==